import api from "@/lib/axios";
import {
  dashboardProjectSechema,
  projectSchema,
  type Project,
  type ProjectFormData,
} from "../types";
import { isAxiosError } from "axios";

export const createProject = async (formData: ProjectFormData) => {
  try {
    const { data } = await api.post("/projects", formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
};

export const getAllProjects = async () => {
  try {
    const { data } = await api("/projects");
    const response = dashboardProjectSechema.safeParse(data);
    if (response.success) return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
};

export const getProjectByID = async (id: Project["_id"]) => {
  try {
    const { data } = await api(`/projects/${id}`);
    const response = projectSchema.safeParse(data);

    if (response.success) return response.data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
};

type ProjectAPIType = {
  formData: ProjectFormData;
  projectID: Project["_id"];
};

export const updateProject = async ({
  formData,
  projectID,
}: ProjectAPIType) => {
  try {
    const { data } = await api.put<string>(`/projects/${projectID}`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(`Ocurrio un error:\n${error.response.data.error}`);
    }
  }
  return;
};
