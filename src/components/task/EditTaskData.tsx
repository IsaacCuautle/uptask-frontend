import { useLocation, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTaskByID } from "@/API/tasksAPI";

export default function EditTaskData() {
  // Get the projectID and taskID from the URL
  const params = useParams();
  const projectID = params.projectID!;

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskID = queryParams.get("editTaskID")!;

  // Get the task data
  const { data } = useQuery({
    queryKey: ["task", taskID],
    queryFn: () => getTaskByID({ projectID, taskID }),
  });

  console.log(data);

  return <div></div>;
}
