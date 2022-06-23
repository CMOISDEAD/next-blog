import { Layout } from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="text-center">Doom Dev</h1>
          <div className="content">
            Dolor totam veniam tempore nobis officiis Neque iste maxime sapiente
            nulla nesciunt <em>Aliquam</em> consequuntur excepturi sint
            repudiandae vitae explicabo. Odit deleniti quo eligendi consequatur
            optio Totam voluptates beatae explicabo eos.
          </div>
          <div className="text-center">Hola</div>
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
