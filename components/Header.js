import Link from "next/link";

export const Header = () => {
  return (
    <div className="text-center my-1">
      <h1>Header Blog</h1>
      <div>
        A not <span className="text-blue">overbloated</span> and more{" "}
        <span className="text-yellow">simplified</span> web that i can{" "}
        <b className="text-aqua">create</b>.
      </div>
      <div className="fst-italic">A dev blog for devs...</div>
      <div className="pt-3">
        <button className="btn btn-primary mx-3">Suscribe</button>
        <Link href="/about">
          <button className="btn btn-success mx-3">About me</button>
        </Link>
        <Link href="/posts/">
          <button className="btn btn-warning mx-3">Posts</button>
        </Link>
      </div>
      <hr />
    </div>
  );
};
