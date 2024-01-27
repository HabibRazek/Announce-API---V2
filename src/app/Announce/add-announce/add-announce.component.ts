import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Announce } from '../../model/announce.model';


@Component({
  selector: 'app-add-announce',
  templateUrl: './add-announce.component.html',
  styleUrls: ['./add-announce.component.css']
})
export class AddAnnounceComponent {
  newAnnounce: Announce = {

    adress: '',
    categoryId: 0,
    city: '',
    country: '',
    description: '',
    date: new Date().toISOString(),
    userId: '', //
    latitude: '0',
    longitude: '0',
    price: 0,
    zipCode: null,
    isFavorite: false,
    id: '',
    website: null,
    vocal: '',
    pictures: [],
    priceState: '',
    state: '',
    title: '',
    user: {
      adress: '',
      firstName: '',
      lastName: '',
      inscriptionType: '',
      imageUrl: '',
      type: '',
    },
  };

  constructor(private apiService: ApiService) { }

  onSubmit(): void {
    this.apiService.addAnnounce(this.newAnnounce).subscribe({
      next: (response) => {

        console.log('Announce added successfully', response);
      },
      error: (error) => {

        console.error('Error adding the announce', error);
      }
    });
  }
}
