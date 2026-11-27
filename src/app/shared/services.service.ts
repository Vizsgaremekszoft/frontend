import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
    http = inject(HttpClient)
    host = 'http://localhost:8000/api'

    getServices() {
        const url = this.host + '/services'
        const token = localStorage.getItem('token')
        const headers = { Authorization: `Bearer ${token}`}
        return this.http.get(url, { headers })
    }


}
