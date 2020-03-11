import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterResults'
})
export class FilterResultsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let filteredArry: any[] = [];
    // console.log(args[0][0]);
    switch (args[0][0]) {
      case 'na':
          for (const student of value) { // Typescript Example of::  for..of Loop
            if (student.result === 'na') {
              filteredArry.push(student);
            }
          }
          break;
      case 40:
          for (const student of value) { // Typescript Example of::  for..of Loop
            if (student.result <= 40 && student.result >= 28) {
              filteredArry.push(student);
            }
          }
          break;
      case 27:
          for (const student of value) { // Typescript Example of::  for..of Loop
            if (student.result <= 27 && student.result >= 20) {
              filteredArry.push(student);
            }
          }
          break;
      case 19:
          for (const student of value) { // Typescript Example of::  for..of Loop
            if (student.result <= 19 && student.result >= 0) {
              filteredArry.push(student);
            }
          }
          break;
      case 'assessed':
        for (const student of value) { // Typescript Example of::  for..of Loop
          if (student.assessmentStatus === 'assessed' || student.assessmentStatus === 'paused') {
            filteredArry.push(student);
          }
        }
        break;
      case 'paused':
        for (const student of value) { // Typescript Example of::  for..of Loop
          if (student.assessmentStatus === 'paused' || student.assessmentStatus === 'assessed') {
            filteredArry.push(student);
          }
        }
        break;
      case 'lodged':
        for (const student of value) { // Typescript Example of::  for..of Loop
          if (student.assessmentStatus === 'lodged') {
            filteredArry.push(student);
          }
        }
        break;
      default:
          filteredArry = value;
          break;
    }
    return filteredArry;
  }

}
