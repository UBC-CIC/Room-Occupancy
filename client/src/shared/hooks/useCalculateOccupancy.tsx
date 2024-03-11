import React, { useEffect, useState } from "react";
import { useGetOccupancy } from "./useGetOccupancy";
import { useGetCamList } from "./useGetCamList";

type Props = {};

const useCalculateOccupancy = () => {
  const { camList } = useGetCamList();
  const { occupancyList } = useGetOccupancy();
  const [cameraOccupancyInfo, setCameraOccupancyInfo] = useState([]);

  useEffect(() => {
    const combinedData = camList.map((camera: any) => {
      console.log("occupancyList: ", occupancyList);
      const currOccuItem = occupancyList?.find((occ: any) => occ.Data[0].ScalarValue.toString() === camera.cam_name);
      console.log("currOccuItem", currOccuItem);
      const currentOccupancy = parseInt(currOccuItem?.Data[1].ScalarValue);
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
