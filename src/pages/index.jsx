import LoadingTabelContent from "@/components/loading-tabel-content";
import { useGetProduct } from "@/features/products/useGetProduct";
import { Container, Heading, Table } from "@chakra-ui/react"
import { useEffect } from "react";

export default function Home() {
  const { data: products, isLoading } = useGetProduct();

  const renderProducts = () => {
    return products.map((product, index) => (
      <Table.Row key={`${product.id - index}`}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{product.title}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell>{product.image}</Table.Cell>
      </Table.Row>
    ))
  }



  return (
    <>
      <Container maxW="container.lg" p="4">
        <Heading>Products</Heading>
        <Table.Root size="sm" interactive>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>ID</Table.ColumnHeader>
              <Table.ColumnHeader>Product</Table.ColumnHeader>
              <Table.ColumnHeader>Price</Table.ColumnHeader>
              <Table.ColumnHeader>Desc</Table.ColumnHeader>
              <Table.ColumnHeader>Image</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {isLoading ? <LoadingTabelContent colSpan={5} /> : renderProducts()}
          </Table.Body>
        </Table.Root>
      </Container>
    </>
  )

}
