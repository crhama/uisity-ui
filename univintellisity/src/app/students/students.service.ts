import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import * as stdVm from '../students/models/student-vm';

@Injectable({ providedIn: 'root' })
export class StudentsService {
    studentsUrl = 'http://localhost:58709/api/';

    constructor(private http: HttpClient) { }

    getStudents(): Observable<stdVm.StudentViewModel[]> {
        return this.http.get<stdVm.StudentViewModel[]>(this.studentsUrl + 'students')
            .pipe(
                tap(data => console.log(JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    AddNewStudent(std: stdVm.StudentViewModel) {
        std.id = null;
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        
        return this.http.post<stdVm.StudentViewModel>(this.studentsUrl + 'students', std, { headers: headers })
            .pipe(
                tap(data => console.log('createProduct: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }


    private handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage: string;
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return throwError(errorMessage);
    }

}