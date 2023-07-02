import ReactEcharts from "echarts-for-react";
import {Slider, Typography} from "@mui/material";
import {useState} from "react";

export default function Budget({data}){

    function calculateSumByCat(products) {
        const sumByCat = [];
        for (const product of products) {
            const { cat, number } = product;
            const parsedNumber = parseFloat(number.replace(/[^0-9.-]+/g, ""));

            if (!sumByCat.hasOwnProperty(cat)) {
                sumByCat[cat] = 0;
            }

            sumByCat[cat] += parsedNumber;
        }
        return Object.entries(sumByCat).map(([name, value]) => ({ name, value }));
    }
    const result = calculateSumByCat(data).filter(item=>item.name !== "Income")
    console.log()


    const option = {
        legend: {
            data: result.map(item=>item.name),
            icon: 'rect',

        },
        series: [
            {
                label: {
                    show: false
                },
                radius: '66%',
                type: 'pie',
                data: result,
                roseType: 'area'
            }
        ],

    };

    return(
        <div>
            <ReactEcharts option={option} />
        </div>
    )
}