# Chordipro

It is a program for editing and viewing chordpro format songs. I have implemented a chordpro parser, that can turn chordpro format songs into a useable, easy to work with object. This I then use to render it to HTML in Electron JS.

## Chordpro Format Example

```
{title: Let it Be}
{subtitle: The Beatles}
Wh[G]en I find myself in t[D]imes of trouble, Mo[Em]ther Mary c[C]omes to me
```

This is a minimal example of a song. This will be transformed into something to play music after. The title should be styled appropriately and the chords should be placed above the word after where they occur in the song.  
For example: 

<div style="background: white; color:black; font-family: monospace; border: solid 5px #888;" class="custom">
	<div style="margin:10px">
		<div style="font-size: 25px;">Let it Be</div>
		<div style="font-size: 20px; font-style: italic">The Beatles</div>
		<div style="white-space: pre;">        G              D                 Em          C</div>
		<div>
		When I find myself in times of trouble, Mother Mary comes to me
		</div>
	</div>
</div>

## Installation

```bash
git clone https://github.com/YesSeri/chordipro-react-native.git
yarn install
# For web version
yarn web
# If you have android phone connected
yarn android
```
## Tech Stack

- React-Native 
- Async-Storage
- React-Navigation

## Contributing

Contributions are always welcome!

Contact me for invite to the Google Playt beta testing program.

Contact me at [henrik.zenkert@gmail.com](mailto:henrik.zenkert@gmail.com)

## Roadmap

-  The look of the viewer is not optimal. Change font maybe, and work with how big the margins inbetween comment and music should be. 

- A search function will be implemented. A backend with a database of songs will be created. Most likely written in Java.  

## Authors

[Henrik Zenkert](https://www.github.com/YesSeri)