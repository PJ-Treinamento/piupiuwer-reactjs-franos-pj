import styled from "styled-components";

export const SidebarWrapper = styled.div`
  padding: 2%;
  padding-right: 3%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #8b6fe3;
`;

export const MenusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  font-family: "Poppins", sans-serif;
  color: white;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfilePic = styled.img`
  max-width: 35%;
  height: auto;
`;

export const ProfileText = styled.p`
  font-weight: bold;
  font-size: 150%;
`;

export const PageSelectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  margin-top: 20%;
  margin-bottom: 20%;
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  margin-top: 2%;
  margin-bottom: 2%;
`;

export const HomeIcon = styled.img`
  width: 35%;
  height: auto;
`;

export const HomeText = styled.p`
  font-weight: bold;
  text-decoration: underline;

  margin-left: 20%;
  font-size: 140%;
`;

export const PageText = styled.p`
  margin-left: 20%;
  font-size: 140%;
`;

export const NotificationIcon = styled.img`
  width: 20%;
  height: auto;
`;

export const TrendingIcon = styled.img`
  width: 25%;
  height: auto;
`;

export const ToolIcon = styled.img`
  width: 20%;
  height: auto;
`;

export const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  background-color: white;
  border-radius: 14px;

  width: 94%;

  padding-right: 2%;
  padding-left: 4%;
  padding-top: 3%;
  padding-bottom: 3%;
`;

export const SearchIcon = styled.img`
  width: 10%;
  height: auto;

  color: #8b6fe3;
`;

export const PiuSearchTextArea = styled.input`
  border: none;
  outline: none;

  padding: 0%;
  margin: 0%;
  margin-left: 5%;
  width: 95%;

  color: #4d4949;

  font-style: italic;
`;

export const PiupiuwerLogo = styled.img`
  width: 20%;
  height: auto;
`;
