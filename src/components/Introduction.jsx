import { Divider } from "@mui/material";
import img1 from "../assets/images/idan.jpg";
export default function Introduction() {
  return (
    <section>
      <div className="first-section">
        <div className="right-pane">
          <h3>האקדמיה של IM.Barber, הקריירה שלך מתחילה כאן!</h3>
        </div>
        <div className="left-pane">
          <p>
            היי גבר! מוכן לעלות ברמה ולעוף על קריירה של גזירות? <br />
            אל תמשיך לחפש, הגעת למקום הנכון. <br />
            האקדמיה לספרות של <span className="gold-text">IM.Barber</span> מציעה
            לך הזדמנות ללמוד מהטובים ביותר, במסלול היעיל והמקיף ביותר.
            <br />
            <br />
            עם נסיון של שנים בתחום, ועשרות ספרים מוכשרים שפרחו מהחממה שלנו,
            <br /> לך נשאר רק להתרשם ולהרשם. <br />
            <br />
            <span className="special-bg">בוא, נעצב לך קריירה!</span>
          </p>
        </div>
      </div>

      <div className="stats">
        <div className="stat">
          <p className="stat-number light-brown">+100</p>
          <p className="stat-title light-brown">לקוחות מרוצים</p>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          light
          className="divider-brown"
        />
        <div className="stat">
          <p className="stat-number silver">10</p>
          <p className="stat-title silver">שיעורים מקיפים</p>
        </div>
        <Divider
          orientation="vertical"
          flexItem
          light
          className="divider-brown"
        />

        <div className="stat">
          <p className="stat-number cherry">45</p>
          <p className="stat-title cherry">שעות לימוד פרקטיות</p>
        </div>
      </div>
      <div className="video-container">
      <h5 className="video-title">על הקורס</h5>
      <div className="video">
        <iframe
          src="https://drive.google.com/file/d/1tdLCoM09x4WS0YeQjMAajZmqGmHgRmI1/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </div>
      </div>

      <div className="image">
        <img src={img1} alt="idan" />
        <div className="text">
          <h2>קצת עליי</h2>
          <p>
            אני עידן, בעל נסיון עשיר בתחום הBarber, ספר מקצועי ומדריך בעל יכולות
            מוכחות. <br /><br />
            עד היום הכשרתי עשרות ספרים צעירים אשר מתפתחים במסלול קריירה מותאם אישית להם, עם בסיס יציב שקיבלו במהלך השיעורים. <br /><br />
            הכנתי במיוחד עבורך תוכנית לימודים עשירה ומסודרת, אשר תבטיח לך הבנה
            ומיומנות מקסימלית בכל מה שדרוש כדי שתוכל להיות הBarber הבא. 
            
          </p>
        </div>
      </div>
    </section>
  );
}
