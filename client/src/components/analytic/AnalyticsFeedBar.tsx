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
        {/* TODO: Update feedData to be actual data from API */}
        {feedData.map((data, key) => {
          return (
            <AnalyticsFeed
              key={key}
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
