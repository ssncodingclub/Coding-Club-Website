import '../styles/globals.css'
import React, { useState } from "react";
import { set } from 'react-ga';

function MyApp({ Component, pageProps }) {
  const [theme,setTheme] = useState(false);
  return <Component {...pageProps} theme={theme} setTheme = {setTheme}/>
}

export default MyApp
