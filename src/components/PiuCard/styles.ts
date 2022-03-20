import styled from "styled-components";

export const PiuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;

  background-color: #f8f8f8;

  border-radius: 16px;
  width: 600px;

  margin-bottom: 4%;
  box-shadow: 1px 1px 4px -2px black;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-family: "Poppins", sans-serif;

  padding-left: 4%;
  padding-right: 2%;
  width: 94%;
`;

export const InfosSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const UserPhoto = styled.img`
  width: 28px;
  height: auto;
  border-radius: 50%;

  margin-right: 12px;
`;

export const RealNameText = styled.p`
  font-size: large;
  font-weight: bold;

  color: black;

  margin-right: 12px;
`;

export const UsernameText = styled.p`
  color: #7e7979;

  margin-right: 12px;
`;

export const TimeElapsed = styled.p`
  color: #7e7979;
  font-weight: bold;
  font-size: large;
`;

export const PiuTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;

  font-family: "Poppins", sans-serif;

  padding-left: 11%;
  padding-right: 4%;
  width: 85%;
`;

export const PiuText = styled.p`
  font-family: "Public Sans", sans-serif;
  font-size: larger;
`;

export const InteractionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 40%;
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const LikeIcon = styled.input`
  width: 24px;
  height: auto;
  margin-right: 8px;
`;

export const LikeCounter = styled.img`
  font-family: "Poppins", sans-serif;
  color: #c287fa;

  font-size: larger;
`;

export const SaveIcon = styled.img`
  width: 20px;
  height: auto;
`;

export const DeleteIcon = styled.input`
  width: 20px;
  height: auto;
`;
