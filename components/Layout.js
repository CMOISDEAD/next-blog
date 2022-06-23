import { Navbar } from "./Navbar";
import "bootstrap/dist/css/bootstrap.css";

export function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container">{children}</main>
    </>
  );
}
