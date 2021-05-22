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
var Mechineni = /** @class */ (function () {
    function Mechineni(name, chicha) {
        this.name = name;
        this.chicha = chicha;
    }
    return Mechineni;
}());
var nan = new Mechineni('bbbbb', 'vammo');
console.log(nan);
var Plants = /** @class */ (function () {
    function Plants() {
        this._species = 'Default';
    }
    Object.defineProperty(Plants.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = 'Default';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plants;
}());
var per = new Plants();
console.log(per.species);
per.species = 'shivas';
console.log(per.species);
//Abstract class
var Project1 = /** @class */ (function () {
    function Project1() {
        this.projctName = 'Default';
    }
    Project1.prototype.calcBudget = function () {
        this.budget * 2;
    };
    return Project1;
}());
var ITproj = /** @class */ (function (_super) {
    __extends(ITproj, _super);
    function ITproj() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITproj.prototype.changeName = function (name) {
        this.projctName = name;
    };
    return ITproj;
}(Project1));
var proj = new ITproj();
console.log(proj);
proj.changeName('SHIVASAI');
console.log(proj);
//# sourceMappingURL=nano.js.map