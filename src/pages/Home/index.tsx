import { useState } from "react";
import { CreatePost } from "../../components/create-post";
import { PostList } from "../../components/post-list";
import { Post } from "../../interfaces";

import './style.scss';

export function Home() {
  const [item, setItem] = useState<Post>({ title: '', author: '', content: '', subtitle: '' });
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <div className="home">
      <CreatePost
        setItem={setItem}
        item={item}
        setPosts={setPosts}
        posts={posts}
      />
      <PostList
        posts={posts}
      />
    </div>
  );
}