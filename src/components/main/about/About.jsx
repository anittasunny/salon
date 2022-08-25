import "./Styles.css";
import "./ResponsiveAbout.css";
import AboutPic from "../../../assets/image5.svg";

export const About = () => {
    return (
        <section className="about">
            <div className="abouthead">
                About us
            </div>

            <div className="aboutWrapper">

                <div className="leftAbout">
                    <img src={AboutPic} alt="lady" />

                </div>
                <div className="vert-head">
                        we are doing some high-end stuff for a lot of clients
                    </div>
                <div className="rightAbout">
                   
                    <div className="horz">
                        <div className="horz1">
                        Contrary to popular belief, <b>we can actually do something amazing for you !</b>
                        </div>
                     <div className="horz2">
                     What can we say about us, well we basically are a beauty care with over <b>10 years of experience </b>in beauty and spa treatment, and we are the ones who create da funky stuff.
                      <b> Lorem Ipsum </b>has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                     </div>
                        
                    </div>
                </div>

            </div>

        </section>
    );
};
