import Post from './Post';
import './ListPosts.css';
import { usePosts } from '../hooks';

export default function ListPosts({ posts, setPosts }) {
  const { updatePost, deletePost } = usePosts();

  const handleEdit = async (post) => {
    try {
      await updatePost(post);

      setPosts((prevPosts) =>
        prevPosts.map((prevPost) =>
          prevPost.id === post.id ? { ...prevPost, ...post } : prevPost
        )
      );
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Estás seguro de eliminar este post?')) return;

    try {
      await deletePost(id);

      setPosts((prevPosts) =>
        prevPosts.filter((prevPost) => prevPost.id !== id)
      );
    } catch (error) {
      alert(`Error ${error.status}: ${error.statusText}`);
    }
  };

  return (
    <section className="list-posts">
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="list-posts-item">
            <Post post={post} onDelete={handleDelete} onEdit={handleEdit} />
          </li>
        ))}
      </ul>
    </section>
  );
}
