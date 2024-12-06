import logo from "../assets/logo.svg";
import video from "../assets/1.mp4";
import { SocialIcon } from "react-social-icons";
import useWindowSize from "../hooks/useWindowSize";

export default function Header({contactRef}) {
  const { width } = useWindowSize();

  const scrollToComponent = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the component
    }
  };

  return (
    <header className="App-header">
      <video className="video" loop autoPlay playsInline muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content App-logo-bg">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="titles">
          <h1 className="title">
            האקדמיה לספרות של <span>IM.Barber</span>
          </h1>
          <h2 className="subtitle">בוא גבר, נעצב לך קריירה!</h2>
        </div>
      </div>
      <div className="buttons">
      <button onClick={()=>window.location.href="https://bit.ly/3L7waFg"} className="appoint">
        קביעת תור לתספורת
      </button>
      <button onClick={scrollToComponent} className="contact-btn">
        לפרטים על האקדמיה
      </button>
      </div>

      {width > 520 && (
        <div className="socialsrow">
          <SocialIcon url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL" style={{width: "2.0vw", height: "2.0vw"}}/>
          <SocialIcon url="https://www.instagram.com/imbarber_academy" style={{width: "2.0vw", height: "2.0vw"}}/>
          <SocialIcon url="https://www.facebook.com/idanbarber" style={{width: "2.0vw", height: "2.0vw"}}/>
        </div>
      )}
    </header>
  );
}
