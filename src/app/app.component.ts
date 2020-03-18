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

// interface Question {
//   questionId: number;
//   questionNumber: string;
//   question: string;
// }

// const QUESTIONS: Question[] = [
//   {
//     questionId: 1,
//     questionNumber: 'Q1',
//     question: 'poth'
//   },
//   {
//     questionId: 2,
//     questionNumber: 'Q2',
//     question: 'shan'
//   },
//   {
//     questionId: 3,
//     questionNumber: 'Q3',
//     question: 'veen'
//   },
//   {
//     questionId: 4,
//     questionNumber: 'Q4',
//     question: 'quorg'
//   },
//   {
//     questionId: 5,
//     questionNumber: 'Q5',
//     question: 'poth'
//   },
//   {
//     questionId: 6,
//     questionNumber: 'Q6',
//     question: 'shan'
//   },
//   {
//     questionId: 7,
//     questionNumber: 'Q7',
//     question: 'veen'
//   },
//   {
//     questionId: 8,
//     questionNumber: 'Q8',
//     question: 'quorg'
//   }
// ];

interface ResponseText {
  seqNo: number;
  summary: string;
}

interface AssessmentItems {
  id: number;
  aspectId: number;
  seqNo: number;
  name: string;
  summary: string;
  responses: ResponseText[];
}

const QUESTIONS: AssessmentItems[] = [
  {
    id: 0,
    aspectId: 100,
    seqNo: 0,
    name: 'Q0',
    summary: 'tantrum',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 1,
    aspectId: 100,
    seqNo: 1,
    name: 'Q1',
    summary: 'quorg',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 2,
    aspectId: 100,
    seqNo: 2,
    name: 'Q2',
    summary: 'fuel',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 3,
    aspectId: 100,
    seqNo: 3,
    name: 'Q3',
    summary: 'bluns',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 4,
    aspectId: 100,
    seqNo: 4,
    name: 'Q4',
    summary: 'quorg',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 5,
    aspectId: 100,
    seqNo: 5,
    name: 'Q5',
    summary: 'spoilt',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 6,
    aspectId: 100,
    seqNo: 6,
    name: 'Q6',
    summary: 'strabe',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 7,
    aspectId: 100,
    seqNo: 7,
    name: 'Q7',
    summary: 'peck',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 8,
    aspectId: 100,
    seqNo: 8,
    name: 'Q8',
    summary: 'toy',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 9,
    aspectId: 100,
    seqNo: 9,
    name: 'Q9',
    summary: 'toy',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 10,
    aspectId: 100,
    seqNo: 10,
    name: 'Q10',
    summary: 'panic',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 11,
    aspectId: 100,
    seqNo: 11,
    name: 'Q11',
    summary: 'props',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 12,
    aspectId: 100,
    seqNo: 12,
    name: 'Q12',
    summary: name,
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 13,
    aspectId: 100,
    seqNo: 13,
    name: 'Q13',
    summary: 'toy',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 14,
    aspectId: 100,
    seqNo: 14,
    name: 'Q14',
    summary: 'flarm',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 15,
    aspectId: 100,
    seqNo: 15,
    name: 'Q15',
    summary: 'jorb',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 16,
    aspectId: 100,
    seqNo: 16,
    name: 'Q16',
    summary: 'veen',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 17,
    aspectId: 100,
    seqNo: 17,
    name: 'Q17',
    summary: 'zale',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 18,
    aspectId: 100,
    seqNo: 18,
    name: 'Q18',
    summary: 'herks',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 19,
    aspectId: 100,
    seqNo: 19,
    name: 'Q19',
    summary: 'thin',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 20,
    aspectId: 100,
    seqNo: 20,
    name: 'Q20',
    summary: 'shan',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 21,
    aspectId: 100,
    seqNo: 21,
    name: 'Q21',
    summary: 'peck',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 22,
    aspectId: 100,
    seqNo: 22,
    name: 'Q22',
    summary: 'veen',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 23,
    aspectId: 100,
    seqNo: 23,
    name: 'Q23',
    summary: 'zale',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 24,
    aspectId: 100,
    seqNo: 24,
    name: 'Q24',
    summary: 'lect',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 25,
    aspectId: 100,
    seqNo: 25,
    name: 'Q25',
    summary: 'tantrum',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 26,
    aspectId: 100,
    seqNo: 26,
    name: 'Q26',
    summary: 'trap',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 27,
    aspectId: 100,
    seqNo: 27,
    name: 'Q27',
    summary: 'splot',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 28,
    aspectId: 100,
    seqNo: 28,
    name: 'Q28',
    summary: 'quigh',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 29,
    aspectId: 100,
    seqNo: 29,
    name: 'Q29',
    summary: 'snarl',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 30,
    aspectId: 100,
    seqNo: 30,
    name: 'Q30',
    summary: 'lect',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 31,
    aspectId: 100,
    seqNo: 31,
    name: 'Q31',
    summary: 'moist',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 32,
    aspectId: 100,
    seqNo: 32,
    name: 'Q32',
    summary: 'peck',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 33,
    aspectId: 100,
    seqNo: 33,
    name: 'Q33',
    summary: 'poth',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 34,
    aspectId: 100,
    seqNo: 34,
    name: 'Q34',
    summary: name,
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 35,
    aspectId: 100,
    seqNo: 35,
    name: 'Q35',
    summary: 'herks',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 36,
    aspectId: 100,
    seqNo: 36,
    name: 'Q36',
    summary: 'fuel',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 37,
    aspectId: 100,
    seqNo: 37,
    name: 'Q37',
    summary: 'lect',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 38,
    aspectId: 100,
    seqNo: 38,
    name: 'Q38',
    summary: 'strabe',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
  },
  {
    id: 39,
    aspectId: 100,
    seqNo: 39,
    name: 'Q39',
    summary: 'quorg',
    responses: [
      {
        seqNo: 0,
        summary: 'Correct'
      },
      {
        seqNo: 1,
        summary: 'Incorrect'
      }
    ]
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

  nextQuestionSet() {
    if (this.questionListEnd >= 40) {
      return false;
    }
    this.questionListStart = this.questionListStart + 4;
    this.questionListEnd = this.questionListEnd + 4;
  }
  previousQuestionSet() {
    if (this.questionListEnd < 0 || this.questionListEnd === 4 ) {
      return false;
    } else {
      this.questionListStart = this.questionListStart - 4;
      this.questionListEnd = this.questionListEnd - 4;
    }
  }

}
