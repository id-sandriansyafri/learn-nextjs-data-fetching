import LoadingTabelContent from "@/components/loading-tabel-content";
import { useGetProduct } from "@/features/product/useProduct";
import { Box, Container, Flex, Heading, NativeSelectField, NativeSelectRoot, Table, Textarea } from "@chakra-ui/react"
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Card } from "@chakra-ui/react"





export default function Home() {
  const { data: product, isLoading } = useGetProduct()

  const renderProducts = () => {
    return product.data?.map((product, index) => (
      <Table.Row key={`${product.id}`}>
        <Table.Cell>{index + 1}</Table.Cell>
        <Table.Cell>{product.name}</Table.Cell>
        <Table.Cell>{product.price}</Table.Cell>
        <Table.Cell>{product.description}</Table.Cell>
        <Table.Cell>{product.image}</Table.Cell>
      </Table.Row>
    ))
  }

  return (
    <>
      <Container key={'container-product'} maxW="5xl" p="6">
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
      <Container key={'container-form'} maxW="5xl" p="6">
        <Card.Root>
          <Card.Body>
            <Heading mb={4}>Create Product</Heading>
            <form action="">
              <Fieldset.Root>

                <Fieldset.Content>
                  <Field label="Product">
                    <Input name="product" type="text" />
                  </Field>

                  <Field label="Price">
                    <Input name="price" type="number" />
                  </Field>

                  <Field label="Description">
                    <Textarea name="description" type="text" rows={4} />
                  </Field>

                  <Field label="Image">
                    <Input name="image" type="text" />
                  </Field>

                  <Button type="submit" alignSelf="flex-start">
                    Submit
                  </Button>
                </Fieldset.Content>
                
              </Fieldset.Root>
            </form>
          </Card.Body>
        </Card.Root>
      </Container>

    </>
  )

}
