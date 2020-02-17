import { Component } from '@angular/core';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

interface Question {
  questionId: number;
  questionNumber: string;
  question: string;
}

const QUESTIONS: Question[] = [
  {
    questionId: 1,
    questionNumber: 'Q1',
    question: 'poth'
  },
  {
    questionId: 2,
    questionNumber: 'Q2',
    question: 'shan'
  },
  {
    questionId: 3,
    questionNumber: 'Q3',
    question: 'veen'
  },
  {
    questionId: 4,
    questionNumber: 'Q4',
    question: 'quorg'
  },
  {
    questionId: 5,
    questionNumber: 'Q5',
    question: 'poth'
  },
  {
    questionId: 6,
    questionNumber: 'Q6',
    question: 'shan'
  },
  {
    questionId: 7,
    questionNumber: 'Q7',
    question: 'veen'
  },
  {
    questionId: 8,
    questionNumber: 'Q8',
    question: 'quorg'
  }
];

interface Student {
  studentId: number;
  name: string;
  studentClass: string;
  studentYear: string;
  assessmentStatus: string;
  statusDate: string;
  result: string;
  resultCode: string;
}

const STUDENTS: Student[] = [
  {
    studentId: 52674,
      name: 'Adams, Jane',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'lodged',
    statusDate: '21/06/2020',
    result: '24',
    resultCode: 'critical'
  },
  {
    studentId: 52634,
      name: 'Barry, Rachel',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'assessed',
    statusDate: '21/06/2020',
    result: '24',
    resultCode: 'mild'
  },
  {
    studentId: 52679,
      name: 'Chen Oliver',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'assessed',
    statusDate: '21/06/2020',
    result: '24',
    resultCode: 'ok'
  },
  {
    studentId: 52676,
      name: 'Carr, Michael',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'lodged',
    statusDate: '21/06/2020',
    result: '24',
    resultCode: 'ok'
  },
  {
    studentId: 52624,
      name: 'Dilmah, Dimesh',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'paused',
    statusDate: '21/06/2020',
    result: '24',
    resultCode: 'na'
  },
  {
    studentId: 52671,
      name: 'Ellis, Rose',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'na',
    statusDate: '',
    result: '24',
    resultCode: ''
  }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phonic';
  countries = COUNTRIES;
  students = STUDENTS;
  questions = QUESTIONS;
  s = false;

  opened = false;
  bottomMenuOpened = false;

  menuMode = 'over';
  menuPosition = 'right';
  menuBottomPosition = 'bottom';
  menuShowBackdrop = true;
  menuCloseOnClickOutside = true;
  menuCloseOnClickBackdrop = true;
  menuAnimate = true;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  toggleBottomSidebar() {
    this.bottomMenuOpened = !this.bottomMenuOpened;
  }

}
