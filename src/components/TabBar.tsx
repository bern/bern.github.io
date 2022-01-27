import { Link } from "react-router-dom";
import styled from "styled-components";

type TabType = {
  title: string;
  url: string;
};

const TAB_LIST: TabType[] = [
  { title: "About Me", url: "about-me" },
  { title: "Blog", url: "blog" },
  { title: "Project Highlights", url: "project-highlights" },
  //   { title: "Language Study", url: "language-study" },
  { title: "Contact", url: "contact" },
];

export const TabBar = () => {
  return (
    <NavContainer>
      <YaBoy>
        <Link to="/home">it's ya boy</Link>
      </YaBoy>
      <TabsContainer>
        {TAB_LIST.map((tab: TabType) => (
          <TabLink to={tab.url} key={tab.title}>
            {tab.title}
          </TabLink>
        ))}
      </TabsContainer>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  background-color: #fbfbff;
  padding: 24px 144px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const YaBoy = styled.div`
  flex-basis: 50%;
  font-weight: 600;
  font-size: 1.5rem;
`;

const TabsContainer = styled.div`
  max-width: 50%;
`;

const TabLink = styled(Link)`
  cursor: pointer;
  margin-right: 24px;

  &:hover {
    color: #9900cc;
  }
`;
