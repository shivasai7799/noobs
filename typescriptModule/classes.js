var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.name = name;
        this.username = username;
        this.age = 27;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.typeOf('old guy');
    };
    Person.prototype.typeOf = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
;
// const person = new Person('nani', 'SHIVA');
// console.log(person);
// person.printAge();
var Shivasai = /** @class */ (function (_super) {
    __extends(Shivasai, _super);
    function Shivasai(username, name) {
        var _this = _super.call(this, name, username) || this;
        _this.age = 31;
        return _this;
    }
    return Shivasai;
}(Person));
var shivasai = new Shivasai('nan', 'ssss');
console.log(shivasai);
//getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'DEFAULT';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'DEFAULT';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'ABCCCC';
console.log(plant.species);
//static properties and methods 
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.circumference = function (diameter) {
        return this.PI * diameter;
    };
    Helper.PI = 3.14;
    return Helper;
}());
console.log('shiva', 2 * Helper.PI);
console.log(Helper.circumference(8) * 2);
//Abstract classes 
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default Name';
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('shivasai');
console.log(newProject);
//Private constructors 
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
var newOne = OnlyOne.getInstance();
console.log(newOne);
console.log(newOne.name);
//# sourceMappingURL=classes.js.map