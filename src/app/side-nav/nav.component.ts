import {Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { DialogService } from 'primeng/api';
import  { DataTableComponent } from '../data-dialog/data-table.component';
import { DataImportComponent } from '../data-dialog/data-import.component';

/** @title Basic drawer */
@Component({
  selector: 'nav-component',
  templateUrl: 'nav.component.html',
  styleUrls: ['nav.component.css'],
  providers: [DialogService]
})
export class NavComponent implements OnInit{

items: MenuItem[];

    constructor(public dialogService: DialogService) {}

    ngOnInit() {
        this.items = [
	    {
		label: 'Select an Action'
	    },
	    {
		label: 'Data',
		icon: 'pi pi-pw pi-file',
		items: [{
                         label: 'View Current Data',
			 icon: 'pi pi-fw pi-external-link',
                         command: (event) => {
                         this.show();
	                }
                        },
	                {
			label: 'Import Data Sources',
			icon: 'pi pi-fw pi-user-plus',
			command: (event) => {
		        this.import();
			}
	              }]
	    },
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'User', icon: 'pi pi-fw pi-user-plus'},
                            {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                        ]
                    },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search', 
                        icon: 'pi pi-pi pi-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                    ]}
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];
    }


	show(){
	const ref = this.dialogService.open(DataTableComponent, {
        header: 'Choose record to view',
        width: '70%'
        });
	}

	import(){
	const ref = this.dialogService.open(DataImportComponent, {
	header: 'Choose an existing dataset or import datasource',
	width: '70%'
	});
	}
}
