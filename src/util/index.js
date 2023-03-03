import { useLocation } from "react-router-dom";
import qs from "query-string";

const cdnUrl = "https://d3cdeza28ixtol.cloudfront.net";

const useQuery = () => {
  const { search } = useLocation();
  return qs.parse(search);
};

export { cdnUrl, useQuery };
