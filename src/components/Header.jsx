import logo from "../assets/logo.svg";
import video from "../assets/1.mp4";

export default function Header() {
  return (
    <header className="App-header">
      <video className="video" loop autoPlay playsInline muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content App-logo-bg">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="titles">
          <h1 className="title">האקדמיה לספרות של <span>IM.Barber</span></h1>
          <h2 className="subtitle">בוא גבר, נעצב לך קריירה!</h2>
        </div>
      </div>
      <a href="https://bit.ly/3L7waFg" className="appoint">קביעת תור לתספורת</a>

    </header>
  );
}
