import * as React from "react";
import { Segment, Header, Dimmer, Loader, Progress } from "semantic-ui-react";
import { useGetOccupancy } from "../../shared/hooks/useGetOccupancy";
import { AnalyticsFeed } from "./AnalyticsFeed";
import { toFriendlyTime } from "../../shared/helpers/utility";

export function AnalyticsFeedBar(props: any) {
  const { occupancyList } = useGetOccupancy();
  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          Occupancy Feed
          <Header.Subheader>Updates every 10 seconds</Header.Subheader>
        </Header.Content>
      </Header>
      <Segment basic style={{ overflow: "auto", maxHeight: "75vh" }}>
        {occupancyList.length === 0 ? (
          <Progress percent={100} indicating>
            Loading
          </Progress>
        ) : (
          occupancyList.map((data: any, key: any) => {
            return (
              <AnalyticsFeed
                key={key}
                summaryHeader={
                  "Camera " + data?.Data[0].ScalarValue + " Occupancy:"
                }
                summarySubheader={data?.Data[4].ScalarValue}
                summaryDate={""}
                icon={data?.Data[1].ScalarValue}
                metaHeader={toFriendlyTime(data?.Data[3].ScalarValue)}
              />
            );
          })
        )}
      </Segment>
    </Segment>
  );
}
