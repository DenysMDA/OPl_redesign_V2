import React, {useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

// Регистрируем компоненты
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const UserChart = () => {
    // Моковые данные для презентации
    const dataForMonth = {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
            {
                label: 'New Tenants (This Year)',
                data: [100, 80, 120, 90], // Значения для этого года
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },

            {
                label: 'New Tenants (Last Year)',
                data: [70, 100, 50, 110], // Независимые значения для прошлого года
                type: 'line',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                fill: false,
            },
        ],
    };

    const dataForSixMonths = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'New Tenants (This Year)',
                data: [300, 250, 400, 350, 450, 300], // Значения для этого года
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'New Tenants (Last Year)',
                data: [200, 300, 150, 250, 350, 280], // Независимые значения для прошлого года
                type: 'line',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                fill: false,
            },
        ],
    };

    const dataForYear = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'New Tenants (This Year)',
                data: [800, 750, 900, 850, 1000, 950, 1100, 1050, 1200, 1150, 1300, 1250], // Значения для этого года
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'New Tenants (Last Year)',
                data: [900, 850, 700, 750, 800, 850, 700, 750, 800, 850, 900, 950], // Независимые значения для прошлого года
                type: 'line',
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                fill: false,
            },
        ],
    };
    // Состояние для управления отображаемыми данными
    const [chartData, setChartData] = useState(dataForMonth);
    const [activeButton, setActiveButton] = useState('month');

    // Функции для обновления данных
    const showMonthData = () => {
        setChartData(dataForMonth);
        setActiveButton('month');
    };

    const showSixMonthsData = () => {
        setChartData(dataForSixMonths);
        setActiveButton('sixMonths');
    };

    const showYearData = () => {
        setChartData(dataForYear);
        setActiveButton('year');
    };
    return (
        <div className='diagram'>
            <Bar
                data={chartData}
                options={{
                    responsive: true,
                    scales: {
                        x: {
                            beginAtZero: true,
                        },
                        y: {
                            beginAtZero: true,
                        },
                    },
                }}
            />
            <div className='btn-block'>
                <button
                    onClick={showMonthData}
                    className={activeButton === 'month' ? 'active' : ''}
                >
                    Last Month
                </button>
                <button
                    onClick={showSixMonthsData}
                    className={activeButton === 'sixMonths' ? 'active' : ''}
                >
                    Last 6 Months
                </button>
                <button
                    onClick={showYearData}
                    className={activeButton === 'year' ? 'active' : ''}
                >
                    Last Year
                </button>
            </div>
        </div>
    );
};

export default UserChart;
