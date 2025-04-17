import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState(["Go shopping"]);
  const [data, setData] = useState("Go shopping");

  const fetchTodos = async () => {
    try {
      const response = await axios.get("http://localhost:4444/todos");
      setTodos(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo= async(e)=>{
   e.preventDefault()
   setTodos([...todos,data])
   try {
    const response = await axios.post("http://localhost:4444/todos/add",{data:data});
    console.log(response)
  } catch (err) {
    console.log(err);
  }
  }

  

  return (
    <>
      <div>
        <form onSubmit={addTodo}>
          <input
            value={data}
            onChange={(e) => {
              setData(e.target.value);
            }}
          />
          <button>Submit</button>
        </form>
        <ul>
          {todos.map((ele, index) => {
            return <li key={index}>{ele}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
