import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-ec4f9.cloudfunctions.net/api",
  // The api (cloud functions) URL
  // Change the URL with the one in Firebase Functions after deploying
});

export default instance;
