import profileImage from "../images/profileImage.jpg";

function AboutMe() {
  return (
    <>
      <div className="row g-0 m-5">
        <div className="col-md-2">
          <img
            src={profileImage}
            alt="profileImg"
            style={{ borderRadius: "50%" }}
            className="img-thumbnail"
          />
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title font-italic" style={{ color: "#800080" }}>
              About Me...
            </h5>
            <p className="card-text font-weight-light text-justify">
              <p>
                I am a daughter, a sister and a Graduate in Electronics and
                Communication Engineering.
              </p>
              <p>
                I have passion to translate ideas into clean and creative
                websites for a great user experience. Working in IT Industry for
                4+ years now, have worked in certian needle mover projects,
                social cause projects and also business productivity projects.
              </p>
              <p>
                Besides work I am more into fitness recently and also love
                travelling. I also love to paint, craft making and play
                badminton.
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
