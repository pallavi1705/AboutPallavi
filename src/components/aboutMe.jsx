import profileImage from "../images/profileImage.jpg";

function AboutMe() {
  return (
    <>
      <div className="row g-0 m-2">
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
        <div className="col-md-2">
          <img
            src={profileImage}
            alt="profileImg"
            style={{ borderRadius: "50%" }}
            className="img-thumbnail"
          />
        </div>
      </div>
      <hr />
      <h5 className="font-italic m-5" style={{ color: "#800080" }}>
        Contact
      </h5>
      <div className="container">
        <div
          className="card p-2 m-2"
          style={{ width: "500px", height: "60px" }}
        >
          <div className="row">
            <div className="col-sm-2">
              <img
                className="card-img"
                src="https://tse3.mm.bing.net/th?id=OIP.7y88DqLREW8ApbxWuMBmzgHaEo&pid=Api&P=0&h=180"
                alt="linkedin"
                style={{ width: "60px", height: "35px" }}
              />
            </div>
            <div className="col-sm-10">
              <div className="card-body-right">
                <a
                  className="card-title font-italic"
                  href="https://www.linkedin.com/in/pallavinagendra/"
                  rel="noreferrer"
                  target="_blank"
                >
                  https://www.linkedin.com/in/pallavinagendra/
                </a>
              </div>
            </div>
          </div>


          
        </div>
      </div>

      <div className="container">
        <div
          className="card p-2 m-2"
          style={{ width: "500px", height: "60px" }}
        >
          <div className="row">
            <div className="col-sm-2">
              <img
                className="card-img"
                src="https://tse2.mm.bing.net/th?id=OIP._HIgvWNkUXHN01X7N42A_wHaHa&pid=Api&P=0&h=180"
                alt="gmail"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="col-sm-10">
              <div className="card-body-right">
                <a
                  className="card-title font-italic"
                  href="mailto:pallavibharadwaj17@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  pallavibharadwaj17@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className="card p-2 m-2"
          style={{ width: "500px", height: "60px" }}
        >
          <div className="row">
            <div className="col-sm-2">
              <img
                className="card-img"
                src="https://tse3.mm.bing.net/th?id=OIP.wEDp5KI2DzQ7uLI8NMt48AHaHf&pid=Api&P=0&h=180"
                alt="phone"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
            <div className="col-sm-10">
              <div className="card-body-right">
                <p className="card-title font-italic text-primary">
                  +91-9611318393
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
