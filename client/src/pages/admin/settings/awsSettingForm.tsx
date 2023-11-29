import React, { useState } from "react";
import { Modal, Button, Header, Image, Form, Grid } from "semantic-ui-react";

type Props = {};

export const AWSSettingForm = ({
  open,
  setOpen,
  currSettings,
  setCurrSettings,
}: any) => {
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
            <input
              placeholder={`${currSettings} photos per second`}
              onChange={(e) => setCurrSettings(parseFloat(e.target.value))}
            />
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
            if (Number.isNaN(currSettings)) {
              alert("You must enter a number!");
            } else {
              setOpen(false);
              alert(
                `AWS Settings updated to ${currSettings} photos per second.`
              );
            }
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};
