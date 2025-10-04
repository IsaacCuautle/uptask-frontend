import api from "@/lib/axios";
import { isAxiosError } from "axios";

import { type TaskFormData, type Project } from "../types";

type TaskAPI = {
  formData: TaskFormData;
  projectID: Project["_id"];
};

export async function createTask({
  formData,
  projectID,
}: Pick<TaskAPI, "formData" | "projectID">) {
  try {
    const url = `/projects/${projectID}/tasks`;
    const { data } = await api.post<string>(url, formData);
    console.log(data);

    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }

  return;
}
