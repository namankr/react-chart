import React from "react";

import { PieChart, Pie, Label, Cell, ResponsiveContainer } from "recharts";


const data = [
    { name: "Bubble Sold %", value: 20 },
    { name: "Bubble Left %", value: 80 }
];

const data1 = [
    { name: "Bubble Sold %", value: 100 },
    
];

function Graph1() {
    return (
        <ResponsiveContainer width="40%" aspect={0.7}>
            <PieChart width={33} height={33}>
            <Pie data={data1} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={29.5567} fill="#FFFFFF" blendStroke="#FFFFFF" opacity="0.2"/>
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
                </Pie>
                
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Graph1;