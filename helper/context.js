import { createContext } from "react";

const SongContext = createContext({
	title: "",
	setTitle: () => { },
	song: "",
	setSong: () => { },
})

export default SongContext;