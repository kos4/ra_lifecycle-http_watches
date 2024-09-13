import './App.css';
import {useState} from "react";
import Watch from "./components/Watch";
import Form from "./components/Form";

export default function App () {
  const [times, addTime] = useState([]);

  const handlerSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    addTime(times => [...times, {
      id: new Date().getTime(),
      title: data.nameWatch,
      timezone: data.timeZoneWatch,
    }]);
  }

  const handlerDelete = id => {
    const newTimes = times.filter(item => item.id !== id);

    addTime(newTimes);
  };

  return (
    <div className="App">
      <Form onSubmit={handlerSubmit}/>
      <div className="watches">{
        times.map(item => {
          return (
            <Watch key={item.id} id={item.id} name={item.title} timezone={item.timezone} onDelete={handlerDelete}/>
          );
        })
      }</div>
    </div>
  );
}
