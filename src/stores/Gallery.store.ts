import {ApiConfig} from "../config/ApiConfig";
import axios from 'axios';

export class GalleryModel {
    id: number;
    name: string;
    description: string;
    thumbImagePath: string;
}

export class GalleryImageModel {
    id: number;
    description: string;
    imagePath: string;
}

export class GalleryStore {
    public async getGalleries(): Promise<GalleryModel[]> {
        return (await axios.get(`${ApiConfig.API_BASE_URL}/gallery`)).data;
    }

    public async getImages(galId: number): Promise<GalleryImageModel[]> {
        return (await axios.get(`${ApiConfig.API_BASE_URL}/gallery/images?id=1`)).data;

    }

}