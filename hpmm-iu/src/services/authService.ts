import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://localhost:3000/api/auth";

export const authenticateUser = async (
  email: string,
  password: string,
 
): Promise<{ token: string; username: string; }> => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return {
    token: response.data.token,
    username: response.data.username,
    
  };
};

export const logout = async (): Promise<void> => {
  removeToken();
};

export const setToken = (token: string): void => {
  Cookies.set("token", token);
};

export const removeToken = (): void => {
  Cookies.remove("token");
};