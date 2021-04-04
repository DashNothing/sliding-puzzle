/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled/macro";

import Popup from "./Popup";
import { NewPuzzleButton, ReplayButton } from "./EmotionComponents";

import replayIcon from "../img/icons/replay.svg";
import newPuzzleIcon from "../img/icons/puzzle.svg";

const VictoryPopup = ({ visible, moveCount }) => {
	const handleReplayClick = () => {
		window.location.reload();
	};

	return (
		<Popup visible={visible} title="Good job!" color="#ffc700">
			<Message>Puzzle completed in {moveCount} moves</Message>
			<ButtonContainer>
				<ReplayButton onClick={handleReplayClick}>
					<span>Shuffle and play again</span>
					<img src={replayIcon} alt="" />
				</ReplayButton>
				<NewPuzzleButton to="/">
					<span>Play another puzzle</span>
					<img src={newPuzzleIcon} alt="" />
				</NewPuzzleButton>
			</ButtonContainer>
		</Popup>
	);
};

const Message = styled.p`
	font-weight: bold;
	margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export default VictoryPopup;
