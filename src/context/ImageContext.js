import React from "react";

const ImageContext = React.createContext({
	imagePath: null,
	changeImagePath: () => {},
});

export default ImageContext;
