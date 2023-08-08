import bg from "../assets/2.png";

const DetailsBox = (params) => {
  return <div className="included-box">{params.text}</div>;
};

export default function WhatsIncluded() {
  return (
    <section className="second-section">
      <div className="bg-darken" />
      <div className="brush">
        <h2>מה, הכל כלול?!</h2>
      </div>
      <div className="included-grid">
        <div className="row">
          <DetailsBox text="תעודת הכשרה רשמית בסיום הקורס" />
          <DetailsBox text="ערכת Barber מקצועית במתנה" />
          <DetailsBox text="10 שיעורים לצפייה בכל זמן שנוח" />
        </div>
        <div className="row">
          <DetailsBox text="תעודת הכשרה רשמית בסיום הקורס" />
          <DetailsBox text="ערכת Barber מקצועית במתנה" />
          <DetailsBox text="10 שיעורים לצפייה בכל זמן שנוח" />
        </div>
      </div>
    </section>
  );
}
