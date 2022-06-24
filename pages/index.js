import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { LastPost } from "../components/LastPost";

export default function Home() {
  return (
    <>
      <Layout>
        <Header img="https://wallpapercave.com/wp/wp6689710.jpg" />
        <LastPost />
      </Layout>
    </>
  );
}
