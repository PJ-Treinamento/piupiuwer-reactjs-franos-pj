import React, { useState, useEffect } from "react";
import * as S from "./styles";

import defaultProfilePicSrc from "../../assets/defaultprofilepic.svg";
import imageIconSrc from "../../assets/imageIcon.svg";
import attachmentIconSrc from "../../assets/attachmentIcon.svg";
import emojiIconSrc from "../../assets/emojiIcon.svg";

interface PiuWriterInterface {
  userPhoto: string;
}

const PiuWriter: React.FC<PiuWriterInterface> = ({ userPhoto }) => {
  const [charContador, set_charContador] = useState("0/140");

  function muda_tamanho_piu(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const tamanho = e.target.value.length;
    set_charContador(tamanho.toString() + "/140");
  }

  function posta_piu(e: React.FormEvent<HTMLButtonElement>) {
    if (parseInt(charContador) == 0) {
      set_charContador("Piu vazio!");
    } else if (parseInt(charContador) > 140) {
      set_charContador("Piu grande demais!");
    } else {
      set_charContador("0/140");
    }
  }

  return (
    <>
      <S.WriterWrapper>
        <S.ProfilePicContainer>
          <S.ProfilePic src={userPhoto}></S.ProfilePic>
        </S.ProfilePicContainer>

        <S.WriterMenu>
          <form>
            <S.TextArea
              rows={5}
              cols={40}
              placeholder={"Digite um piu..."}
              onChange={(e) => muda_tamanho_piu(e)}
            ></S.TextArea>
          </form>

          <S.BottomMenu>
            <S.InteractionsWrapper>
              <S.ImageIcon src={imageIconSrc}></S.ImageIcon>
              <S.AttachmentIcon src={attachmentIconSrc}></S.AttachmentIcon>
              <S.EmojiIcon src={emojiIconSrc}></S.EmojiIcon>
            </S.InteractionsWrapper>

            <S.CharCounter>{charContador}</S.CharCounter>
          </S.BottomMenu>
        </S.WriterMenu>

        <S.SendWrapper>
          <S.SendButton onClick={(e) => posta_piu(e)}>Postar</S.SendButton>
        </S.SendWrapper>
      </S.WriterWrapper>
    </>
  );
};

export default PiuWriter;
