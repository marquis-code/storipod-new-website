import { GATEWAY_ENDPOINT } from "../axios.config";

export const users_api = {
  $_get_users: () => {
    const url = "/users";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_get_user: (id: string) => {
    const url = `/users/${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_follow_user: (id: string) => {
    const url = `/users/${id}/follow`;
    return GATEWAY_ENDPOINT.post(url);
  },
  $_unfollow_user: (id: string) => {
    const url = `/users/${id}/follow`;
    return GATEWAY_ENDPOINT.delete(url);
  },
  $_deactivate_user: (id: string) => {
    const url = `/users/${id}`;
    return GATEWAY_ENDPOINT.delete(url);
  },
};
