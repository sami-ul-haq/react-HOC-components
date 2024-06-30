import { useEffect, useState } from "react";
import HOC from "../HOC";

const Posts = ({data, loading}) => {
  //   const [posts, setPosts] = useState([]);
  //   const [query, setQuery] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   const fetchPosts = async () => {
  //     try {
  //       setLoading(true);
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const data = await res.json();
  //       setPosts(data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log("Error", error);
  //       setLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchPosts();
  //   }, []);

    if (loading) {
      return <h1>Loading Posts...</h1>;
    }

  return (
    <div className="users">
      {/* <div className="flex flex-col gap-2">
        {posts.length > 0 ? (
          posts
            ?.slice(0, 9)
            .filter((post) =>
              post.title.toLowerCase().includes(query.toLowerCase())
            )

            .map((post) => (
              <div className="user" key={post.id}>
                <h2 className="capitalize">{post.title}</h2>
              </div>
            ))
        ) : (
          <h2>No Posts Found...</h2>
        )}
      </div> */}
      <div className="flex flex-col gap-2">
        {data.length > 0 ? (
          data.map((post) => (
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

const SearchPosts = HOC(Posts, "posts")
export default SearchPosts;
