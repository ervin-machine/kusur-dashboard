
import { ResponsiveContainer, Label, Legend, PieChart, Pie, LabelList } from "recharts";
import "./SurveyChart.css"

export default function SurveyChart() {
    let value = 0;

    let infoData = [
        {
            name: "Kosu perem svake godine.",
            value: 412,
            percentage: "18%",
            fill: "#EC4242"
        },
        {
            name: "Perem je kad postane masna poput lojavog bureka.",
            value: 680,
            percentage: "25%",
            fill: "#20C593"
        },
        {
            name: "Maksimalno izbjegavam pranje kose.",
            value: 301,
            percentage: "25%",
            fill: "#FFB24E"
        },
    ];

    if (infoData && infoData?.length > 0) {
        value = infoData[0].value + infoData[1].value + infoData[2].value
    }

    const renderCustomizedLabelPercentage = (data, total = 7) => {
        let percentageCalculated = (parseInt(data.value) / value) * 100;
        return `${percentageCalculated.toFixed(2)}%`;
    };

    const renderLegend = (props) => {
        const { payload } = props;
        console.log(payload)
        return (
            <div className="survey-chart-legend">
                {
                    payload.map((entry, index) => (
                        <div key={index} style={{ display: "flex", marginTop: "10px"}}>
                            <div style={{ width: index === 1 ? "18px" : (index === 2 ? "13px" : "11px"), height: "11px", border: "none", borderRadius: "100%", backgroundColor: entry.color }}></div>
                            <div style={{ marginLeft: "5px"}}>
                                <p className="legend-name" style={{ marginTop:"-3px" }}>
                                    {entry.value}
                                </p>
                                <p className="legend-value" style={{ marginTop: "-5px" }}>
                                    {entry.payload.value}
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        );
    }


    return (
        <div className="survey-chart-head">
            <ResponsiveContainer className="survey-chart-content" width="100%" height="100%">
                <PieChart style={{ cursor: "pointer", marginLeft: "-46px"}}>
                    <Pie
                        dataKey="value"
                        data={infoData}
                        width={150}
                        height={150}
                        cx="70%"
                        cy="45%"
                        innerRadius={30}
                        outerRadius={80}
                        fill="black"
                        nameKey="name"
                    >
                        <Label
                            value={value} position="centerBottom" className='label-top' fontSize='16px'
                        />
                        <LabelList
                            dy={-3}
                            fill="white"
                            dataKey={renderCustomizedLabelPercentage}
                            position="inside"
                            angle="0"
                            stroke="none"
                            className="label-percentage"
                            fontSize={12}
                        />
                    </Pie>
                    <Legend
                        height={36}
                        iconType="circle"
                        layout="vetical" verticalAlign="middle" align="right"
                        iconSize={10}
                        content={renderLegend}
                    />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
