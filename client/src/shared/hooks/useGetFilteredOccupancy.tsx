import { useEffect, useState } from "react";
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";

// This hook is used to fetch occupancy information for a specific camera.
// The GraphQL query returns the data for past 90 days
export const useGetFilteredOccupancy = (camera: string): any => {
  const client = generateClient();
  const [filteredOccupancyList, setFilteredOccupancyList] = useState<[]>([]);

  async function fetchFilteredOccupancyList() {
    try {
      const data = await client.graphql({
        query: queries.getCamList,
        variables: { camname: camera },
      });
      const filteredOccupancyData = JSON.parse(data?.data?.getCamList?.Rows);
      setFilteredOccupancyList(filteredOccupancyData);
    } catch (error) {
      console.error("call failed for fetchFilteredOccupancyList: ", error);
    }
  }

  return { filteredOccupancyList, fetchFilteredOccupancyList };
};
