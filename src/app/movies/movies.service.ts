import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap, map } from "rxjs/operators"
import { Md5 } from "ts-md5/dist/md5";
import { Movie } from './movies.model';
import { JsonPipe } from '@angular/common';

@Injectable({
    providedIn: "root"
})

export class MoviesService {

    constructor(private httpClient: HttpClient) {}

    getMovies(filter:String):Observable<Movie[]> {
        const md5 = new Md5();
        const date = new Date();

        const ts = ((date.getTime() * 10000) + 621355968000000000).toString();       
        const apiKey = "1d6a2541ad7271181845a41672d69b67";
        
        //Insert secret key
        const privateKey = "42fc7e3ad694d58d7e75a9be21518d**********";
        
        const hash = md5.start().appendStr(ts).appendStr(privateKey).appendStr(apiKey).end();
        const url = `https://gateway.marvel.com/v1/public/comics?${filter}orderBy=modified&ts=${ts}&apikey=${apiKey}&hash=${hash}`;

        return this.httpClient.get<Movie[]>(url).pipe(
            tap(),
            catchError(this.handleError)
        );

    }

    private handleError(err: HttpErrorResponse) {
 
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
 
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
 
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}
