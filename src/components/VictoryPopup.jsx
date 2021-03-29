/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled/macro";

import { Link } from "react-router-dom";
import Popup from "./Popup";

import starsIcon from "../img/icons/stars.svg";
import replayIcon from "../img/icons/replay.svg";
import newPuzzleIcon from "../img/icons/puzzle.svg";

const VictoryPopup = ({ visible, moveCount }) => {
	const handleReplayClick = () => {
		window.location.reload();
	};

	return (
		<Popup visible={visible} title="Good job!" color="#ffc700">
			<img
				css={css`
					width: 150px;
				`}
				src={starsIcon}
				alt=""
			/>
			<p>Puzzle completed in {moveCount} moves</p>
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

const NewPuzzleButton = styled(Link)`
	background-color: #65ccda;
`;

const ReplayButton = styled.button`
	background-color: #8ada65;
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

export default VictoryPopup;
