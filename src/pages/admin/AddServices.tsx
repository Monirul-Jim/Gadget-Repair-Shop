import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { FormEvent, useState } from "react";

const AddServices = () => {
  const [serviceName, setServiceName] = useState("");
  const [description, setDescription] = useState("");
  const [devices, setDevices] = useState("");
  const [price, setPrice] = useState(0.0);
  const { mutateAsync, isError, isSuccess } = useMutation({
    mutationFn: async (data) => {
      return await fetch("http://localhost:5000/api/v1/services", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  return (
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
  );
};

export default AddServices;
