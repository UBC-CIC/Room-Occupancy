import * as React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";
import { Cards } from "../../components/Cards";
import { teamInformation } from "./TeamInformation";

interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <div className="container">
      <Header color="blue" as="h1" textAlign="center">
        <Header.Content>Our Team</Header.Content>
        <Header.Subheader color="blue">
          Our team comprises of five engineering students within the department
          of Electrical and Computer Engineering at The University of British
          Columbia
        </Header.Subheader>
      </Header>
      <div className="flexContainer">
        {teamInformation.map((member) => {
          return (
            <div className="flexItem" key={member.name}>
              <Cards
                imageURL={member.image}
                header={member.name}
                subheader={member.title}
                description={member.description}
                subDescription={null}
                icon="linkedin"
                url={member.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
