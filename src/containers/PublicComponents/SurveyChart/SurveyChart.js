
import { ResponsiveContainer, Label, PieChart, Pie, LabelList } from "recharts";
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
    

    return (
        <div className="survey-chart-head">
            <ResponsiveContainer style={{ marginTop: "-50px", marginLeft: "-50px" }}>
                <PieChart style={{ cursor: "pointer" }}>
                    <Pie
                        dataKey="value"
                        data={infoData}
                        width={150}
                        height={150}
                        cx="50%"
                        cy="35%"
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
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
