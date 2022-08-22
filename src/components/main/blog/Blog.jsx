import "./BlogStyles.css";
import "./ResponsiveBlog.css";
import { PostBlog } from "./PostBlog/PostBlog";

import BlogPic1 from "../../../assets/image_1.svg";
import BlogPic2 from "../../../assets/image_2.svg";
import BlogPic3 from "../../../assets/image_3.svg";

export const Blog = () => {
  return (
    <section className="blog">
      <div className="blogWrapper">
        <div className="topInfo">
          <h2>hhh</h2>
         
        </div>

        <div className="postsWrapper">
      
            
          <PostBlog
            src={BlogPic1}
            alt="pic1"
            title="balayage& ombre"
         
            
          
          />

          <PostBlog
            src={BlogPic2}
            alt="pic2"
            title="kkkkkkkkk"
        
           
          />

          <PostBlog
            src={BlogPic3}
            alt="pic3"
            title="hjbksb nkj"
        
            
          />

          {/* <PostBlog
            src={BlogPic4}
            alt="alimento4"
            title="How to get stronger without Gym"
            profile={ProfilePic}
            name="Will"
            author="Atevilson Freitas"
          /> */}
          {/* <div className="postBtn">
            <button className="rigth">→</button>
            </div> */}
        </div>
      </div>
    </section>
  );
};
