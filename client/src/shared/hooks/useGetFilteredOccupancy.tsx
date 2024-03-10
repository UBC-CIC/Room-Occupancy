import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";

// This hook is used to fetch occupancy information for a specific camera.
// The GraphQL query returns the data for past 90 days
export const useGetFilteredOccupancy = (camera: string): any => {
  const client = generateClient();
  const [filteredOccupancyList, setFilteredOccupancyList] = useState<any>([]);

  useEffect(() => {
    fetchFilteredOccupancyList();
  }, [camera]);

  async function fetchFilteredOccupancyList() {
    console.log("before", camera);
    try {
      console.log("in try", camera);
      const data = await client.graphql({
        query: queries.getCamList,
        variables: { camname: camera },
      });

      console.log("after", camera);

      const filteredOccupancyData = JSON.parse(data?.data?.getCamList?.Rows);
      console.log("after json", camera);

      setFilteredOccupancyList(filteredOccupancyData);
      console.log("end", camera);
    } catch (error) {
      console.error("call failed for fetchFilteredOccupancyList: ", error);
    }
  }

  return { filteredOccupancyList, fetchFilteredOccupancyList };
};
