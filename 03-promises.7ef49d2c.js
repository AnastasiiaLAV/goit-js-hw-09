!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("h6c0i"),i={form:document.querySelector(".form"),btn:document.querySelector("button"),delay:document.querySelector("input[name=delay]"),step:document.querySelector("input[name=step]"),amount:document.querySelector("input[name=amount]")};console.log(i.delay);var u=formElem.delay,a=formElem.step;formElem.amount;function l(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}i.btn.addEventListener("submit",l),l(u,a).then((function(e){var n=e.position,o=e.delay;return r.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;return r.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))}();
//# sourceMappingURL=03-promises.7ef49d2c.js.map
