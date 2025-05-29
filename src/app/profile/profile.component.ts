import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  userName = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    let name = this.route.snapshot.paramMap.get('name');
    this.userName = name ?? '';
  }
}
