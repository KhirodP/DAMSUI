import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewDocument } from '../Components/headers/navbar/doc-managment/Document/Document';
import { Keyword } from '../Components/headers/navbar/sections/model/keyword';

@Injectable({
  providedIn: 'root',
})
export class DocumentUploadService {
  constructor(private http: HttpClient) {}

  getDocumentDetails() {
    return this.http.get('http://localhost:3000/documents');
    // return this.http.get(`${environment.url1}/searchall`);

  }

  getDocuments() {
    return this.http.get(`${environment.url1}/getall`);
  }

  addDocument(data: any) {
    return this.http.post('http://localhost:3000/documents', data);
  }

  getDocById(id: string) {
    return this.http.get(`http://localhost:3000/documents/${id}`);
  }

  getVersions(data: any) {
    return this.http.get<any>(
      `${environment.url + '/versions'}?document=${data.title}`
    );
  }

  getSections(version: string) {
    return this.http.get(`${environment.url + '/sections'}?version=${version}`);
  }

  getKeywords(section: string) {
    return this.http.get(`${environment.url + '/keywords'}?section=${section}`);
  }

  getEntities(section: string) {
    return this.http.get(`${environment.url + '/entities'}?section=${section}`);
  }

  changeStatus(status: any, version: any) {
    console.log(status);

    return this.http.put(
      `${environment.url + '/versions/versions/version/'}${version}`,
      status
    );
  }

  deleteKeyword(id: number, section: string) {
    return this.http.delete<any>(
      `${environment.url}/keywords/${id}?section=${section}`
    );
  }

  addKeyword(keywordData: any) {
    return this.http.post(`${environment.url + '/keywords'}`, keywordData);
  }

  getKeywordById(id: string) {
    return this.http.get(`${environment.url}/keywords/${id}`);
  }

  updateBookmark(id: string, data: any) {
    return this.http.put(`${environment.url}/keywords/${id}`, data);
  }

  getBookmarks() {
    return this.http.get(`${environment.url + '/keywords'}?bookmark=${true}`);
  }

  getBookmarksBySection(section: string) {
    return this.http.get(
      `${environment.url + '/bookmarks'}?section=${section}`
    );
  }

  getReviwers() {
    return this.http.get(`${environment.url}/reviewer`);
  }

  deleteEntity(id: string) {
    return this.http.delete(`${environment.url}/entities/${id}`);
  }

  upload(file: File): any {
    
    console.log(file);
    
    const formData: any = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${environment.url1}/uploaddoc`, formData, {
      
    });

    return this.http.request(req);

    // return this.http.post(`${environment.url1}/uploading`,file);
  }


  search(keyword:string)
  {
    return this.http.get(`${environment.url1}/search/${keyword}`);
  }
}
