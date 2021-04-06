/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

import Board from "../components/Board";
import VictoryPopup from "../components/VictoryPopup";
import DefeatPopup from "../components/DefeatPopup";
import ReferenceButton from "../components/ReferenceButton";

const PuzzlePage = ({ match }) => {
	const [victoryPopupVisible, setVictoryPopupVisible] = useState(false);
	const [defeatPopupVisible, setDefeatPopupVisible] = useState(false);

	const [isPlaying, setIsPlaying] = useState(false);

	const [moveCount, setMoveCount] = useState(0);

	const handleTileMove = () => {
		setMoveCount((prevCount) => prevCount + 1);
	};

	return (
		<main css={mainStyle}>
			<h1 css={headingStyle}>Sliding Puzzle</h1>
			<ButtonsContainer>
				{isPlaying ? (
					<GiveUpButton onClick={() => setDefeatPopupVisible(true)}>
						Give up
					</GiveUpButton>
				) : (
					<PlayButton onClick={() => setIsPlaying(true)}>Play</PlayButton>
				)}
				<ReferenceButton />
			</ButtonsContainer>
			<Board
				isPlaying={isPlaying}
				onPuzzleComplete={() => setVictoryPopupVisible(true)}
				onTileMove={handleTileMove}
				columnCount={parseInt(match.params.size)}
				width={480}
			/>
			<VictoryPopup visible={victoryPopupVisible} moveCount={moveCount} />
			<DefeatPopup visible={defeatPopupVisible} />
		</main>
	);
};

const mainStyle = css`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
	text-align: center;
	padding: 60px;
`;

const headingStyle = css`
	margin-bottom: 40px;
`;

const ButtonsContainer = styled.div`
	width: 480px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	margin-bottom: 30px;
`;

const PlayButton = styled.button`
	padding: 10px 30px;
	background-color: #8ada65;
	color: #fff;
	font-weight: bold;
	justify-self: center;
	grid-column: 2;
`;

const GiveUpButton = styled.button`
	padding: 10px 30px;
	background-color: #d62b00;
	color: #fff;
	font-weight: bold;
	justify-self: center;
	grid-column: 2;
`;

export default PuzzlePage;
