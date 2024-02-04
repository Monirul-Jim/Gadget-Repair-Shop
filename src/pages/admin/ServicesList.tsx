import { TypeService, useGetServices } from "@/api/admin/service/service.hook";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Trash2 } from "lucide-react";
import { FormEvent, useState } from "react";

const ServicesList = () => {
  // from here i post all data
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [devices, setDevices] = useState("");
  const [price, setPrice] = useState(0.0);
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["services"] });
    },
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      description: description,
      devices: devices.split(",").map((device) => device.trim()),
      price: parseFloat(price.toFixed(2)),
    };
    await mutateAsync(serviceData);
    console.log(serviceData);
  };

  // from here i show all service list
  const { data: services, isLoading, isError } = useGetServices();
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      <Container className="mt-20 border p-0 rounded-2xl">
        <div className="mx-auto my-8 p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Add Services</h1>
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <span className="text-gray-700">Service Name:</span>
              <input
                type="text"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Description:</span>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Devices (comma-separated):</span>
              <input
                type="text"
                value={devices}
                onChange={(e) => setDevices(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </label>
            <label className="block mb-4">
              <span className="text-gray-700">Price:</span>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </label>
            <Button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
            >
              Submit Service
            </Button>
          </form>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((services: TypeService) => (
              <TableRow key={services._id}>
                <TableCell className="font-medium">{services.name}</TableCell>
                <TableCell>{services.description}</TableCell>
                <TableCell>{services.price}</TableCell>
                <TableCell className="text-right">
                  <Button variant="destructive">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total Services</TableCell>
              <TableCell className="text-right">{services?.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
        {/* {allData?.map((item: Service) => (
        <h1 key={item?._id}>{item?.name}</h1>
      ))} */}
      </Container>
    </>
  );
};

export default ServicesList;
