import React from "react";
import { Post } from "../../interfaces";
import { Input } from "../Input";
import './style.scss';

interface CreatePostProps {
  setItem: (item: Post) => void;
  item: Post;
  setPosts: (post: Post[]) => void;
  posts: Post[];
}

const INPUTS_FORM = ['Title', 'Subtitle', 'Author', 'Content'];

export function CreatePost({ item, setItem, setPosts, posts }: CreatePostProps) {
  function handleAddPost(e: React.FormEvent) {
    setPosts([...posts, item]);
    setItem({ author: '', content: '', subtitle: '', title: '' });
  }

  return (
    <form className="form__container">
      <label>Title:</label>
      <input type={'text'} onChange={(e) => setItem({ ...item, title: e.target.value })} value={item.title}></input>
      <label>Subtitle:</label>
      <input type={'text'} onChange={(e) => setItem({ ...item, subtitle: e.target.value })} value={item.subtitle}></input>
      <label>Author:</label>
      <input type={'text'} onChange={(e) => setItem({ ...item, author: e.target.value })} value={item.author}></input>
      <label>Content:</label>
      <textarea onChange={(e) => setItem({ ...item, content: e.target.value })} value={item.content}></textarea>
      <button type="button" onClick={(e) => handleAddPost(e)}>Create</button>
    </form>
  );
}