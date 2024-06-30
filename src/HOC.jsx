import React from "react";

const HOC = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      loading: false,
      data: [],
      query: "",
    };

    componentDidMount() {
      const fetchData = async () => {
        try {
          this.setState({ ...this.state, loading: true });
          const res = await fetch(
            `https://jsonplaceholder.typicode.com/${entity}`
          );
          const data = await res.json();
          this.setState({ ...this.state, data: data, loading: false });
        } catch (error) {
          console.log("Error", error);
          this.setState({ ...this.state, loading: false });
        }
      };

      fetchData();
    }

    render() {
        let { data , query, loading } = this.state;
        let filtereData = data.filter(ent => {
            if(entity === "users"){
                const { name } = ent;
                return name.toLowerCase().includes(query.toLowerCase());
            }
            if(entity === "posts"){
                const { title } = ent;
                return title.toLowerCase().includes(query.toLowerCase());
            }
        })

        return (
            <div className="mb-5">
            <h1 className="text-2xl font-bold mb-3 capitalize">Search {entity}</h1>
            <input
              type="text"
              className="border-2 border-black px-3 py-2"
              placeholder="Search Users..."
              value={query}
              onChange={(e) => this.setState({...this.state, query:e.target.value})}
            />
            <WrappedComponent data={filtereData} loading={loading}/>
          </div>
        )
    }
  };
};

export default HOC;
