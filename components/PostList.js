import post_json from "../utils/posts.json";

const { posts } = post_json;

export const PostList = () => {
  return (
    <div className="container">
      <h5 className="text-center">Post List</h5>
      <hr />
      <ul className="">
        {posts.map((item, i) => {
          return (
            <li className="" key={i}>
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
