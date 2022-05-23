import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentUploadService } from 'src/app/Services/document-upload.service';

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {
  documentData: any;
  docId!: string;
  versions: any;
  docVersion!:string;
  sections:any=[];
  checked: boolean=true;
  stateOptions: any[];

  

  constructor(
      private docService: DocumentUploadService,
      private router: Router
  ) {
      this.stateOptions = [
          { label: 'Inactive', value: 'Inactive' },
          { label: 'Active', value: 'Active' },
        ];
  }

  ngOnInit(): void {
      this.docId =JSON.parse(localStorage.getItem("documentID") || '{}');
      console.log(this.docId);
      

      this.docService.getDocById(this.docId).subscribe(
          (data) => {
              this.documentData = data;
              console.log(data);
              this.getVersions(this.documentData);
          },
          (error) => {
              alert("something went wrong...!!");
          }
      );


     

      
  }

  getVersions(data: any) {
      this.docService.getVersions(data).subscribe(
          (data) => {
              console.log(data,"data by doc version");
              this.versions = data[0].versions;
          },
          (error) => {
              alert("something went wrong, please try again later...!!");
          }
      );
  }

  onClickVesrion(version: string) {
      this.docVersion=version;
      localStorage.setItem("version", version);

      this.docService.getSections(version).subscribe((data:any) => {
          console.log(data, "anemoi");

          this.sections = data[0].sections;
      });

      //this.router.navigate(["/sections"]);
  }

  versionActivation(){
      this.checked=true;
  }


  onClickSection(section:string){
      localStorage.setItem('section',section);
      this.router.navigate(["/sections"])
  }
}
