import { Component } from '@angular/core';
import { IAchievement } from '../../interfaces/achievement';
import { AchievementService } from '../../services/achievement.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent {
  achievements: IAchievement[] = [];

  constructor(private service: AchievementService){}

  ngOnInit() : void{
    this.service.getStudent().subscribe((result: IAchievement[]) => (this.achievements= result));
  }
}
