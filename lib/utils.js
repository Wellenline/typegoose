"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
exports.isPrimitive = function (Type) {
    return ['String', 'Number', 'Boolean', 'Date'].includes(Type.name);
};
exports.isObject = function (Type) {
    var prototype = Type.prototype;
    var name = Type.name;
    while (name) {
        if (name === 'Object') {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
        name = prototype ? prototype.constructor.name : null;
    }
    return false;
};
exports.isNumber = function (Type) { return Type.name === 'Number'; };
exports.isString = function (Type) { return Type.name === 'String'; };
exports.initAsObject = function (name, key) {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = {};
    }
};
exports.initAsArray = function (name, key) {
    if (!data_1.schema[name]) {
        data_1.schema[name] = {};
    }
    if (!data_1.schema[name][key]) {
        data_1.schema[name][key] = [{}];
    }
};
exports.getClassForDocument = function (document) {
    var modelName = document.constructor.modelName;
    return data_1.constructors[modelName];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSwrQkFBOEM7QUFFakMsUUFBQSxXQUFXLEdBQUcsVUFBQyxJQUFTO0lBQ25DLE9BQUEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztBQUEzRCxDQUEyRCxDQUFDO0FBRWpELFFBQUEsUUFBUSxHQUFHLFVBQUMsSUFBUztJQUNoQyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQy9CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDckIsT0FBTyxJQUFJLEVBQUU7UUFDWCxJQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDckIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7S0FDdEQ7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQztBQUVXLFFBQUEsUUFBUSxHQUFHLFVBQUMsSUFBUyxJQUFLLE9BQUEsSUFBSSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQXRCLENBQXNCLENBQUM7QUFFakQsUUFBQSxRQUFRLEdBQUcsVUFBQyxJQUFTLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBdEIsQ0FBc0IsQ0FBQztBQUVqRCxRQUFBLFlBQVksR0FBRyxVQUFDLElBQUksRUFBRSxHQUFHO0lBQ3BDLElBQUksQ0FBQyxhQUFNLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDakIsYUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUNuQjtJQUNELElBQUksQ0FBQyxhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsYUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN4QjtBQUNILENBQUMsQ0FBQztBQUVXLFFBQUEsV0FBVyxHQUFHLFVBQUMsSUFBUyxFQUFFLEdBQVE7SUFDN0MsSUFBSSxDQUFDLGFBQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNqQixhQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsSUFBSSxDQUFDLGFBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUN0QixhQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMxQjtBQUNILENBQUMsQ0FBQztBQUVXLFFBQUEsbUJBQW1CLEdBQUcsVUFBQyxRQUEyQjtJQUM3RCxJQUFNLFNBQVMsR0FBSSxRQUFRLENBQUMsV0FBK0MsQ0FBQyxTQUFTLENBQUM7SUFDdEYsT0FBTyxtQkFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQyJ9