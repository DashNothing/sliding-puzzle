/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Wrapper, Main, Heading } from "../components/EmotionComponents";
import PuzzleSizePopup from "../components/PuzzleSizePopup";

const BrowsePage = () => {
	const [sizePopupVisible, setSizePopupVisible] = useState(false);

	return (
		<Wrapper>
			<Main>
				<Heading>Browse puzzles</Heading>
				<button onClick={() => setSizePopupVisible(true)}>
					Pyramid puzzle
				</button>
				<PuzzleSizePopup
					visible={sizePopupVisible}
					onClose={() => setSizePopupVisible(false)}
				/>
			</Main>
		</Wrapper>
	);
};

export default BrowsePage;
