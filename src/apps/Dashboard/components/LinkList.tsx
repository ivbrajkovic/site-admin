import { Link } from 'apps/Dashboard/components/Link/Link';
import { useLinks } from 'apps/Dashboard/hooks/useLinks';

export const LinkList = () => {
  const { links } = useLinks();
  return (
    <>
      {links.map((link, index) => (
        <Link key={index} to={link.to}>
          {link.label}
        </Link>
      ))}
    </>
  );
};
