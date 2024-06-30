import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(posts);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <h1>Loading Users...</h1>;
  }

  return (
    <div className="users">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">Search Posts</h1>
        <input
          type="text"
          className="border-2 border-black px-3 py-2"
          placeholder="Search Users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        {posts.length > 0 ? (
          posts.slice(0, 9).map((post) => (
            <div className="user" key={post.id}>
              <h2 className="capitalize">{post.title}</h2>
            </div>
          ))
        ) : (
          <h2>No Posts Found...</h2>
        )}
      </div>
    </div>
  );
};

export default Posts;
