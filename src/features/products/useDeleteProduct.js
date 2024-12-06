import { axiosInstance } from "@/config/libs/axios"

export const useDeleteProduct = () => {
  const deleteProduct = async (productId) => {
    try {
      return await axiosInstance.delete(`/products/${productId}`)
    } catch (error) {
      console.log(error)
    }
  }

  return { deleteProduct }
}