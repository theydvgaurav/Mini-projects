import { useState, useEffect } from "react";
import "./App.css";

const Pagination = (props) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPages / props.itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div style={{ display: "flex" }}>
        {pageNumbers.map((item) => {
          return (
            <div key={item} style={{ marginRight: "10px" }}>
              <a href="#" onClick={() => props.paginate(item)}>
                {item}
              </a>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

const CommentsCard = (props) => {
  return (
    <div>
      {props.data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
};

function App() {
  const itemsPerPage = 20;
  const [data, setData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentPageData = data.slice(firstIndex, lastIndex);

  const paginate = (number) => setCurrentPage(number);

  return (
    <div className="App">
      {loading ? "Loading...." : null}
      {currentPageData ? <CommentsCard data={currentPageData} /> : null}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalPages={data.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
