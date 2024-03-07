import React from "react";
import { Chart } from "react-charts";
import { useExploreCosts } from "../../../shared/hooks/useExploreCosts";
import ResizableBox from "../../../components/ResizableBox";
import { Progress } from "semantic-ui-react";

export default function Bar() {
  const { costs } = useExploreCosts();

  const processedData = React.useMemo(() => {
    const chartData = costs.current_month_costs?.ResultsByTime[0]?.Groups.map(
      (service: any) => ({
        label: service.Keys[0],
        data: [
          [service.Keys[0], parseFloat(service.Metrics.UnblendedCost.Amount)],
        ],
      })
    );

    return chartData?.filter((service: any) => parseFloat(service.data) !== 0);
  }, [costs]);

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum: any) => datum[0],
      type: "ordinal",
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum: any) => datum[1],
        type: "linear",
        stacked: true,
      },
    ],
    []
  );
  if (!processedData) {
    return (
      <Progress percent={100} indicating>
        Loading
      </Progress>
    );
  }

  return (
    <ResizableBox>
      {processedData && (
        <Chart
          options={{
            data: processedData,
            primaryAxis,
            secondaryAxes,
            tooltip: {
              align: "right",
            },
          }}
        />
      )}
    </ResizableBox>
  );
}
