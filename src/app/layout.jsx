import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from "../components/navbar"
import {Footer} from "../components/footer"
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}