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

const INPUTS_FORM = [
  { value: 'title', label: 'Title' },
  { value: 'subtitle', label: 'Subtitle' },
  { value: 'author', label: 'Author' },
  { value: 'content', label: 'Content' },
];

export function CreatePost({ item, setItem, setPosts, posts }: CreatePostProps) {
  function handleAddPost(e: React.FormEvent) {
    setPosts([...posts, item]);
    setItem({ author: '', content: '', subtitle: '', title: '' });
  }

  return (
    <form className="form__container">
      {INPUTS_FORM.map((inputLabel, index) => (
        <div>
          <Input
            inputObject={inputLabel}
            item={item}
            setItem={setItem}
            key={index}
          />
        </div>
      ))}
      <button type="button" onClick={(e) => handleAddPost(e)}>Create</button>
    </form>
  );
}