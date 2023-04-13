import React, { useEffect } from "react";
import * as d3 from "d3";

export default function BarChart(props) {
  const { id, data, width, height } = props;

  useEffect(() => {
    drawChart();
  }, []);

  const drawChart = () => {
    console.log(data);

    const d = data;

    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .selectAll("rect")
      .data(d)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 300 - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "green");

    svg
      .selectAll("text")
      .data(d)
      .enter()
      .append("text")
      .text((d) => d)
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 300 - 10 * d - 3);
  };
  return (
    <div>
      <div id={"#" + id}></div>
    </div>
  );
}
