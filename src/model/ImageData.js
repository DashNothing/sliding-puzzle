const path = "/images/";

const imageData = [
	{
		name: "Synthwave City",
		path: path + "synthwave-city.jpg",
	},
	{
		name: "Synthwave Skyline",
		path: path + "synthwave-skyline.jpg",
	},
	{
		name: "Neon Pyramids",
		path: path + "desert.jpg",
	},
	{
		name: "Watchtower",
		path: path + "tower.jpg",
	},
	{
		name: "Oriental Aurora",
		path: path + "aurora-oriental.jpg",
	},
	{
		name: "Neon Astronaut",
		path: path + "astronaut.jpg",
	},
	{
		name: "Forest Temple",
		path: path + "forest-temple.jpg",
	},
	{
		name: "Otherworld Moutains",
		path: path + "mountains.jpg",
	},
	{
		name: "Neon Ring",
		path: path + "neon-ring.png",
	},
	{
		name: "Serene Sunset",
		path: path + "sunset.jpg",
	},
	{
		name: "Black Hole",
		path: path + "black hole.jpg",
	},
	{
		name: "City Drive",
		path: path + "city drive.jpg",
	},
	{
		name: "Colorful Mountains",
		path: path + "colorful mountains.jpg",
	},
	{
		name: "Forest Sunset",
		path: path + "forest sunset.jpg",
	},
	{
		name: "Moon City",
		path: path + "moon city.jpg",
	},
	{
		name: "Morning Mountains",
		path: path + "morning mountains.jpg",
	},
	{
		name: "Saturn",
		path: path + "saturn.jpg",
	},
].map((item, index) => {
	item.id = index;
	return item;
});

export default imageData;
