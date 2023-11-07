import Woody from "../../assets/images/team/woody.png";
import Colin from "../../assets/images/team/colin.jpg";
import Steve from "../../assets/images/team/steve.jpg";
import Cassiel from "../../assets/images/team/cassiel.png";
import Danny from "../../assets/images/team/danny.png";

interface ITeamInformation {
  name: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const teamInformation: ITeamInformation[] = [
  {
    name: "Colin Pereira",
    title: "Electrical Engineer",
    description:
      "Interested in web development. Strong believer of success through collaboration!",
    image: Colin,
    url: "https://www.linkedin.com/in/colinpereira/",
  },
  {
    name: "Cassiel Jung",
    title: "Computer Engineer",
    description: "Enjoys working with software.",
    image: Cassiel,
    url: "https://www.linkedin.com/in/cassieljung-ml-sw/",
  },
  {
    name: "Woody Chang",
    title: "Electrical Engineer",
    description: "Enjoys working with software.",
    image: Woody,
    url: "https://www.linkedin.com/in/woody-chang-119117158/",
  },
  {
    name: "Danny Song",
    title: "Electrical Engineer",
    description: "Enjoys working with software.",
    image: Danny,
    url: "https://www.linkedin.com/in/minwo02001/",
  },
  {
    name: "Steve He",
    title: "Computer Engineer",
    description: "Enjoys working with software.",
    image: Steve,
    url: "https://www.linkedin.com/in/he-steve/",
  },
];
