function About() {
  return (
    <div>
      <h2>GAMIMG <span className="on">ZONE</span> </h2>
      <div className="about">
        <div className="cards-img">
          <img src="./Game1.jpeg" alt="card" />
          <h4>PUBG</h4>
          <h4>It is most famous game</h4>
        </div>
        <div className="cards-img">
          <img src="./Game2.jpeg" alt="card" />
          <h4>FREE FIRE</h4>
          <h4>It is most famous game</h4>
        </div>
        <div className="cards-img">
          <img src="./Game3.jpeg" alt="card" />
          <h4>GTA V</h4>
          <h4>It is most famous game</h4>
        </div>
      </div>
        <button className="about-btn">PLAY NOW</button>
    </div>
  );
}

export default About;
