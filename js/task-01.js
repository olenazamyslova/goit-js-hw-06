const listOfItems = document.querySelectorAll('.item');
console.log(`Number of categories: ${listOfItems.length}`);

const categoryArr = listOfItems.forEach(el => {
    console.log(`Category: ${el.querySelector("h2").textContent}`);
    console.log(`Elements: ${el.querySelectorAll("li").length}`);   
}); 