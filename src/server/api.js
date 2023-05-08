import server from "./server";

const queries = {
  id: 0,
  search: "",
  from_time: "",
  to_time: "",
  page: 1,
  limit: 10,
};

export default {
  login(data) {
    return server(`login`, "post", data);
  },
  get(params = queries) {
    return server(`get_user/${params.id}`);
  },
};
