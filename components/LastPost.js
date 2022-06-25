import Link from "next/link";
import { AiFillFire } from "react-icons/ai";
import post_json from "../utils/posts.json";

const { posts } = post_json;
const { id, title, author, timestamp } = posts[posts.length - 1];

export const LastPost = () => {
  return (
    <div className="my-2">
      <h5>Last Post</h5>
      <Link href={`/posts/${id}?title=${title}`}>
        <a className="card-link">
          <div className="card ">
            <div className="card-body">
              <div className="card-title">
                <span className="text-orange">
                  <AiFillFire />{" "}
                </span>
                {title}
              </div>
              <div className="card-text">
                Elit debitis fuga dolore aperiam neque Illum obcaecati saepe
                perferendis libero ipsam maiores ut. Sed quod sed doloribus
                cumque consectetur Neque sapiente ipsam provident ducimus illo.
                Perspiciatis error excepturi eaque.
              </div>
            </div>
            <div className="card-footer text-center">
              <div className="card-text">
                <small className="text-muted">
                  {timestamp} - {author}
                </small>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
