export class Sentiment {
    text: string;
}

export class SentimentResponse {
    classification: string;
    polarity: number;
    subjectivity: number;
}