import axios from "axios";

export default axios.create({
  baseURL: "http://api.jgranier.fr",
  headers: {
    "Content-type": "application/json"
  }
});