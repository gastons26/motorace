export class InterviewModel {
    name: string;
    description: string;
    questions: Array<QuestionModel>;
}

export class QuestionModel {
    question: string;
    answer: string;
}