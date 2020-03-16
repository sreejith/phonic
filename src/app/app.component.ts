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
    result: '30',
    resultCode: 'mild'
  },
  {
    studentId: 52679,
      name: 'Chen Oliver',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'assessed',
    statusDate: '21/06/2020',
    result: '35',
    resultCode: 'ok'
  },
  {
    studentId: 52676,
      name: 'Carr, Michael',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'lodged',
    statusDate: '21/06/2020',
    result: '11',
    resultCode: 'ok'
  },
  {
    studentId: 52624,
      name: 'Dilmah, Dimesh',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'paused',
    statusDate: '21/06/2020',
    result: '15',
    resultCode: 'na'
  },
  {
    studentId: 52671,
      name: 'Ellis, Rose',
    studentClass: 'KA',
    studentYear: 'Year 1',
    assessmentStatus: 'na',
    statusDate: '',
    result: 'na',
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
  filterMenuOpened = false;

  questionListStart = 0;
  questionListEnd = 4;

  menuMode = 'over';

  menuPosition = 'right';
  menuBottomPosition = 'bottom';
  menuFilterPosition = 'right';

  menuShowBackdrop = true;
  menuCloseOnClickOutside = true;
  menuCloseOnClickBackdrop = true;
  menuAnimate = true;

  resultFilter: any[] = ['all', 'all'];
  filteredBy = '';
  showFilteredByText = false;

  toggleSidebar() {
    this.opened = !this.opened;
  }

  toggleBottomSidebar() {
    this.bottomMenuOpened = !this.bottomMenuOpened;
  }

  toggleFilterSidebar() {
    this.filterMenuOpened = !this.filterMenuOpened;
  }

  filterResults(event, from, to) {
    // event.preventDefault();
    let parent = event.target.parentNode;
    if (event.target.classList.contains('badge')) {
      parent = parent.parentNode;
    }
    if (event.target.classList.contains('badge-text')) {
      parent = parent.parentNode;
    }

    // for(let i = 0; i < parent.children.length; i++) {
    //   parent.children[i].classList.remove('activeFilter');
    // }

    for (const child of parent.children) { // Typescript Example of::  for..of Loop
      child.classList.remove('activeFilter');
    }

    if (event.target.classList.contains('badge')) {
      event.target.parentNode.classList.add('activeFilter');
    } else if (event.target.classList.contains('badge-text')) {
      event.target.parentNode.classList.add('activeFilter');
    } else {
      if (!event.target.classList.contains('dropdown-item')) {
        event.target.classList.add('activeFilter');
      }
    }

    switch (from) {
      case 'na':
        this.resultFilter = ['na', 'na'];
        this.filteredBy = 'Not assessed';
        this.showFilteredByText = true;
        break;
      case 40:
        this.resultFilter = [40, 28];
        this.filteredBy = 'On track';
        this.showFilteredByText = true;
        break;
      case 27:
        this.resultFilter = [27, 20];
        this.filteredBy = 'Carefully monitor';
        this.showFilteredByText = true;
        break;
      case 19:
        this.resultFilter = [19, 0];
        this.filteredBy = 'Support required';
        this.showFilteredByText = true;
        break;
      case 'assessed':
        this.resultFilter = ['assessed', 'assessed'];
        this.filteredBy = 'Continue assessment';
        this.showFilteredByText = true;
        break;
      case 'paused':
        this.resultFilter = ['paused', 'paused'];
        this.filteredBy = 'Continue assessment';
        this.showFilteredByText = true;
        break;
      case 'lodged':
        this.resultFilter = ['lodged', 'lodged'];
        this.filteredBy = 'Lodged assessment';
        this.showFilteredByText = true;
        break;
      default:
        this.resultFilter = ['all', 'all'];
        this.showFilteredByText = false;
        // this.filteredBy = 'All students';
        // this.showFilteredByText = true;
        break;
    }

  }

}
