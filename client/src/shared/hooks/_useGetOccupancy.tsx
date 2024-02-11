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
    }, 10000); // call API every 10 seconds

    return () => clearInterval(intervalCall);
  }, []);

  async function fetchOccupancyList() {
    try {
      const data = await client.graphql({ query: queries.getCamList });
      const oData = JSON.parse(data?.data?.getCamList?.Rows);
      setOccupancyList(oData);
    } catch (error) {
      console.error("call failed for fetchOccupancyList: ", error);
    }
  }
  return { occupancyList, fetchOccupancyList };
};
