import "./Card.css";

function Card() {
  return (
    <div className="card">
      <img
        className="card-image"
        src="https://via.placeholder.com/150"
        alt="Profile Picture"
      ></img>
      <h2 className="card-title">Bipin Kalakheti</h2>
      <p className="card-text">I learn programming and play video games.</p>
    </div>
  );
}

export default Card;
