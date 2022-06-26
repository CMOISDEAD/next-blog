import Link from "next/link";
import { Card } from "./Card";
import { AiFillFire } from "react-icons/ai";
import post_json from "../utils/posts.json";

const { posts } = post_json;
const { id, title, author, timestamp } = posts[posts.length - 1];

const Header = ({ title }) => {
  return (
    <>
      <span class="text-orange">
        <AiFillFire />{" "}
      </span>
      {title}
    </>
  );
};

export const LastPost = () => {
  return (
    <div className="my-2">
      <h5>Last Post</h5>
      <Link href={`/posts/${id}?title=${title}`}>
        <a className="card-link">
          <Card
            header={<Header title={title} />}
            author={author}
            timestamp={timestamp}
          />
        </a>
      </Link>
    </div>
  );
};
