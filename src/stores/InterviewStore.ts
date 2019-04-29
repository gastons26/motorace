import {InterviewModel} from "./models/InterviewModel";

export class InterviewStore {
    public async getInterviews(): Promise<Array<InterviewModel>> {
        let res = await fetch("http://www.mocky.io/v2/5cc612852e00004700594b88");
        console.log(res);
        return await res.json();
    }
}