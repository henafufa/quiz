import { Component, OnInit } from '@angular/core';
import { QUESTION_DATA, QUESTION } from '../../utils/data';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  count: number = 0;
  answered: boolean | undefined;
  done: boolean = false;
  questionNum = 1;
  correctAnswers = 0;
  counter: any | undefined;
  totalTime: number | undefined;
  timer: number | undefined
  question_data: QUESTION[] = QUESTION_DATA;
  question_data_1: QUESTION = QUESTION_DATA[this.count];
  constructor() { }

  ngOnInit(): void {
    this.timeCounter(5);

  }

  timeCounter = (time: any) => {
    this.totalTime = time;
    this.counter = setInterval(() => {
      this.timer = time;
      time--;
      if (this.timer == 0) {
        this.nextQuestion();
      }
    }, 1000)
  }

  nextQuestion = () => {
    clearInterval(this.counter);
    this.timeCounter(5);
    QUESTION_DATA[this.count]
    if (this.count < this.question_data.length - 1) {
      this.count++;
      this.question_data_1 = QUESTION_DATA[this.count];
      this.questionNum++;
    }
    else {
      clearInterval(this.counter);
      this.done= true;
      let game: any = document.getElementById('gameContainer');
      game.classList.add("disableContainer");
      console.log("Question completed");
    }
  }

  answerSelected = (answer: any) => {
    let element: any = document.getElementById('choicesId');
    let wrong: any = document.getElementsByClassName('icon');
    let userAnswer = answer;
    let correctAnswer = QUESTION_DATA[this.count].answer;
    console.log(`user input: ${userAnswer} correct answer: ${correctAnswer}`);
    if (userAnswer.trim() === correctAnswer.trim()) {
      this.answered = true!
      element.classList.add("correct");
      // wrong.classList.add("tick");
      this.correctAnswers++;
      console.log("Answer is correct:");
    }
    else {
      this.answered = false!
      element.classList.add("incorrect");
      // wrong.classList.add("cross");
      console.log("Answer is not correct:");

    }

  }
}
