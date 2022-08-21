import { Post } from "../../interfaces";
import './style.scss';

interface PostListProps {
  posts: Post[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <section className="postsList_container">
      {posts.map((post, index) => (
        <div key={index}>
          <span>Title: {post.title}</span>
          <span>Subtitle: {post.subtitle}</span>
          <span>Author: {post.author}</span>
          <span>Content: {post.content}</span>
        </div>
      ))}
    </section>
  );
}