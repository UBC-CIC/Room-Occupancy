import * as React from "react";
import { Card, Icon, Image, SemanticICONS } from "semantic-ui-react";
import "../../../App.css";

export interface ICardsProps {
  imageURL: string;
  header: string;
  subheader: string;
  description: string;
  subDescription: string | null;
  icon: SemanticICONS | undefined;
  url: string;
}

export function Cards(props: ICardsProps) {
  const {
    header,
    imageURL,
    subheader,
    description,
    subDescription,
    icon,
    url,
  } = props;
  return (
    <Card>
      <Image src={imageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{header}</Card.Header>
        <Card.Meta>
          <span className="date">{subheader}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={url} target="_blank" rel="noopener">
          <Icon name={icon} />
          {subDescription}
        </a>
      </Card.Content>
    </Card>
  );
}
