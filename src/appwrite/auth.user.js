import { Account, Client, ID } from "appwrite";
import conf from "../conf/config";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    // create account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // login page
                return this.loginUser({ email, password });
            }
            else {
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite :: createAccount :: error", error);
        }
    }

    // login account
    async loginUser({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log("Appwrite :: loginUser :: error", error);
        }
    }

    // check user login
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    // logout user
    async logout() {
        try {
            return this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite :: logout :: error", error);
        }
    }

}

const authService = new AuthService();

export default authService;