import Menu from "../components/menu";
import MobileMenu from "../components/mobile-menu";
import { useMediaQuery } from "react-responsive";
import s from "../styles/header.module.scss";

const Header = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  return (
    <header className={s.page_header}>
      {isMobile ? <MobileMenu /> : <Menu />}
    </header>
  );
};

export default Header;
