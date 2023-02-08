import axios from "axios";
import store from "@/store/store";

const api = axios.create({
  baseURL: "http://192.168.1.8:3000/",
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export function websocket(url) {
  let socket = new WebSocket(url);

  socket.onopen = (event) => {
    console.log(event);
  };

  socket.onerror = (event) => {
    console.error(event);
  };

  socket.onclose = (event) => {
    console.error(event);
    setInterval(() => {
      websocket(url);
    }, 60000);
  };

  return socket;
}

export function catchError(error) {
  console.error(error);
}

export async function login(data) {
  store.dispatch("setloading", true);
  return await api.post("login", data).finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function profile() {
  store.dispatch("setloading", true);
  return await api.get("profile").finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function updateProfile(data) {
  store.dispatch("setloading", true);
  return await api.put("update_profile", data).finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function todos() {
  store.dispatch("setloading", true);
  return await api.get("todos").finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function createTodo(data) {
  store.dispatch("setloading", true);
  return await api.post("create_todo", data).finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function updateTodo(data) {
  store.dispatch("setloading", true);
  return await api.put(`update_todo/${data.id}`, data).finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function removeTodo(data) {
  store.dispatch("setloading", true);
  return await api.delete(`remove_todo/${data.id}`).finally(() => {
    store.dispatch("setloading", false);
  });
}

export async function createFile(data) {
  store.dispatch("setloading", true);
  return await api.post(`create_file`, data).finally(() => {
    store.dispatch("setloading", false);
  });
}
