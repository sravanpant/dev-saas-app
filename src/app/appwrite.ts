import { Client, Account, OAuthProvider } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e0196f0027ded33a38"); // Replace with your project ID

export const account = new Account(client);
export { OAuthProvider };
