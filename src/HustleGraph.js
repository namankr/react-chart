import React from "react";
import "./App.css";

import {
    PieChart,
    Pie,
    Label,
    Cell,
    ResponsiveContainer,
    Legend,
} from "recharts";

const data1 = [{ name: "Bubble Sold %", value: 100 }];
const COLORS = ["#FEEFB8", "#FEDC62", "#FFC700", "#CA9D00", "#9A7A07"];
// const COLORS = ["#9A7A07", "#CA9D00", "#FFC700", "#FEDC62" ,"#FEEFB8"];

const Graph1 = (d) => {
    const {
        mentalEnergyPercentage,
        composureScorePercentage,
        motivationScorePercentage,
        concentrationScorePercentage,
        energyScorePercentage,
        confidenceScorePercentage,
    } = d.data;

    const data = [
        { name: "composureScorePercentage", value: composureScorePercentage },
        { name: "motivationScorePercentage", value: motivationScorePercentage },
        {
            name: "concentrationScorePercentage",
            value: concentrationScorePercentage,
        },
        { name: "energyScorePercentage", value: energyScorePercentage },
        { name: "confidenceScorePercentage", value: confidenceScorePercentage },
        { name: "Left %", value: 100 - mentalEnergyPercentage },
    ];

    const CustomLabel = ({ viewBox, d }) => {
        const { cx, cy } = viewBox;
        const { dominanceBaseLinePercentage, dominancePercentage } = d.data;
        let percentageAboveBaseLine = null;
        let percentageBelowBaseLine = null;
        let atBaseLine = null;
        if (dominancePercentage > dominanceBaseLinePercentage) {
            percentageAboveBaseLine = Math.round(
                (dominancePercentage / dominanceBaseLinePercentage) * 100
            );
        } else if (dominancePercentage === dominanceBaseLinePercentage) {
            atBaseLine = "atBaseLine";
        } else {
            percentageBelowBaseLine =
                100 -
                Math.round((dominancePercentage / dominanceBaseLinePercentage) * 100);
        }

        return (
            <React.Fragment>
                <text x={cx - 30} y={cy + 70}>
                    <tspan
                        style={{
                            fontWeight: "bold",
                            fontSize: "0.7500em",
                            fill: "#FFFFFF",
                            fontFamily: "Roboto",
                            fontStyle: "normal",
                            lineHeight: "14px",
                        }}
                    >
                        Overall Score
          </tspan>
                </text>
                <text x={cx - 55} y={cy + 90}>
                    <tspan
                        style={{
                            fontSize: "0.8em",
                            fill: "#FFFFFF",
                            fontFamily: "Roboto",
                        }}
                    >
                        {percentageBelowBaseLine != null &&
                            `${percentageBelowBaseLine}% Below Baseline`}
                        {percentageAboveBaseLine != null &&
                            `${percentageAboveBaseLine}% Abobe Baseline`}
                        {atBaseLine != null && "At Baseline"}
                    </tspan>
                </text>
            </React.Fragment>
        );
    };

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        data={data1}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={34}
                        fill="#C09809"
                        blendStroke="#C09809"
                        opacity="0.2"
                    />
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        dataKey="value"
                        innerRadius={34}
                        outerRadius={47}
                        strokeOpacity={0}
                    >
                        {data.map((entry, index) => {
                            if (index === data.length - 1) {
                                return (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill="#C09809"
                                        blendStroke="#C09809"
                                        opacity="0.2"
                                    />
                                );
                            }
                            return (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            );
                        })}

                        <Label
                            value={mentalEnergyPercentage + "%"}
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
                                marginTop: "100px",
                            }}
                        />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Graph1;
