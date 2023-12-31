import Divider from "@mui/material/Divider";
import { useState } from "react";
import CourseHeader from "./CourseHeader";
import { Fade } from "react-reveal";
export default function Lessons() {
  return (
    <section className="third-section">
      <div className="rounded-outline"></div>
      <div className="brush">
        <h2 className="courses-title">מסלולים</h2>
      </div>
      <CourseHeader
        courseType={"קורס אינטנסיבי"}
        lessonsCount={9}
        equipType={"ציוד מתקדם"}
      />
      <Fade right cascade>
        <div className="course-container">
          <h1>מה כולל המסלול האינטנסיבי?</h1>
          <p>
            בשיעור הראשון עם עידן מנהל האקדמיה נקבל הדגמת תספורות, דירוגים
            מטורפים, גזירות, פנסים, ציורי ראש, עיצובי זקן, צילום ושיווק וכן גם
            תתנסו באופן פרקטי חלקי.
          </p>
          <p>
            ב-8 השיעורים הנוספים אתם תבצעו במו ידיכם תספורות מלאות, שילובים,
            גזירות ועיצובי זקן! כמובן כל זה בהשגחה פרטנית של עידן. רק אתם, הוא
            והמודליסט. ממש שיעור פרטי לכל דבר!
          </p>
          <p>רשימת הציוד שתקבל בסוף הקורס:</p>
          <ul>
            <li>סט מכונות של JRL (מכונת שילובים ומכונת פיניש ומסגרות)</li>
            <li>שייבר של אנדיס</li>
            <li>עוד מכונת פיניש להורדת מסה של kemei</li>
            <li>חלוק למסתפר</li>
            <li>סינר מעוצב לברבר</li>
            <li>חבילת תערים גדולה (100 סכינים)</li>
            <li>ידית מקצועית לתער</li>
            <li>מברשת פייד גדולה וקטנה</li>
            <li>חלוק מעוצב עם הלוגו שאנחנו נבנה במיוחד בשבילכם</li>
            <li>מנקה צוואר</li>
            <li>ספריי חיטוי של אנדיס למכונות / בקבוק חיטוי לעור הלקוח</li>
            <li>חבילת נייר צוואר</li>
          </ul>
        </div>
      </Fade>

      <CourseHeader
        courseType={"קורס מהיר"}
        lessonsCount={7}
        equipType={"ציוד בסיסי"}
      />
      <Fade right cascade>
        <div className="course-container">
          <h1>מה כולל המסלול המהיר?</h1>
          <p>
            בשיעור ראשון עם עידן מנהל האקדמייה נקבל הדגמת תספורת מלאה על מודליסט
            אמיתי ונראה מהצד איך נראות טכניקות השילובים והגזירות שפיתח במשך
            השנים.
          </p>
          <p>
            ב-6 השיעורים הנוספים אתם תבצעו תספורות מלאות על מודליסטים אמיתיים
            במו ידיכם בהשגחה פרטנית של עידן וצוות האקדמייה.
          </p>
          <p>
            השיעורים כוללים את הנושאים הבאים: שילובים, גזירות, מסגרות, עבודה עם
            תער, עיצובי זקן.
          </p>
          <p>בציוד המסופק תקבלו:</p>
          <ul>
            <li>סט מכונות JRL</li>
            <li>מכונת דירוגים</li>
            <li>מכונת פיניש/מסגרות</li>
            <li>חבילת תערים</li>
            <li>ידית לתער</li>
            <li>מברשת פייד ומנקה צוואר</li>
          </ul>
        </div>
      </Fade>
    </section>
  );
}
