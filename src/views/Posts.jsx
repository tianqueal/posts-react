import { useEffect, useState } from 'react';
import { useAuthGuard, usePosts, useToken, useApp } from '../hooks';
import ListPosts from '../components/ListPosts';
import CreatePost from '../components/CreatePost';
import './Posts.css';
import { useNavigate } from 'react-router-dom';

export default function Posts() {
  useAuthGuard();

  const { getPosts, createPost } = usePosts();
  const [posts, setPosts] = useState(undefined);

  const navigation = useNavigate();
  const { clearToken, isTokenValid } = useToken();
  const { setUser } = useApp();

  useEffect(() => {
    async function fetchPosts() {
      try {
        const posts = await getPosts();

        setPosts(posts);
      } catch (error) {
        if (error.status === 401 && !isTokenValid()) {
          alert('Tu sesión ha expirado');
          clearToken();
          setUser(undefined);
          return navigation('/login');
        }

        alert(`Error ${error.status}: ${error.statusText}`);
      }
    }

    fetchPosts();
  }, []);

  const handleOnCreatePost = async (post) => {
    try {
      const newPost = await createPost(post);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`);
    }
  };

  return (
    <section className="posts-container">
      <h2>Posts</h2>

      <CreatePost onCreatePost={handleOnCreatePost} />

      {posts === undefined && <p>Cargando...</p>}
      {posts?.length === 0 && <p>No hay posts</p>}
      {posts?.length > 0 && <ListPosts posts={posts} setPosts={setPosts} />}
    </section>
  );
}
