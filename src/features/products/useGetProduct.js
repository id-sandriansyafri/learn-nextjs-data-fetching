import { axiosInstance } from "@/config/libs/axios";
import { useEffect, useState } from "react";

export const useGetProduct = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    setIsLoading(true)
    try {
      setTimeout(async () => {
        const { data } = await axiosInstance.get("/products")
        setProducts(data)
        setIsLoading(false)

      }, 300);
    } catch (e) {
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {
    data: products,
    isLoading,
  }

}