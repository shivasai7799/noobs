var budgetController = (function () {
    var Expense = function (id,description,value){
        this.id =id ;
        this.description = description;
        this.value = value
    };
    
    var Income = function (id,description,value){
        this.id =id ;
        this.description = description;
        this.value = value
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(cur) {
          sum += cur.value;
        });
        data.totals[type] = sum;
    };
    
    var data = {
        allItems : {
            exp : [],
            inc : [] 
        },
        totals: {
            exp :0,
            inc:0
        },
        budget: 0,
        percentage: -1 
    };
    
    return {
        addItem: function(type, des, value){
            var newItem , ID;
            
            //Create new ID
            console.log(data.allItems, data.allItems[type], type);
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                    ID = 0;
                }
            
            
            
            //Create new Item
            if(type === 'exp'){
                newItem = new Expense(ID,des,value);
            }else if (type === 'inc') {
                newItem = new Income(ID, des, value);
        }
            //push this item into the DataStructure 
            data.allItems[type].push(newItem);
            
            //Return the new Element
            return newItem;
    }, 
        
    deleteItem: function(type,id) {
        //id =6
        //data.allItems[type][id];
        //ids =[1,2,3,5,7]
        // index = 3
        
        var ids = data.allItems[type].map(function(current) {
            return current.id;
        });
        
        index = ids.indexOf(id);
        
        if (index !== -1){
            
        data.allItems[type].splice(index , 1);
        }
    },
        
     calculateBudget : function () {
         
         // Calculate total income and Expense 
         calculateTotal('exp');
         calculateTotal('inc');
         
         
         
         // Calculate the budget: income - expenses
         data.budget = data.totals.inc - data.totals.exp;
         
         // Calculate the percentage of income that we spent
         if (data.totals.inc > 0){
           data.percentage = Math.round((data.totals.exp / data.totals.inc) *100);  
         } else { 
          data.percentage = -1;
         }
         
     },
        
        getBudget: function() {
            return {
                budget : data.budget,
                totalinc : data.totals.inc,
                totalexp : data.totals.exp,
                percentage : data.percentage
            };
        },
        
        
        testing : function() {
        console.log(data);
    }
        
        
    
};
    
})();


var UIController = (function() {
    
    var DOMstrings  = {
        inputType: '.add__type',
        descriptionType : '.add__description',
        valueType : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer : '.expenses__list',
        budgetLabel : '.budget__value',
        incomeLabel : '.budget__income--value',
        expenseLabel : '.budget__expenses--value',
        percentageLabel : '.budget__expenses--percentage',
        container : '.container'
    }
  
    return {
        getInput : function() { //returning object type 
            console.log(document.querySelector(DOMstrings.inputType).value);
            return {
            type : document.querySelector(DOMstrings.inputType).value, 
            description : document.querySelector(DOMstrings.descriptionType).value,
            value : parseFloat(document.querySelector(DOMstrings.valueType).value)
           
            };
          },
        
        addListItem : function(obj, type) {
            var html,newHtml,element;
            
            //Create a Html string with the placeHolder
            if (type === 'inc'){
        
            element = DOMstrings.incomeContainer;
            console.log(element);
                
            html = ' <div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div      class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type == 'exp') {
                
            element = DOMstrings.expenseContainer;
            html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //Replace the place Holder With the Actual Data
            console.log(obj.description);
            newHtml = html.replace('%id%',obj.id).replace('%description%',obj.description).replace('%value%',obj.value);
            
            
            //Insert the Html into the DOM
            
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);
          },
        
        deleteListItem : function(SelectorID) {
           var el = document.getElementById(SelectorID);
            el.parentNode.removeChild(el);
        },
        
        clearFields : function() { 
         var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.descriptionType + ',' + DOMstrings.valueType);
            
            fieldsArr = Array.prototype.slice.call(fields);
            console.log('Response', fieldsArr);
            
            fieldsArr.forEach(function (current , index , array) { 
                
             current.value = '' ;
            })
            fieldsArr[0].focus();
        },
        
        displayBudget: function (obj){
           
        document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;    
        document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalinc;
        document.querySelector(DOMstrings.expenseLabel).textContent = obj.totalexp;
        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
        
        if(obj.percentage > 0){
         document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';   
        } else {
            
            document.querySelector(DOMstrings.percentageLabel).textContent = '---'; 
        }
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
    
    document.addEventListener('keypress', function(event){
    if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
    }
        
    });
        
    document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
 };
    
    var updateBudget = function() {
    
        // 1. Calculate the Budget
        budgetCtrl.calculateBudget();
        
        // 2.Return the Budget
        var budget = budgetCtrl.getBudget();
        
        // 3.Display the BUdget on the UI 
        UICtrl.displayBudget(budget);
    };
    
    
        
    
    
var ctrlAddItem = function() {
    var input, newItem;
    
    // 1.Get the field input Data
    input = UICtrl.getInput();
    
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
        
        
    // 2. Add the item to the budget 
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);
    
    // 3. Add the item to the UI 
    
    UICtrl.addListItem(newItem , input.type);
    
    //Clearing the input fields 
    
    UICtrl.clearFields();
    // 4. Calculate the Budget
        
    // 5. Display the Budget on the UI
       updateBudget(); 
    } 
    else {
        alert("please enter the Description and Value");
    }
};
    
    ctrlDeleteItem = function(event) {
       var itemID,splitID,type,ID; 
       itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemID) {
            
            //inc-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            //1. delete the item from the datastructure
            budgetCtrl.deleteItem(type,ID);
            
            //2. delete the item from the UI
            UICtrl.deleteListItem(itemID);
            
            //3. Update and show the new Budget
            updateBudget();
        }
    };
    return {
        init : function() {
            UICtrl.displayBudget({
                 budget : 0,
                totalinc : 0,
                totalexp : 0,
                percentage : 0
            });
            console.log('Apllication Started.');
            setupEventListeners();
        }
    };
   
})(budgetController,UIController);


controller.init(); 