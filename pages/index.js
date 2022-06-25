import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { HomePosts } from "../components/HomePosts";
import { AiFillWarning } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Layout>
        <Header img="https://wallpapercave.com/wp/wp6689710.jpg" />
        <HomePosts />
        <div className="temporal my-1">
          <hr />
          <div className="text-center fst-italic text-yellow">
            <AiFillWarning /> Page under work... <AiFillWarning />
          </div>
        </div>
      </Layout>
    </>
  );
}
