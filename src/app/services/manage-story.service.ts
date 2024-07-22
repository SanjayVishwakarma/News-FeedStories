import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HackerNewsStory, LoadStoriesRequest } from '../Models/Story';
import { Observable, catchError, throwError } from 'rxjs';
import { HandleErrorService } from './handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class ManageStoryService {

  handleErrorService: HandleErrorService;
  constructor(private http: HttpClient, handleErrorService: HandleErrorService) { this.handleErrorService = handleErrorService; }



  getStories(request:LoadStoriesRequest): Observable<HackerNewsStory[]> {
    try {
      var response = this.http
        .post<HackerNewsStory[]>(
          `http://localhost:5006/api/StoryManagement/LoadStories`, request
        
      ).pipe(
        catchError(this.handleErrorService.handleError) // then handle the error
      );
      return response;
    }
    catch (error) {
      console.log(error);
      return throwError(() => new Error('Something bad happened; please try again later.'));    }
    
  }
}
