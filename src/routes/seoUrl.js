import appwrite from "../services/appwriteConfig.js";

export default async function fetchData() {
      try {
        const response = await appwrite.databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_SEO_COLLECTION_ID
        );
        return response.documents;
      } catch (error) {
        console.error("Error fetching documents:", error);
        return [];
      }
}