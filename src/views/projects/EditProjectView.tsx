import { getProjectByID } from "@/API/projectAPI";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom";

export default function EditProjectView() {
  const params = useParams();
  const projectID = params.projectID!.toString();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["editProject", projectID],
    queryFn: () => getProjectByID(projectID),
    retry: false,
  });

  if (isLoading) return 'cargando...'

  if (isError) return <Navigate to="/404" />;

  if (data) return <EditProjectView />;
}
