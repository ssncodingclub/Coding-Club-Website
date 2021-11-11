/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from '../../styles/navbar.module.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleScroll = () => { }
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={styles.navbar + " " + (navColor ? styles.sticky : "")}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Item >
            <img width="60" src="./favicon.ico" alt="logo"></img>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar >
          <Nav className={styles.navbar_nav} defaultActiveKey="#home">
            <Link href="/" passHref>
              <Nav.Item className={styles.nav_item}>
                Home
              </Nav.Item>
            </Link>
            <Link href="/about" passHref>
              <Nav.Item className={styles.nav_item}>
                About
              </Nav.Item>
            </Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;