import React from "react";
import { Segment, Header, Progress } from "semantic-ui-react";
import { useGetOccupancy } from "../../shared/hooks/useGetOccupancy";
import { AnalyticsFeed } from "./AnalyticsFeed";
import { toFriendlyTime, toFeedTime } from "../../shared/helpers/utility";

export function AnalyticsFeedBar(props: any) {
  const { occupancyList } = useGetOccupancy();
  console.log(occupancyList);
  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          Occupancy Feed
          <Header.Subheader>Real time updates</Header.Subheader>
        </Header.Content>
      </Header>
      <Segment basic style={{ overflow: "auto", maxHeight: "75vh" }}>
        {occupancyList.length === 0 ? (
          <Progress percent={100} indicating>
            Loading
          </Progress>
        ) : (
          occupancyList.map((data: any, key: any) => {
            // shows only the 20 latest events
            return (
              <AnalyticsFeed
                key={key}
                summaryHeader={
                  "Camera " + data?.Data[0].ScalarValue + " Occupancy:"
                }
                summarySubheader={data?.Data[4].ScalarValue}
                summaryDate={toFeedTime(data?.Data[3].ScalarValue)}
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
