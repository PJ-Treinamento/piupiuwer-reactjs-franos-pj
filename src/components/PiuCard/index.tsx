import React from "react";
import * as S from "./styles";

import api from "../../config/api";
import determineTimeElapsed from "./webscript";

import defaultProfilePicSrc from "../../assets/defaultprofilepic.svg";
import deleteIconSrc from "../../assets/deleteIcon.svg";
import likedIconSrc from "../../assets/likedIcon.svg";
import notLikedIconSrc from "../../assets/notLikedIcon.svg";
import saveIconSrc from "../../assets/saveIcon.svg";
import savedIconSrc from "../../assets/savedIcon.svg";



interface PiuInterface {
	id: string;
	user: UserInterface;
	likes: LikeInterface[];
	text: string;
	created_at: Date;
	updated_at: Date;
}

interface LikeInterface {
	id: string;
	user: UserInterface;
	piu: PiuInterface;
}

interface UserInterface {
	id: string;
	username: string;
	first_name: string;
	last_name: string;
	email: string;
	about: string;
	photo: string;
	pius: PiuInterface[];
	likes: PiuInterface[];
	following: UserInterface[];
	followers: UserInterface[];
	favorites: PiuInterface[];
}



const PiuCard:React.FC<PiuInterface> = (props) => {
	const user: UserInterface = props.user;
	// const likes: LikeInterface = props.likes;

	// Verifica se user ja tem foto de perfil
	let photoSrc;
	if (user.photo !== "") {
		photoSrc = user.photo;
	} else {
		photoSrc = defaultProfilePicSrc;
	}

	// Determina quanto tempo desde postagem do piu
	const timeElapsedStr = determineTimeElapsed(props.created_at)


	async function deletePiu(target: any) {

		console.log(target)
		const piu_id = target.id

		try {
			api.delete('/pius', {data: {piu_id}});
			console.log(piu_id);
			console.log("piu deletado");

		} catch (err) {
			console.log(err);
		}
	}



	return (
		<>
			<S.PiuContainer>
				<S.InfosContainer>
					<S.InfosSubContainer>

						<S.UserPhoto src = {photoSrc}></S.UserPhoto>

						<S.RealNameText>
							{user.first_name + " " + user.last_name}
						</S.RealNameText>

						<S.UsernameText>
							{"@" + user.username}
						</S.UsernameText>

						<S.TimeElapsed>
							{timeElapsedStr}
						</S.TimeElapsed>

					</S.InfosSubContainer>
				</S.InfosContainer>

				<S.PiuTextContainer>
					<S.PiuText>
						{props.text}
					</S.PiuText>

					<S.InteractionsContainer>

						<S.LikeContainer>

							<S.LikeIcon type = "image" src = {notLikedIconSrc}></S.LikeIcon>
							<S.LikeCounter></S.LikeCounter>

						</S.LikeContainer>

						<S.LikeCounter>
						</S.LikeCounter>

						<S.SaveIcon src = {saveIconSrc}></S.SaveIcon>

						<S.DeleteIcon id = {props.id} type = "image" src = {deleteIconSrc} onClick = {(e) => deletePiu(e.target)}></S.DeleteIcon>

					</S.InteractionsContainer>

				</S.PiuTextContainer>

			</S.PiuContainer>

		</>
	)};

export default PiuCard;
