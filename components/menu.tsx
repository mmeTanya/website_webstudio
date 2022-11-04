import Link from "next/link";
import Image from 'next/image'
import { useRouter } from "next/router";
import s from "../styles/header.module.scss";
import logo from "../styles/logo.module.scss";

const NavLinks = [
  { id: 1, title: "About us", path: "/" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const Menu = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <Link href="/">
        <a className={logo.logo}>
          <span className={logo.logo__accent}>Web</span>Studio
        </a>
      </Link>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          {NavLinks.map((NavLink) => (
            <li className={s.nav__item} key={NavLink.id}>
              <Link href={NavLink.path}>
                <a
                  className={
                    router.pathname === NavLink.path
                      ? s.nav_active_link
                      : s.nav__link
                  }
                >
                  {NavLink.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className={s.contact}>
        <li className={s.contact__item}>
          <a href="mailto:info@devstudio.com" className={s.contact__link}>
           <Image src="/envelope.svg" alt="envelope" width="16" height="12"  />
            <span className={s.contact__text}>info@devstudio.com</span>
          </a>
        </li>
        <li className={s.contact__item}>
          <a href="tel:+380961111111" className={s.contact__link}>
          <Image src="/smartphone.svg" alt="smartphone" width="10" height="16"  className={s.contact__icon} />
            <span className={s.contact__text}>+38 096 111 11 11</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
