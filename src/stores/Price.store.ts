import {ApiConfig} from "../config/ApiConfig";
import {PriceModel} from "./models/PriceModel";
import axios from "axios";

export class PriceStore {
    public async getPrices(): Promise<PriceModel[]> {
        const response = await axios.get(`${ApiConfig.API_BASE_URL}/price`);
        return response.data;
    }
}