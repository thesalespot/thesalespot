

export const conf = {
    appwriteUrl: String(process.env.APPWRITE_URL),
    appwriteProjectId: String(process.env.PROJECT_ID),
    appwriteDatabaseId: String(process.env.DATABASE_ID),
    appwriteCollectionId: String(process.env.COLLECTION_ID),
};
import { Client, Account, Databases, ID } from "appwrite";

// Initialize the Appwrite client
export const client = new Client();
client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67878c7200086469f4bf");

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export { ID };

export const addDocument = async (databaseId: string, collectionId: string, data: object, documentId = ID.unique()) => {
    console.log("Appwrite URL:", process.env.APPWRITE_UR);
    console.log("Appwrite Project ID:", conf.appwriteProjectId);
    console.log("Appwrite Database ID:", conf.appwriteDatabaseId);
    console.log("Appwrite Collection ID:", conf.appwriteCollectionId);


    try {
        const response = await databases.createDocument(databaseId, collectionId, documentId, data);
        console.log("Document added successfully:", response);
        return response;
    } catch (error) {
        console.error("Error adding document:", error);
        throw error; // Re-throw error for the caller to handle
    }
};
