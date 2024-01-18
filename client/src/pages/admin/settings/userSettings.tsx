import React, { useState, useEffect } from "react";
import {
  Tab,
  Header,
  HeaderSubheader,
  Icon,
  HeaderContent,
} from "semantic-ui-react";
import { handleFetchUserAttributes } from "../../auth/Helpers";
import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { UserSettingForm } from "./userSettingsForm";

export const UserSettings = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [user, setUser] = useState<FetchUserAttributesOutput | undefined>(
    undefined
  );
  useEffect(() => {
    handleFetchUserAttributes()
      .then((result) => {
        setUser(result);
      })
      .catch((error) => {
        console.error("Error fetching user attributes:", error);
      });
  }, [user]);

  return (
    <Tab.Pane>
      <Header>General</Header>
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
      ></UserSettingForm>
    </Tab.Pane>
  );
};
