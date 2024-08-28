function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero">
          <h1>
            Game <span className="on">ON</span> Hai ......
          </h1>
          <p className="para">
            Gaming is where imagination meets challenge, turning every victory
            into a story worth telling. It is a realm where we push our limits,
            learn from losses, and forge friendships in the heat of battle. In
            every game, we become the heroes of our own adventures.
          </p>
          <button>search</button>
        </div>
        <div className="hero-img">
          <img src="./hero-img.png" alt="hero-img" />
        </div>
        <div className="hero-img1">
          <img src="./hero-img1.png" alt="hero-img1" />
        </div>
      </div>
    </>
  );
}

export default Hero;
