import { http } from "./config";

export const personService = {
  getValueUser: () => {
    return http.get("/users");
  },
  deleteUser: (id) => {
    return http.delete(`/users?id=${id}`);
  },
};
