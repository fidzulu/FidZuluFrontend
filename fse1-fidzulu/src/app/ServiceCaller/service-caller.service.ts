import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';
import { TeamMemberResponse } from '../zulu-table/zulu-table.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceCaller {
  static readonly serviceUrl = 'http://localhost:3021';

  constructor(private http: HttpClient) { }

  getData<T>(path: String): Observable<T[]> {
    return this.http.get<T[]>(ServiceCaller.serviceUrl + path).pipe(catchError(this.handleError));
  }

  getTeamMembers(path: String): Observable<TeamMemberResponse> {
    return this.http.get<TeamMemberResponse>(ServiceCaller.serviceUrl + path).pipe(catchError(this.handleError)); // should return a list of team members
  }
  
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message); // A client-side or network error occurred. Handle it.
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`); // The backend returned an unsuccessful response code look at body for clues
    }
    console.error('Unable to contact service; please try again later.');
    return throwError('Unable to contact service; please try again later.'); // return an observable with a user-facing error message
  };
}
