import {
  signOut,
  fetchUserAttributes,
  updateUserAttributes,
  type UpdateUserAttributesOutput,
} from "aws-amplify/auth";
import { Navigate } from "react-router-dom";

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error("error signing out: ", error);
  } finally {
    return <Navigate to="/" />;
  }
}

// https://docs.amplify.aws/gen2/build-a-backend/auth/manage-user-profile/#retrieve-user-attributes
export async function handleFetchUserAttributes() {
  try {
    const userAttributes = await fetchUserAttributes();
    return userAttributes;
  } catch (error) {
    console.log(error);
  }
}

export async function handleUpdateNameAttributes(updatedName: string) {
  try {
    const attributes = await updateUserAttributes({
      userAttributes: {
        name: updatedName,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
