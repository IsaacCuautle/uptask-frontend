import api from "@/lib/axios";
import type { ProjectFormData } from "../types";
import { isAxiosError } from "axios";

export const createProject = async(formData: ProjectFormData) => {
  try {
    const { data } = await api.post("/projects", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
}

export const getAllProjects = async() => {
  try {
    const { data } = await api("/projects");
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
}
