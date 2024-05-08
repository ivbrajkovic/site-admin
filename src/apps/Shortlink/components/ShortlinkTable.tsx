import { Table } from '@mantine/core';

import { ShortlinkTableAction } from 'apps/Shortlink/components/ShortlinkTableAction';
import { openCreateModal, openEditModal } from 'apps/Shortlink/shortLinkSlice';
import { useGetShortlinksQuery } from 'apps/Shortlink/shortlinkApi';
import { useAppDispatch } from 'store/hooks';

export const ShortlinkTable = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading, error } = useGetShortlinksQuery();

  // TODO: Add loading spinner
  if (isLoading) return <div>Loading...</div>;

  // TODO: Add error message
  if (error) return <div>Something went wrong.</div>;

  // TODO: Add empty state
  if (!data?.length) return null;

  const editShortlink = (id: number) => () => dispatch(openEditModal(id));

  return (
    <Table>
      <Table.Thead>
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
              <ShortlinkTableAction onEdit={editShortlink(shortlink.id)} />
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};
