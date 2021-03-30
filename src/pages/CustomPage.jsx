/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import { useState, useContext } from "react";

import { Wrapper, Main, Heading } from "../components/EmotionComponents";
import PuzzleSizePopup from "../components/PuzzleSizePopup";

import ImageContext from "../context/ImageContext";

import photoIcon from "../img/icons/photo.svg";

const CustomPage = () => {
	const [sizePopupVisible, setSizePopupVisible] = useState(false);

	const changeImagePath = useContext(ImageContext).changeImagePath;

	const onInputChange = (event) => {
		const file = event.target.files[0];

		let reader = new FileReader();

		reader.onload = (e) => {
			console.log("File read");
			changeImagePath(e.target.result);
			setSizePopupVisible(true);
		};

		reader.readAsDataURL(file);
	};

	return (
		<Wrapper>
			<Main>
				<Heading>Choose a photo and play</Heading>
				<label htmlFor="uploadImageInput" css={labelStyle}>
					<img src={photoIcon} alt="upload" />
				</label>
				<input
					type="file"
					id="uploadImageInput"
					onChange={(event) => onInputChange(event)}
				/>
				<PuzzleSizePopup
					visible={sizePopupVisible}
					onClose={() => setSizePopupVisible(false)}
				/>
			</Main>
		</Wrapper>
	);
};

const labelStyle = css`
	display: inline-block;
	background-color: #eee;
	padding: 80px;
	cursor: pointer;

	img {
		width: 60px;
	}
`;

export default CustomPage;
