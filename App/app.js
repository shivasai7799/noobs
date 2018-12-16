var budgetController = (function () {
    
    
})();


var UIController = (function() {
    
    var DOMstrings  = {
        inputType: '.add__type',
        descriptionType : '.add__description',
        valueType : '.add__value',
        inputBtn : '.add__btn'
    }
  
    return {
        getInput : function() { //returning object type 
            return {
            type : document.querySelector(DOMstrings.inputType).value, 
            description : document.querySelector(DOMstrings.descriptionType).value,
            value : document.querySelector(DOMstrings.valueType).value
           
            };
          },
        
           getDOMstrings: function () {
               return DOMstrings;
           }
       };
})();

    
var controller = (function(budgetCtrl,UICtrl) {
    
    var setupEventListeners = function () { 
    var DOM = UICtrl.getDOMstrings();
        
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(e){
    if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
    }
        
    });
    };
    
    
        
    
    
var ctrlAddItem = function() {
    // 1.Get the field input Data
    var input = UICtrl.getInput();
    
    
    // 2. Add the item to the budget 
    // 3. Add the item to the UI 
    // 4. Calculate the Budget 
    // 5. Display the Budget on the UI
    
};
    return {
        init : function() {
            console.log('Apllication Started.');
            setupEventListeners();
        }
    };
   
})(budgetController,UIController);


controller.init(); 