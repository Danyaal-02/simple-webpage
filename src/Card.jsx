import './Card.css';

function Card({ imageUrl, heading, subheading }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={heading} />
      <div className="card-content">
        <h3>{heading}</h3>
        <p>{subheading}</p>
      </div>
    </div>
  );
}

export default Card;
