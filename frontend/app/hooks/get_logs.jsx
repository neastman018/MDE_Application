import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useLogs = (files, tosubmit) => {
    return useQuery({
        queryKey: ["logs", files, tosubmit], // query key: graph is a label, independent and dependent are the variables
        queryFn: () => getLogVariables(files, tosubmit),
    });
};

export const getLogVariables = async (files, tosubmit) => {
  const response = await axios.post(
    `http://localhost:4000/logs`,
    {files, tosubmit},
  );
  return response.data;
};