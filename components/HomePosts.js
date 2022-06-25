import { LastPost } from "./LastPost.js";
import { PinPosts } from "./PinPosts.js";

export const HomePosts = () => {
  return (
    <div className="my-1">
      <PinPosts />
      <LastPost />
    </div>
  );
};
