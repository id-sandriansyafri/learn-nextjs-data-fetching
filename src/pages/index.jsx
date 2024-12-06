"use client"

import LoadingTabelContent from "@/components/loading-tabel-content";
import { Container, Heading, Table, Textarea, useToast } from "@chakra-ui/react"
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Card } from "@chakra-ui/react"
import { useFormik } from "formik";
import { toaster } from "@/components/ui/toaster"
import { useCreateProduct } from "@/features/products/useCreateProduct";
import { useGetProduct } from "@/features/products/useGetProduct";

export default function Home() {
  const { data: products, fetchProducts, isLoading } = useGetProduct()
  const { createProduct } = useCreateProduct()

  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      description: '',
      image: '',
    },
    onSubmit: async (values, { setSubmitting }) => {

      setSubmitting(true)
      createProduct(values)

      formik.resetForm()
      toaster.create({
        title: "Success",
        description: "Product created successfully",
        type: "success",
      })

      setSubmitting(false)
      await fetchProducts()
    },



  })

  const renderProducts = () => {
    return products?.map((product, index) => (
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
            <form onSubmit={formik.handleSubmit}>
              <Fieldset.Root>

                <Fieldset.Content>
                  <Field label="Product">
                    <Input
                      name="name"
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      type="text" />
                  </Field>

                  <Field label="Price">
                    <Input
                      name="price"
                      onChange={formik.handleChange}
                      value={formik.values.price}
                      type="number" />
                  </Field>

                  <Field label="Description">
                    <Textarea
                      name="description"
                      onChange={formik.handleChange}
                      value={formik.values.description}
                      type="text" rows={4}
                    />
                  </Field>

                  <Field label="Image">
                    <Input
                      name="image"
                      onChange={formik.handleChange}
                      value={formik.values.image}
                      type="text"
                    />
                  </Field>

                  <Button type="submit" disabled={formik.isSubmitting} alignSelf="flex-start">
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
