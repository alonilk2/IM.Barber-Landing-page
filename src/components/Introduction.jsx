import { Fade } from "react-reveal";
import img1 from "../assets/images/idan.jpg";
import { InstagramEmbed } from "react-social-media-embed";

export default function Introduction() {
  return (
    <section className="first-section">
      <div className="introduction"></div>

      <div className="video-container">
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade right cascade>
            <div className="right-pane">
              <h3>
                האקדמיה של IM.Barber
                <br /> הקריירה שלך מתחילה כאן!
              </h3>
            </div>
          </Fade>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <InstagramEmbed
            url="https://www.instagram.com/reel/CvK_UhCLtEg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
            width={400}
          />
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Fade left cascade>
            <div className="left-pane">
              <p>
                אהלן גבר! מוכן לקריירה מטורפת שתשנה לך את החיים?
                <br />
                מעולה, כי הגעת למקום הנכון! כל מה שאתה צריך זה להיות מוכן.{" "}
                <br />
                <br />
                האקדמיה לספרות של <span className="gold-text">
                  IM.Barber
                </span>{" "}
                מציעה לך הזדמנות של פעם בחיים ללמוד מהטובים ביותר בתחום הברברינג
                בישראל. מסלול מהיר של חודשיים ואתה עם מקצוע לכל החיים!
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
      </div>

      <div className="idan-container">
        <Fade right>
          <img src={img1} alt="idan" className="image-idan" />
        </Fade>

        <div className="text">
          <Fade left>
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
          </Fade>
        </div>
      </div>
    </section>
  );
}
