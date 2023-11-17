import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  apiEndpoint: any = null;
  modelName: any = null;

  constructor(
    public httpClient: HttpClient,
  ) {
    this.apiEndpoint = "http://127.0.0.1:8000/api/";
  }

  createObject(obj: object) {
    const url = this.apiEndpoint + this.modelName + '/';
    return this.httpClient.post(url, obj, { withCredentials: true });
  }

  updateObject(id: number, obj: object, is_partial: boolean = false) {
    const url = this.apiEndpoint + this.modelName + '/' + id.toString() + '/';
    return is_partial
      ? this.httpClient.patch(url, obj, { withCredentials: true })
      : this.httpClient.put(url, obj, { withCredentials: true });
  }

  updateObjects(obj: object, params = {}) {
    const url = this.apiEndpoint + this.modelName + '/';
    return this.httpClient.patch(url, obj, { params, withCredentials: true });
  }

  retrieveObject(id: number) {
    const url = this.apiEndpoint + this.modelName + '/' + id + '/';
    return this.httpClient.get(url, { withCredentials: true });
  }

  retrieveObjects(params = {}) {
    const url = this.apiEndpoint + this.modelName + '/';
    return this.httpClient.get(url, { params, withCredentials: true });
  }

  destroyObject(id: number) {
    const url = this.apiEndpoint + this.modelName + '/' + id + '/';
    return this.httpClient.delete(url, { withCredentials: true });
  }
 
}
