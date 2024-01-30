import { useState, useEffect } from "react";
import { GetCamListQuery } from "../../API";
import { getCamList } from "../../graphql/queries";
import { generateClient } from "aws-amplify/api";

export const useGetCamList = (): any => {
  const [camList, setCamList] = useState<GetCamListQuery[] | any>([]);

  const client = generateClient();

  useEffect(() => {
    fetchCamList();
  }, []);

  async function fetchCamList() {
    try {
      const camData = await client.graphql({
        query: getCamList,
      });
      if (!camData.data.getCamList) {
        console.error("Error with Camera Data");
      }
      setCamList(JSON.parse(camData.data.getCamList.Rows));
    } catch (err) {
      console.error("Error fetching camera list data", err);
    }
  }
  return { camList, fetchCamList };
};
