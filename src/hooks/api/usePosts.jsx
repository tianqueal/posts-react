import { environments } from '../../environments';
import { ajax } from '../../helpers/ajax';
import { useToken } from '../../hooks';

export default function usePosts() {
  const { getToken } = useToken();

  const getPosts = async () => {
    const token = getToken();

    const resp = await ajax({
      url: `${environments.API_URL}/posts`,
      headers: { Authorization: `Bearer ${token}` },
    });

    const json = await resp.json();

    if (!resp.ok) throw { status: resp.status, statusText: json.error };

    return json.posts;
  };

  const createPost = async (post) => {
    const token = getToken();

    const resp = await ajax({
      url: `${environments.API_URL}/posts`,
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: post,
    });

    const json = await resp.json();

    if (!resp.ok) throw { status: resp.status, statusText: json.error };

    return json.post;
  };

  const updatePost = async (post) => {
    const token = getToken();

    const resp = await ajax({
      url: `${environments.API_URL}/posts/${post.id}`,
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: post,
    });

    const json = await resp.json();

    if (!resp.ok) throw { status: resp.status, statusText: json.error };

    return json.post;
  };

  const deletePost = async (id) => {
    const token = getToken();

    const resp = await ajax({
      url: `${environments.API_URL}/posts/${id}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };

    return true;
  };

  return {
    getPosts,
    createPost,
    updatePost,
    deletePost,
  };
}
