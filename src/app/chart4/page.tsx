"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { transformChartData } from "./lib";
import data from "./jumlah_tugas_asisten.json"

const chartData = transformChartData(data).sort(
  (a, b) => (b.Proses + b.Ditutup) - (a.Proses + a.Ditutup)
);

const chartConfig = {
  Proses: {
    label: "Proses",
    color: "#2563eb",
  },
  Ditutup: {
    label: "Ditutup",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export default function Page() {
  const minWidth = Math.max(800, chartData.length * 60); // 60px per bar minimum
  
  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-4">
    <div className="overflow-x-auto">
      <ChartContainer 
        config={chartConfig} 
        className="max-h-[400px] border-2 border-gray-200 rounded-lg p-4"
        style={{ minWidth: `${minWidth}px` }}
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="Asisten"
            tickLine={true}
            tickMargin={10}
            axisLine={true}
            tickFormatter={(value) => value.slice(0,5)}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="Proses" fill={chartConfig.Proses.color} radius={4} />
          <Bar dataKey="Ditutup" fill={chartConfig.Ditutup.color} radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
    </div>
  );
}
