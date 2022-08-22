import "./Styles.css";
import "./ResponsiveService1.css";
import ContactPic from "../../../assets/image4.svg";

export const Service1 = () => {
  return (
    <section className="contact">
      <div className="contatWrapper">
        <div className="leftContact">
         
        </div>
        <div className="rigthContact">
          <img src={ContactPic} alt="gentleman" />
        </div>
      </div>
    </section>
  );
};
