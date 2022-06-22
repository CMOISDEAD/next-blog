import Link from "next/link";
import { Layout } from "../../components/Layout";
import post_json from "../../utils/posts.json";

const { posts } = post_json;

export default function Blog() {
  return (
    <Layout>
      <div className="container">
        <ul>
          {posts.map((post, i) => {
            return (
              <li key={i}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
}
