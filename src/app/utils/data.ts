export interface QUESTION {
    number: number;
    question: string;
    answer: string;
    options: string[];
}

export const QUESTION_DATA: QUESTION[] = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Preprocessor",
        options: [
            " Hyper Text Markup Language",
            " Hyper Text Preprocessor",
            " Hyper Text Multiple Language",
            " Hyper Tool Multi Language"
        ]
    },
    {
        number: 2,
        question: "What does ML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            " Hyper Text Preprocessor",
            " Hyper Text Markup Language",
            " Hyper Text Multiple Language",
            " Hyper Tool Multi Language"
        ]
    },
    {
        number: 3,
        question: "What does XML stand for?",
        answer: " Hyper Text Multiple Language",
        options: [
            " Hyper Text Preprocessor",
            " Hyper Tool Multi Language",
            " Hyper Text Markup Language",
            " Hyper Text Multiple Language"
        ]
    },
    {
        number: 4,
        question: "What does HTTP stand for?",
        answer: "Hyper Tool Multi Language",
        options: [
            " Hyper Text Multiple Language",
            " Hyper Text Preprocessor",
            " Hyper Text Markup Language",
            " Hyper Tool Multi Language"
        ]
    },
    {
        number: 5,
        question: "What does FTP stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            " Hyper Text Preprocessor",
            " Hyper Text Markup Language",
            " Hyper Text Multiple Language",
            " Hyper Tool Multi Language"
        ]
    }
];
