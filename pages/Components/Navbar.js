/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../styles/navbar.module.css";
import { FiSun, FiMoon } from 'react-icons/fi';


function NavBar(props) {
  const [expand, setExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);
  const [theme, setTheme] = useState(props.transfer);
  function handleClick() {
    if (theme === false) {
      setTheme(true);
      props.theme(!theme);
    }
    else {
      setTheme(false);
      props.theme(!theme);
    }
  }
  let neww = "dark";
  if(theme) {
    neww = "light";
  } else {
    neww = "dark";
  }
  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleScroll = () => { };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Navbar
      fixed="top"
      expand="md"
      className={theme ? styles.navbar_light + " " + (navColor ? styles.sticky_light : "")
        : styles.navbar + " " + (navColor ? styles.sticky : "")}
    >
      <Container>
        <Navbar.Brand href="/">
          <Nav.Item>
            <img width="50" src="./favicon.ico" alt="logo"></img>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar>
          <Nav className={styles.navbar_nav} defaultActiveKey="#home">

            <Link
              href={{
                pathname:"/",
                query: {
                  currTheme : neww
                }
              }}
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Home</Nav.Item>
            </Link>
            <Link
              href={{
                pathname:"/about",
                query: {
                  currTheme : neww
                }
              }}
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>About</Nav.Item>
            </Link>
            <Link
              href={{
                pathname:"/meets",
                query: {
                  currTheme : neww
                }
              }}
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Meets</Nav.Item>
            </Link>
            <Link href={{
                pathname:"/projects",
                query: {
                  currTheme : neww
                }
              }}
            passHref>
              <Nav.Item className={styles.nav_item}>Projects</Nav.Item>
            </Link>
            <Link
              href={{
                pathname:"/blog",
                query: {
                  currTheme : neww
                }
              }}
              onClick={() => {
                setExpanded(false);
              }}
              passHref
            >
              <Nav.Item className={styles.nav_item}>Blog</Nav.Item>
            </Link>
            {props.hide && (
              <Nav.Item className={styles.nav_toggle_icons} onClick={handleClick}>
                {theme ? <div className={styles.toggle_icons_light}><FiMoon size={20} /></div> : <div className={styles.toggle_icons}><FiSun size={20} /></div>}
              </Nav.Item>
            )}

            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span className={theme ? styles.menuSpan_light : ""}></span>
              <span className={theme ? styles.menuSpan_light : ""}></span>
              <span className={theme ? styles.menuSpan_light : ""}></span>
              <ul className={styles.mobilenavul + " " + styles.menu}>

                <li>
                  <Link
                    href={{
                      pathname:"/",
                      query: {
                        currTheme : neww
                      }
                    }}
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                <Nav.Item style={{cursor: "pointer"}}>Home</Nav.Item>
                 </Link>
                </li>
                <li>
                <Link
                    href={{
                      pathname:"/about",
                      query: {
                        currTheme : neww
                      }
                    }}
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                <Nav.Item style={{cursor: "pointer"}}>About</Nav.Item>
                 </Link>
                </li>
                <li>
                <Link
                    href={{
                      pathname:"/meets",
                      query: {
                        currTheme : neww
                      }
                    }}
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                <Nav.Item style={{cursor: "pointer"}}>Meets</Nav.Item>
                 </Link>
                </li>
                <li>
                <Link
                    href={{
                      pathname:"/projects",
                      query: {
                        currTheme : neww
                      }
                    }}
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                <Nav.Item style={{cursor: "pointer"}}>Projects</Nav.Item>
                 </Link>
                </li>
                <li>
                <Link
                    href={{
                      pathname:"/blog",
                      query: {
                        currTheme : neww
                      }
                    }}
                    onClick={() => {
                      setExpanded(false);
                    }}
                    passHref
                  >
                <Nav.Item style={{cursor: "pointer"}}>Blog</Nav.Item>
                 </Link>
                </li>
              </ul>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;
