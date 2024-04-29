import { Account, Client, ID } from "appwrite";
import conf from "../conf/config";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new  Account(this.client);
    }

    // create account
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // login page
                return this.loginUser({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    // login account
    async loginUser({email, password}){
        try {
            await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // check user login
    async getCurrentUser(){
        try {
            // if get account
            return await this.account.get();
        } catch (error) {
            // didn't reach service
            throw error;
        }
        // if not get account 
        return null;
    }

    // logout user
    async logOut() {
        try {
            return this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }

}

const authService = new AuthService();

export default authService;