import { useLocation } from "react-router-dom";
import qs from "query-string";

const useQuery = () => {
  const { search } = useLocation();
  return qs.parse(search);
};

export { useQuery };
