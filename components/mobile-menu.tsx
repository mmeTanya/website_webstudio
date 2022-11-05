import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ButtonCircle from "../components/button-circle";
import s from "../styles/header.module.scss";
import logo from "../styles/logo.module.scss";

const NavLinks = [
  { id: 1, title: "About us", path: "/" },
  { id: 2, title: "Portfolio", path: "/portfolio" },
  { id: 3, title: "Contacts", path: "/contacts" },
];

const MobileMenu = () => {
  const [isClose, setIsClose] = useState(true);
  const router = useRouter();

  const MenuOpen = () => {
    setIsClose(!isClose);
  };

  return (
    <div className={s.container}>
      <div className={s.style}>
        {" "}
        <Link href="/">
          <a className={logo.logo}>
            {" "}
            <span className={logo.logo__accent}>Web</span>Studio
          </a>
        </Link>
        <ButtonCircle theme={'menu'} type={'button'} onClick={MenuOpen} />
      </div>
      <div className={isClose ? s.isClose : s.menu_container}>
        <div className={s.mobile_menu}>
          <ButtonCircle theme={'close'} type={'button'} onClick={MenuOpen} />
          <ul className={s.mobile_menu__list}>
            {NavLinks.map((NavLink) => (
              <li className={s.mobile_menu__item} key={NavLink.id}>
                <Link href={NavLink.path}>
                  <a
                    className={
                      router.pathname === NavLink.path
                        ? s.mobile_link_active
                        : s.mobile_menu__link
                    }
                  >
                    {NavLink.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={s.mobile_menu__contact_info}>
            <ul className={s.mobile_menu__contact}>
              <li className={s.mobile_menu__item}>
                <a
                  href="tel:+380961111111"
                  className={s.mobile_menu__contact_link}
                >
                  <span>+38 096 111 11 11</span>
                </a>
              </li>
              <li className={s.mobile_menu__item}>
                <a
                  href="mailto:info@devstudio.com"
                  className={s.mobile_menu__contact_link}
                >
                  <span>info@devstudio.com</span>
                </a>
              </li>
            </ul>
            <ul className={s.mobile_menu__social_list}>
              <li className={s.mobile_menu__social_item}>
                <a href="" className={s.mobile_menu__social_link__line}>
                  Instagram
                </a>
              </li>
              <li className={s.mobile_menu__social_item}>
                <a href="" className={s.mobile_menu__social_link__line}>
                  Twitter
                </a>
              </li>
              <li className={s.mobile_menu__social_item}>
                <a href="" className={s.mobile_menu__social_link__line}>
                  Facebook
                </a>
              </li>
              <li className={s.mobile_menu__social_item}>
                <a href="" className={s.mobile_menu__social_link}>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
