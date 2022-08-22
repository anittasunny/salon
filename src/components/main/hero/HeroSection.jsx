import "./styles.css";
import "./Responsivegen.css";

import HeroImg from "../../../assets/gentleman.svg";

export const Hero = () => {
  return (
    <section className="genSec">
      <div className="contentWrapper">
        <div className="leftContent">
          <h2 className="leftContent-para">ALWAYS MAKE ROOM FOR A LITTLE BEAUTY IN YOUR LIFE</h2>
          <div className="button-cont">
            <button type="button" class="btn btn-primary" >Book appoinment</button>
            <button type="button" class="btn btn-outline-primary" > Book Appoinment</button>
          </div>
        </div>
        <div className="rigthContent">
          <div className="gentlemanImg">
            <img style={{ width: "100%", position: "absolute" }} src={HeroImg} alt="man" />
          </div>
        </div>
      </div>
    </section>
  );
};
