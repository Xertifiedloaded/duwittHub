import classes from "./header.module.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.svg";
import open from "../../assets/images/icon-menu.svg";
import close from "../../assets/images/icon-close-menu.svg";
import { NavBar } from "../../constants/Nav";
import { Button } from "../../styles";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [InitialScrollLevel, setInitialScrollLevel] = useState(0);
  const [color, setColor] = useState(0)
  const scrollPosition = 10;
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    const handleScroll = () => {
      setInitialScrollLevel(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
  })
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, []);
  const isMobile = windowWidth <= 768; // breakpoint for mobile
  const isTablet = windowWidth > 768 && windowWidth <= 1024; //  breakpoint for tablet
  const isDesktop = windowWidth > 1024; //  breakpoint for desktop
  return (
    <>
      {
        (isMobile || isTablet || isDesktop) &&
        <header className={`${InitialScrollLevel > scrollPosition ? classes.black : classes.white} && ${classes.main}`} >
          <div className={classes.header}>
            <div className={classes.logo}>
              <Link to={"/"}>
                <img className={InitialScrollLevel > scrollPosition ? classes.activeColor : null} src={logo} />
              </Link>
            </div>
            <nav
              className={` ${isMobileMenuOpen ? classes.open : null} && ${classes.navMenu
                }`}
            >
              <ul>
                {NavBar.map((nav, index) => (
                  <NavLink to={nav.to}>
                    <li className={`${InitialScrollLevel > scrollPosition ? classes.active : classes.disable}`} key={index} >
                      {nav.name}
                    </li>
                  </NavLink>
                ))}
              </ul>
              {
                isDesktop &&
                <div className={classes.navBtn} style={{ display: "flex", alignItems: "center", gap: "30px" }}>
                  <button className={InitialScrollLevel > scrollPosition ? classes.active : classes.disable} >Sign In</button>
                  {
                    <Button>
                      Sign Up
                    </Button>
                  }
                </div>
              }
            </nav>
            <div className={classes.mobileMenuBtn} onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <img className={InitialScrollLevel > scrollPosition ? classes.show : classes.close} src={close} alt="" /> : <img className={InitialScrollLevel > scrollPosition ? classes.show : classes.close} src={open} alt="" />}
            </div>
          </div>
        </header>
      }
    </>
  );
}

