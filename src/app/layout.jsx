"use client"
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "../components/navbar"
import {Footer} from "../components/footer"
import Loader from "../components/loader";
import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
   const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <html lang="en">
      <body>
      {/* <body className='bg-gradient-to-br from-gray-50 via-purple-100 to-indigo-200 dark:from-gray-900 dark:via-purple-700 dark:to-indigo-800'> */}
        {loading && <Loader />}
        {/* <Navbar /> */}
    {children}
        <Footer/>
      </body>
    </html>
  )
}