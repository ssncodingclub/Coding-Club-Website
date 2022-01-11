/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from '../../styles/navbar.module.css';

function NavBar() {
  const [expand, setExpanded] = useState(false);
  const [navColor, updateNavbar] = useState(false);

  function openMobileNav() {
    setExpanded(true);
  }
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
      fixed="top"
      expand="md"
      className={styles.navbar + " " + (navColor ? styles.sticky : "")}
    >
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Item >
            <img width="50" src="./favicon.ico" alt="logo"></img>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar >
          <Nav className={styles.navbar_nav} defaultActiveKey="#home">
            <Link href="/" onClick={() => { setExpanded(false) }} passHref>
              <Nav.Item className={styles.nav_item}>
                Home
              </Nav.Item>
            </Link>
            <Link href="/about" onClick={() => { setExpanded(false) }} passHref>
              <Nav.Item className={styles.nav_item}>
                About
              </Nav.Item>
            </Link>
            <Link href="/meets" onClick={() => { setExpanded(false) }} passHref>
              <Nav.Item className={styles.nav_item}>
                Meets
              </Nav.Item>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Item className={styles.nav_item}>
                Projects
              </Nav.Item>
            </Link>
            <Link href="/blog" onClick={() => { setExpanded(false) }} passHref>
              <Nav.Item className={styles.nav_item}>
                Blog
              </Nav.Item>
            </Link>
            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className={styles.mobilenavul + " " + styles.menu} >
                <li><a href="/">Home</a></li>
                <li ><a href="/about">About</a></li>
                <li ><a href="/meets">Meets</a></li>
                <li ><a href="/projects">Projects</a></li>
                <li ><a href="/blog">Blog</a></li>
              </ul>
            </div>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;