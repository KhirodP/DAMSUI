import { Component, OnInit } from '@angular/core';
import { DocumentUploadService } from 'src/app/Services/document-upload.service';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {

  bookmarks:any=[];


  constructor(private service: DocumentUploadService) { }

  ngOnInit(): void {
    this.service.getBookmarks().subscribe(
      (data)=>{
        this.bookmarks=data;
        console.log(data,"bookmarked data");
      },
      (error)=>{
        alert("something went wrong, please try again later");
      }
    )
  }

}
