import axios from "axios";

export const getReviews = async () => {
  try {
    const reviews = await axios.get(
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJG9BR5jZPHBURb8zWwC2NxUg&fields=reviews&key=AIzaSyAVXkziwHH3h5oVuob61WZAhxL_6XkXzDc&reviews_no_translations=true"
    );
    return reviews;
  } catch (e) {
    console.log(e);
  }
};
