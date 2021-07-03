/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState, useEffect, useRef } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";

const Board = ({
	isPlaying,
	onPuzzleComplete,
	onTileMove,
	columnCount,
	width,
	imagePath,
}) => {
	const [tileValues, setTileValues] = useState(
		[...Array(columnCount * columnCount - 1).keys()].concat([null])
	);
	const [imgWidth, setImgWidth] = useState(0);
	const [imgHeight, setImgHeight] = useState(0);

	const isShuffled = useRef(false);

	// Shuffle tiles after one second
	useEffect(() => {
		if (isPlaying === false) return;
		setTimeout(() => {
			let newTileValues = [...tileValues];
			newTileValues = shuffle(newTileValues);
			//newTileValues = [0, 1, 2, 3, 4, 5, 6, null, 7];
			setTileValues(newTileValues);
		}, 1000);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying]);

	// Load image and get its dimensions
	useEffect(() => {
		var img = new Image();

		img.src = imagePath;

		img.onload = function () {
			setImgWidth(img.width);
			setImgHeight(img.height);
		};
	}, [imagePath]);

	// On click move the tile if adjacent to empty slot
	const handleTileClick = (tileValue, index) => {
		if (isShuffled.current === true) {
			const isAdjacent = checkAdjacentToNull(tileValues, columnCount, index);

			if (isAdjacent) {
				let newTileValues = [...tileValues];
				const nullIndex = newTileValues.findIndex((value) => value == null);
				newTileValues[nullIndex] = tileValue;
				newTileValues[index] = null;

				setTileValues(newTileValues);
			}
		}
	};

	// After tile animation, check if puzzle is complete
	const handleTileAnimationComplete = () => {
		if (isShuffled.current === false) {
			isShuffled.current = true;
		} else {
			onTileMove();
		}
		const isPuzzleComplete = checkCompletion(tileValues);
		if (isPuzzleComplete) {
			onPuzzleComplete();
		}
	};

	const puzzleTiles = tileValues.map((tileValue, index) => {
		const tileSize = width / columnCount;

		let backgroundSize, backgroundPositionX, backgroundPositionY;
		if (imgWidth / imgHeight >= 1) {
			backgroundSize = `auto ${tileSize * columnCount}px`; // auto = imgWidth / imgHeight * tileSize * columnCount
			backgroundPositionX =
				((imgWidth / imgHeight) * tileSize * columnCount) / 2 +
				(tileSize * columnCount) / 2 -
				(tileValue % columnCount) * tileSize +
				"px";
			backgroundPositionY =
				-Math.floor(tileValue / columnCount) * tileSize + "px";
		} else {
			backgroundSize = `${tileSize * columnCount}px auto`; // auto = imgWidth / imgHeight * tileSize * columnCount
			backgroundPositionX = -(tileValue % columnCount) * tileSize + "px";
			backgroundPositionY =
				((imgHeight / imgWidth) * tileSize * columnCount) / 2 +
				(tileSize * columnCount) / 2 -
				Math.floor(tileValue / columnCount) * tileSize +
				"px";
		}

		const tileStyle = css`
			width: ${tileSize}px;
			height: ${tileSize}px;
			background-image: ${tileValue == null ? `none` : `url("${imagePath}")`};
			background-size: /*auto ${tileSize * columnCount}px*/ ${backgroundSize};
			background-position-x: /* calc(
				${((imgWidth / imgHeight) * tileSize * columnCount) / 2}px +
					${tileSize * columnCount}px / 2 -
					${(tileValue % columnCount) * tileSize}px
			) */ ${backgroundPositionX};
			background-position-y: ${backgroundPositionY};
			cursor: pointer;
			z-index: ${tileValue == null ? `-1` : `1`};
		`;

		return (
			<Flipped
				key={tileValue}
				flipId={tileValue}
				onComplete={handleTileAnimationComplete}
			>
				<div
					css={tileStyle}
					onClick={() => handleTileClick(tileValue, index)}
				></div>
			</Flipped>
		);
	});

	return (
		<Flipper
			flipKey={tileValues}
			css={css`
				width: ${width}px;
				height: ${width}px;
				display: grid;
				grid-template-columns: repeat(${columnCount}, 1fr);
			`}
		>
			{puzzleTiles}
		</Flipper>
	);
};

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function checkAdjacentToNull(array, columnCount, index) {
	// Check left adjacency
	if (
		index > 0 &&
		(index - 1) % columnCount !== columnCount - 1 &&
		array[index - 1] == null
	) {
		return true;
	}

	// Check right adjacency
	if (
		index < columnCount * columnCount &&
		(index + 1) % columnCount !== 0 &&
		array[index + 1] == null
	)
		return true;

	// Check up adjacency
	if (Math.floor(index / columnCount) > 0 && array[index - columnCount] == null)
		return true;

	// Check down adjacency
	if (
		Math.floor(index / columnCount) < columnCount - 1 &&
		array[index + columnCount] == null
	) {
		return true;
	}

	return false;
}

function checkCompletion(array) {
	let isComplete = true;

	for (let i = 0; i < array.length; i++) {
		if (
			(array[i] > array[i + 1] && array[i + 1] !== null) ||
			(i !== array.length - 1 && array[i] == null)
		) {
			isComplete = false;
			break;
		}
	}

	return isComplete;
}

export default Board;
