const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

const iconContainer = document.getElementById("my_icons_container");

// Milestone 2
// Coloriamo le icone per tipo

const typesColorsArray = randomColorsTypeGenerator(icons,"type")

iconsColorAdder(icons,typesColorsArray)

printElements(icons,iconContainer);


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone



// FUNCTIONS 
function printElements(array,container) {
	array.forEach((element) => {
		const {name,prefix,family,color} = element;
		container.innerHTML += `<div class="col-3">
		<i class="${family} ${prefix}${name}" style="color:${color}">
		<h4>${name}</h4>
		</div>`
	})
}


function randomColorsTypeGenerator(array,property) {
	const typesArray = [];

	array.forEach((element) => {
		const {type} = element;
		const index = typesArray.findIndex(element => element["type"] == type)
		if (index == -1) {
			typesArray.push({
				type: element[property], 
				color: "#" + (Math.floor(Math.random()*16777215).toString(16).padStart(6, '0'))
			})
		} 
	})
	return typesArray;
}


function iconsColorAdder(array1,array2) {
	array1.forEach((element1) => {
		array2.forEach((element2) => {
			if (element1.type == element2.type) {
				element1.color = element2.color
			}
		})
	})
}