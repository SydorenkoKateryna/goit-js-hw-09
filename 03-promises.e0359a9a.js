!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o);var u=o("6JpON");function i(e,n){return new Promise((function(t,r){var o=Math.random()>.3;setTimeout((function(){o?t("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms")):r("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}document.querySelector("form").addEventListener("submit",(function(n){n.preventDefault();for(var t=n.target.elements,r=t.delay,o=t.step,a=t.amount,c=Number(r.value),f=Number(o.value),l=Number(a.value),d=1;d<=l;d+=1)i(d,c).then((function(n){return e(u).Notify.success(n)})).catch((function(n){return e(u).Notify.failure(n)})),c+=f}))}();
//# sourceMappingURL=03-promises.e0359a9a.js.map
