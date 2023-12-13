// Declare icons
const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Declare wrapper's icons element
const iconsRowEl = document.getElementById('iconsRow');

// divide icons for family
const animals = icons.filter(icon => icon.type === "animal" );
console.log(animals);

const users = icons.filter(icon => icon.type === "user");
console.log(users);

const vegetables = icons.filter(icon => icon.type === "vegetable");
console.log(vegetables);

// Generate color for icons family
const animalColor = Hex();
console.log(animalColor);
const vegetableColor = Hex();
console.log(vegetableColor);
const userColor = Hex();
console.log(userColor);

// Add card to the DOM
icons.forEach((icon)=>{
    const upperCaseName= icon.name.toUpperCase();
    const iconCardEl = 
    `<div id="${icon.name}" class="col py-2">
        <div class="card p-3 text-center">
            <div class="icon">
                <i class="fa-solid fa-${icon.name} fa-xl"></i>
            </div>
            <h6 class="name mt-2">${upperCaseName}</h6>
        </div>
    </div>`;
    iconsRowEl.insertAdjacentHTML('beforeend', iconCardEl);

    // Add random color to family's icon
    animals.forEach((icon)=>{
        icon.color = animalColor
    })
    
    vegetables.forEach((icon)=>{
        icon.color = vegetableColor
    })
    
    users.forEach((icon)=>{
        icon.color = userColor
    })
    
    const iconEl = document.querySelector(`.${icon.prefix}${icon.name}`);
    iconEl.style.color = `${icon.color}`
    
});

console.log(iconsRowEl);


// filter function
const formSelect = document.querySelector('.form-select');

console.log(formSelect);
formSelect.addEventListener('change' , function(){
    if(formSelect.value == '1'){
        filterOption(animals)
    } else if(formSelect.value == '2'){
        filterOption(vegetables);
    } else if(formSelect.value == '3'){
        filterOption(users);
    } else {
        filterOption(icons);
    }
})

console.log(Hex());

/**
 * ## generate a random color
 * @returns return a HEX color value
 */
function Hex() {
    let r = Math.floor(Math.random()*256).toString(16);
    if(r.length < 2){
        r = '0'+ r
    };
    let g = Math.floor(Math.random()*256).toString(16);
    if(g.length < 2){
        g = '0'+ g
    };
    let b = Math.floor(Math.random()*256).toString(16);
    if(b.length < 2){
        b= '0'+ b
    };

    return `#${r}${g}${b}`.toUpperCase()
    
}


/**
 * ## visualizza in pagina solo ciò che è contenuto nell'array
 * @param {Array} array insert the array you want to filter
 */
function filterOption(array){
    icons.forEach((icon)=>{
        const iconColEl = document.getElementById(`${icon.name}`);
        if(array.includes(icon)){
            iconColEl.classList.remove('d-none');
        } else {
            iconColEl.classList.add('d-none');
        }
    })
}


