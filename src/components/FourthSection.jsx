import rec1 from '../assets/rec1.jpg';
import Gallery from "react-photo-gallery";
import img1 from "../assets/images/IMG_2693.jpg";
import img2 from "../assets/images/IMG_5753.jpg";
import img3 from "../assets/images/IMG_6657.jpg";
import img4 from "../assets/images/IMG_7135.jpg";
import img5 from "../assets/images/IMG_7152.jpg";
import img6 from "../assets/images/IMG_7374.jpg";
import img7 from "../assets/images/IMG_6661.jpg";
import img8 from "../assets/images/IMG_6663.jpg";

const photos = [
  {
    src: img1,
    width: 3,
    height: 4
  },
  {
    src: img2,
    width: 3,
    height: 4
  },
  {
    src: img3,
    width: 3,
    height: 4
  },
  {
    src: img4,
    width: 3,
    height: 4
  },
  {
    src: img5,
    width: 3,
    height: 4
  },
  {
    src: img6,
    width: 3,
    height: 4
  },
  {
    src: img7,
    width: 4,
    height: 6
  },
  {
    src: img8,
    width: 4,
    height: 6
  },


];

function PhotoAlbum() {
    return <Gallery photos={photos} targetRowHeight={600}/>;
}

export default function FourthSection() {
  return (
    <section className="gallery">
      <div className="brush">
        <h2>לקוחות ממליצים</h2>
      </div>
      <div className='recommendation'>
      <p>"עידן נתן לי ידע וכלים שעזרו לי להפוך לספר הכי טוב בעיר"</p>
      <p className='name'>בר דוד, 23, חיפה</p>
      </div>
      <PhotoAlbum />
    </section>
  );
}