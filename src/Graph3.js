import React from "react";

import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";


const data = [
    { name: "Bubble Sold %", value: 50 },
    { name: "Bubble Left %", value: 50 }
];

const data1 = [
    { name: "Bubble Sold %", value: 100 }
];

function Graph3() {
    return (
        <ResponsiveContainer width="40%" aspect={0.7}>
            <PieChart width={33} height={33}>
            <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={42} fill="#E07900" blendStroke="#E07900" opacity="0.2"/>
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
                            return <Cell key={`cell-${index}`} fill="#E07900" opacity="0.2"/>;
                        }
                        return <Cell key={`cell-${index}`} fill="#E07900" />;
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
                </Pie>
                
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Graph3;