import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [content, setContent] = useState(
    "היי! אשמח לקבוע פגישה טלפונית כדי לקבל פרטים על האקדמיה"
  );

  return (
    <section className="contact-section">
      <div className="right-pane" dir="rtl">
        <h5>יאללה, שנדבר?</h5>
        <form
          className="col contact-container"
          dir="rtl"
          // onSubmit={handleSubmit}
          // ref={formRef}
        >
          <TextField
            fullWidth
            id="input-name"
            label="שם מלא"
            variant="filled"
            name="user_name"
          />
          <TextField
            fullWidth
            id="input-email"
            label="אימייל"
            variant="filled"
            name="user_email"
          />
          <TextField
            fullWidth
            id="input-phone"
            label="פלאפון"
            variant="filled"
            name="user_phone"
          />
          <TextField
            id="f-multiline-static"
            label="פירוט ההודעה"
            multiline
            fullWidth
            rows={4}
            variant="filled"
            name="message"
            value={content}
          />

          <Button variant="outlined" type="submit">
            שליחה
          </Button>
        </form>
      </div>
      <div className="left-pane">
        <img
          src={
            "https://maps.googleapis.com/maps/api/staticmap?markers=color:blue%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&zoom=17&size=1000x500&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
          }
          alt="Map"
        />
      </div>
    </section>
  );
}
