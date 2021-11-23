import React, { useRef, useEffect } from 'react';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


// export const data = {
//   // labels,
//   datasets: [
//     {
//       label: 'Bitcoin Price',
//       data: [{x: 1, y: 5}, {x: 2, y: 8}],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       pointRadius: 0
//     },
//   ],
// };


const CryptoGraph = ({ history }) => {
  // const cryptoGraphRef = useRef(null)

  // useEffect(() => {
  //   if(cryptoGraphRef.current) {
  //     console.log('testing')
  //     const myChart = new Chart(cryptoGraphRef.current,  {
  //       type: 'line',
  //       data: {
  //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //           datasets: [
  //             {
  //               label: '# of Votes',
  //               data: [{x : 1, y: 15}, {x: 2, y: 12}, {x: 3, y: 14}],
  //               backgroundColor: "rgba(174, 305, 194, 0.5)",
  //               borderColor: "rgba(174, 305, 194, 0.4",
  //               // borderWidth: 1,
  //           }
  //         ],
  //       },
  //       options: {
  //           scales: {
  //               y: {
  //                   beginAtZero: true
  //               }
  //           }
  //       }
  //     } )
  //   }
  // })

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Crypto Price',
      },
    },
    animation: {
      duration: 2000
    },
    // scales: {
    //   xAxes: [
    //     {
    //       type: "time",
    //       distribution: "linear"
    //     }
    //   ]
    // }
  };

  const data = {
    // labels,
    datasets: [
      {
        label: 'Bitcoin Price',
        data: history.day,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 0
      },
    ],
  };

  if (history.length === 0) {
    return <p>...loading</p>
  } else {
  return (
    <div>
      {/* <Line options={options} data={data} />
       */}
       <Line
              data={{
                labels: history.day.map((coin) => {
                  let date = new Date(coin[0]);
                  // let time =
                  //   date.getHours() > 12
                  //     ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  //     : `${date.getHours()}:${date.getMinutes()} AM`;
                  return date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: history.day.map((coin) => coin[1]),
                    label: `Price ( Past  Days ) in `,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                  },
                ],
              }}
              options={options}
            />
    </div>
  )
            }
}



export default CryptoGraph