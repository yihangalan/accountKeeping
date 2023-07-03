import {Grid} from "@mui/material";
import "./stats.css"
import ReactEcharts from "echarts-for-react";
import {useContext, useEffect, useState} from "react";
import {PopupContext} from "../context/postContext";
import {calculateSumByCat, getTotalExpense} from "../helper/stats";

export default function Stats(){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const [series, setSeries] = useState([0,0,0,0,0,0,0,0,0,0,0,0])
    const {getDataByMonth} = useContext(PopupContext)

    useEffect(() => {
        async function getData(){
            for (let i = 0; i < months.length; i++) {
                const data = await getDataByMonth(i+1);
                const tem = getTotalExpense(calculateSumByCat(data).filter(item=>item.name !== "Income"))
                setSeries(series => {
                    const newSeries = [...series];
                    newSeries[i] = tem;
                    return newSeries;
                });
            }
        }
        getData();
        console.log(series);

    },[])



    const option = {
        tooltip: {
            trigger: 'item'
        },
        xAxis: {
            data: months
        },
        yAxis: {},
        color: ["#ffa726"],
        series: [
            {
                itemStyle: {
                    borderRadius: 1,
                    borderColor: '#fff',
                    borderWidth: 1
                },
                avoidLabelOverlap: false,
                type: 'bar',
                data: series
            }
        ]
    };

    return(

        <div>
            <Grid container spacing={2} alignItems="center" justifyContent="space-evenly">
                <Grid item xs={12} md={6}>
                    <div className="expenseDisplay">
                        <h1 className="title">Monthly Expense</h1>
                        <ReactEcharts option={option} style={{width:"100%"}} />
                    </div>

                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="expenseDisplay">
                        <h1 className="title">Weekly Expense</h1>
                        <ReactEcharts option={option} style={{width:"100%"}} />
                    </div>

                </Grid>

                <h1>sdfaasdf</h1>
                <h1>sdfaasdf</h1>
                <h1>sdfaasdf</h1>
                <h1>sdfaasdf</h1>
            </Grid>
        </div>
    )
}