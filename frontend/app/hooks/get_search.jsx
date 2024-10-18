import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useSearch = (search, deleteFile) => {
  return useQuery({
    queryKey: ["search", search, deleteFile], // query key: graph is a label, independent and dependent are the variables
    queryFn: () => getSearch(search, deleteFile),
});
};

export const getSearch = async (search, deleteFile) => {
  const response = await axios.post(
    `http://localhost:4000/search`,
    { search, deleteFile },
  );
  return response.data;
};