import { post } from "aws-amplify/api";

interface ICropData {
  cam_name: string;
  crop_x1: number;
  crop_x2: number;
  crop_y1: number;
  crop_y2: number;
}

export async function updateCrop(crop_data: ICropData, cam_id: number) {
  // first we'll try to update the values in the database
  let flag = 0;
  try {
    const restOperation = post({
      apiName: "CamListREST",
      path: `/camList/update_crop/${cam_id}`,
      options: {
        body: {
          cam_name: cam_id,
          crop_x1: crop_data.crop_x1,
          crop_x2: crop_data.crop_x2,
          crop_y1: crop_data.crop_y1,
          crop_y2: crop_data.crop_y2,
        },
      },
    });
    const response = await restOperation.response;
    console.log("stevehehe")
  } catch (err) {
    console.error("POST to update crop coordinates failed: ", err);
    flag = 1;
  }
  if (!flag) {
    // if there's no flag error, try to tell IoT device that crop data was updated
    try {
      const updateIOT = post({
        apiName: "CamListREST",
        path: `/updateCrop`,
        options: {
          body: {
            cam_name: cam_id,
            crop_x1: crop_data.crop_x1,
            crop_x2: crop_data.crop_x2,
            crop_y1: crop_data.crop_y1,
            crop_y2: crop_data.crop_y2,
          },
        },
      });
      const response = await updateIOT.response;
      console.log("POST to update IoT Device after crop change", response);
    } catch (err) {
      console.error("POST to update IoT Device after crop change", err);
      flag = 1;
    }
  }
}
