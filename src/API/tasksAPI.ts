import api from "@/lib/axios";
import { isAxiosError } from "axios";

import { type TaskFormData, type Project, type Task } from "../types";

type TaskAPI = {
  formData: TaskFormData;
  projectID: Project["_id"];
  taskID: Task["_id"];
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

// Get a task by ProjectID and Taks ID
export async function getTaskByID({
  taskID,
  projectID,
}: Pick<TaskAPI, "taskID" | "projectID">) {
  try {
    const url = `/projects/${projectID}/task/${taskID}`;
    const { data } = await api.get(url);
    console.log(data);
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
}
