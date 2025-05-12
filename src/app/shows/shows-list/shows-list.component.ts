import { Component, OnInit } from '@angular/core';
import { Show } from '../show';
import { ShowService } from '../show.service';

@Component({
  selector: 'app-show-list',
  standalone: false,
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.css']
})
export class ShowListComponent implements OnInit {
  
  constructor(private seriesService: ShowService) {}

  series: Show[] = [];
  averageSeasons: number = 0;
  selectedSerie: Show | null = null; 


  getSeries(): void {
    this.seriesService.getSeries().subscribe((series) => {
      this.series = series;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons(): void {
    let totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  selectSerie(serie: Show): void { 
    this.selectedSerie = serie;
  }

  ngOnInit() {
    this.getSeries();
  }
}
