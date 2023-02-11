import PostAuthor from "./PostAuthor";
import "./PostsList.scss";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../../api/postsSlice";

const PostsExcerpt = ({ postId }) => {
  const { post } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data }) => ({
      post: data?.entities[postId],
    }),
  });

  return (
    <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
