/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

import searchIcon from "../img/icons/search.svg";

const SearchBar = ({ onSearch }) => {
	const [inputText, setInputText] = useState("");

	return (
		<Form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(inputText);
			}}
		>
			<InputField
				type="text"
				placeholder="Search puzzles..."
				onChange={(event) => setInputText(event.target.value)}
			/>
			<SubmitButton type="submit">
				<img src={searchIcon} alt="search" />
			</SubmitButton>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
	border-radius: 100px;
	overflow: hidden;
`;

const InputField = styled.input`
	padding: 0px 20px;
	width: 250px;
	height: 40px;
	font-size: 1rem;
	border-radius: 100px 0 0 100px;
	outline: none;
	border: none;
`;

const SubmitButton = styled.button`
	position: relative;
	height: 40px;
	width: 60px;
	font-size: 1rem;

	border: none;
	background-color: var(--blue);

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 25px;
		height: 25px;
	}
`;

export default SearchBar;
