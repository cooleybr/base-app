import {Component} from '@angular/core';
import { Record } from '../models/record';
import {DynamicDialogRef, DynamicDialogConfig} from 'primeng/api';

@Component({
    template: `
        <p-table [value]="records" [paginator]="true" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="Classification">Classification <p-sortIcon field="Classification"></p-sortIcon></th>
                    <th pSortableColumn="Title">Title <p-sortIcon field="Title"></p-sortIcon></th>
                    <th pSortableColumn="Description">Description <p-sortIcon field="Description"></p-sortIcon></th>
                    <th pSortableColumn="Reporter">Reporter<p-sortIcon field="Reporter"></p-sortIcon></th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-record>
                <tr>
                    <td><span class="ui-column-title">Classification</span>{{record.Classification}}</td>
                    <td><span class="ui-column-title">Title</span>{{record.Title}}</td>
                    <td><span class="ui-column-title">Description</span>{{record.Description}}</td>
                    <td><span class="ui-column-title">Reporter</span>{{record.Reporter}}</td>
                    <td>
                        <button pButton icon="pi pi-search" (click)="selectRecord(record)"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class DataTableComponent {

    records: Record[];
            
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.records = [
        {"Classification": "Secret", "Title": "T1", "Description": "Desc 1", "Reporter": "Agent 1"},
	{"Classification": "Secret", "Title": "T2", "Description": "Desc 2", "Reporter": "Agent 2"},
	{"Classification": "Secret", "Title": "T3", "Description": "Desc 3", "Reporter": "Agent 3"},
	{"Classification": "Secret", "Title": "T4", "Description": "Desc 1", "Reporter": "Agent 2"},
];
console.log(this.records);
    }

    selectRecord(record: Record) {
	console.log(record);
        this.ref.close(record);
    }

}
