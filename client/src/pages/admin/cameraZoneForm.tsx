import React, {useState} from "react";
import { Modal, Button, Form, Image } from "semantic-ui-react";

export const CameraZoneForm = ({
  open,
  setOpen,
  cameraInfo,
}: any) => {

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
    >
      <Modal.Header>Update Crop Coordinates for {cameraInfo?.cam_id}</Modal.Header>
      <Modal.Content image>
      <Image size='medium' src='../../assets/images/sample_location_img.png' wrapped />
        <Modal.Description>
          <Form>
            <Form.Field>
              <label>X1</label>
              <input
                placeholder="Enter new value for X1"
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Y1</label>
              <input
                placeholder="Enter new value for Y1"
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>X2</label>
              <input
                placeholder="Enter new value for X2"
                // onChange={(e) => setName(e.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Y2</label>
              <input
                placeholder="Enter new value for Y2"
                // onChange={(e) => setName(e.target.value)}
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
          onClick={() => {
            setOpen(false);
            /* TOOD: Need to update databse */
          }}
        >
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
