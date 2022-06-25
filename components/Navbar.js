import Link from "next/link";
import { MdDarkMode } from "react-icons/md";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand">Doom blog</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link href="/">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </Link>
            <Link href="/posts/">
              <a className="nav-link">Posts</a>
            </Link>
            <Link href="/about">
              <a className="nav-link">About</a>
            </Link>
          </div>
        </div>
        <button className="btn btn-borderless">
          <MdDarkMode />
        </button>
      </div>
    </nav>
  );
};
