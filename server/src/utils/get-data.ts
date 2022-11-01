import api from "../api";

export function getApi(){
  return api.get("/films?limit=50")
} 