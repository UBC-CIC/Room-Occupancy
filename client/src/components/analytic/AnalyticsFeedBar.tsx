import * as React from "react";
import { Segment, Header } from "semantic-ui-react";
import { feedData } from "../../pages/analytics/mockData";
import { AnalyticsFeed } from "./AnalyticsFeed";

interface IAnalyticsFeedBarProps {}

export function AnalyticsFeedBar(props: IAnalyticsFeedBarProps) {
  return (
    <Segment>
      <Header as="h4">
        <Header.Content>
          Occupancy Feed
          <Header.Subheader>Real-time updates</Header.Subheader>
        </Header.Content>
      </Header>
      <Segment basic style={{ overflow: "auto", maxHeight: "75vh" }}>
        {feedData.map((data) => {
          return (
            <AnalyticsFeed
              summaryHeader={data.summaryHeader}
              summarySubheader={data.summarySubheader}
              summaryDate={data.summaryDate}
              icon={data.icon}
              metaHeader={data.metaHeader}
            />
          );
        })}
      </Segment>
    </Segment>
  );
}
