import {
  FetchUserAttributesOutput,
  fetchUserAttributes,
} from "aws-amplify/auth";
import { useState, useEffect } from "react";

interface UserAttributes {
  sub?: string | undefined;
  email_verified?: string | undefined;
  name?: string | undefined;
  preferred_username?: string;
  email?: string | undefined;
}

export const useGetUserAttributes = (): {
  user: UserAttributes | null;
  setUser: React.Dispatch<React.SetStateAction<UserAttributes | null>>;
  handleFetchUserAttributes: () => Promise<
    FetchUserAttributesOutput | undefined
  >;
} => {
  const [user, setUser] = useState<UserAttributes | null>(null);

  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  // https://docs.amplify.aws/gen2/build-a-backend/auth/manage-user-profile/#retrieve-user-attributes
  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      setUser(userAttributes);
      return userAttributes;
    } catch (error) {
      console.log(error);
    }
  }

  return { user, setUser, handleFetchUserAttributes };
};
