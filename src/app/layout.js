import Nav from "./components/Nav";
import StarterLaoder from "./components/StarterLaoder";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden`}
      >
        <StarterLaoder/>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
