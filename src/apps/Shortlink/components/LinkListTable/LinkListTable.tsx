import { Skeleton, Table, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

import { ShortlinkTableAction } from 'apps/Shortlink/components/LinkListTable/LinkListTableAction';
import { useGetShortlinksQuery } from 'apps/Shortlink/shortlinkApi';

export const LinkListTable = () => {
  const { data, isLoading, error } = useGetShortlinksQuery();

  if (isLoading)
    return (
      <div>
        <Skeleton height={32} mb="xs" />
        <Skeleton height={200} />
      </div>
    );

  // TODO: Add error message
  if (error) return <Text>Something went wrong.</Text>;

  // TODO: Add empty state
  if (!data?.length) return null;

  const handleEdit = (id: string) => () =>
    modals.openContextModal({
      modal: 'edit',
      title: 'Edit Shortlink',
      innerProps: { shortlinkId: id },
    });

  return (
    <Table
      striped
      withTableBorder
      withColumnBorders
      highlightOnHover
      verticalSpacing={4}
    >
      <Table.Thead bg="gray.4">
        <Table.Tr>
          <Table.Th>Tag</Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>URL</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {data.map((shortlink) => (
          <Table.Tr key={shortlink.id}>
            <Table.Td>{shortlink.tag}</Table.Td>
            <Table.Td>{shortlink.name}</Table.Td>
            <Table.Td>{shortlink.url}</Table.Td>
            <Table.Td>
              <ShortlinkTableAction
                url={shortlink.url}
                onEdit={handleEdit(shortlink.id)}
              />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
