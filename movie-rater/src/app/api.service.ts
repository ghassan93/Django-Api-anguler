import { Movie } from './models/Movie';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:8000/';
  baseMovieUrl = `${this.baseUrl}/api/movies/`;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',

  
  });

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  getMovies() {
    return this.httpClient.get(this.baseMovieUrl, { headers: this.getAuthHeaders() });
  }

  getMovie(id: number) {
    return this.httpClient.get(`${this.baseMovieUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }

  createMovie(title: string, description: string) {
    const body = JSON.stringify({ title, description });
    return this.httpClient.post(`${this.baseMovieUrl}`, body, {
      headers: this.getAuthHeaders(),
    });
  }

  updateMovie(id: number, title: string, description: string) {
    const body = JSON.stringify({ title, description });
    return this.httpClient.put(`${this.baseMovieUrl}${id}/`, body, {
      headers: this.getAuthHeaders(),
    });
  }
  deleteMovie(id: number) {
    return this.httpClient.delete(`${this.baseMovieUrl}${id}/`, {
      headers: this.getAuthHeaders(),
    });
  }

  rateMovies(rate: number, movieId: number) {
    const body = JSON.stringify({ stars: rate });
    return this.httpClient.post(
      `${this.baseMovieUrl}${movieId}/rate_movie/`,
      body,
      { headers: this.getAuthHeaders() }
    );
  }

  loginUser(authData: any) {
    return this.httpClient.post(`${this.baseUrl}auth/`, authData, {
      headers: this.headers,
    });
  }

  registerUser(authData: any) {
    return this.httpClient.post(`${this.baseUrl}api/users/`, authData, {
      headers: this.headers,
    });
  }

  getAuthHeaders() {
    const token = this.cookieService.get('mr-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',

      Authorization: `Token ${token}`,
    });
  }
}
