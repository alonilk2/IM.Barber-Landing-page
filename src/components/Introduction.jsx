import { Fade } from "react-reveal";
import img1 from "../assets/images/idan.jpg";

export default function Introduction() {
  return (
    <section className="first-section">
      <div className="introduction">
        <Fade right cascade>
          <div className="right-pane">
            <h3>
              האקדמיה של IM.Barber
              <br /> הקריירה שלך מתחילה כאן!
            </h3>
          </div>
        </Fade>

        <Fade left cascade>
          <div className="left-pane">
            <p>
              אהלן גבר! מוכן לקריירה מטורפת שתשנה לך את החיים?
              <br />
              מעולה, כי הגעת למקום הנכון! כל מה שאתה צריך זה להיות מוכן. <br />
              <br />
              האקדמיה לספרות של <span className="gold-text">
                IM.Barber
              </span>{" "}
              מציעה לך הזדמנות של פעם בחיים
              <br /> ללמוד מהטובים ביותר בתחום הברברינג בישראל.
              <br />
              מסלול מהיר של חודשיים ואתה עם מקצוע לכל החיים!
              <br />
              <br />
              עשרות ספרים חדשים כבר יצאו מהאקדמיה שלנו לעצמאות!
              <br />
              <br />
              <br />
              <span className="special-bg">אז בוא, תתרשם, ותרשם!</span>
            </p>
          </div>
        </Fade>
      </div>

      <div className="video-container">
        <Fade right>
          <h5 className="video-title">על הקורס</h5>

          <div className="video">
            <iframe
              width="469"
              height="833"
              src="https://www.youtube.com/embed/3C8tGIsH_O8"
              title="IM.Barber Academy - Nof Hagalil"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Fade>
      </div>

      <Fade right cascade>
        <div className="image-container">
          <img src={img1} alt="idan" />
          <div className="text">
            <h2>קצת עליי</h2>
            <p>
              אני עידן, בעל נסיון עשיר בתחום הBarber, ספר מקצועי ומדריך בעל
              יכולות מוכחות. <br />
              <br />
              עד היום הכשרתי עשרות ספרים צעירים אשר מתפתחים במסלול קריירה מותאם
              אישית להם, עם בסיס יציב שקיבלו במהלך השיעורים. <br />
              <br />
              הכנתי במיוחד עבורך תוכנית לימודים עשירה ומסודרת, אשר תבטיח לך הבנה
              ומיומנות מקסימלית בכל מה שדרוש כדי שתוכל להיות הBarber הבא.
            </p>
          </div>
        </div>
      </Fade>
    </section>
  );
}
