import React, { useEffect, useState } from "react";
import { useGetOccupancy } from "./useGetOccupancy";
import { useGetCamList } from "./useGetCamList";

type Props = {};

const useCalculateOccupancy = () => {
  const { camList } = useGetCamList();
  const { occupancyList } = useGetOccupancy();
  const [cameraOccupancyInfo, setCameraOccupancyInfo] = useState([]);

  useEffect(() => {
    const occupancyMap: any = {};
    const cameras = [];
    // this is not working to correctly assign the camera occupancy data to the correct camera
    // i think it's taking the last item in the array, and automcatically assigning that value to the camra
    occupancyList.forEach((item: any) => {
      const camName = item.Data[0].ScalarValue;
      const occupancy = parseInt(item.Data[1].ScalarValue);
      occupancyMap[camName] = occupancy;
    });
    console.log("occMap", occupancyList);

    const combinedData = camList.map((camera: any) => {
      const currentOccupancy = occupancyMap[camera.cam_name] || "-"; // Default to - if not found
      let remainingCapacity = camera.alert_thre - currentOccupancy;
      remainingCapacity = Math.max(0, remainingCapacity);

      return {
        camera_id: camera.cam_name,
        currentOccupancy,
        maxOccupancyThreshold: camera.alert_thre,
        remainingCapacity,
      };
    });

    setCameraOccupancyInfo(combinedData);
  }, [camList, occupancyList]);

  return { cameraOccupancyInfo };
};

export default useCalculateOccupancy;
