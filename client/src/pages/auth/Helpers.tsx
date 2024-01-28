import { signOut, updateUserAttributes } from "aws-amplify/auth";
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

export async function handleUpdateNameAttributes(
  updatedName: string,
  callback: () => {}
) {
  try {
    await updateUserAttributes({
      userAttributes: {
        name: updatedName,
      },
    });
    callback();
  } catch (error) {
    console.log(error);
  }
}
