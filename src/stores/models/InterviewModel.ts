export class InterviewModel {
    id: number;
    fullname: string;
    description: string;
    introduction: string;
    questions: Array<QuestionModel>;
}

export class QuestionModel {
    id: number;
    question: string;
    answer: string;
}