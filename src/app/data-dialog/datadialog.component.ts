import { Component } from '@angular/core';
import { DialogService,MessageService } from 'primeng/api';
import { DataTableComponent } from './data-table.component';
import { Record } from '../models/record';
@Component({
  selector: 'data-dialog',
  templateUrl: './datadialog.component.html',
  styleUrls: ['./datadialog.component.css']
})
export class DataDialogComponent {

constructor(public dialogService: DialogService, public messageService: MessageService) {}

    show() {
        const ref = this.dialogService.open(DataTableComponent, {
            header: 'Records',
            width: '70%',
            contentStyle: {"max-height": "350px", "overflow": "auto"}
        });

        ref.onClose.subscribe((record: Record) =>{
            if (record) {
                this.messageService.add({severity:'info', summary: 'Record Selected', detail:'Reporter:' + record.Reporter});
            }
        });
    }


}
