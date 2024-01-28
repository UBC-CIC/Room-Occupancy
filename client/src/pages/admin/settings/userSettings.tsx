import React, { useState } from "react";
import {
  Tab,
  Header,
  HeaderSubheader,
  Icon,
  HeaderContent,
} from "semantic-ui-react";
import { UserSettingForm } from "./userSettingsForm";
import { useGetUserAttributes } from "../../../shared/hooks/useGetUserAttributes";

export const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const { user, handleFetchUserAttributes } = useGetUserAttributes();

  return (
    <Tab.Pane>
      <Header color="blue" as="h3">
        User Settings
        <HeaderSubheader>View and update user information</HeaderSubheader>
      </Header>
      <Header size="medium" color="blue">
        <Icon name="user" size="tiny" />
        <HeaderContent>
          Name
          <HeaderSubheader>{user?.name}</HeaderSubheader>
        </HeaderContent>
      </Header>

      <Header size="medium" color="blue">
        <Icon name="mail" size="tiny" />
        <HeaderContent>
          Email
          <HeaderSubheader>{user?.email}</HeaderSubheader>
        </HeaderContent>
      </Header>

      <Header size="medium" color="blue">
        <Icon name="check circle" size="tiny" />
        <HeaderContent>
          Email Verification
          {user?.email_verified === "true" ? (
            <HeaderSubheader>Verified</HeaderSubheader>
          ) : (
            <HeaderSubheader>Verification not complete</HeaderSubheader>
          )}
        </HeaderContent>
      </Header>

      <UserSettingForm
        open={open}
        setOpen={setOpen}
        name={name}
        setName={setName}
        handleFetchUserAttributes={handleFetchUserAttributes}
      ></UserSettingForm>
    </Tab.Pane>
  );
};
