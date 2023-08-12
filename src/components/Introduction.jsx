import img1 from "../assets/images/idan.jpg";
import CourseHeader from "./CourseHeader";

export default function Introduction() {
  return (
    <section className="first-section">
      <div className="introduction">
        <div className="right-pane">
          <h3>האקדמיה של IM.Barber, הקריירה שלך מתחילה כאן!</h3>
        </div>
        <div className="left-pane">
          <p>
            אהלן גבר! מוכן לקריירה מטורפת שתשנה לך את החיים?
            <br />
            מעולה, כי הגעת למקום הנכון! כל מה שאתה צריך זה להיות מוכן. <br />
            <br />
            האקדמיה לספרות של <span className="gold-text">IM.Barber</span> מציעה
            לך הזדמנות של פעם בחיים ללמוד מהטובים ביותר בתחום הברברינג בישראל.
            מסלול מהיר של חודשיים ואתה עם מקצוע לכל החיים!
            <br />
            <br />
            עשרות ספרים חדשים כבר יצאו מהאקדמיה שלנו לעצמאות!
            <br />
            <br />
            <span className="special-bg">אז בוא, תתרשם, תרשם!</span>
          </p>
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

      <div className="image-container">
        <div className="image">
        <img src={img1} alt="idan" />
        </div>
        <div className="text">
          <h2>קצת עליי</h2>
          <p>
            אני עידן, בעל נסיון עשיר בתחום הBarber, ספר מקצועי ומדריך בעל יכולות
            מוכחות. <br />
            <br />
            עד היום הכשרתי עשרות ספרים צעירים אשר מתפתחים במסלול קריירה מותאם
            אישית להם, עם בסיס יציב שקיבלו במהלך השיעורים. <br />
            <br />
            הכנתי במיוחד עבורך תוכנית לימודים עשירה ומסודרת, אשר תבטיח לך הבנה
            ומיומנות מקסימלית בכל מה שדרוש כדי שתוכל להיות הBarber הבא.
          </p>
        </div>
      </div>
    </section>
  );
}
