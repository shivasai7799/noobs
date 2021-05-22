/* // Global app controller
import str from './models/Search';
//import {add as a ,multiply as m,ID} from './views/searchView';
import * as searchView from './views/searchView'
console.log(`my value for add : ${searchView.add(searchView.ID , 3)} and multiply is : ${searchView.multiply(searchView.add(3,3),5)} and moreover with ID : ${searchView.ID} i am a string : ${str}.`); */

// 4b337721e717403d03dd0ce95a9625b5 //API KEY
// https://www.food2fork.com/api/search  //Endpoint

import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements,renderLoader,clearLoader } from './views/base';
import Likes from './models/Likes';

/**- Global state of application
 * - Search Object
 * - Current Recipe object 
 * - shopping list object
 * - liked Recipes
 */

const state = {};

const controlSearch = async () => {
    //Get query from the view 
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4) Search for recipes
            await state.search.getResults();
    
            // 5) Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (err) {
            alert('Something wrong with the search...');
            clearLoader();
        }
    }
}

    elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});


 elements.searchResPages.addEventListener('click', e => {
 let btn = e.target.closest('.btn-inline');
 if(btn){
 const goToPage = parseInt(btn.dataset.goto ,10);
 searchView.clearResults();
 searchView.renderResults(state.search.result,goToPage);
 }
 });

 const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#', '');
    console.log(id)

    if (id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

         //Highlight selected search item
         if (state.search) searchView.highlightSelected(id);

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServing();
    
            // Render recipe
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
            );
        } catch (err) {
            console.log(err);
            alert('Error processing recipe!');
        }
    }
};

//  window.addEventListener('hashchange' , controlRecipe);
//  window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(e => window.addEventListener(e,controlRecipe));

/** List controller */

const controlList = () => {
    //create a new list if there in none yet 
    if(!state.list) state.list = new List ();

    //Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count,el.unit,el.ingredients);
        listView.renderItem(item);
    });
}

//handle delete and update list item events
 elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    //Handle the delete button 
   if(e.target.matches('.shopping__delete, .shopping__delete *')){
    //delete from state
    state.list.deleteItem(id);
    //delete from UI
    listView.deleteItem(id);
   } else if(e.target.matches('.shopping__count-value')){
       const val = parseFloat(e.target.value,10);
       state.list.updateCount(id,val);
   }
    


});


/** Likes controller */

const controlLike = () => {
 if(!state.likes) state.likes = new Likes();
 const currentId = state.recipe.id;

 //User has Not YET LIKED CURRENT RECIEPE

 if(state.likes.isLiked(currentId)){
     // Add likes to the state 
const newLike = state.likes.addLike(
    currentId,
    state.recipe.title,
    state.recipe.author,
    state.recipe.img
    );

     //Toggle the like button
     likesView.toggleLikeBtn(true);

     //Add like to the User list 
     likesView.renderLikes(newLike);
     


     //User hs liked current Reciepe

 } else {
   //Remove like from state
   state.likes.deleteLike(currentId);
   //Toggle the like button 
   likesView.toggleLikeBtn(false);
   //Remove Like from the list 
   console.log(state.likes);
   likesView.deleteLike(currentId);

 }
 likesView.toggleLikeMenu(state.likes.getNumLikes());
 };

 //restored liked reciepes on page reload

 window.addEventListener('load', () => {
     state.likes = new Likes();

     //Restore likes
     state.likes.readStorage();

    //Toggle like menu button 
     likesView.toggleLikeMenu(state.likes.getNumLikes());

     //Render the existing likes 
     state.likes.likes.forEach(like => likesView.renderLikes(like));
 })




//Handling the reciepe button clicks 

elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, btn-decrease *')){
    //Decrease button is clicked 
    if(state.recipe.servings > 1){
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
    }
    
    } else if (e.target.matches('.btn-increase, btn-increase  *')){
       //Increase button is clicked
       state.recipe.updateServings('inc');
       recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add , .recipe__btn--add *')){
        //Add Ingredients to shopping list 
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        //Add Ingredients to likes list 
        controlLike();
    }
    
});



