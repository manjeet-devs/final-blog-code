import { Client, Databases, Account } from "appwrite";
const dotenv = import.meta.env;

const client = new Client();
client.setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT).setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

const databases = new Databases(client);
const account = new Account(client);

export default { client, databases,account, dotenv };


