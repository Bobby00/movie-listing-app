import { Client, Databases, ID, Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

const client = new Client().setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID);

const database = new Databases(client);

export const updateSearchCount = async (searchTerm: any, movie: any) => {
    try {
        const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
        Query.equal("searchTerm", searchTerm)
        ]);
        
        if (result.documents.length > 0) {
            const doc = result.documents[0];
            await database.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
                count: doc.count + 1
            });
        } else {
            await database.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
                searchTerm: searchTerm,
                movie_id: movie.id,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                count: 1
            });
        }
    } catch (error) {
        console.log(error)
    }
}


export const getTrendingMovies = async () => {
    try {
        const result = await database.listDocuments(DATABASE_ID, TABLE_ID, [
            Query.orderDesc("count"),
            Query.limit(8)
        ]);
        return result.documents;
    } catch (error) {
        console.log(error)
    }
}