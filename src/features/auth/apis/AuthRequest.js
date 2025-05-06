import axios from "axios";

export const AuthRequests = {
  async loginApi(email) {
    const response = await axios.post(
      "/api/v1/login",
      { email },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  },
};