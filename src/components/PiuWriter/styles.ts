import styled from "styled-components";


export const WriterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    
    background-color: rgba(122, 152, 244, 0.8);

    margin: 5%;
    padding: 8px;

    border-radius: 16px;

    width: 600px;

    box-shadow: 2px 2px 4px -2px black;
`;

export const ProfilePicContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    height: 100%;
    width: 32px;

    padding-top: 16px;
`;

export const ProfilePic = styled.img`
    width: 24px;
    height: auto;
`;

export const WriterMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: baseline;

    height: 100%;
    width: 460px;
`;

export const TextArea = styled.textarea`
    font-family: 'Public Sans', sans-serif;
    color: white;
    /* color: #494444; */
    font-size: 16px;

    background-color: rgba(122, 152, 244, 0.8);

    resize: none;
    outline: none;
    overflow: auto;
    border: none;

    padding: 16px;
    margin: 2%;
    border-radius: 16px;
    width: 100%;
`;

export const BottomMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    margin-left: 24px;
    margin-right: 8px;
`;

export const InteractionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100px;
    margin-right: 160px;
`;

export const ImageIcon = styled.img`
    width: 20px;
    height: auto;
`;

export const AttachmentIcon = styled.img`
    width: 12px;
    height: auto;
`;

export const EmojiIcon = styled.img`
    width: 20px;
    height: auto;
`;

export const CharCounter = styled.p`
    font-family: 'Public Sans', sans-serif;
`;

export const SendWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    height: 100%;
    width: 108px;
`;

export const SendButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: large;
    font-weight: bold;

    background-color: #C287FA;
    color: white;

    border: none;
    border-radius: 24px;

    box-shadow: 1px 1px 4px -2px black;
`;