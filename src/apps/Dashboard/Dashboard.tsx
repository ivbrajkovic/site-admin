import { Container, Flex, Stack } from '@mantine/core';

import { LinkList } from 'apps/Dashboard/components/LinkList';
import { Version } from 'apps/Dashboard/components/Version/Version';

export const Dashboard = () => (
  <Container size="lg">
    <Stack h="100vh" justify="space-between">
      <Flex py="lg" justify="center" wrap="wrap">
        <LinkList />
      </Flex>
      <Flex py="lg" justify="center">
        <Version />
      </Flex>
    </Stack>
  </Container>
);
