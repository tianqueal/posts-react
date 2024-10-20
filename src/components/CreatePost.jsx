import { useState } from 'react';
import './CreatePost.css';
import Button from './Button';

export default function CreatePost({ onCreatePost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content)
      return alert('Completa todos los campos para crear un post');

    onCreatePost({ title, content });

    setTitle('');
    setContent('');
  };
  return (
    <section className="create-post-container">
      <h3>Crear un nuevo Post</h3>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <article>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            placeholder="Título del post"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </article>
        <article>
          <label htmlFor="content">Contenido</label>
          <input
            type="text"
            placeholder="Contenido del post"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </article>
        <Button type="submit" color="primary">
          Crear
        </Button>
      </form>
    </section>
  );
}
