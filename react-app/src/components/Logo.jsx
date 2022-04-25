export const Logo = ({ size }) => {
  let logoSizeClass;
  if (size === 'small') {
    logoSizeClass = 'small';
  }

  const logoClassList = `logo ${logoSizeClass}`;
  return (
    <a className={logoClassList} href="/">
      L
    </a>
  );
};
