import React from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { handleUpdateNameAttributes } from "../../auth/Helpers";

export const UserSettingForm = ({
  open,
  setOpen,
  name,
  setName,
  handleFetchUserAttributes,
}: any) => {
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Update User Information</Button>}
    >
      <Modal.Header>Update User Profile</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Field>
            <label>Enter new name</label>
            <input
              placeholder="Enter new name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          color="green"
          onClick={() => {
            setOpen(false);
            handleUpdateNameAttributes(name, handleFetchUserAttributes);
          }}
        >
          Submit
        </Button>
      </Modal.Actions>
    </Modal>
  );
};
