var refs={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};refs.stop.setAttribute("disabled","disabled");var intervalId=null;function getRandomHexColor(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}refs.start.addEventListener("click",(function(){intervalId=setInterval((function(){document.body.style.backgroundColor=getRandomHexColor()}),1e3),refs.stop.disabled=!1,refs.start.disabled=!0})),refs.stop.addEventListener("click",(function(){clearInterval(intervalId),refs.start.disabled=!1,refs.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.01a1fa1e.js.map