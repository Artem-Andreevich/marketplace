import { useRef, useEffect, useState, SetStateAction } from 'react';
import type { ChartData } from 'chart.js';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface myChart {
    datasets: [{
        data: number[]
    }],
    labels: string[]
}


export function ProductChart({data}: any) {
    const chartRef = useRef<ChartJS>(null);
    const [chartData, setChartData] = useState<myChart>({
        datasets: [{
            data: []
        }],
        labels: []
    });


    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) {
        return;
        }

        const dataChart: myChart = {
            datasets: [{
                data: [...data.prices]
            }],
            labels: [...data.months]
        } 
        setChartData(dataChart);
    }, [data]);

    
    const chartOptions: any = {
        responsive: true,
        fill: true,
        borderWidth: 2.5,
        borderColor: '#ff0d56',
        scales: {	
            x: {
                border: {
                    color: '#000',
                    display: false,
                },
                ticks: {
                    autoSkip: true,
                    align: 'inner',
                    color: "#000",
                    maxTicksLimit: 2,
                    padding: -1, 
                    font : {
                        size: 14,
                        family: 'Montserrat bold',
                    },
                    
                    callback: function(value: any, index: any, ticks: any) {
                        if(index === 0 || index === chartData.labels.length - 1) {
                            return `${chartData.datasets[0].data[index]} ₽`
                        }					
                    },
                },
                grid: {
                    color: '#fff'
                },
            },
            myScale: {
                position: 'bottom',
                border: {
                    color: '#000',
                    display: false,
                },
                grid: {
                    color: '#fff'
                },
                ticks: {
                    autoSkip: true,
                    align: 'inner',
                    color: "#000",
                    maxTicksLimit: 2,
                    padding: -4, 
                    font : {
                        size: 12,
                    },
                    
                    callback: function(value: any, index: any, ticks: any) {
                        if(index === 0 || index === chartData.labels.length - 1) {
                            return chartData.labels[index]
                        }					
                    },
                },
              },
            y: {
               display: false,
               beginAtZero: true,
            }
        },
        plugins: {
            legend: {
              display: false,
            },
            tooltip: {
                backgroundColor: 'rgba(11, 124, 222, .9)',
                padding: 15,
                displayColors: false,
                bodyFont: {
                    size: 14,
                    family: 'Montserrat bold',
                },
                callbacks: {
                    label: function(context: any) {
                        return `${context.raw} ₽`
                    },
                    labelPointStyle: function(context: any) {
                        return {
                            pointStyle: 'triangle',
                            rotation: 0
                        };
                    }
                }
            }
        },
        elements: {
            line: {
                tension: 0.4,
                backgroundColor: '#f5f5f5',
                borderColor: '#ff0d56',
            },
            point: {
                radius: 2.2,
                backgroundColor: '#e31e5a',
                borderColor: '#e31e5a',
                hitRadius: 100,
            }
        },
        layout: {
            padding: 0,
        }
    }



    return <Chart ref={chartRef} type='line' data={chartData} options={chartOptions} />;
}