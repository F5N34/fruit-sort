export interface Prediction {
    prediction: string,
    scores: Score[]
}

interface Score {
    prediction: string,
    probabilite: number
}
