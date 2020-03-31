import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import * as _ from 'lodash';
import { trigger, state, style, group, animate, transition } from '@angular/animations';

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
  [key: string]: any;
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

interface ResponseAssessmentItems {
  assessmentItemId: number;
  assessmentComment: string;
  value: boolean;
}

interface Aspect {
  assessmentItems: ResponseAssessmentItems[];
}

interface StudentResponse {
  id: number;
  studentId: number;
  aspects: Aspect[];
}

const RESPONSES: StudentResponse = {
	id: 4,
	studentId: 235235,
	aspects: [
		{
			assessmentItems: [
				{
				  assessmentItemId: 0,
				  assessmentComment: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
				  value: null
				}, {
				  assessmentItemId: 1,
				  assessmentComment: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				  value: null
				}, {
				  assessmentItemId: 2,
				  assessmentComment: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				  value: null
				}, {
				  assessmentItemId: 3,
				  assessmentComment: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
				  value: null
				}, {
				  assessmentItemId: 4,
				  assessmentComment: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
				  value: null
				}, {
				  assessmentItemId: 5,
				  assessmentComment: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
				  value: null
				}, {
				  assessmentItemId: 6,
				  assessmentComment: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
				  value: null
				}, {
				  assessmentItemId: 7,
				  assessmentComment: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				  value: null
				}, {
				  assessmentItemId: 8,
				  assessmentComment: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
				  value: null
				}, {
				  assessmentItemId: 9,
				  assessmentComment: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				  value: null
				}, {
				  assessmentItemId: 10,
				  assessmentComment: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				  value: null
				}, {
				  assessmentItemId: 11,
				  assessmentComment: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
				  value: null
				}, {
				  assessmentItemId: 12,
				  assessmentComment: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				  value: null
				}, {
				  assessmentItemId: 13,
				  assessmentComment: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
				  value: null
				}, {
				  assessmentItemId: 14,
				  assessmentComment: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
				  value: null
				}, {
				  assessmentItemId: 15,
				  assessmentComment: 'In congue. Etiam justo. Etiam pretium iaculis justo.',
				  value: null
				}, {
				  assessmentItemId: 16,
				  assessmentComment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.',
				  value: null
				}, {
				  assessmentItemId: 17,
				  assessmentComment: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
				  value: null
				}, {
				  assessmentItemId: 18,
				  assessmentComment: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				  value: null
				}, {
				  assessmentItemId: 19,
				  assessmentComment: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
				  value: null
				}, {
				  assessmentItemId: 20,
				  assessmentComment: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
				  value: null
				}, {
				  assessmentItemId: 21,
				  assessmentComment: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
				  value: null
				}, {
				  assessmentItemId: 22,
				  assessmentComment: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				  value: null
				}, {
				  assessmentItemId: 23,
				  assessmentComment: 'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
				  value: null
				}, {
				  assessmentItemId: 24,
				  assessmentComment: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
				  value: null
				}, {
				  assessmentItemId: 25,
				  assessmentComment: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
				  value: null
				}, {
				  assessmentItemId: 26,
				  assessmentComment: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
				  value: null
				}, {
				  assessmentItemId: 27,
				  assessmentComment: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
				  value: null
				}, {
				  assessmentItemId: 28,
				  assessmentComment: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
				  value: null
				}, {
				  assessmentItemId: 29,
				  assessmentComment: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
				  value: null
				}, {
				  assessmentItemId: 30,
				  assessmentComment: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
				  value: null
				}, {
				  assessmentItemId: 31,
				  assessmentComment: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
				  value: null
				}, {
				  assessmentItemId: 32,
				  assessmentComment: 'Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.',
				  value: null
				}, {
				  assessmentItemId: 33,
				  assessmentComment: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
				  value: null
				}, {
				  assessmentItemId: 34,
				  assessmentComment: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
				  value: null
				}, {
				  assessmentItemId: 35,
				  assessmentComment: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
				  value: null
				}, {
				  assessmentItemId: 36,
				  assessmentComment: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
				  value: null
				}, {
				  assessmentItemId: 37,
				  assessmentComment: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
				  value: null
				}, {
				  assessmentItemId: 38,
				  assessmentComment: 'Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
				  value: null
				}, {
				  assessmentItemId: 39,
				  assessmentComment: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
				  value: null
				}
			]
		}
	]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('itemState', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-100%)'}),
  //       animate(350)
  //     ]),
  //     transition(':leave', [
  //       group([
  //         animate('0.2s ease', style({
  //           transform: 'translate(150px,25px)'
  //         })),
  //         animate('0.5s 0.2s ease', style({
  //           opacity: 0
  //         }))
  //       ])
  //     ])
  //   ])
  // ]
  animations: [
    trigger('itemState', [
        // state('down', style({
        //   opacity: '1', visibility: 'visible'
        // })),
        // state('up', style({
        //   opacity: '1', visibility: 'visible'
        // })),
        /********************* */
        transition('void => down', [
          style({ transform: 'translateY(0)' }),
          animate('1000ms ease-in-out', style({transform: 'translateY(100%)', zIndex: 2, opacity: '0', visibility: 'hidden'}))
        ]),
        transition('down => void', [
          style({transform: 'translateY(0)', opacity: '1', visibility: 'visible'}),
          animate('1000ms ease-in-out', style({transform: 'translateY(100%)', opacity: '1', visibility: 'visible'}))
          // style({ transform: 'translateY(-100%)' }),
          // animate('3000ms ease-in-out', style({ transform: 'translateY(0)' }))
        ]),
        transition('void => up', [
          animate('1000ms ease-in-out', style({transform: 'translateY(-100%)', zIndex: 2, opacity: '0', visibility: 'hidden'}))
        ]),
        transition('up => void', [
          animate('1000ms ease-in-out', style({transform: 'translateY(-100%)', opacity: '1', visibility: 'visible'}))
        ])
        /******************** */
        // transition(':enter', [
        //   style({transform: 'translateY(-100%)'}),
        //   animate('200ms ease-in', style({transform: 'translateY(0%)'}))
        // ]),
        // transition(':leave', [
        //   animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
        // ])
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'phonic';
  countries = COUNTRIES;
  students = STUDENTS;
  // questions = QUESTIONS;
  questions = [];
  s = false;

  opened = false;
  bottomMenuOpened = false;
  filterMenuOpened = false;

  questionListStart = 0;
  questionListEnd = 1;

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

  paginationState = '';

  answerPercentage: number;
  selectedAnswers: any = {};

  questionAttentedCount = 0;

  progressArry = [];
  skippedArray = [];
  skippedCount = 0;
  nextCount = 0;
  isNextBtnVissible = false;

  // changeDetectorRef = ChangeDetectorRef;

  ngOnInit() {
    const newArray = [];
    for (const question of QUESTIONS) { // Typescript Example of::  for..of Loop
      question.assessmentComment = '';
      question.value = null;
      // console.log(question);
    }
    while (QUESTIONS.length > 0) {
      newArray.push(QUESTIONS.splice(0, 4));
    }
    console.log(newArray);
    this.questions = newArray;
  }

  constructor(private cdr: ChangeDetectorRef) {
  }


  toggleSidebar() {
    this.opened = !this.opened;
  }

  toggleBottomSidebar() {
    this.questionListStart = 0;
    this.questionListEnd = 1;

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
    if (this.questionListEnd >= 10) {
      return false;
    }
    // this.questionListStart = this.questionListStart + 1;
    // this.questionListEnd = this.questionListEnd + 1;
    this.paginationState = 'up';
    this.cdr.detectChanges();
    this.questionListStart++;
    this.questionListEnd++;

    setTimeout( () => {
      this.isNextBtnVissible = false;
    }, 50);
  }
  previousQuestionSet() {
    // if (this.questionListEnd < 0 || this.questionListEnd === 0 ) {
    //   return false;
    // } else {
    //   this.questionListStart = this.questionListStart - 1;
    //   this.questionListEnd = this.questionListEnd - 1;
    //   this.paginationState = 'down';
    // }
    // this.questionListStart = this.questionListStart - 1;
    // this.questionListEnd = this.questionListEnd - 1;
    if (this.questionListStart <= 0) {
      return false;
    }
    this.paginationState = 'down';
    this.cdr.detectChanges();
    this.questionListStart--;
    this.questionListEnd--;
  }

  selectAnswer(sequenceNo, coursId, value) {

    if (_.find(this.progressArry, {id: coursId})) {
      // Find item index using _.findIndex
      const index = _.findIndex(this.progressArry, {id: coursId});

      // Replace item at index using native splice
      this.progressArry.splice(index, 1, {seqNo: sequenceNo, id: coursId, respose: value});
    } else {
      this.nextCount ++;
      this.progressArry.push({seqNo: sequenceNo, id: coursId, respose: value});
    }

    if (this.nextCount === 4) {
      this.isNextBtnVissible = true;
      this.nextCount = 0;
    }

    this.progressArry = _.orderBy(this.progressArry, [ 'seqNo' ], [ 'asc' ]);

    this.questionAttentedCount = this.progressArry.length;

    const serialArry = _.toArray(this.progressArry.map(a => a.seqNo));

    const n = Math.max.apply(null, serialArry);  // get the maximum

    console.log('N:: ' + n);

    // for (let i = 1 ; i < n ; i++) {
    //   console.log(serialArry.indexOf(i));
    //   if (serialArry.indexOf(i) < 0) {
    //     this.skippedArray.push(i);
    //   }
    // }
    let next = 0; // The next number in the sequence
    // let missing = [];
    this.skippedArray = [];
    for (let i = 0; i < serialArry.length; i++) {
      // While the expected element is less than
      // the current element
      while (next < serialArry[i]) {
        // Add it to the missing list and
        // increment to the next expected number
        this.skippedArray.push(next);
        next++;
      }
      next++;
    }
    console.log('Res:: ');
    console.log(this.skippedArray);

    this.skippedCount = this.skippedArray.length;

    console.log(this.progressArry);
    this.answerPercentage = (this.questionAttentedCount / 40) * 100;
    console.log(this.answerPercentage);
  }

}
