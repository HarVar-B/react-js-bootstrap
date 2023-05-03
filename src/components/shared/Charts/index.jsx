import React from 'react';
import {
  ArcElement,
  BarElement,
  BarController,
  BubbleController,
  CategoryScale,
  Chart,
  DoughnutController,
  LineElement,
  LineController,
  PointElement,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';
import { Line,Bar } from 'react-chartjs-2';

Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
);

export const LineChart = (props) => <Line {...props}/>;
export const BarChart = (props) => <Bar {...props}/>;
