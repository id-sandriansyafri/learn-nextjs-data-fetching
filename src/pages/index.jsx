"use client"

import LoadingTabelContent from "@/components/loading-tabel-content";
import { useGetProduct } from "@/features/product/useProduct";
import { Container, Heading, Table, Textarea, useToast } from "@chakra-ui/react"
import { Button, Fieldset, Input, Stack } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { Card } from "@chakra-ui/react"
import { useFormik } from "formik";
import { axiosInstance } from "@/config/libs/axios";
import { toaster } from "@/components/ui/toaster"

export default function Home() {
  const { data: product, isLoading } = useGetProduct()

  const formik = useFormik({
    initialValues: {
      productName: '',
      productPrice: 0,
      productDescription: '',
      productImage: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      const { productName, productPrice, productDescription, productImage } = values

      try {

        await axiosInstance.post('/products', {
          name: productName,
          price: productPrice,
          description: productDescription,
          image: productImage
        })

        // reset form
        formik.resetForm()
        toaster.create({
          title: "Success",
          description: "Product created successfully",
          type: "success",
        })

      } catch (e) {
        console.log(e)
      }

    },
  })

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
            <form onSubmit={formik.handleSubmit}>
              <Fieldset.Root>

                <Fieldset.Content>
                  <Field label="Product">
                    <Input
                      name="productName"
                      onChange={formik.handleChange}
                      value={formik.values.productName}
                      type="text" />
                  </Field>

                  <Field label="Price">
                    <Input
                      name="productPrice"
                      onChange={formik.handleChange}
                      value={formik.values.productPrice}
                      type="number" />
                  </Field>

                  <Field label="Description">
                    <Textarea
                      name="productDescription"
                      onChange={formik.handleChange}
                      value={formik.values.productDescription}
                      type="text" rows={4}
                    />
                  </Field>

                  <Field label="Image">
                    <Input
                      name="productImage"
                      onChange={formik.handleChange}
                      value={formik.values.productImage}
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
