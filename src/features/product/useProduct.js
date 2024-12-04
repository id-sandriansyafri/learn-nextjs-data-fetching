import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/libs/axios"

export const useGetProduct = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => await axiosInstance.get("/products"),
  })

  return { data, isLoading }
}

