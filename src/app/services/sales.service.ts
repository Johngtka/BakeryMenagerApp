import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Sales } from '../models/sales';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SalesService {
    constructor(private http: HttpClient) {}
    private apiUrl = environment.API_URL;

    getSales(): Observable<Array<Sales>> {
        return this.http.post<Array<Sales>>(`${this.apiUrl}`, {
            getSales: true,
        });
    }

    postSale(data: Sales): Observable<Sales> {
        return this.http.post<Sales>(`${this.apiUrl}`, {
            postSale: true,
            sDate: data.StartDate,
            eDate: data.EndDate,
            value: data.Value,
        });
    }

    deleteSale(data: Sales): Observable<Sales> {
        return this.http.post<Sales>(`${this.apiUrl}`, {
            deleteSale: true,
            id: data.id,
        });
    }
}
