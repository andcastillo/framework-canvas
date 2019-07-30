/**
 * functional-light - Librería para el curso de programación funcional con JavaScript
 * @version v0.2.0
 * @link https://github.com/andcastillo/functional-light
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["functionalLight"] = factory();
	else
		root["functionalLight"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Agrega el elemento value al comienzo de la lista. 
 * @param {*} value 
 * @param {Array} list 
 * @example cons(1, [2, 3])
 */
function cons(value, list) {
  let tmp = list.slice(0);
  tmp.splice(0, 0, value);
  return tmp;
}
/**
 * Retorma el primer elemento de la lista
 * @param {Array} list 
 */


function first(list) {
  return list.slice(0, 1)[0];
}
/**
 * Retorna todos los elementos de la lista, excepto el primero
 * @param {Array} list 
 */


function rest(list) {
  return list.slice(1);
}
/**
 * La lista de entrada está vacio?
 * @param {Array} list 
 */


function isEmpty(list) {
  if (typeof list == 'object') {
    return list.length === 0;
  }

  return false;
}
/**
 * El objeto de entrada es una lista?
 * @param {Array} list 
 */


function isList(list) {
  return typeof list === 'object' && typeof list.length == 'number' && list.length >= 0;
}
/**
 * Retorna la longitud de un arreglo
 * @param {Array} list 
 */


function length(list) {
  return list.length;
}
/**
 * Concatena la list2 al final de la list1. Si list2 no es un arreglo, simplemente agrega
 * este elemento al final de list1.
 * @param {Array} list1 
 * @param {Array | Object} list2 
 */


function append(list1, list2) {
  let tmp = list1.slice();

  if (typeof list2 === 'object' && list2.length >= 0) {
    tmp.push(...list2);
    return tmp;
  } else {
    tmp.push(list2);
    return tmp;
  }
}

module.exports = {
  cons,
  first,
  rest,
  isEmpty,
  isList,
  length,
  append
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=functional-light.js.map