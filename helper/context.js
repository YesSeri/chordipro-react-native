import { createContext } from "react";

const SongContext = createContext({
	title: "",
	setTitle: () => { },
	content: "",
	setContent: () => { },
})

export default SongContext;