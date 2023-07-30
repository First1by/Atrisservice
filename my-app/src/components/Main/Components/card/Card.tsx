import './card.css';
import data from './data-card';
function Cards() {
  return (
    <div className="content">
      {data.map((el, key) => (
        <div className="product" key={key}>
          <img className="car-image" src={`${el.url}`} alt="audi" />
          <div>
            <h3>{el.title}</h3>
            <p>{el.type}</p>
            <p>
              Color: <span className="color-car">{el.color}</span>
            </p>
            <div className="button">
              <a>Request a price</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
