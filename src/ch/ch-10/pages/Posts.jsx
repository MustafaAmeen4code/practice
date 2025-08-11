import { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userIdInput, setUserIdInput] = useState("");
  const [postIdInput, setpostIdInput] = useState("");
  const [titleSearch, setTitleSearch] = useState("");

  //Geniric fetch function
  const fetchPosts = async (url, saveAsAll = false) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(url);
      // JSONPlaceholder returns an array,
      //  but it returns an object for /posts/:id,
      // so wrap in array if needed
      const data = Array.isArray(res.data) ? res.data : [res.data];
      setPosts(data);
    } catch (error) {
      setError("Failed to load Posts");
    } finally {
      setLoading(false);
    }
  };
  //load all posts in mount
  useEffect(() => {
    fetchPosts(`https://jsonplaceholder.typicode.com/posts`, true);
  }, []);
  //Debounced title search (server filtering)
  useEffect(() => {
    if (titleSearch.trim() === "") {
      // If search is cleared, fetch all posts
      fetchPosts(`https://jsonplaceholder.typicode.com/posts`);
      return;
    }
    const delay = setTimeout(() => {
      fetchPosts(
        `https://jsonplaceholder.typicode.com/posts?title_like=${titleSearch}`
      );
    }, 400); // Debounce delay
    return () => clearTimeout(delay);
  }, [titleSearch]);
  return (
    <div>
      <h2>Posts</h2>
      <div style={{}}>
        <p>
          <button
            onClick={() => {
              fetchPosts(`https://jsonplaceholder.typicode.com/posts`);
              setUserIdInput("");
              setpostIdInput("");
            }}
          >
            Get All Posts
          </button>
        </p>
        <span style={{ marginRight: "60px" }}>
          <input
            type="text"
            placeholder="Search by Post Title"
            value={titleSearch}
            onChange={(e) => {
              setTitleSearch(e.target.value);
            }}
          />
        </span>
        <span style={{ marginRight: "60px" }}>
          <input
            type="number"
            placeholder="Enter User ID..."
            value={userIdInput}
            onChange={(e) => {
              setUserIdInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (userIdInput) {
                fetchPosts(
                  `https://jsonplaceholder.typicode.com/posts/?userId=${userIdInput}`
                );
                setpostIdInput("");
              }
            }}
          >
            Get User's Posts
          </button>
        </span>
        <span>
          <input
            type="number"
            placeholder="Enter Post ID..."
            value={postIdInput}
            onChange={(e) => {
              setpostIdInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (postIdInput) {
                fetchPosts(
                  `https://jsonplaceholder.typicode.com/posts/${postIdInput}`
                );
                setUserIdInput("");
              }
            }}
          >
            Get Post
          </button>
        </span>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <p>
              <strong>User ID:</strong> {post.userId}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
