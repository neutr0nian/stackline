import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import { connect } from 'react-redux'
import {Line} from 'react-chartjs-2';
import { getSalesData } from '../redux/retail/retailActions';

function DataChart(props) {
    console.log(props)
    const retailSales = props.salesData.map(el => el['retailSales'])
    const wholesaleSales = props.salesData.map(el => el['wholesaleSales'])
    const unitsSold = props.salesData.map(el => el['unitsSold'])
    const retailerMargin = props.salesData.map(el => el['retailerMargin'])
    console.log(retailSales)

    const state = {
        labels: ['JAN', 'FEB', 'MAR',
                 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
        datasets: [
          {
            label: 'Retail Sales',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#1481BA',
            borderColor: '#1481BA',
            borderWidth: 2,
            data: retailSales
          },
          {
            label: 'Wholesale Sales',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#447604   ',
            borderColor: '#447604',
            borderWidth: 2,
            data: wholesaleSales
          },
          {
            label: 'Units Sold',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 2,
            data: unitsSold
          },
          {
            label: 'Retailer Margin',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#EB6534',
            borderColor: '#EB6534',
            borderWidth: 2,
            data: retailerMargin
          },
        ]
      }
      return (
        <div className="bg-light bx-shadow mb-4">
          <Line
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:20
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
}

const mapStateToProps = state => {
    return {
        salesData: state.retailData.sales,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSalesData : () => dispatch(getSalesData())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DataChart)
