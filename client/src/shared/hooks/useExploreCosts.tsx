import { useState, useEffect } from "react";
import { get } from "aws-amplify/api";

export const useExploreCosts = (): any => {
  const [costs, setCosts] = useState<any>([]);

  useEffect(() => {
    costList();
  }, []);

  async function costList() {
    try {
      const restOperation = await get({
        apiName: "CamListREST",
        path: "/exploreCosts",
      }).response;
      const data = await restOperation.body.json();
      setCosts(data);
    } catch (error) {
      console.error("GET call failed for costList: ", error);
    }
  }
  return { costs, costList };
};
