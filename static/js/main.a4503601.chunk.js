(this.webpackJsonp45s=this.webpackJsonp45s||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a.n(r),i=a(10),d=a.n(i),s=(a(15),a(2)),n=(a(16),a(0)),o=function(){return Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"maintitle",children:"45"}),Object(n.jsx)("div",{className:"tagline",children:"Straight out the UMD commuter cafe"})]})},l=(a(18),a(19),function(e){var t=e.round,a=e.gameScore;return Object(n.jsxs)("div",{className:"scoreBoard",style:{textAlign:"left"},children:[Object(n.jsxs)("div",{className:"scoreBoardItem","data-testid":"team1Score",children:["Team 1: ",a[0]]}),Object(n.jsxs)("div",{className:"scoreBoardItem","data-testid":"round",children:["Round: ",t]}),Object(n.jsxs)("div",{className:"scoreBoardItem","data-testid":"team2Score",children:["Team 2: ",a[1]]})]})}),j=a(4),b=a.n(j),u=a(5);function h(){return(h=Object(u.a)(b.a.mark((function e(t,a,r,c){var i,d,s,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=x(a),e.next=3,fetch(t+"/shuffle/");case 3:return e.next=5,fetch(t+"/draw/?count=20");case 5:return d=e.sent,e.next=8,d.json();case 8:return s=e.sent,n=O(s.cards),console.log("handCheck",n,s),e.next=13,fetch(t+"/pile/"+i[0]+"/add/?cards="+n[0].toString());case 13:return e.next=15,fetch(t+"/pile/"+i[1]+"/add/?cards="+n[1].toString());case 15:return e.next=17,fetch(t+"/pile/"+i[2]+"/add/?cards="+n[2].toString());case 17:return e.next=19,fetch(t+"/pile/"+i[3]+"/add/?cards="+n[3].toString());case 19:e.sent&&(c(i),r(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return[[e[0].code,e[1].code,e[2].code,e[12].code,e[13].code],[e[3].code,e[4].code,e[5].code,e[14].code,e[15].code],[e[6].code,e[7].code,e[8].code,e[16].code,e[17].code],[e[9].code,e[10].code,e[11].code,e[18].code,e[19].code]]}function x(e){var t,a=(e-1)%4;return 0===a?t=["Mario","Partner","Luigi","You"]:1===a?t=["Partner","Luigi","You","Mario"]:2===a?t=["Luigi","You","Mario","Partner"]:3===a&&(t=["You","Mario","Partner","Luigi"]),t}function v(e,t,a,r,c){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(b.a.mark((function e(t,a,r,c,i){var d,s,n,o,l,j;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.toString());case 2:return d=e.sent,e.next=5,d.json();case 5:return e.next=7,fetch(t+"/draw/?count="+a.length);case 7:return s=e.sent,e.next=10,s.json();case 10:if(n=e.sent,console.log("redraw",r,a,n.cards),o=[],n.cards)for(l=0;l<n.cards.length;l++)o.push(n.cards[l].code);return e.next=16,fetch(t+"/pile/"+r+"/add/?cards="+o.toString());case 16:return j=e.sent,e.next=19,j.json();case 19:e.sent&&(c(a.length),i(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=[-35,-21,-18,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],m=[13,12,11,10,9,8,7,6,5,4,3,2,1,0],g=["5H","JH","AH","KH","QH","0H","9H","8H","7H","6H","4H","3H","2H"],y=["5D","JD","AH","AD","KD","QD","0D","9D","8D","7D","6D","4D","3D","2D"],S=["5S","JS","AH","AS","KS","QS","2S","3S","4S","6S","7S","8S","9S","0S"],N=["5C","JC","AH","AC","KC","QC","2C","3C","4C","6C","7C","8C","9C","0C"],k=["2H","3H","4H","5H","6H","7H","8H","9H","0H","JH","QH","KH"],w=["AD","2D","3D","4D","5D","6D","7D","8D","9D","0D","JD","QD","KD"],D=["0S","9S","8S","7S","6S","5S","4S","3S","2S","AS","JS","QS","KS"],B=["0C","9C","8C","7C","6C","5C","4C","3C","2C","AC","JC","QC","KC"];function P(e){var t,a,r,c;t=a=r=c=0;for(var i=0;i<5;i++){var d=e[i];t+=H(d),a+=U(d),r+=Y(d),c+=I(d)}return[t,a,r,c]}function C(e,t){switch(t){case"Hearts":return H(e);case"Diamonds":return U(e);case"Spades":return Y(e);case"Clubs":return I(e);default:return 0}}function H(e){return p[g.indexOf(e)]||m[w.indexOf(e)]||m[B.indexOf(e)]||m[D.indexOf(e)]}function U(e){return p[y.indexOf(e)]||m[k.indexOf(e)]||m[B.indexOf(e)]||m[D.indexOf(e)]}function Y(e){return p[S.indexOf(e)]||m[w.indexOf(e)]||m[B.indexOf(e)]||m[k.indexOf(e)]}function I(e){return p[N.indexOf(e)]||m[w.indexOf(e)]||m[k.indexOf(e)]||m[D.indexOf(e)]}var A=function(e,t){var a,r;return"Pass"===e.playerBid||("Take"===e.playerBid?(a=t.highBid,r=e.bidder):e.playerBid&&(a=e.playerBid,r=e.bidder)),{highBid:a,highBidder:r}};var L=a(3),M=function(e){var t=Object(r.useState)(null),a=Object(s.a)(t,2),c=a[0],i=a[1],d=Object(r.useState)(!0),n=Object(s.a)(d,2),o=n[0],l=n[1],j=Object(r.useState)(null),b=Object(s.a)(j,2),u=b[0],h=b[1];return Object(r.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){i(e),l(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(l(!1),h(e.message))})),function(){return t.abort()}}),[e]),{data:c,isPending:o,error:u}},T=function(e){var t,a=e.deckUrl,c=e.bidder,i=e.bidData,d=e.dealer,o=e.sendBid,l=Object(r.useState)("Pass"),j=Object(s.a)(l,2),b=j[0],u=j[1],h=M(a+"/pile/"+c+"/list/"),O=h.data,x=(h.error,h.isPending,i.highBid);if(O)if("You"===c)t=!0;else{t=!1;var v,f,p=O.piles[c].cards,m=[],g=Object(L.a)(p);try{for(g.s();!(f=g.n()).done;)v=f.value,m.push(v.code)}catch(k){g.e(k)}finally{g.f()}var y=function(e,t){var a=["Pass","15","20","25","30","30 No Draw"],r=e.sort((function(e,t){return e-t}))[0],c=null;return r<-25?c="20":r<-5&&(c="15"),c&&a.indexOf(c)<=a.indexOf(t.highBid)&&(c="Pass"),c}(P(m),i);o({bidder:c,playerBid:y})}var S="You"===d;function N(e,t){var a=["Pass","15","20","25","30","30No"];return a.indexOf(t)<a.indexOf(e)}return Object(n.jsx)("div",{className:"playeraction",children:t&&Object(n.jsx)("div",{children:Object(n.jsxs)("form",{onSubmit:function(){o({bidder:c,playerBid:b})},children:[Object(n.jsxs)("select",{value:b,onChange:function(e){return u(e.target.value)},children:[S&&x&&Object(n.jsx)("option",{value:"Take",children:"Take"}),S&&x&&Object(n.jsx)("option",{value:"Pass",children:"Let Bidder Have It"}),!S&&Object(n.jsx)("option",{value:"Pass",children:"Pass"}),N("15",x)&&Object(n.jsx)("option",{value:"15",children:"15"}),N("20",x)&&Object(n.jsx)("option",{value:"20",children:"20"}),N("25",x)&&Object(n.jsx)("option",{value:"25",children:"25"}),N("30",x)&&Object(n.jsx)("option",{value:"30",children:"30"}),N("30No",x)&&Object(n.jsx)("option",{value:"30No",children:"30 No Draw"})]}),Object(n.jsx)("button",{children:"Place Bid"})]})})})},J=(a(9),function(e){var t=e.card;return Object(n.jsx)("div",{className:"cardslot",children:t&&Object(n.jsx)("img",{src:t.image,alt:"Card",width:"100%"})})}),R=function(e){var t=e.deckUrl,a=e.player,r=e.round,c=M(t+"/pile/"+a+"/list/"),i=c.data,d=c.isPending,s=c.error,o=[];return i&&i.piles[a]&&i.piles[a].cards&&(o=i.piles[a].cards),Object(n.jsxs)("div",{children:[s&&Object(n.jsx)("div",{children:s}),d&&Object(n.jsx)("div",{children:"Loading..."}),i&&o&&Object(n.jsx)("div",{className:"handwindow",children:Object(n.jsxs)("div",{className:"hand",children:[Object(n.jsx)(J,{card:o[0],round:r}),Object(n.jsx)(J,{card:o[1],round:r}),Object(n.jsx)(J,{card:o[2],round:r}),Object(n.jsx)(J,{card:o[3],round:r}),Object(n.jsx)(J,{card:o[4],round:r})]})})]})},E=function(e){var t=e.bid,a=e.bidder;return console.log("ViewBid",t),Object(n.jsxs)("div",{className:"playermessagebox",children:[t&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playermessageboxheader",children:t.bidder}),Object(n.jsx)("div",{className:"playermessageboxtext",children:t.playerBid||"Pass"})]}),!t&&"You"!==a&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playermessageboxheader",children:a}),Object(n.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]}),!t&&"You"===a&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playermessageboxheader",children:"You"}),Object(n.jsx)("div",{className:"playermessageboxtext",children:"We're waiting!"})]})]})},K=(a(8),function(e){var t=e.deckUrl,a=e.bidData,c=e.sendTrumpSuit,i=Object(r.useState)("Hearts"),d=Object(s.a)(i,2),o=d[0],l=d[1],j=a.highBidder,b=M(t+"/pile/"+j+"/list/"),u=b.data;b.error,b.isPending;if(console.log("bid",j,a),u)if("You"===j)!0;else{!1;var h,O,x=u.piles[j].cards,v=[],f=Object(L.a)(x);try{for(f.s();!(O=f.n()).done;)h=O.value,v.push(h.code)}catch(m){f.e(m)}finally{f.f()}var p=function(e){var t=JSON.stringify(e),a=e.sort((function(e,t){return e-t}))[0];return["Hearts","Diamonds","Spades","Clubs"][JSON.parse(t).indexOf(a)]}(P(v));c(p)}return Object(n.jsx)("div",{children:"You"===a.highBidder&&Object(n.jsx)("div",{className:"playeraction",children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(o)},children:[Object(n.jsxs)("select",{value:o,onChange:function(e){return l(e.target.value)},children:[Object(n.jsx)("option",{value:"Hearts",children:"Hearts"}),Object(n.jsx)("option",{value:"Diamonds",children:"Diamonds"}),Object(n.jsx)("option",{value:"Spades",children:"Spades"}),Object(n.jsx)("option",{value:"Clubs",children:"Clubs"})]}),Object(n.jsx)("button",{children:"Select Suit"})]})})})}),Q=function(e){var t=e.deckUrl,a=e.bidOrder,c=e.sendBidData,i=Object(r.useState)(""),d=Object(s.a)(i,2),o=d[0],l=d[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),u=b[0],h=b[1],O=Object(r.useState)(""),x=Object(s.a)(O,2),v=x[0],f=x[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),g=m[0],y=m[1],S=Object(r.useState)(""),N=Object(s.a)(S,2),k=N[0],w=N[1],D=Object(r.useState)(1),B=Object(s.a)(D,2),P=B[0],C=B[1],H=Object(r.useState)({highBid:null,highBidder:null,trumpSuit:null}),U=Object(s.a)(H,2),Y=U[0],I=U[1];Object(r.useEffect)((function(){I({highBid:null,highBidder:null,trumpSuit:null})}),[a]);var L=a[P-1],M=a[3];switch(P){case 1:if(o){var J=A(o,Y),Q=J.highBid,W=J.highBidder;Q&&I({highBid:Q,highBidder:W,trumpSuit:k}),C(2)}break;case 2:if(u){var G=A(u,Y),V=G.highBid,_=G.highBidder;V&&I({highBid:V,highBidder:_,trumpSuit:k}),C(3)}break;case 3:if(v){var q=A(v,Y),z=q.highBid,F=q.highBidder;z&&I({highBid:z,highBidder:F,trumpSuit:k}),C(4)}break;case 4:if(g){var X=A(g,Y),Z=X.highBid,$=X.highBidder;Z?I({highBid:Z,highBidder:$,trumpSuit:k}):Y.highBid||I({highBid:"15",highBidder:M,trumpSuit:k}),C(5)}break;case 5:if(k){var ee=Y.highBid,te=Y.highBidder;I({highBid:ee,highBidder:te,trumpSuit:k}),C(6)}break;case 6:c(Y)}var ae=[o,u,v,g];function re(e,t){var a=t.indexOf(e);return console.log("crash",e,ae,a),ae[a]}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"playboard",children:[Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(E,{bid:re("Partner",a),bidder:"Partner"})}),Object(n.jsx)("div",{className:"playboardbox"})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(E,{bid:re("Mario",a),bidder:"Mario"})}),Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(E,{bid:re("Luigi",a),bidder:"Luigi"})})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(E,{bid:re("You",a),bidder:"You"})}),Object(n.jsx)("div",{className:"playboardbox"})]})]}),Object(n.jsxs)("div",{className:"playerwindow",children:[Object(n.jsx)(R,{deckUrl:t,player:"You"}),1===P&&Object(n.jsx)(T,{deckUrl:t,bidder:L,bidData:Y,dealer:M,sendBid:l}),2===P&&Object(n.jsx)(T,{deckUrl:t,bidder:L,bidData:Y,dealer:M,sendBid:h}),3===P&&Object(n.jsx)(T,{deckUrl:t,bidder:L,bidData:Y,dealer:M,sendBid:f}),4===P&&Object(n.jsx)(T,{deckUrl:t,bidder:L,bidData:Y,dealer:M,sendBid:y}),5===P&&Object(n.jsx)(K,{deckUrl:t,bidData:Y,sendTrumpSuit:w})]})]})},W=function(e){var t=e.card;return Object(n.jsx)("div",{children:t&&Object(n.jsx)("img",{src:t.image,alt:"Card",width:"55%"})})};function G(e,t){for(var a=null,r=-50,c=0;c<e.length;c++){var i=C(e[c].code,t);i>r&&(r=i,a=c)}return e[a]}function V(e,t){for(var a=null,r=50,c=0;c<e.length;c++){var i=C(e[c].code,t);i<r&&(r=i,a=c)}return e[a]}function _(){return(_=Object(u.a)(b.a.mark((function e(t,a,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){return a}));case 2:r(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var q=function(e){var t=e.deckUrl,a=e.player,c=(e.position,e.leadSuit,e.sendPlayCard),i=(e.trumpSuit,Object(r.useState)(0)),d=Object(s.a)(i,2),o=d[0],l=d[1],j=M(t+"/pile/"+a+"/list/"),b=j.data,u=(j.error,j.isPending,[]);return b&&(u=b.piles[a].cards),Object(n.jsx)("div",{children:b&&Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){_.apply(this,arguments)}(t,u[o],c)},children:[Object(n.jsxs)("select",{value:o,onChange:function(e){return l(e.target.value)},children:[u[0]&&Object(n.jsx)("option",{value:0,children:u[0].code}),u[1]&&Object(n.jsx)("option",{value:1,children:u[1].code}),u[2]&&Object(n.jsx)("option",{value:2,children:u[2].code}),u[3]&&Object(n.jsx)("option",{value:3,children:u[3].code}),u[4]&&Object(n.jsx)("option",{value:4,children:u[4].code})]}),Object(n.jsx)("button",{children:"Play Card"})]})})},z=function(e){var t,a=e.bookInfo;return Object(n.jsxs)("div",{className:"playboardlog",children:[Object(n.jsx)("div",{className:"playboardlogheader",children:"Play Log"}),a&&function(){var e,r=[],c=Object(L.a)(a);try{for(c.s();!(e=c.n()).done;)t=e.value,r.push(Object(n.jsxs)("div",{className:"playboardlogentry",children:["Book: ",t.bookNum," ",t.highCard," ",t.winningPlayer]}))}catch(i){c.e(i)}finally{c.f()}return Object(n.jsx)("div",{children:r})}()]})},F=function(e){var t=e.deckUrl,a=e.player,c=e.position,i=(e.leadSuit,e.sendPlayCard),d=e.trumpSuit,o=M(t+"/pile/"+a+"/list/"),l=o.data,j=o.error,b=o.isPending,u=Object(r.useState)(null),h=Object(s.a)(u,2),O=h[0],x=h[1];if(l&&!O){var v=function(e,t,a){var r;switch(e){case 1:case 2:r=G(t,a);break;case 3:case 4:r=V(t,a);break;default:console.log("defaultHit")}return r}(c,l.piles[a].cards,d);fetch(t+"/pile/discard/add/?cards="+v.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){x(v)}))}return l&&O&&i(O),Object(n.jsxs)("div",{children:[j&&Object(n.jsx)("div",{children:j}),b&&Object(n.jsx)("div",{children:"Thinking...."}),l&&Object(n.jsx)("div",{children:"Dawn"}),";"]})};var X=function(e){var t=e.bidData;return Object(n.jsxs)("div",{className:"playboardlog",children:[Object(n.jsx)("div",{className:"playboardlogheader",children:"Bid Info"}),Object(n.jsxs)("div",{className:"playboardlogentry",children:["Bid: ",t.highBid," "]}),Object(n.jsxs)("div",{className:"playboardlogentry",children:["Bidder: ",t.highBidder]}),Object(n.jsxs)("div",{className:"playboardlogentry",children:["Suit: ",t.trumpSuit]})]})},Z=function(e){var t=e.deckUrl,a=e.player,c=e.order,i=e.sendBookInfo,d=e.book,o=e.bookInfo,l=e.bidData,j=Object(r.useState)(""),b=Object(s.a)(j,2),u=b[0],h=b[1],O=Object(r.useState)(""),x=Object(s.a)(O,2),v=x[0],f=x[1],p=Object(r.useState)(""),m=Object(s.a)(p,2),g=m[0],y=m[1],S=Object(r.useState)(""),N=Object(s.a)(S,2),k=N[0],w=N[1],D=Object(r.useState)(""),B=Object(s.a)(D,2),P=B[0],H=B[1],U=Object(r.useState)(1),Y=Object(s.a)(U,2),I=Y[0],A=Y[1],L=[u,v,g,k],M=d,T=function(e,t){var a,r=e[e.length-1];return r&&(a=r.winningPlayer),"Mario"===a?["Mario","Partner","Luigi","You"]:"Partner"===a?["Partner","Luigi","You","Mario"]:"Luigi"===a?["Luigi","You","Mario","Partner"]:"You"===a?["You","Mario","Partner","Luigi"]:t}(o,c);if(1===I&&u)H(u.code.charAt(1)),A(2);else if(2===I&&v)A(3);else if(3===I&&g)A(4);else if(4===I&&k)setTimeout((function(){A(5)}),2e3);else if(5===I){for(var J,E=50,K=0;K<L.length;K++){var Q=C(L[K].code,l.trumpSuit);Q<E&&(E=Q,J=K)}var G=L[J].code;i({bookNum:M,winningPlayer:T[J],highCard:G})}function V(e,r){return $(a,T)===e?Object(n.jsx)(q,{deckUrl:t,player:a,position:e,sendPlayCard:r,trumpSuit:l.trumpSuit,leadSuit:P}):Object(n.jsx)(F,{deckUrl:t,player:T[e-1],position:e,sendPlayCard:r,trumpSuit:l.trumpSuit})}function _(e,t){var a=t.indexOf(e);return L[a]}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"playboard",children:[Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox player3",children:Object(n.jsx)(W,{card:_("Partner",T)})}),Object(n.jsx)("div",{className:"playboardbox"})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox player2",children:Object(n.jsx)(W,{card:_("Mario",T)})}),Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox player4",children:Object(n.jsx)(W,{card:_("Luigi",T)})})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardboxlog",children:Object(n.jsx)(X,{bidData:l})}),Object(n.jsx)("div",{className:"playboardbox player1",children:Object(n.jsx)(W,{card:_("You",T)})}),Object(n.jsx)("div",{className:"playboardboxlog",children:Object(n.jsx)(z,{bookInfo:o})})]})]}),Object(n.jsxs)("div",{className:"playerwindow",children:[Object(n.jsx)(R,{deckUrl:t,player:a}),Object(n.jsxs)("div",{className:"playeraction",children:[I>0&&!u&&V(1,h),I>1&&!v&&V(2,f),I>2&&!g&&V(3,y),I>3&&!k&&V(4,w)]})]})]})};function $(e,t){return t.indexOf(e)+1}a(21);var ee=function(e){var t=e.deckUrl,a=e.drawer,c=(e.trumpSuit,e.sendDraw),i=Object(r.useState)(!1),d=Object(s.a)(i,2),o=d[0],l=d[1],j=Object(r.useState)(!1),b=Object(s.a)(j,2),u=b[0],h=b[1],O=Object(r.useState)(!1),x=Object(s.a)(O,2),f=x[0],p=x[1],m=Object(r.useState)(!1),g=Object(s.a)(m,2),y=g[0],S=g[1],N=Object(r.useState)(!1),k=Object(s.a)(N,2),w=k[0],D=k[1],B=Object(r.useState)(!0),P=Object(s.a)(B,2),C=(P[0],P[1]),H=M(t+"/pile/"+a+"/list/"),U=H.data;H.error,H.isPending;return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault();for(var r=[o,u,f,y,w],i=[],d=0;d<5;d++)r[d]&&i.push(U.piles[a].cards[d].code);v(t,i,a,c,C)},children:[Object(n.jsx)(R,{deckUrl:t,player:a}),Object(n.jsxs)("div",{className:"handwindow",children:[Object(n.jsxs)("div",{className:"discardHand",children:[Object(n.jsx)("div",{className:"discardbox",children:Object(n.jsx)("input",{type:"checkbox",name:"card0",onChange:function(e){return l(e.target.checked)},checked:o})}),Object(n.jsx)("div",{className:"discardbox",children:Object(n.jsx)("input",{type:"checkbox",name:"card1",onChange:function(e){return h(e.target.checked)},checked:u})}),Object(n.jsx)("div",{className:"discardbox",children:Object(n.jsx)("input",{type:"checkbox",name:"card2",onChange:function(e){return p(e.target.checked)},checked:f})}),Object(n.jsx)("div",{className:"discardbox",children:Object(n.jsx)("input",{type:"checkbox",name:"card3",onChange:function(e){return S(e.target.checked)},checked:y})}),Object(n.jsx)("div",{className:"discardbox",children:Object(n.jsx)("input",{type:"checkbox",name:"card4",onChange:function(e){return D(e.target.checked)},checked:w})})]}),Object(n.jsx)("div",{className:"playeraction"})]}),Object(n.jsx)("button",{children:"Discard Selected"})]})},te=function(e){var t=e.deckUrl,a=e.drawer,c=e.trumpSuit,i=e.sendDraw,d=Object(r.useState)(null),o=Object(s.a)(d,2),l=o[0],j=o[1],b=Object(r.useState)(!0),u=Object(s.a)(b,2),h=u[0],O=u[1],x=M(t+"/pile/"+a+"/list/"),f=x.data,p=x.error,m=x.isPending;return Object(r.useEffect)((function(){if(f){var e,r,i=f.piles[a].cards,d=[],s=Object(L.a)(i);try{for(s.s();!(r=s.n()).done;)"AH"!==(e=r.value).code&&e.code.charAt(1)!==c.charAt(0)&&d.push(e.code)}catch(n){s.e(n)}finally{s.f()}v(t,d,a,j,O)}}),[f]),f&&l&&!h&&i(l),Object(n.jsxs)("div",{children:[p&&Object(n.jsx)("div",{children:p}),m&&Object(n.jsx)("div",{children:"Thinking...."}),f&&Object(n.jsx)("div",{children:"Done"}),";"]})},ae=function(e){var t=e.draw,a=e.drawer;return Object(n.jsxs)("div",{className:"playermessagebox",children:[t&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playermessageboxheader",children:a}),Object(n.jsxs)("div",{className:"playermessageboxtext",children:["Draws ",t]})]}),!t&&Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"playermessageboxheader",children:a}),Object(n.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]})]})},re=function(e){var t=e.deckUrl,a=e.roundOrder,c=e.bidData,i=e.sendDiscardData,d=Object(r.useState)(""),o=Object(s.a)(d,2),l=o[0],j=o[1],b=Object(r.useState)(""),u=Object(s.a)(b,2),h=u[0],O=u[1],x=Object(r.useState)(""),v=Object(s.a)(x,2),f=v[0],p=v[1],m=Object(r.useState)(""),g=Object(s.a)(m,2),y=g[0],S=g[1],N=Object(r.useState)(1),k=Object(s.a)(N,2),w=k[0],D=k[1];switch(w){case 1:l&&D(2);break;case 2:h&&D(3);break;case 3:f&&D(4);break;case 4:y&&D(5);break;case 5:i(!0)}var B=a[w-1];function P(e,r){return $("You",a)===e?Object(n.jsx)(ee,{deckUrl:t,drawer:B,trumpSuit:c.trumpSuit,sendDraw:r}):Object(n.jsx)(te,{deckUrl:t,drawer:B,trumpSuit:c.trumpSuit,sendDraw:r})}var C=[l,h,f,y];function H(e,t){var a=t.indexOf(e);return C[a]}return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"playboard",children:[Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(ae,{draw:H("Partner",a),drawer:"Partner"})}),Object(n.jsx)("div",{className:"playboardbox"})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(ae,{draw:H("Mario",a),drawer:"Mario"})}),Object(n.jsx)("div",{className:"playboardbox"}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(ae,{draw:H("Luigi",a),drawer:"Luigi"})})]}),Object(n.jsxs)("div",{className:"playboardrow",children:[Object(n.jsx)("div",{className:"playboardboxlog",children:Object(n.jsx)(X,{bidData:c})}),Object(n.jsx)("div",{className:"playboardbox",children:Object(n.jsx)(ae,{draw:H("You",a),drawer:"You"})}),Object(n.jsx)("div",{className:"playboardbox"})]})]}),Object(n.jsxs)("div",{className:"playerwindow",children:[w>0&&!l&&P(1,j),w>1&&!h&&P(2,O),w>2&&!f&&P(3,p),w>3&&!y&&P(4,S),4===w&&y&&Object(n.jsx)("div",{children:"Hey!"})]})]})},ce=function(e){var t=e.team1,a=e.team2,r=e.sendRoundScore,c=e.sendStage;return Object(n.jsxs)("div",{classname:"gamewindow",children:[Object(n.jsxs)("div",{className:"biddingwindow",children:[Object(n.jsx)("div",{className:"windowheader",children:"Round Over!"}),Object(n.jsxs)("div",{className:"playwinner",children:["Team 1: ",t]}),Object(n.jsxs)("div",{className:"playwinner",children:["Team 2: ",a]})]}),Object(n.jsx)("div",{className:"nextroundbutton",children:Object(n.jsx)("button",{onClick:function(){r([t,a]),c("Over")},children:"Next Round"})})]})},ie=function(e){var t=e.deckUrl,a=e.round,c=e.sendRoundScore,i=e.newRound,d=Object(r.useState)(!0),o=Object(s.a)(d,2),l=o[0],j=o[1],b=Object(r.useState)(""),u=Object(s.a)(b,2),O=u[0],x=u[1],v=Object(r.useState)("Deal"),f=Object(s.a)(v,2),p=f[0],m=f[1],g=Object(r.useState)(!1),y=Object(s.a)(g,2),S=y[0],N=y[1],k=Object(r.useState)(null),w=Object(s.a)(k,2),D=w[0],B=w[1],P=Object(r.useState)(1),H=Object(s.a)(P,2),U=H[0],Y=H[1],I=Object(r.useState)([]),A=Object(s.a)(I,2),L=A[0],M=A[1],T=Object(r.useState)(null),J=Object(s.a)(T,2),R=J[0],E=J[1];i&&"Over"===p&&(j(!0),x(""),m("Deal"),N(!1),B(null),Y(1),M([]),E(null),console.log("wipe"));var K="You";Object(r.useEffect)((function(){!function(e,t,a,r){h.apply(this,arguments)}(t,a,j,E)}),[t,a]),t&&"Deal"===p&&!l&&m("Bid"),O&&"Bid"===p&&!l&&m("Discard"),S&&"Discard"===p&&m("Play"),D&&(L[U-1]=D,M(L),B(""),Y(U+1)),"Play"===p&&5===L.length&&(m("Winner"),Y(0));var W=0,G=0;if("Winner"===p){for(var V=50,_=null,q=0;q<5;q++){"You"===L[q].winningPlayer||"Partner"===L[q].winningPlayer?W+=1:G+=1;var z=C(L[q].highCard,O.trumpSuit);V>z&&(V=z,_=L[q].winningPlayer)}"You"===_||"Partner"===_?W+=1:G+=1,6===W&&(W=9),6===G&&(G=9);var F=O.highBid;"You"===O.highBidder||"Partner"===O.highBidder?"15"===F&&W<3?W=-3:"20"===F&&W<4?W=-4:"25"===F&&W<5?W=-5:"30"===F&&W<6?W=-6:"30No"===F&&G<6&&(W=-12):"15"===F&&G<3?G=-3:"20"===F&&G<4?G=-4:"25"===F&&G<5?G=-5:"30"===F&&G<6?G=-6:"30No"===F&&G<6&&(G=-12)}return Object(n.jsxs)("div",{className:"content",children:["Deal"===p&&l&&Object(n.jsx)("div",{className:"gamewindow loading",children:"Dealing...."}),"Bid"===p&&R&&Object(n.jsx)("div",{children:Object(n.jsx)(Q,{deckUrl:t,bidOrder:R,sendBidData:x})}),"Discard"===p&&Object(n.jsx)("div",{children:Object(n.jsx)(re,{deckUrl:t,roundOrder:R,bidData:O,sendDiscardData:N})}),"Play"===p&&1===U&&Object(n.jsx)("div",{children:Object(n.jsx)(Z,{deckUrl:t,player:K,order:R,sendBookInfo:B,book:U,bookInfo:L,bidData:O})}),"Play"===p&&2===U&&Object(n.jsx)("div",{children:Object(n.jsx)(Z,{deckUrl:t,player:K,order:R,sendBookInfo:B,book:U,bookInfo:L,bidData:O})}),"Play"===p&&3===U&&Object(n.jsx)("div",{children:Object(n.jsx)(Z,{deckUrl:t,player:K,order:R,sendBookInfo:B,book:U,bookInfo:L,bidData:O})}),"Play"===p&&4===U&&Object(n.jsx)("div",{children:Object(n.jsx)(Z,{deckUrl:t,player:K,order:R,sendBookInfo:B,book:U,bookInfo:L,bidData:O})}),"Play"===p&&5===U&&Object(n.jsx)("div",{children:Object(n.jsx)(Z,{deckUrl:t,player:K,order:R,sendBookInfo:B,book:U,bookInfo:L,bidData:O})}),"Winner"===p&&Object(n.jsx)(ce,{team1:W,team2:G,sendRoundScore:c,sendStage:m})]})},de=function(){var e=M("https://deckofcardsapi.com/api/deck/new/"),t=e.data,a=e.isPending,c=e.error,i=Object(r.useState)(1),d=Object(s.a)(i,2),o=d[0],j=d[1],b=Object(r.useState)([0,0]),u=Object(s.a)(b,2),h=u[0],O=u[1],x=Object(r.useState)(null),v=Object(s.a)(x,2),f=v[0],p=v[1],m=Object(r.useState)([]),g=Object(s.a)(m,2),y=g[0],S=g[1],N=Object(r.useState)(""),k=Object(s.a)(N,2),w=k[0],D=k[1],B=null;t&&(B="https://deckofcardsapi.com/api/deck/"+t.deck_id);var P=[];return f&&(y[o]=f,P[0]=h[0]+f[0],P[1]=h[1]+f[1],console.log("scoring",P,f,o),S(y),O(P),P[0]>30&&D("Team 1 Wins"),P[1]>30&&D("Team 2 Wins"),p(null),j(o+1)),Object(n.jsxs)("div",{className:"gamewindow",children:[a&&Object(n.jsx)("div",{className:"gamewindow loading",children:"Setting up..."}),c&&Object(n.jsx)("div",{className:"gamewindow loading",children:c}),B&&!w&&Object(n.jsxs)("div",{className:"game",children:[Object(n.jsx)(l,{round:o,gameScore:h}),Object(n.jsx)(ie,{deckUrl:B,round:o,sendRoundScore:p,newRound:!0})]}),w&&Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:w}),Object(n.jsxs)("h3",{children:["Team 1: ",h[0]]}),Object(n.jsxs)("h3",{children:["Team 2: ",h[1]]}),Object(n.jsx)("button",{children:"Play Again"})]})]})},se=(a(22),function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsx)("div",{className:"footeritem",children:Object(n.jsx)("a",{href:"https://github.com/dsull29/45s",target:"new",children:"GitHub Page"})}),Object(n.jsx)("div",{className:"footeritem",children:Object(n.jsx)("a",{href:"https://github.com/dsull29/45s/issues",target:"new",children:"Report a bug"})})]})});var ne=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(o,{}),!1===a&&Object(n.jsx)("div",{className:"gamewindow",children:Object(n.jsx)("button",{className:"startbutton",onClick:function(){return c(!0)},children:"Start Game"})}),a&&Object(n.jsx)(de,{}),Object(n.jsx)(se,{})]})};d.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(ne,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a4503601.chunk.js.map