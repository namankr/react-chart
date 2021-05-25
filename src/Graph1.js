import React from "react";
import "./App.css"

import { PieChart, Pie, Label, Cell, Legend, ResponsiveContainer, Text } from "recharts";


const data1 = [
    { name: "Bubble Sold %", value: 100 },

];


// const style = () => {
//     return <span style={{ position: "absolute",color:"Red"}}> Hello World</span>;
//   };

const Graph1 = (d) => {

    const dominancePercentage = d.data.dominancePercentage;

    const data = [
        { name: "covered %", value: dominancePercentage },
        { name: "Left %", value: 100 - dominancePercentage }
    ];

    const renderLabel = () => {

        return <Text style={{color:"Red", width:"20px", height:"30px"}}> Hello world </Text>;
    }

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
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
}

export default Graph1;