import { AppLink } from 'apps/Dashboard/components/AppLink/AppLink';
import { useAppLinks } from 'apps/Dashboard/hooks/useAppLinks';

export const AppLinkList = () => {
  const { links } = useAppLinks();
  return (
    <>
      {links.map((link, index) => (
        <AppLink key={index} to={link.to}>
          {link.label}
        </AppLink>
      ))}
    </>
  );
};
