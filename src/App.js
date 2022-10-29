import React from "react";
import ReactDOM  from "react-dom";
import Card from "./components/Card";
import "./index.css";
import Data from "./data.json";

function App() {
  let items=[];

  // for(let x = 0; x <Data.length; x++){
  //   items.push(<Card cardTitle={Data[x].title} cardDesc={Data[x].desc} />)
  // }
  // items = Data.map((item) => <Card cardTitle={item.title} cardDesc={item.desc} />);
  return (
    <div >
      <h1 className="heading">To Do App</h1>
       
      {Data.map((item ,index) => <Card key ={index} cardTitle={item.title} cardDesc={item.desc} />)}

    </div>
  );
}

export default App;
