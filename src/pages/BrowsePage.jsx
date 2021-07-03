/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";

import { Wrapper, Main, Heading } from "../components/EmotionComponents";
import PuzzleSizePopup from "../components/PuzzleSizePopup";
import SearchBar from "../components/SearchBar";

import imageData from "../model/ImageData";

const BrowsePage = () => {
	const [imageId, setImageId] = useState(null);
	const [sizePopupVisible, setSizePopupVisible] = useState(false);
	const [filteredImageData, setFilteredImageData] = useState(imageData);

	const onPuzzleClick = (imgId) => {
		setImageId(imgId);
		setSizePopupVisible(true);
	};

	const handleSearchBarSubmit = (query) => {
		console.log("SSearch for " + query);

		const newImageData = imageData.filter((data) =>
			data.name.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredImageData(newImageData);
	};

	useEffect(() => {}, [filteredImageData]);

	const puzzleTiles = filteredImageData.map((data) => {
		const TileComponent = ({ title, imgId, imgPath, id }) => {
			return (
				<Tile onClick={() => onPuzzleClick(imgId)}>
					<img src={imgPath} alt={title} />
					<p>{title}</p>
				</Tile>
			);
		};

		return (
			<TileComponent
				title={data.name}
				imgPath={data.path}
				key={data.name}
				imgId={data.id}
			/>
		);
	});

	return (
		<Wrapper>
			<Main>
				<Heading>Browse puzzles</Heading>
				<SearchBar onSearch={handleSearchBarSubmit} />
				<Grid>{puzzleTiles}</Grid>
				<PuzzleSizePopup
					visible={sizePopupVisible}
					onClose={() => setSizePopupVisible(false)}
					imageId={imageId}
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
	top: 0;
	width: 100%;
	height: 200px;
	text-align: center;
	border: 8px solid #fff;
	box-shadow: 0 4px 32px rgba(0, 0, 0, 0.15);
	transition: transform 0.5s ease, top 0.2s ease-in;

	:hover {
		transform: scale(1.02) rotate(2deg);
		top: -6px;
	}

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
