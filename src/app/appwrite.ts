import { Client, Account, Databases, OAuthProvider } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e0196f0027ded33a38"); // Replace with your project ID

export const account = new Account(client);
const databases = new Databases(client);

export const result = await databases.listDocuments(
  "67e05391003e3e1239e6",
  "67e053ad00215ec7c6ae"
);

// console.log(result);

export { OAuthProvider };
