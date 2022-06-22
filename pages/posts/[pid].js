import ReactHtmlParser from "react-html-parser";
import { Layout } from "../../components/Layout";
import post_json from "../../utils/posts.json";

const { posts } = post_json;

export default function Post({ title, content, timestamp, author }) {
  return (
    <Layout>
      <div className="container">
        <h1 className="text-center">{title}</h1>
        <p className="text-muted">{`${timestamp} - ${author}`}</p>
        <div className="content">{ReactHtmlParser(content)}</div>
      </div>
    </Layout>
  );
}

// NOTE: Esta funcion genera todas las rutas posibles para getStaticProps().
export async function getStaticPaths() {
  let paths = posts.map((item) => {
    return {
      params: {
        pid: item.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = posts.filter((item, i) => i == params.pid);
  const { title, content, timestamp, author } = data[0];
  return {
    props: {
      title,
      content,
      timestamp,
      author,
    },
  };
}
