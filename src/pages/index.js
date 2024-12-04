import { axiosInstance } from "@/config/libs/axios"
import { useEffect } from "react"

export default function Home() {

  const fetchProducts = async () => {
    try {
      const { status, data } = await axiosInstance.get("/products")
      if (status === 200) {
        console.log(data)
      }
    } catch (e) {
      console.log(e)
    }
  }



  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <>
      Hello World
    </>
  )

}
