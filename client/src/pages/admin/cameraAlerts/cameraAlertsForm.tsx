import React, { useState } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { post } from "aws-amplify/api";

export const CameraAlertsForm = ({ cam_id, fetchCamList }: any) => {
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(0);

  async function updateAlertThreshold(alert_val: number, cam_id: number) {
    try {
      const restOperation = post({
        apiName: "CamListREST",
        path: `/camList/${cam_id}`,
        options: {
          body: { alert_thre: alert_val },
        },
      });
      const response = await restOperation.response;
    } catch (err) {
      console.error("POST to update alert_thre failed: ", err);
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
        <Modal.Header>Update Threshold for Camera ID: {cam_id}</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Enter new alert threshold</label>
              <input
                placeholder="Enter new threshold"
                type="number"
                onChange={(e) => setAlert(parseInt(e.target.value))}
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
            onClick={async () => {
              await updateAlertThreshold(alert, cam_id);
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
