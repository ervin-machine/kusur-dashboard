
import { ResponsiveContainer, Label, Legend, PieChart, Pie, LabelList } from "recharts";
import "./DonutChar.css"

export default function DonutChart(props) {
    const { data } = props
    let infoData = []
    let value = 0;

    if (data && data.graphs?.length > 0) {
        infoData = [
            {
                name: "Žene",
                value: parseInt(data.graphs[0].graphValues[1].value),
                fill: "#20C54C"
            },
            {
                name: "Muškarci",
                value: parseInt(data.graphs[0].graphValues[0].value),
                fill: "#206DC5"
            },
        ];
    }

    if (infoData && infoData?.length > 0) {
        value = infoData[0].value + infoData[1].value
    }

    const renderCustomizedLabelPercentage = (data, total = 7) => {
        let percentageCalculated = (parseInt(data.value) / total) * 100;
        return `${percentageCalculated.toFixed(2)}%`;
    };

    const renderColorfulLegendText = (value, entry) => {
        return (
            <span style={{ color: "#596579", fontWeight: 500, width: "max-content" }}>
                {value}
            </span>
        );
    };

    return (
        <div className="donut-chart-head">
            <h3 className="donut-chart-title">Spol korisnika</h3>
            <ResponsiveContainer style={{ marginTop: "50px", marginLeft: "-50px" }}>
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
                    <Legend
                        height={36}
                        iconType="circle"
                        layout="vertical"
                        align="right"
                        verticalAlign="top"
                        iconSize={10}
                        formatter={renderColorfulLegendText}
                    />
                    
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
