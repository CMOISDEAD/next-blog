import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { HomePosts } from "../components/HomePosts";
import { Suscribe } from "../components/Suscribe";

export default function Home() {
  return (
    <>
      <Layout>
        <Header img="https://wallpapercave.com/wp/wp6689710.jpg" />
        <HomePosts />
        <Suscribe />
      </Layout>
    </>
  );
}
