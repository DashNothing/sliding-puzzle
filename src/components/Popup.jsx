/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled/macro";

const Popup = ({ visible, title, color = "#000", children }) => {
	return (
		<Overlay css={visible ? visibleStyleOverlay : null}>
			<Container css={visible ? visibleStylePopup : null}>
				<p className="title" style={{ color: color }}>
					{title}
				</p>
				{children}
			</Container>
		</Overlay>
	);
};

const Overlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	background-color: rgba(0, 0, 0, 0.6);
	transition: all 0.2s ease;
	z-index: 10;

	visibility: hidden;
	opacity: 0;
`;

const Container = styled.div`
	position: relative;
	top: -100vh;
	padding: 60px 100px 30px;
	min-width: 600px;
	background-color: #eee;
	border: 8px solid #fff;
	border-radius: 40px;
	transition: all 0.2s ease;

	.title {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -50%);
		display: inline-block;
		padding: 10px 0px;
		width: 60%;
		background-color: #fff;
		border-radius: 50px;
		font-weight: 800;
		font-size: 2rem;
	}
`;

const visibleStyleOverlay = css`
	visibility: visible;
	opacity: 1;
`;

const visibleStylePopup = css`
	top: 0;
`;

export default Popup;
