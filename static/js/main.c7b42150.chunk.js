(this.webpackJsonp45s=this.webpackJsonp45s||[]).push([[0],[,,,,,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),i=a(10),n=a.n(i),d=(a(15),a(2)),s=(a(16),a(0)),l=function(){return Object(s.jsxs)("div",{className:"header",children:[Object(s.jsx)("div",{className:"maintitle",children:"45"}),Object(s.jsx)("div",{className:"tagline",children:"Straight out the UMD commuter cafe"})]})},o=(a(18),a(19),function(e){var t=e.round,a=e.gameScore;return Object(s.jsxs)("div",{className:"scoreBoard",style:{textAlign:"left"},children:[Object(s.jsxs)("div",{className:"scoreBoardItem","data-testid":"team1Score",children:["Team 1: ",a[0]]}),Object(s.jsxs)("div",{className:"scoreBoardItem","data-testid":"round",children:["Round: ",t]}),Object(s.jsxs)("div",{className:"scoreBoardItem","data-testid":"team2Score",children:["Team 2: ",a[1]]})]})}),j=a(4),u=a.n(j),b=a(5);function h(){return(h=Object(b.a)(u.a.mark((function e(t,a,c,r){var i,n,d,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=x(a),e.next=3,fetch(t+"/shuffle/");case 3:return e.next=5,fetch(t+"/draw/?count=20");case 5:return n=e.sent,e.next=8,n.json();case 8:return d=e.sent,s=O(d.cards),console.log("handCheck",s,d),e.next=13,fetch(t+"/pile/"+i[0]+"/add/?cards="+s[0].toString());case 13:return e.next=15,fetch(t+"/pile/"+i[1]+"/add/?cards="+s[1].toString());case 15:return e.next=17,fetch(t+"/pile/"+i[2]+"/add/?cards="+s[2].toString());case 17:return e.next=19,fetch(t+"/pile/"+i[3]+"/add/?cards="+s[3].toString());case 19:e.sent&&(r(i),c(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return[[e[0].code,e[1].code,e[2].code,e[12].code,e[13].code],[e[3].code,e[4].code,e[5].code,e[14].code,e[15].code],[e[6].code,e[7].code,e[8].code,e[16].code,e[17].code],[e[9].code,e[10].code,e[11].code,e[18].code,e[19].code]]}function x(e){var t,a=(e-1)%4;return 0===a?t=["Mario","Partner","Luigi","You"]:1===a?t=["Partner","Luigi","You","Mario"]:2===a?t=["Luigi","You","Mario","Partner"]:3===a&&(t=["You","Mario","Partner","Luigi"]),t}function v(e,t,a,c,r){return f.apply(this,arguments)}function f(){return(f=Object(b.a)(u.a.mark((function e(t,a,c,r,i){var n,d,s,l,o,j;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.toString());case 2:return n=e.sent,e.next=5,n.json();case 5:return e.next=7,fetch(t+"/draw/?count="+a.length);case 7:return d=e.sent,e.next=10,d.json();case 10:if(s=e.sent,console.log("redraw",c,a,s.cards),l=[],s.cards)for(o=0;o<s.cards.length;o++)l.push(s.cards[o].code);return e.next=16,fetch(t+"/pile/"+c+"/add/?cards="+l.toString());case 16:return j=e.sent,e.next=19,j.json();case 19:e.sent&&(r(a.length),i(!1));case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=a(3),g=[-35,-21,-18,-13,-11,-10,-9,-8,-7,-6,-5,-4,-3,-2,-1],m=[13,12,11,10,9,8,7,6,5,4,3,2,1,0],S=[27,26,25,24,23,22,21,20,19,18,17,16,15,14],y=["5H","JH","AH","KH","QH","0H","9H","8H","7H","6H","4H","3H","2H"],k=["5D","JD","AH","AD","KD","QD","0D","9D","8D","7D","6D","4D","3D","2D"],N=["5S","JS","AH","AS","KS","QS","2S","3S","4S","6S","7S","8S","9S","0S"],w=["5C","JC","AH","AC","KC","QC","2C","3C","4C","6C","7C","8C","9C","0C"],D=["2H","3H","4H","5H","6H","7H","8H","9H","0H","JH","QH","KH"],B=["AD","2D","3D","4D","5D","6D","7D","8D","9D","0D","JD","QD","KD"],C=["0S","9S","8S","7S","6S","5S","4S","3S","2S","AS","JS","QS","KS"],P=["0C","9C","8C","7C","6C","5C","4C","3C","2C","AC","JC","QC","KC"];function H(e){var t,a,c,r,i;a=c=r=i=0;var n,d=Object(p.a)(e);try{for(d.s();!(n=d.n()).done;)switch((t=n.value).charAt(1)){case"H":a+=A(t,"H");break;case"D":c+=A(t,"D");break;case"S":r+=A(t,"S");break;case"C":i+=A(t,"C");break;default:console.log("default returned")}}catch(s){d.e(s)}finally{d.f()}return[a,c,r,i]}function U(e,t,a){var c=e.charAt(1),r=t.charAt(0),i=a,n="";return n=c===r||"AH"===e?A(e,r):c===i?function(e,t){switch(t){case"H":return m[D.indexOf(e)];case"D":return m[B.indexOf(e)];case"S":return m[C.indexOf(e)];case"C":return m[P.indexOf(e)];default:return""}}(e,a):function(e,t){switch(t){case"H":return S[D.indexOf(e)];case"D":return S[B.indexOf(e)];case"S":return S[C.indexOf(e)];case"C":return S[P.indexOf(e)];default:return""}}(e,c),n}function A(e,t){switch(t){case"H":return g[y.indexOf(e)];case"D":return g[k.indexOf(e)];case"S":return g[N.indexOf(e)];case"C":return g[w.indexOf(e)];default:return""}}var I=function(e,t){var a,c;return"Pass"===e.playerBid||("Take"===e.playerBid?(a=t.highBid,c=e.bidder):e.playerBid&&(a=e.playerBid,c=e.bidder)),{highBid:a,highBidder:c}};var Y=function(e){var t=Object(c.useState)(null),a=Object(d.a)(t,2),r=a[0],i=a[1],n=Object(c.useState)(!0),s=Object(d.a)(n,2),l=s[0],o=s[1],j=Object(c.useState)(null),u=Object(d.a)(j,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){i(e),o(!1),h(null)})).catch((function(e){"AbortError"===e.name?console.log("fetch aborted"):(o(!1),h(e.message))})),function(){return t.abort()}}),[e]),{data:r,isPending:l,error:b}},T=function(e){var t,a=e.deckUrl,r=e.bidder,i=e.bidData,n=e.dealer,l=e.sendBid,o=Object(c.useState)("Pass"),j=Object(d.a)(o,2),u=j[0],b=j[1],h=Y(a+"/pile/"+r+"/list/"),O=h.data,x=h.error,v=h.isPending,f=r===n,g=i.highBid;if(O)if("You"===r)t=!0;else{t=!1;var m,S,y=O.piles[r].cards,k=[],N=Object(p.a)(y);try{for(N.s();!(S=N.n()).done;)m=S.value,k.push(m.code)}catch(B){N.e(B)}finally{N.f()}var w=function(e,t,a){var c=["Pass","15","20","25","30","30 No Draw"],r=e.sort((function(e,t){return e-t}))[0],i=null;return r<-80?i="30":r<-60?i="25":r<-45?i="20":r<-34&&(i="15"),i&&c.indexOf(i)<=c.indexOf(t.highBid)&&(i=a?"Take":"Pass"),i}(H(k),i,f);l({bidder:r,playerBid:w})}function D(e,t){var a=["Pass","15","20","25","30","30No"];return a.indexOf(t)<a.indexOf(e)}return Object(s.jsxs)("div",{children:[x&&Object(s.jsx)("div",{children:x}),v&&Object(s.jsx)("div",{children:"Thinking..."}),t&&Object(s.jsx)("form",{onSubmit:function(){l({bidder:r,playerBid:u})},children:Object(s.jsxs)("div",{className:"playeraction",children:[Object(s.jsxs)("div",{className:"playeractionselect",children:["Place Bid:\xa0\xa0",Object(s.jsxs)("select",{value:u,onChange:function(e){return b(e.target.value)},children:[f&&g&&Object(s.jsx)("option",{value:"Take",children:"Take"}),f&&g&&Object(s.jsx)("option",{value:"Pass",children:"Let Bidder Have It"}),!f&&Object(s.jsx)("option",{value:"Pass",children:"Pass"}),D("15",g)&&Object(s.jsx)("option",{value:"15",children:"15"}),D("20",g)&&Object(s.jsx)("option",{value:"20",children:"20"}),D("25",g)&&Object(s.jsx)("option",{value:"25",children:"25"}),D("30",g)&&Object(s.jsx)("option",{value:"30",children:"30"}),D("30No",g)&&Object(s.jsx)("option",{value:"30No",children:"30 No Draw"})]})]}),Object(s.jsx)("div",{className:"playeractionbutton",children:Object(s.jsx)("button",{children:"Place Bid"})})]})})]})},L=(a(8),function(e){var t=e.card;return Object(s.jsx)("div",{className:"cardslot",children:Object(s.jsx)("div",{children:t&&Object(s.jsx)("img",{src:t.image,alt:"Card",height:"104px"})})})}),M=function(e){var t=e.deckUrl,a=e.player,c=e.round,r=Y(t+"/pile/"+a+"/list/"),i=r.data,n=r.isPending,d=r.error,l=[];return i&&i.piles[a]&&i.piles[a].cards&&(l=i.piles[a].cards),Object(s.jsxs)("div",{children:[d&&Object(s.jsx)("div",{children:d}),n&&Object(s.jsx)("div",{children:"Loading..."}),i&&l&&Object(s.jsx)("div",{className:"handwindow",children:Object(s.jsxs)("div",{className:"hand",children:[Object(s.jsx)(L,{card:l[0],round:c}),Object(s.jsx)(L,{card:l[1],round:c}),Object(s.jsx)(L,{card:l[2],round:c}),Object(s.jsx)(L,{card:l[3],round:c}),Object(s.jsx)(L,{card:l[4],round:c})]})})]})},J=(a(9),function(e){var t=e.deckUrl,a=e.bidData,r=e.sendTrumpSuit,i=Object(c.useState)("Hearts"),n=Object(d.a)(i,2),l=n[0],o=n[1],j=a.highBidder,u=Y(t+"/pile/"+j+"/list/"),b=u.data,h=u.error,O=u.isPending;if(console.log("bid",j,a),b&&"You"!==j){var x,v,f=b.piles[j].cards,g=[],m=Object(p.a)(f);try{for(m.s();!(v=m.n()).done;)x=v.value,g.push(x.code)}catch(y){m.e(y)}finally{m.f()}var S=function(e){var t=JSON.stringify(e),a=e.sort((function(e,t){return e-t}))[0];return["Hearts","Diamonds","Spades","Clubs"][JSON.parse(t).indexOf(a)]}(H(g));r(S)}return Object(s.jsxs)("div",{children:[h&&Object(s.jsx)("div",{children:h}),O&&Object(s.jsx)("div",{children:"Thinking..."}),"You"===a.highBidder&&Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(l)},children:["Select suit:\xa0\xa0",Object(s.jsxs)("div",{className:"playeraction",children:[Object(s.jsx)("div",{className:"playeractionselect",children:Object(s.jsxs)("select",{value:l,onChange:function(e){return o(e.target.value)},children:[Object(s.jsx)("option",{value:"Hearts",children:"Hearts"}),Object(s.jsx)("option",{value:"Diamonds",children:"Diamonds"}),Object(s.jsx)("option",{value:"Spades",children:"Spades"}),Object(s.jsx)("option",{value:"Clubs",children:"Clubs"})]})}),Object(s.jsx)("div",{className:"playeractionbutton",children:Object(s.jsx)("button",{children:"Select Suit"})})]})]})]})}),R=function(e){var t=e.bid,a=e.bidder;return console.log("ViewBid",t),Object(s.jsxs)("div",{className:"playermessagebox",children:[t&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:t.bidder}),Object(s.jsx)("div",{className:"playermessageboxtext",children:t.playerBid||"Pass"})]}),!t&&"You"!==a&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:a}),Object(s.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]}),!t&&"You"===a&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:"You"}),Object(s.jsx)("div",{className:"playermessageboxtext",children:"We're waiting!"})]})]})},E=function(e){var t=e.draw,a=e.drawer;return Object(s.jsxs)("div",{className:"playermessagebox",children:[t&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:a}),Object(s.jsxs)("div",{className:"playermessageboxtext",children:["Draws ",t]})]}),!t&&Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:a}),Object(s.jsx)("div",{className:"playermessageboxtext",children:"\xa0"})]})]})},W=function(e){var t,a=e.card,c=e.player;return a&&(t=a.value+" of "+a.suit),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"playermessagebox",children:[Object(s.jsx)("div",{className:"playermessageboxheader",children:c}),a&&Object(s.jsx)("div",{className:"playerplayedcard",children:Object(s.jsx)("img",{src:a.images.png,alt:t,width:"30%"})})]})})},K=(a(21),function(e){var t=e.stage,a=e.players,c=e.actions;e.bidData;return Object(s.jsxs)("div",{className:"table",children:[Object(s.jsx)("div",{className:"tablerowtop",children:Object(s.jsx)("div",{className:"tableplayerbox player3",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(s.jsx)(R,{bid:c[2],bidder:a[2]}),"Drawing"===t&&Object(s.jsx)(E,{draw:c[2],drawer:a[2]}),"Playing"===t&&Object(s.jsx)(W,{card:c[2],player:a[2]})]})})})}),Object(s.jsxs)("div",{className:"tablerowmid",children:[Object(s.jsx)("div",{className:"tableplayerbox player2",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(s.jsx)(R,{bid:c[1],bidder:a[1]}),"Drawing"===t&&Object(s.jsx)(E,{draw:c[1],drawer:a[1]}),"Playing"===t&&Object(s.jsx)(W,{card:c[1],player:a[1]})]})})}),Object(s.jsx)("div",{className:"tableplayerbox player4",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(s.jsx)(R,{bid:c[3],bidder:a[3]}),"Drawing"===t&&Object(s.jsx)(E,{draw:c[3],drawer:a[3]}),"Playing"===t&&Object(s.jsx)(W,{card:c[3],player:a[3]})]})})})]}),Object(s.jsx)("div",{className:"tablerowbottom",children:Object(s.jsx)("div",{className:"tableplayerbox player1",children:Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"playerslot",children:["Bidding"===t&&Object(s.jsx)(R,{bid:c[0],bidder:a[0]}),"Drawing"===t&&Object(s.jsx)(E,{draw:c[0],drawer:a[0]}),"Playing"===t&&Object(s.jsx)(W,{card:c[0],player:a[0]})]})})})}),Object(s.jsx)("div",{className:"tablerowlog",children:Object(s.jsx)("div",{className:"tablelogbox",children:Object(s.jsx)("div",{className:"logslot"})})})]})}),Q=function(e){var t=e.deckUrl,a=e.bidOrder,r=e.sendBidData,i=Object(c.useState)(""),n=Object(d.a)(i,2),l=n[0],o=n[1],j=Object(c.useState)(""),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),v=x[0],f=x[1],p=Object(c.useState)(""),g=Object(d.a)(p,2),m=g[0],S=g[1],y=Object(c.useState)(""),k=Object(d.a)(y,2),N=k[0],w=k[1],D=Object(c.useState)(1),B=Object(d.a)(D,2),C=B[0],P=B[1],H=Object(c.useState)({highBid:null,highBidder:null,trumpSuit:null}),U=Object(d.a)(H,2),A=U[0],Y=U[1];Object(c.useEffect)((function(){Y({highBid:null,highBidder:null,trumpSuit:null})}),[a]);var L=a[C-1],R=a[3];switch(C){case 1:if(l){var E=I(l,A),W=E.highBid,Q=E.highBidder;W&&Y({highBid:W,highBidder:Q,trumpSuit:N}),P(2)}break;case 2:if(b){var G=I(b,A),V=G.highBid,_=G.highBidder;V&&Y({highBid:V,highBidder:_,trumpSuit:N}),P(3)}break;case 3:if(v){var q=I(v,A),z=q.highBid,F=q.highBidder;z&&Y({highBid:z,highBidder:F,trumpSuit:N}),P(4)}break;case 4:if(m){var X=I(m,A),Z=X.highBid,$=X.highBidder;Z?Y({highBid:Z,highBidder:$,trumpSuit:N}):A.highBid||Y({highBid:"15",highBidder:R,trumpSuit:N}),P(5)}break;case 5:if(N){var ee=A.highBid,te=A.highBidder;Y({highBid:ee,highBidder:te,trumpSuit:N}),P(6)}break;case 6:r(A);break;default:console.log("bid turn default hit")}var ae=[l,b,v,m];function ce(e,t){var a=t.indexOf(e);return ae[a]}var re=["You","Mario","Partner","Luigi"];return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{className:"viewTableContainer",children:Object(s.jsx)(K,{stage:"Bidding",players:re,actions:function(e,t){for(var a=[],c=0;c<re.length;c++)a[c]=ce(re[c],t);return a}(0,a),bidData:A})}),Object(s.jsx)("div",{className:"playerWindowContainer",children:Object(s.jsxs)("div",{className:"playerwindow",children:[Object(s.jsx)(M,{deckUrl:t,player:"You"}),1===C&&Object(s.jsx)(T,{deckUrl:t,bidder:L,bidData:A,dealer:R,sendBid:o}),2===C&&Object(s.jsx)(T,{deckUrl:t,bidder:L,bidData:A,dealer:R,sendBid:h}),3===C&&Object(s.jsx)(T,{deckUrl:t,bidder:L,bidData:A,dealer:R,sendBid:f}),4===C&&Object(s.jsx)(T,{deckUrl:t,bidder:L,bidData:A,dealer:R,sendBid:S}),5===C&&Object(s.jsx)(J,{deckUrl:t,bidData:A,sendTrumpSuit:w})]})})]})};function G(){return(G=Object(b.a)(u.a.mark((function e(t,a,c){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t+"/pile/discard/add/?cards="+a.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){return a}));case 2:c(a);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var V=function(e){var t=e.deckUrl,a=e.player,r=(e.bookOrder,e.position,e.leadSuit,e.sendPlayCard),i=(e.bidData,e.playedCards,Object(c.useState)(0)),n=Object(d.a)(i,2),l=n[0],o=n[1],j=Y(t+"/pile/"+a+"/list/"),u=j.data,b=j.error,h=j.isPending,O=[];return u&&(O=u.piles[a].cards),Object(s.jsxs)("div",{children:[b&&Object(s.jsx)("div",{children:b}),h&&Object(s.jsx)("div",{children:"Thinking..."}),u&&Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),function(e,t,a){G.apply(this,arguments)}(t,O[l],r)},children:Object(s.jsxs)("div",{className:"playeraction",children:[Object(s.jsxs)("div",{className:"playeractionselect",children:["Select card:\xa0\xa0",Object(s.jsxs)("select",{value:l,onChange:function(e){return o(e.target.value)},children:[O[0]&&Object(s.jsx)("option",{value:0,children:O[0].value+" of "+O[0].suit}),O[1]&&Object(s.jsx)("option",{value:1,children:O[1].value+" of "+O[1].suit}),O[2]&&Object(s.jsx)("option",{value:2,children:O[2].value+" of "+O[2].suit}),O[3]&&Object(s.jsx)("option",{value:3,children:O[3].value+" of "+O[3].suit}),O[4]&&Object(s.jsx)("option",{value:4,children:O[4].value+" of "+O[4].suit})]})]}),Object(s.jsx)("div",{className:"playeractionbutton",children:Object(s.jsx)("button",{children:"Play Card"})})]})})]})};function _(e,t,a,c,r,i,n){var d,s,l,o=a.trumpSuit,j=function(e,t){var a,c,r=[],i=Object(p.a)(e);try{for(i.s();!(c=i.n()).done;)(a=c.value).code.charAt(1)===t&&r.push(a)}catch(n){i.e(n)}finally{i.f()}return r}(t,c),u=function(e,t){var a,c,r=[],i=Object(p.a)(e);try{for(i.s();!(c=i.n()).done;)(a=c.value).code.charAt(1)===t.charAt(0)&&r.push(a)}catch(n){i.e(n)}finally{i.f()}return r}(t,o);switch(r[0]&&(l=function(e,t,a){var c,r,i,n=50,d=Object(p.a)(e);try{for(d.s();!(i=d.n()).done;){var s=U((c=i.value).code,t,a);n>s&&(n=s,r=c)}}catch(l){d.e(l)}finally{d.f()}return r}(r.filter((function(e){return e})),o,c)),e){case 1:d=z(t,o);break;case 2:d=z(s=q(j,s,t),o,c);break;case 3:(d=F(s=j.concat(u),o,c))||(d=z(t,o,c));break;case 4:!1===function(e,t,a,c){var r=U(e.code,a,c),i=U(t.code,a,c);return r<i}(d=F(t,o,c),l,o,c)&&(d=z(s=q(j,s,t),o,c));break;default:console.log("defaultHit")}return d}function q(e,t,a){return e.length>0?e:a}function z(e,t,a){for(var c=null,r=-50,i=0;i<e.length;i++){var n=U(e[i].code,t,a);n>r&&(r=n,c=i)}return e[c]}function F(e,t,a){for(var c=null,r=50,i=0;i<e.length;i++){var n=U(e[i].code,t,a);n<r&&(r=n,c=i)}return e[c]}var X=function(e){var t=e.deckUrl,a=e.player,r=(e.bookOrder,e.position),i=e.leadSuit,n=e.sendPlayCard,l=e.bidData,o=e.playedCards,j=Y(t+"/pile/"+a+"/list/"),u=j.data,b=j.error,h=j.isPending,O=Object(c.useState)(null),x=Object(d.a)(O,2),v=x[0],f=x[1];if(u&&!v){var p=_(r,u.piles[a].cards,l,i,o);fetch(t+"/pile/discard/add/?cards="+p.code).then((function(e){if(!e.ok)throw Error("Could not fetch data for that resource");return e.json()})).then((function(e){f(p)}))}return u&&v&&n(v),Object(s.jsxs)("div",{children:[b&&Object(s.jsx)("div",{children:b}),h&&Object(s.jsx)("div",{children:"Thinking..."}),u&&Object(s.jsx)("div",{children:"Data"})]})},Z=function(e){var t=e.bidData;return Object(s.jsxs)("div",{className:"bidInfo",children:[Object(s.jsx)("div",{className:"bidInfoBox",children:"Bid Info"}),Object(s.jsxs)("div",{className:"bidInfoBox",children:["Bid: ",t.highBid," "]}),Object(s.jsxs)("div",{className:"bidInfoBox",children:["Bidder: ",t.highBidder]}),Object(s.jsxs)("div",{className:"bidInfoBox",children:["Suit: ",t.trumpSuit]})]})},$=function(e){var t=e.deckUrl,a=e.player,r=e.order,i=e.sendBookInfo,n=e.book,l=e.bookInfo,o=e.bidData,j=Object(c.useState)(""),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(""),x=Object(d.a)(O,2),v=x[0],f=x[1],p=Object(c.useState)(""),g=Object(d.a)(p,2),m=g[0],S=g[1],y=Object(c.useState)(""),k=Object(d.a)(y,2),N=k[0],w=k[1],D=Object(c.useState)(""),B=Object(d.a)(D,2),C=B[0],P=B[1],H=Object(c.useState)(1),A=Object(d.a)(H,2),I=A[0],Y=A[1],T=[b,v,m,N],L=n,J=function(e,t){var a,c=e[e.length-1];return c&&(a=c.winningPlayer),"Mario"===a?["Mario","Partner","Luigi","You"]:"Partner"===a?["Partner","Luigi","You","Mario"]:"Luigi"===a?["Luigi","You","Mario","Partner"]:"You"===a?["You","Mario","Partner","Luigi"]:t}(l,r);if(1===I&&b)P(b.code.charAt(1)),Y(2);else if(2===I&&v)Y(3);else if(3===I&&m)Y(4);else if(4===I&&N)setTimeout((function(){Y(5)}),2e3);else if(5===I){for(var R,E=50,W=0;W<T.length;W++){var Q=U(T[W].code,o.trumpSuit,C);Q<E&&(E=Q,R=W)}var G=T[R].code;i({bookNum:L,winningPlayer:J[R],highCard:G})}function _(e,c){return ee(a,J)===e?Object(s.jsx)(V,{deckUrl:t,player:J[e-1],bookOrder:J,position:e,sendPlayCard:c,bidData:o,leadSuit:C,playedCards:T}):Object(s.jsx)(X,{deckUrl:t,player:J[e-1],bookOrder:J,position:e,sendPlayCard:c,bidData:o,leadSuit:C,playedCards:T})}function q(e,t){var a=t.indexOf(e);return T[a]}var z=["You","Mario","Partner","Luigi"];return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"viewTableContainer",children:Object(s.jsx)(K,{stage:"Playing",players:z,actions:function(e){for(var t=[],a=0;a<z.length;a++)t[a]=q(z[a],e);return t}(J)})}),Object(s.jsx)("div",{className:"bidInfoContainer",children:Object(s.jsx)(Z,{bidData:o})}),Object(s.jsx)("div",{className:"playerWindowContainer",children:Object(s.jsxs)("div",{className:"playerwindow",children:[Object(s.jsx)(M,{deckUrl:t,player:a}),I>0&&!b&&_(1,h),I>1&&!v&&_(2,f),I>2&&!m&&_(3,S),I>3&&!N&&_(4,w)]})})]})};function ee(e,t){return t.indexOf(e)+1}a(22);var te=function(e){var t=e.deckUrl,a=e.drawer,r=(e.trumpSuit,e.sendDraw),i=Object(c.useState)(!1),n=Object(d.a)(i,2),l=n[0],o=n[1],j=Object(c.useState)(!1),u=Object(d.a)(j,2),b=u[0],h=u[1],O=Object(c.useState)(!1),x=Object(d.a)(O,2),f=x[0],p=x[1],g=Object(c.useState)(!1),m=Object(d.a)(g,2),S=m[0],y=m[1],k=Object(c.useState)(!1),N=Object(d.a)(k,2),w=N[0],D=N[1],B=Object(c.useState)(!0),C=Object(d.a)(B,2),P=(C[0],C[1]),H=Y(t+"/pile/"+a+"/list/"),U=H.data,A=H.error,I=H.isPending;return Object(s.jsxs)("div",{children:[A&&Object(s.jsx)("div",{children:A}),I&&Object(s.jsx)("div",{children:"Thinking..."}),U&&Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault();for(var c=[l,b,f,S,w],i=[],n=0;n<5;n++)c[n]&&i.push(U.piles[a].cards[n].code);v(t,i,a,r,P)},children:Object(s.jsxs)("div",{className:"discardhandwindow",children:["Select cards to discard:",Object(s.jsxs)("div",{className:"discardHand",children:[Object(s.jsx)("div",{className:"discardbox",children:Object(s.jsx)("input",{type:"checkbox",name:"card0",onChange:function(e){return o(e.target.checked)},checked:l})}),Object(s.jsx)("div",{className:"discardbox",children:Object(s.jsx)("input",{type:"checkbox",name:"card1",onChange:function(e){return h(e.target.checked)},checked:b})}),Object(s.jsx)("div",{className:"discardbox",children:Object(s.jsx)("input",{type:"checkbox",name:"card2",onChange:function(e){return p(e.target.checked)},checked:f})}),Object(s.jsx)("div",{className:"discardbox",children:Object(s.jsx)("input",{type:"checkbox",name:"card3",onChange:function(e){return y(e.target.checked)},checked:S})}),Object(s.jsx)("div",{className:"discardbox",children:Object(s.jsx)("input",{type:"checkbox",name:"card4",onChange:function(e){return D(e.target.checked)},checked:w})})]}),Object(s.jsx)("div",{className:"playeraction",children:Object(s.jsx)("button",{children:"Discard Selected"})})]})})]})},ae=function(e){var t=e.deckUrl,a=e.drawer,r=e.trumpSuit,i=e.sendDraw,n=Object(c.useState)(null),l=Object(d.a)(n,2),o=l[0],j=l[1],u=Object(c.useState)(!0),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Y(t+"/pile/"+a+"/list/"),f=x.data,g=x.error,m=x.isPending;return Object(c.useEffect)((function(){if(f){var e,c,i=f.piles[a].cards,n=[],d=Object(p.a)(i);try{for(d.s();!(c=d.n()).done;)"AH"!==(e=c.value).code&&e.code.charAt(1)!==r.charAt(0)&&n.push(e.code)}catch(s){d.e(s)}finally{d.f()}v(t,n,a,j,O)}}),[t,a,r,f]),f&&o&&!h&&i(o),Object(s.jsxs)("div",{children:[g&&Object(s.jsx)("div",{children:g}),m&&Object(s.jsx)("div",{children:"Thinking...."}),f&&Object(s.jsx)("div",{children:"Done"}),";"]})},ce=function(e){var t=e.deckUrl,a=e.roundOrder,r=e.bidData,i=e.sendDiscardData,n=(e.sendDiscardPending,Object(c.useState)("")),l=Object(d.a)(n,2),o=l[0],j=l[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(""),v=Object(d.a)(x,2),f=v[0],p=v[1],g=Object(c.useState)(""),m=Object(d.a)(g,2),S=m[0],y=m[1],k=Object(c.useState)(1),N=Object(d.a)(k,2),w=N[0],D=N[1];switch(w){case 1:o&&D(2);break;case 2:h&&D(3);break;case 3:f&&D(4);break;case 4:S&&D(5);break;case 5:i(!0);break;default:console.log("default hit")}var B=a[w-1];function C(e,c){return ee("You",a)===e?Object(s.jsx)(te,{deckUrl:t,drawer:B,trumpSuit:r.trumpSuit,sendDraw:c}):Object(s.jsx)(ae,{deckUrl:t,drawer:B,trumpSuit:r.trumpSuit,sendDraw:c})}var P=[o,h,f,S];function H(e,t){var a=t.indexOf(e);return P[a]}var U=["You","Mario","Partner","Luigi"];return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{className:"viewTableContainer",children:Object(s.jsx)(K,{stage:"Drawing",players:U,actions:function(e,t){for(var a=[],c=0;c<U.length;c++)a[c]=H(U[c],t);return a}(0,a),bidData:r})}),Object(s.jsx)("div",{className:"bidInfoContainer",children:Object(s.jsx)(Z,{bidData:r})}),Object(s.jsx)("div",{className:"playerWindowContainer",children:Object(s.jsxs)("div",{className:"playerwindow",children:[Object(s.jsx)(M,{deckUrl:t,player:"You"}),w>0&&!o&&C(1,j),w>1&&!h&&C(2,O),w>2&&!f&&C(3,p),w>3&&!S&&C(4,y),4===w&&S&&Object(s.jsx)("div",{children:"Hey!"})]})})]})},re=function(e){var t=e.team1,a=e.team2,c=e.sendRoundScore,r=e.sendStage;return Object(s.jsxs)("div",{classname:"gamewindow",children:[Object(s.jsxs)("div",{className:"biddingwindow",children:[Object(s.jsx)("div",{className:"windowheader",children:"Round Over!"}),Object(s.jsxs)("div",{className:"playwinner",children:["Team 1: ",t]}),Object(s.jsxs)("div",{className:"playwinner",children:["Team 2: ",a]})]}),Object(s.jsx)("div",{className:"nextroundbutton",children:Object(s.jsx)("button",{onClick:function(){c([t,a]),r("Over")},children:"Next Round"})})]})},ie=function(e){var t=e.deckUrl,a=e.round,r=e.sendRoundScore,i=e.newRound,n=Object(c.useState)(!0),l=Object(d.a)(n,2),o=l[0],j=l[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),O=b[0],x=b[1],v=Object(c.useState)("Deal"),f=Object(d.a)(v,2),p=f[0],g=f[1],m=Object(c.useState)(!1),S=Object(d.a)(m,2),y=S[0],k=S[1],N=Object(c.useState)(null),w=Object(d.a)(N,2),D=w[0],B=w[1],C=Object(c.useState)(1),P=Object(d.a)(C,2),H=P[0],A=P[1],I=Object(c.useState)([]),Y=Object(d.a)(I,2),T=Y[0],L=Y[1],M=Object(c.useState)(null),J=Object(d.a)(M,2),R=J[0],E=J[1];i&&"Over"===p&&(j(!0),x(""),g("Deal"),k(!1),B(null),A(1),L([]),E(null),console.log("wipe"));var W="You";Object(c.useEffect)((function(){!function(e,t,a,c){h.apply(this,arguments)}(t,a,j,E)}),[t,a]),t&&"Deal"===p&&!o&&g("Bid"),O&&"Bid"===p&&!o&&g("Discard"),y&&"Discard"===p&&g("Play"),D&&(T[H-1]=D,L(T),B(""),A(H+1)),"Play"===p&&5===T.length&&(g("Winner"),A(0));var K=0,G=0;if("Winner"===p){for(var V=50,_=null,q=0;q<5;q++){"You"===T[q].winningPlayer||"Partner"===T[q].winningPlayer?K+=1:G+=1;var z=U(T[q].highCard,O.trumpSuit);V>z&&(V=z,_=T[q].winningPlayer)}"You"===_||"Partner"===_?K+=1:G+=1,6===K&&(K=9),6===G&&(G=9);var F=O.highBid;"You"===O.highBidder||"Partner"===O.highBidder?"15"===F&&K<3?K=-3:"20"===F&&K<4?K=-4:"25"===F&&K<5?K=-5:"30"===F&&K<6?K=-6:"30No"===F&&G<6&&(K=-12):"15"===F&&G<3?G=-3:"20"===F&&G<4?G=-4:"25"===F&&G<5?G=-5:"30"===F&&G<6?G=-6:"30No"===F&&G<6&&(G=-12)}return Object(s.jsxs)("div",{className:"content",children:["Deal"===p&&o&&Object(s.jsx)("div",{className:"gamewindow loading",children:"Dealing...."}),"Bid"===p&&R&&Object(s.jsx)("div",{children:Object(s.jsx)(Q,{deckUrl:t,bidOrder:R,sendBidData:x})}),"Discard"===p&&Object(s.jsx)("div",{children:Object(s.jsx)(ce,{deckUrl:t,roundOrder:R,bidData:O,sendDiscardData:k})}),"Play"===p&&1===H&&Object(s.jsx)("div",{children:Object(s.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:H,bookInfo:T,bidData:O})}),"Play"===p&&2===H&&Object(s.jsx)("div",{children:Object(s.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:H,bookInfo:T,bidData:O})}),"Play"===p&&3===H&&Object(s.jsx)("div",{children:Object(s.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:H,bookInfo:T,bidData:O})}),"Play"===p&&4===H&&Object(s.jsx)("div",{children:Object(s.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:H,bookInfo:T,bidData:O})}),"Play"===p&&5===H&&Object(s.jsx)("div",{children:Object(s.jsx)($,{deckUrl:t,player:W,order:R,sendBookInfo:B,book:H,bookInfo:T,bidData:O})}),"Winner"===p&&Object(s.jsx)(re,{team1:K,team2:G,sendRoundScore:r,sendStage:g})]})},ne=(a(23),function(){var e=Y("https://deckofcardsapi.com/api/deck/new/"),t=e.data,a=e.isPending,r=e.error,i=Object(c.useState)(1),n=Object(d.a)(i,2),l=n[0],j=n[1],u=Object(c.useState)([0,0]),b=Object(d.a)(u,2),h=b[0],O=b[1],x=Object(c.useState)(null),v=Object(d.a)(x,2),f=v[0],p=v[1],g=Object(c.useState)([]),m=Object(d.a)(g,2),S=m[0],y=m[1],k=Object(c.useState)(""),N=Object(d.a)(k,2),w=N[0],D=N[1],B=null;t&&(B="https://deckofcardsapi.com/api/deck/"+t.deck_id);var C=[];return f&&(S[l]=f,C[0]=h[0]+f[0],C[1]=h[1]+f[1],console.log("scoring",C,f,l),y(S),O(C),C[0]>30&&D("Team 1 Wins"),C[1]>30&&D("Team 2 Wins"),p(null),j(l+1)),Object(s.jsxs)("div",{className:"gamewindow",children:[a&&Object(s.jsx)("div",{className:"gamewindow loading",children:"Setting up..."}),r&&Object(s.jsx)("div",{className:"gamewindow loading",children:r}),B&&!w&&Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("div",{children:Object(s.jsx)(o,{round:l,gameScore:h})}),Object(s.jsx)("div",{children:Object(s.jsx)(ie,{deckUrl:B,round:l,sendRoundScore:p,newRound:!0})})]}),w&&Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:w}),Object(s.jsxs)("h3",{children:["Team 1: ",h[0]]}),Object(s.jsxs)("h3",{children:["Team 2: ",h[1]]}),Object(s.jsx)("button",{children:"Play Again"})]})]})}),de=(a(24),function(){return Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("div",{className:"footeritem",children:Object(s.jsx)("a",{href:"https://github.com/dsull29/45s",target:"new",children:"GitHub Page"})}),Object(s.jsx)("div",{className:"footeritem",children:Object(s.jsx)("a",{href:"https://github.com/dsull29/45s/issues",target:"new",children:"Report a bug"})})]})});var se=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{}),!1===a&&Object(s.jsx)("div",{className:"gamewindow",children:Object(s.jsx)("button",{className:"startbutton",onClick:function(){return r(!0)},children:"Start Game"})}),a&&Object(s.jsx)(ne,{}),Object(s.jsx)(de,{})]})};n.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(se,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c7b42150.chunk.js.map