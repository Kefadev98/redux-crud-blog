import PostsList from "./features/posts/PostsList/PostsList";

import AddPostForm from "./features/posts/PostForm/AddPostForm";
import SinglePostPage from "./features/posts/PostsList/SinglePostPage";
import EditPostForm from "./features/posts/PostForm/EditPostForm";
import UsersList from "./features/users/UsersList";
import UserPage from "./features/users/UserPage";
import Layout from "./components/Layout/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostsList />} />

        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>

        <Route path="user">
          <Route index element={<UsersList />} />
          <Route path=":userId" element={<UserPage />} />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
