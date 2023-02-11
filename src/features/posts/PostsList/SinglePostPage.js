import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../../api/postsSlice";

const SinglePostPage = () => {
  const { postId } = useParams();

  const { post, isLoading } = useGetPostsQuery("getPosts", {
    selectFromResult: ({ data, isLoading }) => ({
      post: data?.entities[postId],
      isLoading,
    }),
  });

  if (isLoading) return <p>Loading...</p>;

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <article>
      <h3>{post.title}</h3>
      <p className="excerpt">{post.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article>
  );
};

export default SinglePostPage;
