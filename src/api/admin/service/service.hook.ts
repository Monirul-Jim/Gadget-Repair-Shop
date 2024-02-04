import { useQuery } from "@tanstack/react-query";
import { getServices } from "./service.api";

export type TypeService = {
  _id: string;
  name: string;
  description: string;
  price: number;
};
export const useGetServices = () => {
  const servicesData = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
    select: (data) => {
      const services = data?.data?.data?.map((item: TypeService) => ({
        _id: item?._id,
        name: item?.name,
        description: item?.description,
        price: item?.price,
      }));
      return services;
    },
  });
  return servicesData;
};
