const t=new class{constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.getInitialTable=()=>JSON.parse(JSON.stringify(t)),this.state=this.getInitialTable(),this.status="idle",this.score=0}calculateRow(t){let e=t.filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);return(e=e.filter(t=>t)).push(...Array(4-e.length).fill(0)),e}moveLeft(){for(let t=0;t<this.state.length;t++)this.state[t]=this.calculateRow(this.state[t])}moveRight(){for(let t=0;t<this.state.length;t++)this.state[t]=this.calculateRow(this.state[t].reverse()).reverse()}moveUp(){for(let t=0;t<this.state.length;t++){let e=this.state.map(e=>e[t]);this.calculateRow(e).forEach((e,s)=>{this.state[s][t]=e})}}moveDown(){for(let t=0;t<this.state.length;t++){let e=this.state.map(e=>e[t]).reverse();this.calculateRow(e).reverse().forEach((e,s)=>{this.state[s][t]=e})}}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){this.spawnCell(0),this.spawnCell(0),this.status="playing"}restart(){this.state=this.getInitialTable(),this.score=0,this.start()}spawnCell(t=.1){let e=this.getVoidCellIndexes();if(0===e.length)return;let s=e[Math.floor(Math.random()*e.length)];Math.random()<t?this.state[s[0]][s[1]]=4:this.state[s[0]][s[1]]=2}getVoidCellIndexes(){let t=[];for(let e=0;e<this.state.length;e++)for(let s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push([e,s]);return t}checkWin(){for(let t=0;t<this.state.length;t++)-1!==this.state[t].indexOf(2048)&&(this.status="win")}checkLose(){for(let t=0;t<this.state.length;t++)for(let e=0;e<this.state[t].length-1;e++){let s=this.state[e+1][t]===this.state[e][t],a=this.state[t][e+1]===this.state[t][e];if(0===this.state[t][e]||0===this.state[t][e+1]||a||s)return}this.status="lose"}},e=document.querySelector(".button"),s=document.querySelector(".game-field").getElementsByTagName("tr"),a=document.body;function l(e=function(){let t=[];for(let e=0;e<s.length;e++){let a=s[e].getElementsByTagName("td"),l=[];for(let t=0;t<a.length;t++)l.push(a[t]);t.push(l)}return t}()){let a=t.getState();for(let t=0;t<a.length;t++)for(let s=0;s<a[t].length;s++)e[t][s].classList=["field-cell"],0!==a[t][s]?(e[t][s].textContent=a[t][s],e[t][s].classList.add(`field-cell--${a[t][s]}`)):e[t][s].textContent="";document.querySelector(".game-score").textContent=""+t.getScore()}e.addEventListener("click",()=>{"idle"===t.getStatus()?(e.classList.add("restart"),e.textContent="Restart",t.start(),document.querySelector(".message-start").classList.add("hidden")):("lose"===t.getStatus()?document.querySelector(".message-lose").classList.add("hidden"):"win"===t.getStatus()&&document.querySelector(".message-win").classList.add("hidden"),t.restart()),l()}),a.addEventListener("keydown",e=>{if("playing"!==t.getStatus())return;let s=JSON.stringify(t.getState());switch(e.keyCode){case 37:t.moveLeft();break;case 38:t.moveUp();break;case 39:t.moveRight();break;case 40:t.moveDown()}s!==JSON.stringify(t.getState())&&(t.spawnCell(),t.checkWin(),t.checkLose(),l(),"win"===t.getStatus()?document.querySelector(".message-win").classList.remove("hidden"):"lose"===t.getStatus()&&document.querySelector(".message-lose").classList.remove("hidden"))});
//# sourceMappingURL=index.281b68d8.js.map
