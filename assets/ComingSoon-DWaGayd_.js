import{c as u,a as r,t as s,b as a,o as d}from"./index-BGPFJoeU.js";const p=(t,e)=>{const n=t.__vccOpts||t;for(const[c,o]of e)n[c]=o;return n},_={name:"EduApp",data(){return{count:0,dots:"...",totalTime:15}},methods:{counter(t){this.totalTime==t&&this.$router.push({name:"Home"}),setTimeout(()=>{let e=["",".","..","..."];this.dots=e[t%4],this.count=t},1e3)}}},l={id:"eduApp"},m=r("h1",null,"Coming Soon",-1);function h(t,e,n,c,o,i){return d(),u("div",l,[m,r("p",null," content writing work is ongoing"+s(o.dots),1),a(" "+s(i.counter(o.count+1))+" -- "+s(o.count),1)])}const g=p(_,[["render",h]]);export{g as default};
