//import logo from "./logo.svg";
import "./App.css";
import Card from "./COMPENENTS/Card";
import { useState } from "react";

let arr = [
  {
    id: 1,
    title: "dağ 1",
    par: "acıklama 1",
  },
  {
    id: 2,
    title: "dağ 2",
    par: "acıklama 2",
  },
  {
    id: 3,
    title: "dağ 3",
    par: "acıklama 3",
  },
];

//const kare = (sayi) => sayi * sayi;

const App = () => {
  const [lesson, setLesson] = useState(11);
  return (
    <div>
      <h1>Başlık</h1>
      <h2>Ders {lesson}</h2>
      <button
        onClick={() => {
          setLesson(lesson + 1);
        }}
      >
        Ders arttır
      </button>
      <button
        onClick={() => {
          setLesson(lesson - 1);
        }}
      >
        azalt
      </button>
      <button
        onClick={() => {
          setLesson(100);
        }}
      >
        Ders 100
      </button>
      <p>Başlangıç</p>
      <div className="Cards">
        {arr.map(({ title, par }, i) => (
          <Card
            key={`ìndex ${i}`}
            title={title}
            par={par}
            lesson={lesson}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
