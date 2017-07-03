import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';


import { Vector } from './vector.interface';


@Component({
  moduleId: module.id,
  selector: 'analysis',
  templateUrl: './analysis.html',
  styleUrls: ['./analysis.scss'],
})
export class AnalysisComponent implements OnInit {


  public editing = {};
  public rows: Vector[] = [{name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3, wert4: 'asd', wert5: 'asdasd'}];
  public format = {
    add: 'add Messgröße',
    remove: 'remove Messgröße',
    all: 'All',
    none: 'None',
    direction: 'left-to-right',
  };
  public source: any = [
    {
      '_id': 1,
      '_name': 'ACT [ms]',
    },
    {
      '_id': 2,
      '_name': 'CST [ms]',
    },
    {
      '_id': 3,
      '_name': 'CAWT [ms]',
    },
  ];
  public confirmed = [];
  private finalFormData = [];

  public analysisForm = this.formBuilder.group({
    analysisName: ['', Validators.required],
    dataSource: ['', Validators.required],
    frequency: ['', Validators.required],
    placeholder1: ['', Validators.required],
    placeholder2: ['', Validators.required],
    placeholder3: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }


  ngOnInit(): void {
  }

  saveAnalysis(): void {

    // for (const row of this.rows){
    //   console.log(row);
    //
    // }


    this.finalFormData.push(this.analysisForm.value);
    this.finalFormData.push(this.rows);

    console.log(this.finalFormData);

  }

  // ngOnInit(f) {
  //
  //   // for (let column in this.rows[0]) {
  //   //   this.rows.push(column)
  //   // }
  //

  //
  // }


  public updateValue(event, cell, cellValue, row): void {
    this.editing[`${row.$$index}-${cell}`] = false;
    this.rows[row.$$index][cell] = event.target.value;
  }


  public removeVector(row: any) {

    this.rows.splice(row.$$index, 1);

  }


  public addVector(): void {
    this.rows.push({name: 'klaus', wert1: 3, wert2: 'asdasd', wert3: 3, wert4: 'asd', wert5: 'asd'});

  }


}

