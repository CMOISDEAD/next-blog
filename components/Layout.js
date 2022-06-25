import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import "bootstrap/dist/css/bootstrap.css";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container my-3">{children}</main>
      <Footer />
    </>
  );
}
