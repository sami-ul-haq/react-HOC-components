import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Loading Users...</h1>;
  }

  const fiteredUsers = users?.filter((user) => {
    return user.name.indexOf(query) >= 0;
  });

  return (
    <div className="users">
      <div className="mb-5">
        <h1 className="text-2xl font-bold mb-3">Search Users</h1>
        <input
          type="text"
          className="border-2 border-black px-3 py-2"
          placeholder="Search Users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        {users.length > 0 ? (
          users
            ?.filter((user) =>
              user.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((user) => (
              <div className="user" key={user.id}>
                <h2>{user.name}</h2>
              </div>
            ))
        ) : (
          <h2>No User Found...</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
