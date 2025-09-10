import { getProjectByID } from "@/API/projectAPI";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  const projectID = params.projectID!.toString();

  const { data, isLoading } = useQuery({
    queryKey: ["project", projectID],
    queryFn: () => getProjectByID(projectID),
    retry: false,
  });

  if (isLoading) {
    return "Cargando...";
  }

  return <h1>EditProjectView</h1>;
}
