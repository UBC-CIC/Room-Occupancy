import { signOut } from "aws-amplify/auth";

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.error("error signing out: ", error);
  }
}
