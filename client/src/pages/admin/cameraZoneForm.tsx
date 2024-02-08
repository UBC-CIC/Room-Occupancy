import React, { useRef, useEffect, useState } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import defaultImg from "../../assets/images/sample_location_img.png";
import { updateCrop } from "../../shared/helpers/apiHelpers";

export const CameraZoneForm = ({ cameraInfo, fetchCamList }: any) => {
  const [open, setOpen] = useState(false);
  const [cropX1, setX1] = useState(cameraInfo?.crop_x1);
  const [cropY1, setY1] = useState(cameraInfo?.crop_y1);
  const [cropX2, setX2] = useState(cameraInfo?.crop_x2);
  const [cropY2, setY2] = useState(cameraInfo?.crop_y2);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      const image = new window.Image();
      image.src = defaultImg;

      image.onload = () => {
        console.log("Image loaded successfully");

        // Draw the image on the canvas
        context.drawImage(image, 0, 0, canvas!.width, canvas!.height);

        // Draw a box based on coordinates
        context.beginPath();
        context.rect(
          Math.min(cropX1, cropX2),
          Math.min(cropY1, cropY2),
          Math.abs(cropX2 - cropX1),
          Math.abs(cropY2 - cropY1)
        );
        context.lineWidth = 3;
        context.strokeStyle = "red";
        context.stroke();
      };
    }
  }, [canvasRef.current, cropX1, cropY1, cropX2, cropY2]);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Update</Button>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>
          Update Crop Coordinates for Camera ID: {cameraInfo?.cam_id}
        </Modal.Header>
        <Modal.Content image>
          <canvas
            ref={canvasRef}
            width={450}
            height={300}
            style={{ marginRight: "20px" }}
          />
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Top Left X</label>
                <input
                  placeholder="Enter new value for X1 (max:450)"
                  min={0}
                  max={450}
                  onChange={(e) => setX1(parseFloat(e.target.value))}
                />
              </Form.Field>
              <Form.Field>
                <label>Top Left Y</label>
                <input
                  placeholder="Enter new value for Y1 (max:300)"
                  min={0}
                  max={300}
                  onChange={(e) => setY1(parseFloat(e.target.value))}
                />
              </Form.Field>
              <Form.Field>
                <label>Bottom Right X</label>
                <input
                  placeholder="Enter new value for X2 (max:450)"
                  min={0}
                  max={450}
                  onChange={(e) => setX2(parseFloat(e.target.value))}
                />
              </Form.Field>
              <Form.Field>
                <label>Bottom Right Y</label>
                <input
                  placeholder="Enter new value for Y2 (max:300)"
                  min={0}
                  max={300}
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
            onClick={async () => {
              await updateCrop(
                {
                  crop_x1: cropX1,
                  crop_x2: cropX2,
                  crop_y1: cropY1,
                  crop_y2: cropY2,
                },
                cameraInfo?.cam_id
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
