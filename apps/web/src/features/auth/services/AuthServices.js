import { AuthRequests } from "../apis/AuthRequests";

export const AuthServices = {
  async loginUser(email) {
    const response = await AuthRequests.loginApi(email);
    return response;
  },
};
