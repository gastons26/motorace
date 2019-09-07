import {ApiConfig} from "../config/ApiConfig";
import axios from 'axios';
import {ContactModel} from "./models/ContactModel";

export class ContactStore {

    public async postContact(data: ContactModel): Promise<void> {
        await axios.post(`${ApiConfig.API_BASE_URL}/contact/send`, data);
    }

}