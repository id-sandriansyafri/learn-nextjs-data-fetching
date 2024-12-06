import { axiosInstance } from "@/config/libs/axios"

export const useCreateProduct = () => {
  const createProduct = async (requestBody) => {
    try {
      await axiosInstance.post('/products', requestBody)
    } catch (e) {
      console.log(e)
    }
  }

  return { createProduct }


}