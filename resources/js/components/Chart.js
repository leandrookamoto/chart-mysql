import React from 'react';
import {Bar} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto';

// const data = {
//     labels: ['Dogs','Cats', 'Birds', 'Fish', 'Hamster'],
//     datasets:[
//         {label:'Popularity',
//         data:[50,15,20,15,10]
//         }
//     ]

// }

export default function Chart({dados}){


    return (<>
        BarChart
        <Bar data={dados}/>
    </>)
}
