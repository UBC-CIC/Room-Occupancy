import React, {useState} from "react";
import { Modal, Button, Form, Image } from "semantic-ui-react";
import { post } from "aws-amplify/api";

interface ICropData {
  crop_x1: number;
  crop_x2: number;
  crop_y1: number;
  crop_y2: number;
}

export const CameraZoneForm = ({ camId, fetchCamList}: any) => {
  const [open, setOpen] = useState(false);
  const [cropX1, setX1] = useState(0);
  const [cropY1, setY1] = useState(0);
  const [cropX2, setX2] = useState(0);
  const [cropY2, setY2] = useState(0);
   
  async function updateCrop(crop_data: ICropData, cam_id: number) {
    // first we'll try to update the values in the database
    // this is working (first API call)
    let flag = 0;
    try {
      const restOperation = post({
        apiName: "CamListREST",
        path: `/camList/update_crop/${cam_id}`,
        options: {
          body: {
            crop_x1: crop_data.crop_x1,
            crop_x2: crop_data.crop_x2,
            crop_y1: crop_data.crop_y1,
            crop_y2: crop_data.crop_y2,
          },
        },
      });
      const response = await restOperation.response;
    } catch (err) {
      console.error("POST to update crop coordinates failed: ", err);
      flag = 1;
    }
    if (!flag) {
      // this part is not working (second API call)
      // if there's no flag error, try to tell IoT device that crop data was updated
      try {
        const updateIOT = post({
          apiName: "CamListREST",
          path: `/updateCrop`,
          options: {
            body: {
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

  return (
    <>
    <Button onClick={() => setOpen(!open)}>Update</Button>
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Update Crop Coordinates for Camera ID: {camId}</Modal.Header>
      <Modal.Content image>
      <Image size='medium' src='../../assets/images/sample_location_img.png' wrapped />
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>X1</label>
              <input
                placeholder="Enter new value for X1"
                onChange={(e) => setX1(parseFloat(e.target.value))}
              />
            </Form.Field>
            <Form.Field>
              <label>Y1</label>
              <input
                placeholder="Enter new value for Y1"
                onChange={(e) => setY1(parseFloat(e.target.value))}
              />
            </Form.Field>
            <Form.Field>
              <label>X2</label>
              <input
                placeholder="Enter new value for X2"
                onChange={(e) => setX2(parseFloat(e.target.value))}
              />
            </Form.Field>
            <Form.Field>
              <label>Y2</label>
              <input
                placeholder="Enter new value for Y2"
                onChange={(e) => setY2(parseFloat(e.target.value))}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          color="green"
          onClick={async() => {
            await updateCrop(
                        {
                          crop_x1: cropX1,
                          crop_x2: cropX2,
                          crop_y1: cropY1,
                          crop_y2: cropY2,
                        },
                        camId
                      );
            fetchCamList();
            setOpen(false);
          }}
        >
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
    </>
  );
};
