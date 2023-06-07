import axios from "axios";
import baseurl from "./baseurl";
import handle from "./error";
import store from "@/store/store";

export default async function server(endpoint = "", method = "get", data = {}) {
  await store.dispatch("setloading", true);
  let result, error;
  await axios
    .create({
      baseURL: `${baseurl}${endpoint}`,
      headers: {
        Authorization: `Bearer ${localStorage["access_token"]}`,
      },
    })
    .request({ method: method.toUpperCase(), data: data })
    .then((res) => {
      result = res;
    })
    .catch((err) => {
      handle(err).then((value) => {
        if (value) {
          server(endpoint, method, data);
        }
      });
      error = err;
    })
    .finally(() => {
      store.dispatch("setloading", false);
    });
  return new Promise((resolve, reject) => {
    if (result) {
      resolve(result);
    } else {
      reject(error);
    }
  });
}
