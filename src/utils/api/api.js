import axios from "axios";
import store from "@/store/store";

const api = axios.create({
  baseURL: "http://192.168.1.2:3000/",
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
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.post("login", data);
}

export async function todos() {
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.get("todos");
}

export async function createTodo(data) {
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.post("create_todo", data);
}

export async function updateTodo(data) {
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.put(`update_todo/${data.id}`, data);
}

export async function removeTodo(data) {
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.delete(`remove_todo/${data.id}`);
}

export async function createFile(data) {
  await store.dispatch("setloading", true);
  store.dispatch("setloading", false);
  return await api.post(`create_file`, data);
}
