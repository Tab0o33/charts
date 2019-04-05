import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    chart1 = [];
    chart2 = [];
    chart3 = [];
    chart4 = [];

    constructor() { }

    ngOnInit() {


        let jour = [11, 20, 0, 55];
        let eclaire = [33, 34, 0, 12];
        let sombre = [40, 37, 14, 21];
        let nuit = [16, 9, 86, 12];
        //let temp_min = ['list'];

        let weatherDates = ['23/12/2012, 03:00:00', '24/12/2012, 03:00:00', '25/12/2012, 03:00:00', '26/12/2012, 03:00:00'];

        this.chart1 = new Chart('canvas1', {
            type: 'bar',
            data: {
                labels: weatherDates,
                xAxisID: "temps",
                yAxisID: "luminosité",
                datasets: [
                    {
                        data: jour,
                        backgroundColor: 'rgba(255, 255, 0, 0.4)',
                        borderColor: 'rgba(255, 255, 0, 1)',
                        borderWidth: 1
                    },
                    {
                        data: eclaire,
                        backgroundColor: 'rgba(218, 217, 0, 0.4)',
                        borderColor: 'rgba(218, 217, 0, 1)',
                        borderWidth: 1
                    },
                    {
                        data: sombre,
                        backgroundColor: 'rgba(143, 142, 0, 0.4)',
                        borderColor: 'rgba(143, 142, 0, 1)',
                        borderWidth: 1
                    },
                    {
                        data: nuit,
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(0, 0, 0, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }
        });

        let temp_max = [21, 44, 25, 55];

        this.chart2 = new Chart('canvas2', {
            type: 'line',
            data: {
                labels: weatherDates,
                datasets: [
                    {
                        data: temp_max,
                        borderColor: "#ff0000",
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'
                    },
                    /*{ 
                      data: temp_min,
                      borderColor: "#ffcc00",
                      fill: false
                    },*/
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }
        });

        let lum = [43, 20, 7, 30];

        this.chart3 = new Chart('canvas3', {
            type: 'pie',
            data: {
                labels: [
                    'Jour',
                    'éclairé',
                    'sombre',
                    'nuit'
                ],
                xAxisID: "temps",
                yAxisID: "luminosité",
                datasets: [
                    {
                        data: lum,
                        backgroundColor: [
                            'rgba(255, 255, 0, 0.4)',
                            'rgba(218, 217, 0, 0.4)',
                            'rgba(143, 142, 0, 0.4)',
                            'rgba(0, 0, 0, 0.4)'
                        ],
                        borderColor: [
                            'rgba(255, 255, 0, 1)',
                            'rgba(218, 217, 0, 1)',
                            'rgba(160, 160, 0, 0.8)',
                            'rgba(100, 100, 100, 0.8)'
                        ],
                        borderWidth: 1
                    }
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        display: false
                    }],
                    yAxes: [{
                        display: false
                    }],
                }
            }
        });

        let temp_min = [21, 44, 25, 55];

        this.chart4 = new Chart('canvas4', {
            type: 'line',
            data: {
                labels: weatherDates,
                datasets: [
                    {
                        data: temp_min,
                        borderColor: "#ff0000",
                        backgroundColor: 'rgba(255, 0, 0, 0.2)'
                    },
                    /*{ 
                      data: temp_min,
                      borderColor: "#ffcc00",
                      fill: false
                    },*/
                ]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        display: true
                    }],
                    yAxes: [{
                        display: true
                    }],
                }
            }
        });


    }

}
