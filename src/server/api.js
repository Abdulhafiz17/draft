import server from "./server";

const queries = {
  page: 0,
  per_page: 0,
};

export default {
  users(params = queries) {
    return server(`users?page=${params.page}&per_page=${params.per_page}`);
  },
};
