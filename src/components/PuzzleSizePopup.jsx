/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

import { Link } from "react-router-dom";

import Popup from "./Popup";

const PuzzleSizePopup = ({ visible, onClose, imageId }) => {
	return (
		<Popup visible={visible} title="Select puzzle size">
			<CloseButton onClick={onClose} />
			<Grid>
				<Option to={`/puzzle?id=${imageId}&size=3`} color="var(--yellow)">
					<p css={sizeStyle}>3x3</p>
					<p css={difficultyStyle}>easy</p>
				</Option>
				<Option to={`/puzzle?id=${imageId}&size=4`} color="var(--orange)">
					<p css={sizeStyle}>4x4</p>
					<p css={difficultyStyle}>medium</p>
				</Option>
				<Option to={`/puzzle?id=${imageId}&size=5`} color="var(--red)">
					<p css={sizeStyle}>5x5</p>
					<p css={difficultyStyle}>hard</p>
				</Option>
			</Grid>
		</Popup>
	);
};

const CloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(50%, -50%);
	width: 50px;
	height: 50px;
	background-color: var(--red);
	border-radius: 100%;
	color: #fff;
	cursor: pointer;

	::after {
		content: "x";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-weight: bold;
		font-size: 25px;
	}
`;

const Grid = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 20px;
`;

const Option = styled(Link)`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 160px;
	background-color: #fff;
	border-radius: 100%;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	user-select: none;
	cursor: pointer;
	overflow: hidden;
	transition: all 0.15s ease;
	z-index: 1;

	::before {
		content: "";
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 0px;
		height: 0px;
		background-color: ${(props) => props.color};
		border-radius: 100%;
		transition: all 0.2s ease;
		z-index: -1;
	}

	:hover {
		color: #fff;

		::before {
			width: 100%;
			height: 100%;
		}
	}
`;

const sizeStyle = css`
	font-size: 2rem;
	font-weight: bold;
`;

const difficultyStyle = css`
	position: absolute;
	bottom: 10px;
	font-size: 1.1rem;
	text-transform: uppercase;
`;

export default PuzzleSizePopup;
