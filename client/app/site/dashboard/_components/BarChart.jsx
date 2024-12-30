"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// Updated chart data with members and earnings
// const chartData = [
//   { month: "January", members: 186, earnings: 80 },
//   { month: "February", members: 305, earnings: 200 },
//   { month: "March", members: 237, earnings: 120 },
//   { month: "April", members: 73, earnings: 190 },
//   { month: "May", members: 209, earnings: 130 },
//   { month: "June", members: 214, earnings: 140 },
// ];

// Define the chart configuration properly
const chartConfig = {
  members: {
    label: "Members",
    color: "hsl(var(--chart-1))",
  },
  earnings: {
    label: "Earnings",
    color: "hsl(var(--chart-2))",
  },
};

export default function BarChartView({ totalMembers, totalEarnings, chartData }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Analytics</CardTitle>
        <CardDescription>Showing your growth for each month</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Ensure chartConfig is passed correctly */}
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData} margin={{ top: 20 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            {/* Custom Tooltip for members and earnings */}
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />

            {/* Bars for members and earnings */}
            <Bar dataKey="members" fill="rgba(59, 130, 246)" radius={4} />
            <Bar dataKey="earnings" fill="rgba(22, 163, 74)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none"></div>
        <div className="leading-none text-muted-foreground">
          Showing total members and earnings for each month
        </div>
      </CardFooter>
    </Card>
  );
}
