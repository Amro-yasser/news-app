import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService extends BackendService {

  override modelName = 'news';
}
