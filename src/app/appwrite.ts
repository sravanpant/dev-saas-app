import { JobApplication } from "@/types/types";
import { Client, Account, Databases, OAuthProvider, Models } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67e0196f0027ded33a38"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);

export const fetchDocuments = async (): Promise<{
  documents: JobApplication[];
}> => {
  try {
    const result = await databases.listDocuments(
      "67e05391003e3e1239e6",
      "67e053ad00215ec7c6ae"
    );
    const documents: JobApplication[] = result.documents.map(
      (doc: Models.Document) => ({
        $id: doc.$id,
        job_id: doc.job_id,
        job_role: doc.job_role,
        company: doc.company,
        location: doc.location,
        status: doc.status,
        Salary_lpa_inr: doc.Salary_lpa_inr,
        $createdAt: doc.$createdAt
      })
    );

    return { documents };
  } catch (error) {
    console.error("Error fetching documents:", error);
    return { documents: [] };
  }
};

export { OAuthProvider };
