(()=>{"use strict";function e(){const e=document.createElement("h1");e.textContent="Restaurant Gordon Ramsay";const t=document.createElement("img");t.src="./pictures/restaurantgordonramsay.jpg",t.width=600,t.height=500;const n=document.createElement("p");n.textContent="Wow, amazing restaurant. Beef Wellington";const o=document.getElementById("content");o.appendChild(e),o.appendChild(t),o.appendChild(n)}const t=document.getElementById("content"),n=document.getElementById("home"),o=document.getElementById("menu"),c=document.getElementById("about");e(),n.addEventListener("click",(()=>{t.innerHTML="",e()})),o.addEventListener("click",(()=>{t.innerHTML="",function(){const e=(e,t)=>{const n=document.createElement("div"),o=document.createElement("h3");o.textContent=e;const c=document.createElement("p");return c.textContent=t,n.appendChild(o),n.appendChild(c),n},t=document.getElementById("content"),n=document.createElement("h1");n.textContent="Menu";const o=document.createElement("h2");o.textContent="Menu Prestige";const c=document.createElement("h2");c.innerHTML="Selection of cheeses <br>(£30 supplement)",t.appendChild(n),t.appendChild(o),[{name:"Winter salad",description:"smoked duck, beetroot, blackberries, hazelnuts"},{name:"Ravioli",description:"lobster, langoustine, salmon, black truffle"},{name:"Cornish turbot",description:"Violina pumpkin, clementine, shiso"},{name:"Roast pigeon",description:"celeriac, Alsacc bacon, spiced prune"},{name:"100-day aged Cumbrian Blue Grey",description:"Jerusalem artichoke, black garlic, smoked bone marrow"}].forEach((n=>{const o=e(n.name,n.description);t.appendChild(o)})),t.appendChild(c),[{name:"Sorbet",description:"quince, masala chai, honey"},{name:"Pecan praline",description:"Pedro Ximenez, cocoa nib ice cream"}].forEach((n=>{const o=e(n.name,n.description);t.appendChild(o)}))}()})),c.addEventListener("click",(()=>{t.innerHTML="",function(){const e=document.getElementById("content"),t=document.createElement("h1");t.textContent="Contact Us",e.appendChild(t),[{name:"Gordon Ramsay",title:"Head Chef",email:"email@email.com"},{name:"Jocky Petrie",title:"Sous Chef",email:"email@email.com"},{name:"Scott Leibfried",title:"Sous Chef",email:"email@email.com"}].forEach((t=>{const n=((e,t,n)=>{const o=document.createElement("div"),c=document.createElement("h3");c.textContent=e;const a=document.createElement("p");a.textContent=t;const i=document.createElement("p");return i.textContent=n,o.appendChild(c),o.appendChild(a),o.appendChild(i),o})(t.name,t.title,t.email);e.appendChild(n)}))}()})),console.log("Webpack is working!")})();