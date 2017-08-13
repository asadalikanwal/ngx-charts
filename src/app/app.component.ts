import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({ transform: 'translateY(15%)', opacity: 0 }),
          animate('200ms', style({ transform: 'translateY(0)', opacity: 1 }))
        ]),
        transition(':leave', [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('200ms', style({ transform: 'translateY(15%)', opacity: 0 }))
        ])
      ]
    )
  ]
})
export class AppComponent {
  title = 'app';
  // set the default states for lineChart
  lineChart = false;

  // // Line charts options
  single: any[] = [
    {
      'name': 'Google ',
      'series': [
        {
          'value': 550,
          'name': '10:00 AM'
        },
        {
          'value': 570,
          'name': '12:00 PM'
        },
        {
          'value': 520,
          'name': '2:00 PM'
        },
        {
          'value': 550  ,
          'name': '4:00 PM'
        }
      ]
    }
  ];


  view: any[] = [300, 200];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#0099F7']
  };

  // line, area
  autoScale = true;


  onSelect(event) {
    console.log(event);
  }


  // To show & hide chart
  toggleChart(event) {
    this.lineChart = !this.lineChart;
  }




}
