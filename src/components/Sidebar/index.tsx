import React from "react";
import * as S from "./styles";

import profilePicSrc from "../../assets/defaultprofilepic.svg";
import homeIconSrc from "../../assets/homeIcon.svg";
import notificationIconSrc from "../../assets/notificationIcon.svg";
import trendingIconSrc from "../../assets/trendingIcon.svg";
import toolsIconSrc from "../../assets/toolsIcon.svg";
import searchIconSrc from "../../assets/searchIcon.svg";
import piupiuwerLogoSrc from "../../assets/piupiuwerLogo.svg";

const Sidebar = () => {
  return (
    <>
      <S.SidebarWrapper>
        <S.MenusWrapper>
          <S.ProfileWrapper>
            <S.ProfilePic src={profilePicSrc}></S.ProfilePic>
            <S.ProfileText>Meu Perfil</S.ProfileText>
          </S.ProfileWrapper>

          <S.PageSelectionWrapper>
            <S.PageContainer>
              <S.HomeIcon src={homeIconSrc}></S.HomeIcon>
              <S.HomeText>Home</S.HomeText>
            </S.PageContainer>

            <S.PageContainer>
              <S.NotificationIcon
                src={notificationIconSrc}
              ></S.NotificationIcon>
              <S.PageText>Notificações</S.PageText>
            </S.PageContainer>

            <S.PageContainer>
              <S.TrendingIcon src={trendingIconSrc}></S.TrendingIcon>
              <S.PageText>Trending</S.PageText>
            </S.PageContainer>

            <S.PageContainer>
              <S.ToolIcon src={toolsIconSrc}></S.ToolIcon>
              <S.PageText>Ferramentas</S.PageText>
            </S.PageContainer>
          </S.PageSelectionWrapper>

          <S.SearchBar>
            <S.SearchIcon src={searchIconSrc}></S.SearchIcon>

            <form>
              <S.PiuSearchTextArea placeholder="Procure um piu aqui"></S.PiuSearchTextArea>
            </form>
          </S.SearchBar>
        </S.MenusWrapper>

        <S.PiupiuwerLogo src={piupiuwerLogoSrc}></S.PiupiuwerLogo>
      </S.SidebarWrapper>
    </>
  );
};

export default Sidebar;
