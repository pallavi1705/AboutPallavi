import introductionImg from "../images/backgroundImage.jpg";

function Home() {
  return (
    <>
      <div className="card">
        <div className="card bg-white text-dark">
          <img
            className="card-img"
            src={introductionImg}
            alt="Introduction Img"
          />
          <div className="card-img-overlay">
            <p className="card-text text-lg-right font-weight-normal">
              <strong
                style={{
                  color: "#ffffff",
                  fontWeight: "bold",
                  fontStyle: "italic",
                  fontSize: "18px",
                }}
              >
                Hi there, I'm Pallavi!!{" "}
              </strong>
              I am a daughter, a sister and a passionate Engineer who loves to
              translate ideas into clean and creative websites for a great user
              experience
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
