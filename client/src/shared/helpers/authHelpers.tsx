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
