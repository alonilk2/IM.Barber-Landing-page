import axios from "axios";
import { reviewsQuery } from "../constants";

export const getReviews = async () => {
  try {
    const reviews = await axios.get(
      reviewsQuery
    );
    return reviews;
  } catch (e) {
    console.log(e);
  }
};
