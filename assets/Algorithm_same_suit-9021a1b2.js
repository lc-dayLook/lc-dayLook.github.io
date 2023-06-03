import{_,o as a,c,a as d,F as b,r as f,b as k,n as m,t as u}from"./index.js";const x={data(){return{deck:[],selectedCards:[],bestCombination:[],loading:!1}},created(){const s=this.generateDeck();this.deck=s},methods:{getBestCombination(){this.loading=!0;const s=this.findBestCombinations(this.selectedCards);if(s){console.log(s);for(const t of s)console.log(`${t.point}${t.suit}`);this.bestCombination=s}},getPoint(s){this.deck.map(t=>{t.point===s.point&&t.suit===s.suit&&(t.checked=!0,this.selectedCards.includes(t)&&(t.checked=!1))}),this.selectedCards=this.deck.filter(t=>t.checked)},strPoint(s){let t=s;switch(s){case 1:t="A";break;case 11:t="J";break;case 12:t="Q";break;case 13:t="K";break;default:t=s;break}return t},generateDeck(){const s=["\u2660","\u2665","\u2666","\u2663"],t=[1,2,3,4,5,6,7,8,9,10,11,12,13],i=[];for(const r of s)for(const o of t)i.push({suit:r,point:o});return i},getCombinations(s,t){const i=[];function r(o,n){o.length>=t&&i.push(o);for(let e=n;e<s.length;e++)r([...o,s[e]],e+1)}return r([],0),i},calculatePoints(s){let t=0;for(const i of s)switch(i.point){case"A":t+=1;break;case"K":case"Q":case"J":t+=10;break;default:t+=parseInt(i.point)}return t},findBestCombinations(s){const i=this.getCombinations(s,3).filter(n=>{const e=n.sort((l,p)=>l.point-p.point),h=e.every((l,p)=>p===0||l.point===e[p-1].point+1),g=e.every(l=>l.suit===e[0].suit);return h&&g});let r=null,o=0;for(const n of i){const e=this.calculatePoints(n);e>o&&(r=n,o=e)}return this.loading=!1,r}}},C={class:"box"},y={style:{width:"60%",height:"80%"}},v={style:{display:"flex","flex-wrap":"wrap"}},B=["onClick"],P={style:{"margin-top":"20px"}},w={key:0},A={style:{display:"flex","flex-wrap":"wrap","margin-top":"20px"}};function F(s,t,i,r,o,n){return a(),c("div",C,[d("div",y,[d("div",v,[(a(!0),c(b,null,f(o.deck,e=>(a(),c("div",{onClick:h=>n.getPoint(e),style:m([{"margin-right":"10px","margin-bottom":"10px","flex-shrink":"0",border:"1px solid #666","background-color":"#eee",cursor:"pointer",padding:"2px 6px"},{background:e.checked?"#ffb5b5":" #eee"}]),key:e.point},u(e.suit)+" "+u(n.strPoint(e.point)),13,B))),128))]),d("div",P,[d("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>n.getBestCombination&&n.getBestCombination(...e))},"\u8F93\u51FA\u6700\u4F73\u7EC4\u5408"),o.loading?(a(),c("span",w,"\u7B5B\u9009\u4E2D...")):k("",!0)]),d("div",A,[(a(!0),c(b,null,f(o.bestCombination,e=>(a(),c("div",{style:{"margin-right":"10px","margin-bottom":"10px","flex-shrink":"0",border:"1px solid #666","background-color":"#eee",padding:"2px 6px"},key:e.point},u(e.suit)+" "+u(n.strPoint(e.point)),1))),128))])])])}const S=_(x,[["render",F]]);export{S as default};
