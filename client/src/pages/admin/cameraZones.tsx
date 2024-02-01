import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { AdminDashboardLayout } from "../../components/layout/admin";
import { useGetCamList } from "../../shared/hooks/useGetCamList";
import { CameraZoneSettings } from "./cameraZoneSettings";
import {
  Header,
  HeaderSubheader,
  Segment,
  Dimmer,
  Loader,
  Image,
  Tab,
} from "semantic-ui-react";

type Props = {};

interface Pane {
  menuItem: { key: string; icon: string; content: string };
  render: () => React.ReactNode;
}

const CameraZonesComponent = (props: Props) => {
  const { camList } = useGetCamList();
  console.log(camList);
  const panes: Pane[] = camList.map((camera: any) => ({
    menuItem: { key: camera?.cam_id, icon: 'camera', content: camera?.cam_id },
    render: () => <CameraZoneSettings camera={camera} />, // Assuming you have a CameraSettings component
  }));

  if (camList.length === 0)
    return (
      <AdminDashboardLayout>
        <Header as="h2">
          Camera Zones
          <HeaderSubheader>
            View and update camera zone information
          </HeaderSubheader>
        </Header>
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content="Fetching Camera Data" />
          </Dimmer>
          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>
      </AdminDashboardLayout>
    );
  else
    return (
      <AdminDashboardLayout>
        <Header as="h2">
          Camera Zones
          <HeaderSubheader>
            View and update camera zone information
          </HeaderSubheader>
        </Header>
        <Tab panes={panes} />
      </AdminDashboardLayout>
    );
};

export const CameraZones = withAuthenticator(CameraZonesComponent, {
  hideSignUp: true,
});
