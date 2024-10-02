import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGraphVariables = (independent, dependent) => {
  return useQuery({
    queryKey: ["graph", independent, dependent], // query key: graph is a label, independent and dependent are the variables
    queryFn: () => getGraphVariables(independent, dependent),
});
};

export const getGraphVariables = async (independent, dependent) => {
  const response = await axios.post(
    `http://localhost:4000`,
    { independent, dependent },
  );
  return response.data;
};