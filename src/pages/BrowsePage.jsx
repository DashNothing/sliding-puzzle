/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState, useContext } from "react";

import { Wrapper, Main, Heading } from "../components/EmotionComponents";
import PuzzleSizePopup from "../components/PuzzleSizePopup";

import ImageContext from "../context/ImageContext";

const desert = "/images/desert.jpg";
const tower = "/images/tower.jpg";

const dummyData = [desert, tower];

const BrowsePage = () => {
	const [sizePopupVisible, setSizePopupVisible] = useState(false);

	const changeImagePath = useContext(ImageContext).changeImagePath;

	const onPuzzleClick = (imgPath) => {
		changeImagePath(imgPath);
		setSizePopupVisible(true);
	};

	const renderPuzzleTiles = dummyData.map((imgPath) => {
		const TileComponent = ({ title, imgPath }) => {
			return <button onClick={() => onPuzzleClick(imgPath)}>{title}</button>;
		};

		return <TileComponent title={imgPath} imgPath={imgPath} key={imgPath} />;
	});

	return (
		<Wrapper>
			<Main>
				<Heading>Browse puzzles</Heading>
				{renderPuzzleTiles}
				<PuzzleSizePopup
					visible={sizePopupVisible}
					onClose={() => setSizePopupVisible(false)}
				/>
			</Main>
		</Wrapper>
	);
};

export default BrowsePage;
