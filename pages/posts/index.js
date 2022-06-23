import Link from "next/link";
import { Layout } from "../../components/Layout";
import post_json from "../../utils/posts.json";

const { posts } = post_json;

export default function Blog() {
  return (
    <Layout>
      <div className="row row-cols-1 row-cols-md-2 g-4 mt-3">
        {posts.map((post, i) => {
          return (
            <div className="col" key={i}>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <div className="card mb-3" style={{ width: 40 + "vw" }}>
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title fw-bold">{post.title}</h5>
                          <p className="card-text">
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </p>
                          <p className="card-text">
                            <small className="text-muted">
                              {post.timestamp}
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        a {
          color: inherit;
          text-decoration: inherit;
        }
        .card {
          transition: all 0.5s ease-out;
        }
      `}</style>
    </Layout>
  );
}
