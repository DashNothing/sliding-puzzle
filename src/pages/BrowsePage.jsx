/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useContext } from "react";

import { Wrapper, Main, Heading } from "../components/EmotionComponents";
import PuzzleSizePopup from "../components/PuzzleSizePopup";

import ImageContext from "../context/ImageContext";
import imageData from "../model/ImageData";

const BrowsePage = () => {
	const [sizePopupVisible, setSizePopupVisible] = useState(false);

	const changeImagePath = useContext(ImageContext).changeImagePath;

	const onPuzzleClick = (imgPath) => {
		changeImagePath(imgPath);
		setSizePopupVisible(true);
	};

	const puzzleTiles = imageData.map((data) => {
		const TileComponent = ({ title, imgPath }) => {
			return (
				<Tile onClick={() => onPuzzleClick(imgPath)}>
					<img src={imgPath} />
					<p>{title}</p>
				</Tile>
			);
		};

		return (
			<TileComponent title={data.name} imgPath={data.path} key={data.name} />
		);
	});

	return (
		<Wrapper>
			<Main>
				<Heading>Browse puzzles</Heading>
				<Grid>{puzzleTiles}</Grid>
				<PuzzleSizePopup
					visible={sizePopupVisible}
					onClose={() => setSizePopupVisible(false)}
				/>
			</Main>
		</Wrapper>
	);
};

const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(3, 200px);
	row-gap: 60px;
	column-gap: 50px;
	justify-content: center;
`;

const Tile = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	text-align: center;
	border: 8px solid #fff;
	box-shadow: 0 4px 32px rgba(0, 0, 0, 0.25);

	img,
	p {
		cursor: pointer;
	}

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		font-weight: 600;
		color: #333;
		background-color: #fff;
		border-radius: 100px;
		padding: 8px 15px;
		min-width: 80%;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 50%);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	}
`;

export default BrowsePage;
