import {InterviewModel} from "./models/InterviewModel";
import {ApiConfig} from "../config/ApiConfig";
import axios from 'axios';

export class InterviewStore {
    public async getInterviews(): Promise<Array<InterviewModel>> {
        const response = await axios.get(`${ApiConfig.API_BASE_URL}/interview`);
        return response.data;
    }
}