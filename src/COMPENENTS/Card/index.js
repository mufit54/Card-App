import "./Card.css";

const Card = ({ title, par, lesson, index }) => (
  <div className="Card">
    <h6>{title}</h6>
    <b>{index}</b>
    <p>{par}</p>
    <p>{lesson > 20 && index === 0 && <div>ileri düzey</div>}</p>
    <button>Devamı</button>
  </div>
);

export default Card;
