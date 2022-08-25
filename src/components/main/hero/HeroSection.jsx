import "./styles.css";
import "./Responsivegen.css";

import HeroImg from "../../../assets/gentleman.svg";

export const Hero = () => {
  console.log(HeroImg)
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
        <div className="paras">
            <div className="para1">
              <h3>CONTACT</h3>
              <h3>T: 070 9485 7568</h3>
              <h3>info@beautysalon.com</h3>
            </div>
            <div className="para1">
            <h3>HOURS</h3>
            <h3>Mon to Sat: 7:30 am — 1:00 am</h3>
            <h3>Sat: 9:00 am — 1:00 am</h3>
            </div>
            <div className="para1">
            <h3>LOCATION</h3>
            <h3>85 Royal Mint Street,</h3>
            <h3>London, E1 8LG United Kingdom</h3>
            
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
