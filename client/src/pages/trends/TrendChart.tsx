import ResizableBox from "../../components/ResizableBox";

import React, { useState } from "react";
import { AxisOptions, Chart } from "react-charts";
import { Header } from "semantic-ui-react";

type MyDatum = { date: Date; value: number };

type Props = {
  data: any[];
  camera: string;
  showChart: boolean;
};

export default function TrendChart({ data, camera, showChart }: Props) {
  const processedData = React.useMemo(() => {
    if (!Array.isArray(data)) {
      return [];
    }
    const series1 = data?.map((val, key) => ({
      primary: new Date(val.Data[3].ScalarValue),
      secondary: Number(val.Data[4].ScalarValue),
    }));

    const chartData = {
      label: "Occupancy",
      data: series1,
    };

    return [chartData];
  }, [data]);

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>
  >(
    () => ({
      getValue: (datum: any) => datum.primary as Date,
    }),
    []
  );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]["data"][number]>[]
  >(
    () => [
      {
        getValue: (datum) => datum.secondary,
        stacked: true,
      },
    ],
    []
  );

  return (
    <>
      <Header textAlign="center">
        Occupancy History Trend for Camera: {camera}
      </Header>
      <ResizableBox>
        <Chart
          options={{
            data: processedData,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}
