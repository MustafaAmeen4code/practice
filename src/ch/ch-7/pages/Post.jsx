import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const postData = [
  {
    id: 1,
    title: "React Basics",
    content: "Learn the basics of React.",
    author: "Author One",
  },
  {
    id: 2,
    title: "Advanced React",
    content: "Dive deeper into React  concepts.",
    author: "Author Two",
  },
  {
    id: 3,
    title: "React Hooks",
    content: "Understanding React Hooks  and their usage.",
    author: "Author Three",
  },
  {
    id: 4,
    title: "JavaScript Basics",
    content: "Revisiting JavaScript fundamentals.",
    author: "Author Four",
  },
];

const Post = () => {
  const { postId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [search, setSearch] = useState(searchQuery);

  const filteredPosts = postData.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Posts</h2>
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setSearchParams({ search: e.target.value });
        }}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>
              <strong>Author:</strong> {post.author}
            </p>
          </li>
        ))}
      </ul>
      {postId && (
        <div>
          <h3>Selected Post ID: {postId}</h3>
          {postData.find((post) => post.id === parseInt(postId)) ? (
            <p>Post details for ID {postId} are displayed here.</p>
          ) : (
            <p>No post found with ID {postId}.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
