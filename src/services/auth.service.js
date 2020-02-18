import { config } from "../config";
import Axios from "axios";

export const authService = {
  login,
  signup
}

function login(username, password) {
  const user = { name: username, password: password }
  const url = config.apiUrl + "login"
  return Axios.post(url, user)
          .then(response => { return response.data.token })
}

function signup(username, password) {
  const user = { name: username, password: password }
  const url = config.apiUrl + "signup"
  return Axios.post(url, user)
          .then(response => { return response.data })
}
