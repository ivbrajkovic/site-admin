import { Skeleton, Table, Text } from '@mantine/core';

import { ShortlinkTableAction } from 'apps/Shortlink/components/ShortlinkTable/ShortlinkTableAction';
import { openEditModal } from 'apps/Shortlink/shortLinkSlice';
import { useGetShortlinksQuery } from 'apps/Shortlink/shortlinkApi';
import { useAppDispatch } from 'store/hooks';

export const ShortlinkTable = () => {
  const dispatch = useAppDispatch();

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

  const editShortlink = (id: number) => () => dispatch(openEditModal(id));

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
                onEdit={editShortlink(shortlink.id)}
              />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
