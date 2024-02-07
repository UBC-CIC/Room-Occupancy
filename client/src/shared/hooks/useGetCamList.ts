import { useState, useEffect } from "react";
import { get } from "aws-amplify/api";

export const useGetCamList = (): any => {
  const [camList, setCamList] = useState<any>([]);

  useEffect(() => {
    fetchCamList();
  }, []);

  async function fetchCamList() {
    try {
      const restOperation = await get({
        apiName: "CamListREST",
        path: "/camList",
      }).response;
      const data = await restOperation.body.json();
      setCamList(data);
    } catch (error) {
      console.error("GET call failed for fetchCamList: ", error);
    }
  }
  return { camList, fetchCamList };
};
