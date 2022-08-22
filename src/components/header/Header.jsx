import "./header.css";
import "./ResponsiveHeader.css";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export const Header = () => {
 
  

  return (
    <header>
      <div className="wraper">
        <div className="logo">
          //add logo
        </div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Gallery</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className="btn">
            

            
          </div>
        </nav>
      </div>
    </header>
  );
};
