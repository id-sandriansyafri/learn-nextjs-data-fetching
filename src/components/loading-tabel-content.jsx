import { Table } from "@chakra-ui/react"
export default function LoadingTabelContent({ colSpan }) {
  return (
    <Table.Row>
      <Table.Cell colSpan={colSpan}>Loading...</Table.Cell>
    </Table.Row>
  );
}