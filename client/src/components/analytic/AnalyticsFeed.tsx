import * as React from "react";
import { Divider, Feed, Icon, Segment, SemanticICONS } from "semantic-ui-react";

interface IAnalyticsFeedProps {
  summaryHeader: string;
  summarySubheader: string;
  summaryDate: string;
  icon: SemanticICONS | undefined;
  metaHeader: string;
}

export function AnalyticsFeed(props: IAnalyticsFeedProps) {
  const { summaryHeader, summarySubheader, summaryDate, icon, metaHeader } =
    props;

  return (
    <Feed>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Feed.User>{summaryHeader}</Feed.User>
            {" " + summarySubheader}
            <Feed.Date>{summaryDate}</Feed.Date>
          </Feed.Summary>
          <Feed.Meta>
            <Feed.Like>
              <Icon name={icon} />
              {metaHeader}
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
      <Divider />
    </Feed>
  );
}
