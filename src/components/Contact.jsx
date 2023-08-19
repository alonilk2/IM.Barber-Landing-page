import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useRef } from "react";
import { forwardRef } from "react";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { SocialIcon } from "react-social-icons";
import emailjs from "@emailjs/browser";
import { publickey } from "../constants";

const Contact = forwardRef(function Contact(props, ref) {
  const [content, setContent] = useState(
    "היי! אשמח לקבוע פגישה טלפונית כדי לקבל פרטים על האקדמיה"
  );
  const formRef = useRef();
  const [success, setSuccess] = useState();
  const { width } = useWindowSize();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        "service_ddgz0eh",
        "template_w3ffrb8",
        formRef.current,
        publickey
      );
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
    }
  }

  return (
    <section className="contact-section" ref={ref}>
      <div className="right-pane" dir="rtl">
        <h5>רוצה עוד פרטים?</h5>
        {width < 520 && (
          <div className="socialsrow">
            <SocialIcon
              url="https://www.tiktok.com/@idan_mavlayev?lang=he-IL"
              style={{ width: "40px", height: "40px" }}
            />
            <SocialIcon
              url="https://www.instagram.com/_im.barber_/"
              style={{ width: "40px", height: "40px" }}
            />
            <SocialIcon
              url="https://www.facebook.com/idan.mavlyev"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        )}
        <form
          className="col contact-container"
          dir="rtl"
          onSubmit={handleSubmit}
          ref={formRef}
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
        {width < 520 ? (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=18&size=500x600&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        ) : (
          <img
            width={"100%"}
            src={
              "https://maps.googleapis.com/maps/api/staticmap?markers=color:yellow%7Ccenter=Yaqinton+St+3%2C+Nof+Hagalil&scale=2&zoom=17&size=800x500&maptype=roadmap&format=png&key=AIzaSyDovloIuIIwjhtE_h70uCzYedVl7KeOifo&map_id=ac719b618b3ec786"
            }
            alt="Map"
          />
        )}
      </div>
      {success === true && (
        <Snackbar
          open={success === true}
          autoHideDuration={6000}
          onClose={() => setSuccess()}
        >
          <Alert
            onClose={() => setSuccess()}
            severity="success"
            sx={{ width: "100%" }}
          >
            האימייל נשלח בהצלחה!
          </Alert>
        </Snackbar>
      )}
    </section>
  );
});
export default Contact;
