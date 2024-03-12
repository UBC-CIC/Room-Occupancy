import React, { useRef, useState } from "react";
import { Modal, Button, ModalDescription } from "semantic-ui-react";
import defaultImg from "../../assets/images/sample_location_img.png";
import { updateCrop } from "../../shared/helpers/apiHelpers";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export const CameraZoneForm = ({ cameraInfo, fetchCamList }: any) => {
  const [open, setOpen] = useState(false);
  const [crop, setCrop] = useState<Crop>({
    unit: "px",
    width: cameraInfo?.crop_x2-cameraInfo?.crop_x1,
    height: cameraInfo?.crop_y2-cameraInfo?.crop_y1,
    x: cameraInfo?.crop_x1,
    y: cameraInfo?.crop_y1,
  });

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Update</Button>
      <Modal size="small" onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
        <Modal.Header>
          Update Crop Coordinates for Camera {cameraInfo?.cam_name} at {cameraInfo?.Location}
        </Modal.Header>
        <Modal.Content>
        <ReactCrop crop={crop} onChange={c => setCrop(c)}>
          <img src={defaultImg} width={640} height={480}/>
        </ReactCrop>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            color="green"
            onClick={async () => {
              const { width, height, x, y } = crop;
              await updateCrop(
                {
                  cam_name: cameraInfo?.cam_name,
                  crop_x1: x,
                  crop_x2: x + width,
                  crop_y1: y,
                  crop_y2: y + height,
                },
                cameraInfo?.cam_name
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
