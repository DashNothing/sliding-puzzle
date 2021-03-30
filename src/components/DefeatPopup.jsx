/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";

import { Link } from "react-router-dom";
import Popup from "./Popup";

import replayIcon from "../img/icons/replay.svg";
import newPuzzleIcon from "../img/icons/puzzle.svg";

const DefeatPopup = ({ visible, moveCount }) => {
	const handleReplayClick = () => {
		window.location.reload();
	};

	return (
		<Popup visible={visible} title="Too bad!" color="#d82000">
			<ButtonContainer>
				<ReplayButton onClick={handleReplayClick}>
					<span>Shuffle and play again</span>
					<img src={replayIcon} alt="" />
				</ReplayButton>
				<NewPuzzleButton to="/browse">
					<span>Play another puzzle</span>
					<img src={newPuzzleIcon} alt="" />
				</NewPuzzleButton>
			</ButtonContainer>
		</Popup>
	);
};

const ReplayButton = styled.button`
	background-color: #8ada65;
`;

const NewPuzzleButton = styled(Link)`
	background-color: #65ccda;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	margin-top: 40px;

	button,
	${NewPuzzleButton} {
		display: flex;
		flex-direction: row;
		column-gap: 20px;
		align-items: center;
		justify-content: center;
		padding: 10px 35px;
		color: #fff;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 1rem;

		& img {
			height: 20px;
		}
	}
`;

export default DefeatPopup;
