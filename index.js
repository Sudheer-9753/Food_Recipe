let food = document.querySelector(".food");

let Indian= document.querySelector("#Indian");
let Canadian =  document.querySelector("#Canadian");
let American = document.querySelector("#American");
let Thai = document.querySelector("#Thai");
let British=  document.querySelector("#British");
let Russian = document.querySelector("#Russian");

let recipe;
const fatchdata = async (area) =>{

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const data = await api.json();
    recipe= data.meals;
    showdata(recipe);
};

const searchRecipe =  ()=>{
    let input= document.querySelector("#search")

    input.addEventListener("keydown", async(e)=>{
        if(e.key === "Enter"){
            let inputvalue = input.value;
            
            const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputvalue}`);
    const data = await api.json();
    recipe= data.meals;
    showdata(recipe);     
        }
    })
}

let showdata = (recipe) => {
    let food = document.querySelector(".food"); // Make sure food is selected here
    food.innerHTML = recipe
        .map((meal) => `
        <div style="text-align:center">
            <div>
                <img src="${meal.strMealThumb}" style="width:220px; border-radius:10px; border:2px solid black"/>
            </div>
            <h5 style="margin:10px; color: white;">${meal.strMeal}</h5>
        </div>
    `).join(" ");
}


American.addEventListener("click", () => {  
    fatchdata('American');
})
Indian.addEventListener("click", () => {  
    fatchdata('Indian');
})
Canadian.addEventListener("click", () => {  
    fatchdata('Canadian');
})
Thai.addEventListener("click", () => {  
    fatchdata('Thai');
})
 British.addEventListener("click", () => {  
    fatchdata('British');
})
Russian.addEventListener("click", () => {  
    fatchdata('Russian');
})
Russian.addEventListener("click", () => {  
    fatchdata('Russian');
})


searchRecipe();

fatchdata('Indian')



    