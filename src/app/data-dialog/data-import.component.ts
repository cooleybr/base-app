import {Component} from '@angular/core';
import { Datasource } from '../models/datasource';
import {DynamicDialogRef, DynamicDialogConfig} from 'primeng/api';

@Component({
    templateUrl: 'data-import.component.html'
})
export class DataImportComponent {

    datasources: Datasource[];
    sourceUrl = 'placeholder';        
    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.datasources = [
        {"Classification": "Secret", "Title": "T1", "Description": "Desc 1", "Source": "WE"},
        {"Classification": "Secret", "Title": "T2", "Description": "Desc 2", "Source": "MIDB"},
        {"Classification": "Secret", "Title": "T3", "Description": "Desc 3", "Source": "Some URL"},
        {"Classification": "Secret", "Title": "T4", "Description": "Desc 1", "Source": "Manual"},
	];
	console.log(this.datasources);
    }

    selectDatasource(datasource: Datasource) {
	console.log(datasource);
    }

    fetchContent(url:string){
    console.log('url: '+url);
    this.sourceUrl = url;
    }
}
