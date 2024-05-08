import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from 'semantic-ui-react';

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
      <TableHeader>
        <TableRow>
          <TableHeaderCell>Tag</TableHeaderCell>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>URL</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((shortlink) => (
          <TableRow key={shortlink.id}>
            <TableCell>{shortlink.tag}</TableCell>
            <TableCell>{shortlink.name}</TableCell>
            <TableCell>{shortlink.url}</TableCell>
            <TableCell>
              <ShortlinkTableAction onEdit={editShortlink(shortlink.id)} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
