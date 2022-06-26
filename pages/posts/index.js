import Link from "next/link";
import { Card } from "../../components/Card";
import { Layout } from "../../components/Layout";
import post_json from "../../utils/posts.json";

const { posts } = post_json;

const Header = ({ title }) => {
  return (
    <>
      <span class="fw-bold">{title}</span>
    </>
  );
};

export default function Blog() {
  return (
    <Layout>
      <h1 className="text-center">Posts</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4 my-1">
        {posts.map((post, i) => {
          return (
            <div className="col" key={i}>
              <Link href={`/posts/${post.id}?title=${post.title}`}>
                <a className="card-link">
                  <Card
                    header={<Header title={post.title} />}
                    author={post.author}
                    timestamp={post.timestamp}
                  />
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
