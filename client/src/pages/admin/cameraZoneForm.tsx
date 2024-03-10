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

  const maxWidth = 640*(2/3);
  const maxHeight = 480*(2/3);

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
  }, [cropX1, cropY1, cropX2, cropY2, open]);

  return (
    <>
      <Button onClick={
        () => {
          setOpen(!open)
          setX1(cameraInfo?.crop_x1)
          setY1(cameraInfo?.crop_y1)
          setX2(cameraInfo?.crop_x2)
          setY2(cameraInfo?.crop_y2)
        }
        }>Update</Button>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>
          Update Crop Coordinates for Camera {cameraInfo?.cam_name} at {cameraInfo?.Location}
        </Modal.Header>
        <Modal.Content image>
          <canvas
            ref={canvasRef}
            width={maxWidth}
            height={maxHeight}
            style={{ marginRight: "20px" }}
          />
        <Modal.Description>
          <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
            Enter the coordinates in percentage scale.
          </p>
          <p>Top Left: (0,0), Bottom Right: (100,100)</p>
          <Form>
            <Form.Field>
              <label>Top Left X</label>
              <input
                type="number"
                placeholder="Enter new value for X1 (%)"
                min={0}
                max={100}
                onChange={(e) => setX1(maxWidth*(parseFloat(e.target.value)/100))}
              />
            </Form.Field>
            <Form.Field>
              <label>Top Left Y</label>
              <input
                type="number"
                placeholder="Enter new value for Y1 (%)"
                min={0}
                max={100}
                onChange={(e) => setY1(maxHeight*(parseFloat(e.target.value)/100))}
              />
            </Form.Field>
            <Form.Field>
              <label>Bottom Right X</label>
              <input
                type="number"
                placeholder="Enter new value for X2 (%)"
                min={0}
                max={100}
                onChange={(e) => setX2(maxWidth*(parseFloat(e.target.value)/100))}
              />
            </Form.Field>
            <Form.Field>
              <label>Bottom Right Y</label>
              <input
                type="number"
                placeholder="Enter new value for Y2 (%)"
                min={0}
                max={100}
                onChange={(e) => setY2(maxHeight*(parseFloat(e.target.value)/100))}
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
                  cam_name: cameraInfo?.cam_name,
                  crop_x1: cropX1*(3/2),
                  crop_x2: cropX2*(3/2),
                  crop_y1: cropY1*(3/2),
                  crop_y2: cropY2*(3/2),
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
