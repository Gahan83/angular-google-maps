import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GoogleMapsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  center: google.maps.LatLngLiteral = { lat: 37.7749, lng: -122.4194 };
  zoom = 12;

  markers: { position: google.maps.LatLngLiteral; title: string }[] = [];

  onMapClick(event:google.maps.MapMouseEvent):void
  {
    if(event.latLng)
    {
      const position=event.latLng.toJSON()

      this.markers.push({
        position,
        title:`Marker at(${position.lat}, ${position.lng})`,
      })
    }
  }
}
