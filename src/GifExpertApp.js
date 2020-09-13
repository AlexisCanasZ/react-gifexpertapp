import React, { useState } from 'react';
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

	const [categorias, setCategorias] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	setCategorias(cats => [...categorias, 'HunterXHunter']);
	// };
	
	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategory={ setCategorias } />
			<hr/>
			
			<ol>
				{categorias.map( categoria => (
					<GifGrid key={categoria}
							 categoria={categoria}></GifGrid>
				))}
			</ol>
		</>
	);
}

export default GifExpertApp;
