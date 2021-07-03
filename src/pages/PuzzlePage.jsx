/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";

import Board from "../components/Board";
import VictoryPopup from "../components/VictoryPopup";
import DefeatPopup from "../components/DefeatPopup";
import ReferenceButton from "../components/ReferenceButton";

import ImageProvider from "../context/ImageContext";

import imageData from "../model/ImageData";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

const PuzzlePage = () => {
	const [victoryPopupVisible, setVictoryPopupVisible] = useState(false);
	const [defeatPopupVisible, setDefeatPopupVisible] = useState(false);

	const [isPlaying, setIsPlaying] = useState(false);
	const [moveCount, setMoveCount] = useState(0);
	const [puzzleImagePath, setPuzzleImagePath] = useState(null);
	const [puzzleSize, setPuzzleSize] = useState(null);

	let imagePathFromContext = useContext(ImageProvider).imagePath;

	const query = useQuery();
	const history = useHistory();

	useEffect(() => {
		const queryId = query.get("id");
		const querySize = query.get("size");

		if (!queryId) return history.push("/");
		if (!querySize) return history.push("/");

		const imageId = queryId;
		const puzzleSize = parseInt(querySize);

		if (puzzleSize < 3 || puzzleSize > 5) return history.push("/");

		if (imageId === "custom") {
			setPuzzleImagePath(imagePathFromContext);
		} else {
			let image = imageData.find((data) => data.id === parseInt(imageId));
			if (!image) return history.push("/");
			setPuzzleImagePath(image.path);
		}

		setPuzzleSize(puzzleSize);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleTileMove = () => {
		setMoveCount((prevCount) => prevCount + 1);
	};

	return (
		<main css={mainStyle}>
			{puzzleSize === null || puzzleImagePath === null ? null : (
				<React.Fragment>
					<ButtonsContainer>
						{isPlaying ? (
							<GiveUpButton onClick={() => setDefeatPopupVisible(true)}>
								Give up
							</GiveUpButton>
						) : (
							<PlayButton onClick={() => setIsPlaying(true)}>Play</PlayButton>
						)}
						<ReferenceButton imagePath={puzzleImagePath} />
					</ButtonsContainer>
					<Board
						isPlaying={isPlaying}
						onPuzzleComplete={() => setVictoryPopupVisible(true)}
						onTileMove={handleTileMove}
						columnCount={parseInt(puzzleSize)}
						width={480}
						imagePath={puzzleImagePath}
					/>
				</React.Fragment>
			)}
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

const ButtonsContainer = styled.div`
	width: 480px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	margin-bottom: 30px;
`;

const PlayButton = styled.button`
	padding: 10px 30px;
	background-color: var(--blue);
	color: #fff;
	font-weight: bold;
	justify-self: center;
	grid-column: 2;
`;

const GiveUpButton = styled.button`
	padding: 10px 30px;
	background-color: var(--red);
	color: #fff;
	font-weight: bold;
	justify-self: center;
	grid-column: 2;
`;

export default PuzzlePage;
