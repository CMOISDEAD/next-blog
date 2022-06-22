import { Layout } from "../components/Layout";
import "bootstrap/dist/css/bootstrap.css";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="text-center">Blog</h1>
        </div>
      </Layout>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
