import { fetchUserAttributes } from "aws-amplify/auth";
import { useState, useEffect } from "react";

// interface UserAttributes {
//   sub?: string | undefined;
//   email_verified: string;
//   name: string;
//   preferred_username: string;
//   email: string;
// }
// user: UserAttributes | null;
// setUser: React.Dispatch<React.SetStateAction<UserAttributes | null>>;

export const useGetUserAttributes = (): any => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  // https://docs.amplify.aws/gen2/build-a-backend/auth/manage-user-profile/#retrieve-user-attributes
  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      setUser(userAttributes);
      console.log(user);
      return userAttributes;
    } catch (error) {
      console.log(error);
    }
  }

  return { user, setUser };
};
