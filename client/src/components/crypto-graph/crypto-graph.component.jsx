import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import CryptoGraphButton from '../crypto-graph-button/crypto-graph-button.component.jsx';
import './crypto-graph.styles.scss';

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


const CryptoGraph = ({ history, name }) => {

  if (history.length === 0) {
    return <p>...loading</p>
  } else {
  return (
    <div>
            <Line data={{
              labels: history.map((coin) => {
                let date = new Date(coin[0]);
                let time = date.getHours() > 12
                ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                : `${date.getHours()}:${date.getMinutes()} AM`;
                return time
                // return days === 1 ? time : date.toLocaleDateString()
              }),

              datasets: [{
                data: history.map((coin) => coin[1]),
                // label: `Price ( Past ${days} Days) in ${currency}`,
                label: "Price",
                borderColor: "#47c2be"
              }]
            }}
            options={{
              elements: {
                point: {
                  radius: 1,
                },
              },
            }} />

            <div className="crypto-graph-buttons-row">
              <CryptoGraphButton name={name} value={1}>1D</CryptoGraphButton>
              <CryptoGraphButton name={name} value={7}>7D</CryptoGraphButton>
              <CryptoGraphButton name={name} value={30}>1M</CryptoGraphButton>
              <CryptoGraphButton name={name} value={90}>3M</CryptoGraphButton>
              <CryptoGraphButton name={name} value={365}>1Y</CryptoGraphButton>
            </div>
    </div>
  )
            }
}



export default CryptoGraph