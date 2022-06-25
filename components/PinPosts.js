import Link from "next/link";
import moment from "moment";
import { AiFillPushpin } from "react-icons/ai";
import post_json from "../utils/posts.json";

const { posts } = post_json;

export const PinPosts = () => {
  return (
    <div className="my-1">
      <h5>Pinned posts</h5>
      <div className="pinned-posts">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {posts.slice(0, 3).map((post, i) => {
            return (
              <Link
                clasname="col"
                href={`/posts/${post.id}?title=${post.title}`}
                key={i}
              >
                <a className="card-link">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-title ">
                        <span className="text-green">
                          <AiFillPushpin />{" "}
                        </span>
                        {post.title}
                      </div>
                      <div className="card-text">
                        Sit magnam nostrum dolores iste eveniet. Ipsa maiores
                        assumenda cumque perferendis rem laborum Vitae incidunt
                        corporis eum sed optio Expedita dolore quia dolorem
                        facere possimus Accusamus autem amet iusto aspernatur.
                      </div>
                    </div>
                    <div className="card-footer text-center">
                      <div className="card-text">
                        <small className="text-muted">
                          {`${moment(
                            moment.unix(post.timestamp / 1000)
                          ).fromNow()} - ${post.author}`}
                        </small>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
