/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";

import Popup from "./Popup";
import { NewPuzzleButton, ReplayButton } from "./EmotionComponents";

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

const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 10px;
`;

export default DefeatPopup;
