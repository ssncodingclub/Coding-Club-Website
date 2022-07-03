/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styles from '../../styles/navbar.module.css';
import { FiSun, FiMoon } from 'react-icons/fi';

function BlogNavBar(props) {
  const [navColor, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 40) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleScroll = () => {};
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={
        props.transfer
          ? styles.navbar_light + ' ' + (navColor ? styles.sticky_light : '')
          : styles.navbar + ' ' + (navColor ? styles.sticky : '')
      }
    >
      <Container>
        <Navbar.Brand href="/">
          <Nav.Item>
            <img width="50" src="/favicon.ico" alt="logo"></img>
          </Nav.Item>
        </Navbar.Brand>
        <Navbar>
          <Nav className={styles.navbar_nav} defaultActiveKey="#home">
            <Nav.Item
              className={styles.nav_toggle_icons}
              onClick={() => props.setTheme(!props.transfer)}
            >
              {props.transfer ? (
                <div className={styles.toggle_icons_light}>
                  <FiMoon size={20} />
                </div>
              ) : (
                <div className={styles.toggle_icons}>
                  <FiSun size={20} />
                </div>
              )}
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}
export default BlogNavBar;
