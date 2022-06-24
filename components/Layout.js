import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container mt-2">{children}</main>
    </>
  );
}
