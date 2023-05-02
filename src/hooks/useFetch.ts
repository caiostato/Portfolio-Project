import { useEffect, useState } from "react";
import { RepositoryType } from "@/@types/Repositories";

import { api } from "../lib/config";

const useFetch = <RepositoryType>() => {
  const [data, setData] = useState<RepositoryType | null>(null);

  useEffect(() => {
    api
      .get("/users/caiostato/repos")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { data };
};

export { useFetch };
