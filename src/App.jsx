import Posts from "./components/Posts";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="app max-w-5xl m-auto px-4">
      <h1 className="text-2xl font-bold text-center px-3 py-5 bg-slate-600 mb-5 text-white">
        React HOC Componenet Example
      </h1>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 ">
        <Users />
        <Posts />
      </div>
    </div>
  );
};

export default App;
