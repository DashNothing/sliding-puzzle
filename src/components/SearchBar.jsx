/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
	const [inputText, setInputText] = useState("");

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				onSearch(inputText);
			}}
		>
			<input
				type="text"
				placeholder="Search puzzles..."
				onChange={(event) => setInputText(event.target.value)}
			/>
			<input type="submit" value="Search" />
		</form>
	);
};

export default SearchBar;
