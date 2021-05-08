import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import WebViewer from '@pdftron/webviewer';
import { ServiceService } from '../_services/service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements AfterViewInit {

  @ViewChild('viewer') viewerRef: ElementRef;
  model: any = {};
  ready = false;
  constructor(private infoService: ServiceService) {}
  newInfo(){
    if (this.ready == true) {
      this.infoService.addInfo(this.model).subscribe(response => {
        console.log(response);
      }, error => {
        console.log(error);
      })
    } else {
      console.log("wait");
    }
    
  }

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../assets/lib',
      initialDoc: '../../assets/test.pdf'
    }, this.viewerRef.nativeElement).then(instance => {

        // functions in the form
        const { docViewer, annotManager, Annotations } = instance;
        docViewer.on('layoutChanged', () => {
          docViewer.getAnnotationsLoadedPromise().then(() => {
            const fieldManager = annotManager.getFieldManager();
            const fieldFrom = fieldManager.getField('From');
            const fieldTo = fieldManager.getField('To');
            this.model.from = fieldFrom.getValue();
            this.model.to = fieldTo.getValue();
            this.ready = true;
            console.log('Ready');
          });
        });
      
      
      
      /*docViewer.on('annotationsLoaded', () => {
        const fieldManager = annotManager.getFieldManager();
        const fieldFrom = fieldManager.getField("From");
        const fieldTo = fieldManager.getField("To");
        fieldFrom.setValue("Test");
        console.log("Process 1 finished");
        docViewer.getAnnotationsLoadedPromise().then(() => {
          this.model.to = fieldFrom.getValue();
          console.log("Process 2: " + this.model.to);
        })
      })*/
    });
  }


}
