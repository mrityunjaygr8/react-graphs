import { useQuery } from "@tanstack/react-query"
import api from "~/src/utils/api"

const useGetStats = (keys: Array<string>, qp: Object) => {
  return useQuery({
    queryKey: ["stats"].concat(keys),
    queryFn: () => api.get(`/api/org/12/stats/`, { params: qp }).then((res) => res.data)
  })
}

export { useGetStats }
