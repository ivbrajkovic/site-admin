import { useGetVersionQuery } from 'apps/Dashboard/dashboardApi';
import { web as uiVersion } from 'version.json';

export const Version = () => {
  const { data: apiVersion } = useGetVersionQuery();

  return (
    <span>
      ui: {uiVersion}, api: {apiVersion}
    </span>
  );
};
