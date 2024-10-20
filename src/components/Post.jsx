import { useState } from 'react';
import Button from './Button';
import './Post.css';
import truncate from '../utils/truncate';

export default function Post({ onEdit, onDelete, post }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleToggleEdit = () => setIsEditing(!isEditing);

  const handleDelete = () => onDelete(post.id);

  const handleSave = (e) => {
    e.preventDefault();

    if (!title || !content)
      return alert('Completa todos los campos para editar el post');

    setIsEditing(false);
    onEdit({ ...post, title, content });
  };

  return (
    <section className="post-item-container">
      <article className="post-item-container__content">
        {isEditing ? (
          <form onSubmit={handleSave}>
            <article>
              <label htmlFor="title">Título</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Título del post ..."
              />
            </article>
            <article>
              <label htmlFor="content">Contenido</label>
              <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Contenido del post ..."
              />
            </article>
            <Button type="submit" color="secondary">
              Guardar
            </Button>
          </form>
        ) : (
          <>
            <h3>
              {`#${post.id}`} {truncate(post.title, 80)}
            </h3>
            <p>{truncate(post.content, 80)}</p>
          </>
        )}
      </article>
      <article className="post-item-container__actions">
        {isEditing ? (
          <Button type="button" handleClick={handleToggleEdit}>
            Cancelar
          </Button>
        ) : (
          <Button
            type="button"
            color="secondary"
            handleClick={handleToggleEdit}
          >
            Editar
          </Button>
        )}
        <Button
          type="button"
          color="error"
          handleClick={handleDelete}
          isDisabled={isEditing}
        >
          Eliminar
        </Button>
      </article>
    </section>
  );
}
