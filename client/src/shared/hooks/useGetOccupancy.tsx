import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";

export const useGetOccupancy = (): any => {
  const client = generateClient();
  const [occupancyList, setOccupancyList] = useState<any>([]);

  useEffect(() => {
    fetchOccupancyList();
    const intervalCall = setInterval(() => {
      fetchOccupancyList();
    }, 3000); // call API every 10 seconds
    return () => clearInterval(intervalCall);
  }, []);

  async function fetchOccupancyList() {
    try {
      const data = await client.graphql({
        query: queries.getCamList,
        variables: { camname: "all" },
      });
      const occupancyData = JSON.parse(data?.data?.getCamList?.Rows);
      setOccupancyList(occupancyData);
    } catch (error) {
      console.error("call failed for fetchOccupancyList: ", error);
    }
  }
  return { occupancyList, fetchOccupancyList };
};
