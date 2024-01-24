import React from "react";
import { View, Image, useTheme, Heading } from "@aws-amplify/ui-react";
import { useAppConfig } from "../../providers/ConfigProvider";

const components = {
  Header() {
    const { config } = useAppConfig();
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image alt="Logo" src={config.image} />
      </View>
    );
  },
  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Sign in to your account
        </Heading>
      );
    },
  },
};

export default components;
