import rec1 from "../assets/rec1.jpg";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useState } from "react";

const lessons = [
  {
    name: "שיעור 1 - שיעור ראשון",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 2 - שיעור שני",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 3 - שיעור שלישי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 4 - שיעור רביעי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 5 - שיעור חמישי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 6 - שיעור שישי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 7 - שיעור שביעי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 8 - שיעור שמיני",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 9 - שיעור תשיעי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 10 - שיעור עשירי",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
  {
    name: "שיעור 11 - שיעור אחד עשר",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam velit arcu, interdum eu faucibus a, vehicula eget velit. Ut lacinia risus vitae nibh iaculis pulvinar. Donec varius at est sed scelerisque. Aenean aliquet ac augue nec mollis. Donec tempus nec sapien a iaculis. Morbi molestie in lacus in suscipit.",
  },
];

function BasicList({ handleClick }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          {lessons.map((lesson, index) => (
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleClick(index)}>
                <ListItemText primary={lesson.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}

export default function Lessons() {
  const [viewedLesson, setViewedLesson] = useState(0);

  const handleClick = (key) => {
    setViewedLesson(key);
  };

  return (
    <section className="third-section">
      <div className="brush">
        <h2>מה בתוכנית?</h2>
      </div>
      <div className="lessons">
        <BasicList handleClick={handleClick} />
        <Divider />
        <p className="lesson-desc">{lessons[viewedLesson]?.description}</p>
      </div>
    </section>
  );
}
