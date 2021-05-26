import React from "react";
import "./App.css"

import { PieChart, Pie, Label, Cell, Legend, ResponsiveContainer, Text } from "recharts";


const data1 = [
    { name: "Bubble Sold %", value: 100 },

];



const Graph1 = (d) => {

    const dominancePercentage = d.data.dominancePercentage;

    const data = [
        { name: "covered %", value: dominancePercentage },
        { name: "Left %", value: 100 - dominancePercentage }
    ];


    const CustomLabel = ({ viewBox, d }) => {
        const { cx, cy } = viewBox;
        const { dominanceBaseLinePercentage, dominancePercentage } = d.data;
        let percentageAboveBaseLine = null; let percentageBelowBaseLine = null; let atBaseLine = null;
        if (dominancePercentage > dominanceBaseLinePercentage) {
            percentageAboveBaseLine = Math.round((dominancePercentage) / (dominanceBaseLinePercentage) * 100);
        } else if (dominancePercentage === dominanceBaseLinePercentage) {
            atBaseLine = "atBaseLine";
        } else {
            percentageBelowBaseLine = 100 - Math.round((dominancePercentage) / (dominanceBaseLinePercentage) * 100);
        }

        return (
            <React.Fragment>
                <text x={cx - 30} y={cy + 60}>
                    <tspan
                        style={{
                            fontWeight: "bold",
                            fontSize: "0.7500em",
                            fill: "#FFFFFF",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            lineHeight: "14px"
                        }}
                    >
                        Dominance
                  </tspan>
                </text>
                <text x={cx - 55} y={cy + 80}>
                    <tspan
                        style={{
                            fontSize: "0.8em",
                            fill: "#FFFFFF",
                            fontFamily: "Roboto"
                        }}
                    >
                        {percentageBelowBaseLine != null && `${percentageBelowBaseLine}% Below baseline`}
                        {percentageAboveBaseLine != null && `${percentageAboveBaseLine}% Abobe baseline`}
                        {atBaseLine != null && 'At Baseline'}

                    </tspan>
                </text>
            </React.Fragment>
        );
    };

    return (
        <ResponsiveContainer width="40%" aspect={0.7} >
            <PieChart width={33} height={33}>
                <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={29.5567} fill="#FFFFFF" blendStroke="#FFFFFF" opacity="0.2" />
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    dataKey="value"
                    innerRadius={30}
                    outerRadius={43}
                    strokeOpacity={0}
                >
                    {data.map((entry, index) => {
                        if (index === 1) {
                            return <Cell key={`cell-${index}`} fill="#FFFFFF" opacity="0.2" blendStroke="#FFFFFF" />
                        }
                        return <Cell key={`cell-${index}`} fill="#0F6E8C" />;
                    })}

                    <Label
                        value={data[0].value + "%"}
                        position="center"
                        fill="#FFFFFF"
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            width: "47px",
                            height: "28px",
                            lineHeight: "28px",
                            letterSpacing: "0.531272px",
                            textTransform: "uppercase",
                        }}
                    />
                    <Label
                        value={data[0].value}
                        content={<CustomLabel d={d} />}
                        position="inside"
                        fill="grey"
                        style={{
                            fontSize: "32px",
                            fontWeight: "bold",
                            fontFamily: "Roboto",
                            marginTop: "100px"
                        }}
                    />
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Graph1;