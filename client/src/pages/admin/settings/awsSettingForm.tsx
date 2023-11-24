import React from "react";
import { Modal, Button, Header, Image, Form, Grid } from "semantic-ui-react";

type Props = {};

export const AWSSettingForm = ({ open, setOpen }: any) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update</Button>}
    >
      <Modal.Header>Update AWS Rekognition Settings</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Photo per Second</label>
            <input placeholder={"3 photos per second"} />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Submit"
          labelPosition="right"
          icon="checkmark"
          onClick={() => {
            setOpen(false);
            alert("AWS Settings updated to 3 photos per second");
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
