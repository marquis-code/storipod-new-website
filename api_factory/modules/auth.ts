import { GATEWAY_ENDPOINT } from "../axios.config";
import type { LoginDto, RegisterDto } from "@/types/auth.ts";

export const auth_api = {
  $_register: (payload: RegisterDto) => {
    const url = "/auth/register";
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_login: (payload: LoginDto) => {
    const url = "/auth/login";
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_get_profile: () => {
    const url = "/auth/profile";
    return GATEWAY_ENDPOINT.get(url);
  },
};
