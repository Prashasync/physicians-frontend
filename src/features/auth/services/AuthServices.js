import { AuthRequests } from '../apis/AuthRequest';

export const AuthServices = {
  async loginUser(email) {
    const response = await AuthRequests.loginApi(email);
    return response;
  },
};