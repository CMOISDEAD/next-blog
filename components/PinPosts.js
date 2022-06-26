import Link from "next/link";
import { Card } from "./Card";
import { AiFillPushpin } from "react-icons/ai";
import post_json from "../utils/posts.json";

const { posts } = post_json;

const Header = ({ title }) => {
  return (
    <>
      <span className="text-green">
        <AiFillPushpin />{" "}
      </span>
      {title}
    </>
  );
};

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
                  <Card
                    header={<Header title={post.title} />}
                    author={post.author}
                    timestamp={post.timestamp}
                  />
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
