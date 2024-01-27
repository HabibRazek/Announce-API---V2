import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Announce } from '../../model/announce.model';

@Component({
  selector: 'app-list-announce',
  templateUrl: './list-announce.component.html',
  styleUrls: ['./list-announce.component.css']
})
export class ListAnnounceComponent implements OnInit {
  announces: Announce[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAnnounces().subscribe(data => {
      this.announces = data;
    }, error => {
      console.error('Error fetching announces', error);
    });
    
  }
}
