import "./Styles.css";
import "./ResponsiveAbout.css";
import AboutPic from "../../../assets/image5.svg";

export const About = () => {
    return (
        <section className="about">
            <div className="abouthead">
            <h1>About</h1>
            </div>
               
                        <div className="aboutWrapper">

                <div className="leftAbout">
                    <img src={AboutPic} alt="lady" />

                </div>
                <div className="rightAbout">
                    <div className="vert-head">
                      we are doing some high-end stuff for a lot of clients
                    </div>
                    <div>
                        jkkkkkkkkkkhhhhhhhhhhhhhhhhhhh
                    </div>
                </div>

            </div>

        </section>
    );
};
