import * as React from "react"
const MiniMap2 = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg75"
    width={200}
    height={200}
    viewBox="0 0 52.915 52.917"
    {...props}
  >
    <script id="mesh_polyfill" type="text/javascript">
      {
        '!function(){const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",s="http://www.w3.org/1999/xhtml",r=2;if(document.createElementNS(t,"meshgradient").x)return;const n=(t,e,s,r)=>{let n=new x(.5*(e.x+s.x),.5*(e.y+s.y)),o=new x(.5*(t.x+e.x),.5*(t.y+e.y)),i=new x(.5*(s.x+r.x),.5*(s.y+r.y)),a=new x(.5*(n.x+o.x),.5*(n.y+o.y)),h=new x(.5*(n.x+i.x),.5*(n.y+i.y)),l=new x(.5*(a.x+h.x),.5*(a.y+h.y));return[[t,o,a,l],[l,h,i,r]]},o=t=>{let e=t[0].distSquared(t[1]),s=t[2].distSquared(t[3]),r=.25*t[0].distSquared(t[2]),n=.25*t[1].distSquared(t[3]),o=e>s?e:s,i=r>n?r:n;return 18*(o>i?o:i)},i=(t,e)=>Math.sqrt(t.distSquared(e)),a=(t,e)=>t.scale(2/3).add(e.scale(1/3)),h=t=>{let e,s,r,n,o,i,a,h=new g;return t.match(/(\\w+\\(\\s*[^)]+\\))+/g).forEach(t=>{let l=t.match(/[\\w.-]+/g),d=l.shift();switch(d){case"translate":2===l.length?e=new g(1,0,0,1,l[0],l[1]):(console.error("mesh.js: translate does not have 2 arguments!"),e=new g(1,0,0,1,0,0)),h=h.append(e);break;case"scale":1===l.length?s=new g(l[0],0,0,l[0],0,0):2===l.length?s=new g(l[0],0,0,l[1],0,0):(console.error("mesh.js: scale does not have 1 or 2 arguments!"),s=new g(1,0,0,1,0,0)),h=h.append(s);break;case"rotate":if(3===l.length&&(e=new g(1,0,0,1,l[1],l[2]),h=h.append(e)),l[0]){r=l[0]*Math.PI/180;let t=Math.cos(r),e=Math.sin(r);Math.abs(t)<1e-16&&(t=0),Math.abs(e)<1e-16&&(e=0),a=new g(t,e,-e,t,0,0),h=h.append(a)}else console.error("math.js: No argument to rotate transform!");3===l.length&&(e=new g(1,0,0,1,-l[1],-l[2]),h=h.append(e));break;case"skewX":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),o=new g(1,0,n,1,0,0),h=h.append(o)):console.error("math.js: No argument to skewX transform!");break;case"skewY":l[0]?(r=l[0]*Math.PI/180,n=Math.tan(r),i=new g(1,n,0,1,0,0),h=h.append(i)):console.error("math.js: No argument to skewY transform!");break;case"matrix":6===l.length?h=h.append(new g(...l)):console.error("math.js: Incorrect number of arguments for matrix!");break;default:console.error("mesh.js: Unhandled transform type: "+d)}}),h},l=t=>{let e=[],s=t.split(/[ ,]+/);for(let t=0,r=s.length-1;t<r;t+=2)e.push(new x(parseFloat(s[t]),parseFloat(s[t+1])));return e},d=(t,e)=>{for(let s in e)t.setAttribute(s,e[s])},c=(t,e,s,r,n)=>{let o,i,a=[0,0,0,0];for(let h=0;h<3;++h)e[h]<t[h]&&e[h]<s[h]||t[h]<e[h]&&s[h]<e[h]?a[h]=0:(a[h]=.5*((e[h]-t[h])/r+(s[h]-e[h])/n),o=Math.abs(3*(e[h]-t[h])/r),i=Math.abs(3*(s[h]-e[h])/n),a[h]>o?a[h]=o:a[h]>i&&(a[h]=i));return a},u=[[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],[-3,3,0,0,-2,-1,0,0,0,0,0,0,0,0,0,0],[2,-2,0,0,1,1,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0,-3,3,0,0,-2,-1,0,0],[0,0,0,0,0,0,0,0,2,-2,0,0,1,1,0,0],[-3,0,3,0,0,0,0,0,-2,0,-1,0,0,0,0,0],[0,0,0,0,-3,0,3,0,0,0,0,0,-2,0,-1,0],[9,-9,-9,9,6,3,-6,-3,6,-6,3,-3,4,2,2,1],[-6,6,6,-6,-3,-3,3,3,-4,4,-2,2,-2,-2,-1,-1],[2,0,-2,0,0,0,0,0,1,0,1,0,0,0,0,0],[0,0,0,0,2,0,-2,0,0,0,0,0,1,0,1,0],[-6,6,6,-6,-4,-2,4,2,-3,3,-3,3,-2,-1,-2,-1],[4,-4,-4,4,2,2,-2,-2,2,-2,2,-2,1,1,1,1]],f=t=>{let e=[];for(let s=0;s<16;++s){e[s]=0;for(let r=0;r<16;++r)e[s]+=u[s][r]*t[r]}return e},p=(t,e,s)=>{const r=e*e,n=s*s,o=e*e*e,i=s*s*s;return t[0]+t[1]*e+t[2]*r+t[3]*o+t[4]*s+t[5]*s*e+t[6]*s*r+t[7]*s*o+t[8]*n+t[9]*n*e+t[10]*n*r+t[11]*n*o+t[12]*i+t[13]*i*e+t[14]*i*r+t[15]*i*o},y=t=>{let e=[],s=[],r=[];for(let s=0;s<4;++s)e[s]=[],e[s][0]=n(t[0][s],t[1][s],t[2][s],t[3][s]),e[s][1]=[],e[s][1].push(...n(...e[s][0][0])),e[s][1].push(...n(...e[s][0][1])),e[s][2]=[],e[s][2].push(...n(...e[s][1][0])),e[s][2].push(...n(...e[s][1][1])),e[s][2].push(...n(...e[s][1][2])),e[s][2].push(...n(...e[s][1][3]));for(let t=0;t<8;++t){s[t]=[];for(let r=0;r<4;++r)s[t][r]=[],s[t][r][0]=n(e[0][2][t][r],e[1][2][t][r],e[2][2][t][r],e[3][2][t][r]),s[t][r][1]=[],s[t][r][1].push(...n(...s[t][r][0][0])),s[t][r][1].push(...n(...s[t][r][0][1])),s[t][r][2]=[],s[t][r][2].push(...n(...s[t][r][1][0])),s[t][r][2].push(...n(...s[t][r][1][1])),s[t][r][2].push(...n(...s[t][r][1][2])),s[t][r][2].push(...n(...s[t][r][1][3]))}for(let t=0;t<8;++t){r[t]=[];for(let e=0;e<8;++e)r[t][e]=[],r[t][e][0]=s[t][0][2][e],r[t][e][1]=s[t][1][2][e],r[t][e][2]=s[t][2][2][e],r[t][e][3]=s[t][3][2][e]}return r};class x{constructor(t,e){this.x=t||0,this.y=e||0}toString(){return`(x=${this.x}, y=${this.y})`}clone(){return new x(this.x,this.y)}add(t){return new x(this.x+t.x,this.y+t.y)}scale(t){return void 0===t.x?new x(this.x*t,this.y*t):new x(this.x*t.x,this.y*t.y)}distSquared(t){let e=this.x-t.x,s=this.y-t.y;return e*e+s*s}transform(t){let e=this.x*t.a+this.y*t.c+t.e,s=this.x*t.b+this.y*t.d+t.f;return new x(e,s)}}class g{constructor(t,e,s,r,n,o){void 0===t?(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0):(this.a=t,this.b=e,this.c=s,this.d=r,this.e=n,this.f=o)}toString(){return`affine: ${this.a} ${this.c} ${this.e} \\n       ${this.b} ${this.d} ${this.f}`}append(t){t instanceof g||console.error("mesh.js: argument to Affine.append is not affine!");let e=this.a*t.a+this.c*t.b,s=this.b*t.a+this.d*t.b,r=this.a*t.c+this.c*t.d,n=this.b*t.c+this.d*t.d,o=this.a*t.e+this.c*t.f+this.e,i=this.b*t.e+this.d*t.f+this.f;return new g(e,s,r,n,o,i)}}class w{constructor(t,e){this.nodes=t,this.colors=e}paintCurve(t,e){if(o(this.nodes)>r){const s=n(...this.nodes);let r=[[],[]],o=[[],[]];for(let t=0;t<4;++t)r[0][t]=this.colors[0][t],r[1][t]=(this.colors[0][t]+this.colors[1][t])/2,o[0][t]=r[1][t],o[1][t]=this.colors[1][t];let i=new w(s[0],r),a=new w(s[1],o);i.paintCurve(t,e),a.paintCurve(t,e)}else{let s=Math.round(this.nodes[0].x);if(s>=0&&s<e){let r=4*(~~this.nodes[0].y*e+s);t[r]=Math.round(this.colors[0][0]),t[r+1]=Math.round(this.colors[0][1]),t[r+2]=Math.round(this.colors[0][2]),t[r+3]=Math.round(this.colors[0][3])}}}}class m{constructor(t,e){this.nodes=t,this.colors=e}split(){let t=[[],[],[],[]],e=[[],[],[],[]],s=[[[],[]],[[],[]]],r=[[[],[]],[[],[]]];for(let s=0;s<4;++s){const r=n(this.nodes[0][s],this.nodes[1][s],this.nodes[2][s],this.nodes[3][s]);t[0][s]=r[0][0],t[1][s]=r[0][1],t[2][s]=r[0][2],t[3][s]=r[0][3],e[0][s]=r[1][0],e[1][s]=r[1][1],e[2][s]=r[1][2],e[3][s]=r[1][3]}for(let t=0;t<4;++t)s[0][0][t]=this.colors[0][0][t],s[0][1][t]=this.colors[0][1][t],s[1][0][t]=(this.colors[0][0][t]+this.colors[1][0][t])/2,s[1][1][t]=(this.colors[0][1][t]+this.colors[1][1][t])/2,r[0][0][t]=s[1][0][t],r[0][1][t]=s[1][1][t],r[1][0][t]=this.colors[1][0][t],r[1][1][t]=this.colors[1][1][t];return[new m(t,s),new m(e,r)]}paint(t,e){let s,n=!1;for(let t=0;t<4;++t)if((s=o([this.nodes[0][t],this.nodes[1][t],this.nodes[2][t],this.nodes[3][t]]))>r){n=!0;break}if(n){let s=this.split();s[0].paint(t,e),s[1].paint(t,e)}else{new w([...this.nodes[0]],[...this.colors[0]]).paintCurve(t,e)}}}class b{constructor(t){this.readMesh(t),this.type=t.getAttribute("type")||"bilinear"}readMesh(t){let e=[[]],s=[[]],r=Number(t.getAttribute("x")),n=Number(t.getAttribute("y"));e[0][0]=new x(r,n);let o=t.children;for(let t=0,r=o.length;t<r;++t){e[3*t+1]=[],e[3*t+2]=[],e[3*t+3]=[],s[t+1]=[];let r=o[t].children;for(let n=0,o=r.length;n<o;++n){let o=r[n].children;for(let r=0,i=o.length;r<i;++r){let i=r;0!==t&&++i;let h,d=o[r].getAttribute("path"),c="l";null!=d&&(c=(h=d.match(/\\s*([lLcC])\\s*(.*)/))[1]);let u=l(h[2]);switch(c){case"l":0===i?(e[3*t][3*n+3]=u[0].add(e[3*t][3*n]),e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0].add(e[3*t+3][3*n+3])),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"L":0===i?(e[3*t][3*n+3]=u[0],e[3*t][3*n+1]=a(e[3*t][3*n],e[3*t][3*n+3]),e[3*t][3*n+2]=a(e[3*t][3*n+3],e[3*t][3*n])):1===i?(e[3*t+3][3*n+3]=u[0],e[3*t+1][3*n+3]=a(e[3*t][3*n+3],e[3*t+3][3*n+3]),e[3*t+2][3*n+3]=a(e[3*t+3][3*n+3],e[3*t][3*n+3])):2===i?(0===n&&(e[3*t+3][3*n+0]=u[0]),e[3*t+3][3*n+1]=a(e[3*t+3][3*n],e[3*t+3][3*n+3]),e[3*t+3][3*n+2]=a(e[3*t+3][3*n+3],e[3*t+3][3*n])):(e[3*t+1][3*n]=a(e[3*t][3*n],e[3*t+3][3*n]),e[3*t+2][3*n]=a(e[3*t+3][3*n],e[3*t][3*n]));break;case"c":0===i?(e[3*t][3*n+1]=u[0].add(e[3*t][3*n]),e[3*t][3*n+2]=u[1].add(e[3*t][3*n]),e[3*t][3*n+3]=u[2].add(e[3*t][3*n])):1===i?(e[3*t+1][3*n+3]=u[0].add(e[3*t][3*n+3]),e[3*t+2][3*n+3]=u[1].add(e[3*t][3*n+3]),e[3*t+3][3*n+3]=u[2].add(e[3*t][3*n+3])):2===i?(e[3*t+3][3*n+2]=u[0].add(e[3*t+3][3*n+3]),e[3*t+3][3*n+1]=u[1].add(e[3*t+3][3*n+3]),0===n&&(e[3*t+3][3*n+0]=u[2].add(e[3*t+3][3*n+3]))):(e[3*t+2][3*n]=u[0].add(e[3*t+3][3*n]),e[3*t+1][3*n]=u[1].add(e[3*t+3][3*n]));break;case"C":0===i?(e[3*t][3*n+1]=u[0],e[3*t][3*n+2]=u[1],e[3*t][3*n+3]=u[2]):1===i?(e[3*t+1][3*n+3]=u[0],e[3*t+2][3*n+3]=u[1],e[3*t+3][3*n+3]=u[2]):2===i?(e[3*t+3][3*n+2]=u[0],e[3*t+3][3*n+1]=u[1],0===n&&(e[3*t+3][3*n+0]=u[2])):(e[3*t+2][3*n]=u[0],e[3*t+1][3*n]=u[1]);break;default:console.error("mesh.js: "+c+" invalid path type.")}if(0===t&&0===n||r>0){let e=window.getComputedStyle(o[r]).stopColor.match(/^rgb\\s*\\(\\s*(\\d+)\\s*,\\s*(\\d+)\\s*,\\s*(\\d+)\\s*\\)$/i),a=window.getComputedStyle(o[r]).stopOpacity,h=255;a&&(h=Math.floor(255*a)),e&&(0===i?(s[t][n]=[],s[t][n][0]=Math.floor(e[1]),s[t][n][1]=Math.floor(e[2]),s[t][n][2]=Math.floor(e[3]),s[t][n][3]=h):1===i?(s[t][n+1]=[],s[t][n+1][0]=Math.floor(e[1]),s[t][n+1][1]=Math.floor(e[2]),s[t][n+1][2]=Math.floor(e[3]),s[t][n+1][3]=h):2===i?(s[t+1][n+1]=[],s[t+1][n+1][0]=Math.floor(e[1]),s[t+1][n+1][1]=Math.floor(e[2]),s[t+1][n+1][2]=Math.floor(e[3]),s[t+1][n+1][3]=h):3===i&&(s[t+1][n]=[],s[t+1][n][0]=Math.floor(e[1]),s[t+1][n][1]=Math.floor(e[2]),s[t+1][n][2]=Math.floor(e[3]),s[t+1][n][3]=h))}}e[3*t+1][3*n+1]=new x,e[3*t+1][3*n+2]=new x,e[3*t+2][3*n+1]=new x,e[3*t+2][3*n+2]=new x,e[3*t+1][3*n+1].x=(-4*e[3*t][3*n].x+6*(e[3*t][3*n+1].x+e[3*t+1][3*n].x)+-2*(e[3*t][3*n+3].x+e[3*t+3][3*n].x)+3*(e[3*t+3][3*n+1].x+e[3*t+1][3*n+3].x)+-1*e[3*t+3][3*n+3].x)/9,e[3*t+1][3*n+2].x=(-4*e[3*t][3*n+3].x+6*(e[3*t][3*n+2].x+e[3*t+1][3*n+3].x)+-2*(e[3*t][3*n].x+e[3*t+3][3*n+3].x)+3*(e[3*t+3][3*n+2].x+e[3*t+1][3*n].x)+-1*e[3*t+3][3*n].x)/9,e[3*t+2][3*n+1].x=(-4*e[3*t+3][3*n].x+6*(e[3*t+3][3*n+1].x+e[3*t+2][3*n].x)+-2*(e[3*t+3][3*n+3].x+e[3*t][3*n].x)+3*(e[3*t][3*n+1].x+e[3*t+2][3*n+3].x)+-1*e[3*t][3*n+3].x)/9,e[3*t+2][3*n+2].x=(-4*e[3*t+3][3*n+3].x+6*(e[3*t+3][3*n+2].x+e[3*t+2][3*n+3].x)+-2*(e[3*t+3][3*n].x+e[3*t][3*n+3].x)+3*(e[3*t][3*n+2].x+e[3*t+2][3*n].x)+-1*e[3*t][3*n].x)/9,e[3*t+1][3*n+1].y=(-4*e[3*t][3*n].y+6*(e[3*t][3*n+1].y+e[3*t+1][3*n].y)+-2*(e[3*t][3*n+3].y+e[3*t+3][3*n].y)+3*(e[3*t+3][3*n+1].y+e[3*t+1][3*n+3].y)+-1*e[3*t+3][3*n+3].y)/9,e[3*t+1][3*n+2].y=(-4*e[3*t][3*n+3].y+6*(e[3*t][3*n+2].y+e[3*t+1][3*n+3].y)+-2*(e[3*t][3*n].y+e[3*t+3][3*n+3].y)+3*(e[3*t+3][3*n+2].y+e[3*t+1][3*n].y)+-1*e[3*t+3][3*n].y)/9,e[3*t+2][3*n+1].y=(-4*e[3*t+3][3*n].y+6*(e[3*t+3][3*n+1].y+e[3*t+2][3*n].y)+-2*(e[3*t+3][3*n+3].y+e[3*t][3*n].y)+3*(e[3*t][3*n+1].y+e[3*t+2][3*n+3].y)+-1*e[3*t][3*n+3].y)/9,e[3*t+2][3*n+2].y=(-4*e[3*t+3][3*n+3].y+6*(e[3*t+3][3*n+2].y+e[3*t+2][3*n+3].y)+-2*(e[3*t+3][3*n].y+e[3*t][3*n+3].y)+3*(e[3*t][3*n+2].y+e[3*t+2][3*n].y)+-1*e[3*t][3*n].y)/9}}this.nodes=e,this.colors=s}paintMesh(t,e){let s=(this.nodes.length-1)/3,r=(this.nodes[0].length-1)/3;if("bilinear"===this.type||s<2||r<2){let n;for(let o=0;o<s;++o)for(let s=0;s<r;++s){let r=[];for(let t=3*o,e=3*o+4;t<e;++t)r.push(this.nodes[t].slice(3*s,3*s+4));let i=[];i.push(this.colors[o].slice(s,s+2)),i.push(this.colors[o+1].slice(s,s+2)),(n=new m(r,i)).paint(t,e)}}else{let n,o,a,h,l,d,u;const x=s,g=r;s++,r++;let w=new Array(s);for(let t=0;t<s;++t){w[t]=new Array(r);for(let e=0;e<r;++e)w[t][e]=[],w[t][e][0]=this.nodes[3*t][3*e],w[t][e][1]=this.colors[t][e]}for(let t=0;t<s;++t)for(let e=0;e<r;++e)0!==t&&t!==x&&(n=i(w[t-1][e][0],w[t][e][0]),o=i(w[t+1][e][0],w[t][e][0]),w[t][e][2]=c(w[t-1][e][1],w[t][e][1],w[t+1][e][1],n,o)),0!==e&&e!==g&&(n=i(w[t][e-1][0],w[t][e][0]),o=i(w[t][e+1][0],w[t][e][0]),w[t][e][3]=c(w[t][e-1][1],w[t][e][1],w[t][e+1][1],n,o));for(let t=0;t<r;++t){w[0][t][2]=[],w[x][t][2]=[];for(let e=0;e<4;++e)n=i(w[1][t][0],w[0][t][0]),o=i(w[x][t][0],w[x-1][t][0]),w[0][t][2][e]=n>0?2*(w[1][t][1][e]-w[0][t][1][e])/n-w[1][t][2][e]:0,w[x][t][2][e]=o>0?2*(w[x][t][1][e]-w[x-1][t][1][e])/o-w[x-1][t][2][e]:0}for(let t=0;t<s;++t){w[t][0][3]=[],w[t][g][3]=[];for(let e=0;e<4;++e)n=i(w[t][1][0],w[t][0][0]),o=i(w[t][g][0],w[t][g-1][0]),w[t][0][3][e]=n>0?2*(w[t][1][1][e]-w[t][0][1][e])/n-w[t][1][3][e]:0,w[t][g][3][e]=o>0?2*(w[t][g][1][e]-w[t][g-1][1][e])/o-w[t][g-1][3][e]:0}for(let s=0;s<x;++s)for(let r=0;r<g;++r){let n=i(w[s][r][0],w[s+1][r][0]),o=i(w[s][r+1][0],w[s+1][r+1][0]),c=i(w[s][r][0],w[s][r+1][0]),x=i(w[s+1][r][0],w[s+1][r+1][0]),g=[[],[],[],[]];for(let t=0;t<4;++t){(d=[])[0]=w[s][r][1][t],d[1]=w[s+1][r][1][t],d[2]=w[s][r+1][1][t],d[3]=w[s+1][r+1][1][t],d[4]=w[s][r][2][t]*n,d[5]=w[s+1][r][2][t]*n,d[6]=w[s][r+1][2][t]*o,d[7]=w[s+1][r+1][2][t]*o,d[8]=w[s][r][3][t]*c,d[9]=w[s+1][r][3][t]*x,d[10]=w[s][r+1][3][t]*c,d[11]=w[s+1][r+1][3][t]*x,d[12]=0,d[13]=0,d[14]=0,d[15]=0,u=f(d);for(let e=0;e<9;++e){g[t][e]=[];for(let s=0;s<9;++s)g[t][e][s]=p(u,e/8,s/8),g[t][e][s]>255?g[t][e][s]=255:g[t][e][s]<0&&(g[t][e][s]=0)}}h=[];for(let t=3*s,e=3*s+4;t<e;++t)h.push(this.nodes[t].slice(3*r,3*r+4));l=y(h);for(let s=0;s<8;++s)for(let r=0;r<8;++r)(a=new m(l[s][r],[[[g[0][s][r],g[1][s][r],g[2][s][r],g[3][s][r]],[g[0][s][r+1],g[1][s][r+1],g[2][s][r+1],g[3][s][r+1]]],[[g[0][s+1][r],g[1][s+1][r],g[2][s+1][r],g[3][s+1][r]],[g[0][s+1][r+1],g[1][s+1][r+1],g[2][s+1][r+1],g[3][s+1][r+1]]]])).paint(t,e)}}}transform(t){if(t instanceof x)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].add(t);else if(t instanceof g)for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].transform(t)}scale(t){for(let e=0,s=this.nodes.length;e<s;++e)for(let s=0,r=this.nodes[0].length;s<r;++s)this.nodes[e][s]=this.nodes[e][s].scale(t)}}document.querySelectorAll("rect,circle,ellipse,path,text").forEach((r,n)=>{let o=r.getAttribute("id");o||(o="patchjs_shape"+n,r.setAttribute("id",o));const i=r.style.fill.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/),a=r.style.stroke.match(/^url\\(\\s*"?\\s*#([^\\s"]+)"?\\s*\\)/);if(i&&i[1]){const a=document.getElementById(i[1]);if(a&&"meshgradient"===a.nodeName){const i=r.getBBox();let l=document.createElementNS(s,"canvas");d(l,{width:i.width,height:i.height});const c=l.getContext("2d");let u=c.createImageData(i.width,i.height);const f=new b(a);"objectBoundingBox"===a.getAttribute("gradientUnits")&&f.scale(new x(i.width,i.height));const p=a.getAttribute("gradientTransform");null!=p&&f.transform(h(p)),"userSpaceOnUse"===a.getAttribute("gradientUnits")&&f.transform(new x(-i.x,-i.y)),f.paintMesh(u.data,l.width),c.putImageData(u,0,0);const y=document.createElementNS(t,"image");d(y,{width:i.width,height:i.height,x:i.x,y:i.y});let g=l.toDataURL();y.setAttributeNS(e,"xlink:href",g),r.parentNode.insertBefore(y,r),r.style.fill="none";const w=document.createElementNS(t,"use");w.setAttributeNS(e,"xlink:href","#"+o);const m="patchjs_clip"+n,M=document.createElementNS(t,"clipPath");M.setAttribute("id",m),M.appendChild(w),r.parentElement.insertBefore(M,r),y.setAttribute("clip-path","url(#"+m+")"),u=null,l=null,g=null}}if(a&&a[1]){const o=document.getElementById(a[1]);if(o&&"meshgradient"===o.nodeName){const i=parseFloat(r.style.strokeWidth.slice(0,-2))*(parseFloat(r.style.strokeMiterlimit)||parseFloat(r.getAttribute("stroke-miterlimit"))||1),a=r.getBBox(),l=Math.trunc(a.width+i),c=Math.trunc(a.height+i),u=Math.trunc(a.x-i/2),f=Math.trunc(a.y-i/2);let p=document.createElementNS(s,"canvas");d(p,{width:l,height:c});const y=p.getContext("2d");let g=y.createImageData(l,c);const w=new b(o);"objectBoundingBox"===o.getAttribute("gradientUnits")&&w.scale(new x(l,c));const m=o.getAttribute("gradientTransform");null!=m&&w.transform(h(m)),"userSpaceOnUse"===o.getAttribute("gradientUnits")&&w.transform(new x(-u,-f)),w.paintMesh(g.data,p.width),y.putImageData(g,0,0);const M=document.createElementNS(t,"image");d(M,{width:l,height:c,x:0,y:0});let S=p.toDataURL();M.setAttributeNS(e,"xlink:href",S);const k="pattern_clip"+n,A=document.createElementNS(t,"pattern");d(A,{id:k,patternUnits:"userSpaceOnUse",width:l,height:c,x:u,y:f}),A.appendChild(M),o.parentNode.appendChild(A),r.style.stroke="url(#"+k+")",g=null,p=null,S=null}}})}();'
      }
    </script>
    <g id="layer2">
      <path
        id="rect76"
        d="M-2.433-1.871h57.156v38.073H-2.433z"
        style={{
          fill: "#537380",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.44317,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect89"
        d="M-.656-.561h55.098l-.327 12.582c-3.365.152-5.4-1.23-7.16-2.93 0 0-3.2 1.972-4.854 1.866-1.62-.104-4.864-2.394-4.864-2.394s-2.61 2.044-4.135 1.97c-1.612-.079-4.148-2.497-4.148-2.497s-2.213 1.232-3.43 1.26c-1.385.032-3.963-1.251-3.963-1.251s-3.44 1.652-5.846 1.777c-2.007.105-5.38-2.338-5.38-2.338S6.414 9.609 4.35 9.308C2.423 9.027-.515 6.08-.515 6.08z"
        style={{
          fill: "#9eb3bb",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
    </g>
    <g id="layer5">
      <path
        id="rect90"
        d="M-1.059 34.594h57.283v21.895H-1.059z"
        style={{
          fill: "#7c7e7f",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.0928556,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect91"
        d="M-.469 38.634H55.19v15.341H-.469z"
        style={{
          fill: "#aaabac",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path91"
        d="M-.188 46.679h53.601"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 1.852095,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419002,0,3.70419002",
          strokeOpacity: 1,
          strokeDashoffset: 1.85209501,
        }}
      />
    </g>
    <g id="layer6">
      <path
        id="rect92"
        d="M2.057 3.835h19.644v31.15H2.057z"
        style={{
          fill: "#5d0000",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 2.65282,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "5.30563,0,5.30563",
          strokeDashoffset: 2.65282,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect93"
        d="M4.863 7.39h2.713v2.713H4.863z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect94"
        d="M10.289 7.39h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect95"
        d="M15.808 7.39h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect96"
        d="M4.863 12.909h2.713v2.713H4.863z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect97"
        d="M10.289 12.909h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect98"
        d="M15.808 12.909h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect99"
        d="M4.863 18.615h2.713v2.713H4.863z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect100"
        d="M10.289 18.615h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect101"
        d="M15.808 18.615h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect102"
        d="M4.863 24.509h2.713v2.713H4.863z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect103"
        d="M10.289 24.509h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect104"
        d="M15.808 24.509h2.713v2.713h-2.713z"
        style={{
          fill: "#bdb3b3",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect105"
        d="M6.921 30.963h2.713v4.116H6.921z"
        style={{
          fill: "#1f26cb",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <path
        id="rect106"
        d="M28.53 24.789h22.825v10.009H28.53z"
        style={{
          fill: "#ffcf0a",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.8521,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          strokeOpacity: 1,
        }}
      />
      <g
        id="g111"
        style={{
          stroke: "#686f72",
          strokeOpacity: 1,
        }}
      >
        <path
          id="rect108"
          d="M34.424 34.799v-9.682h11.318v9.682"
          style={{
            fill: "#589cfb",
            stroke: "#686f72",
            strokeWidth: 0.793755,
            strokeLinejoin: "round",
            strokeDashoffset: 1.8521,
            strokeOpacity: 1,
          }}
        />
        <path
          id="path108"
          d="M34.239 32.506H45.41"
          style={{
            fill: "#589cfb",
            fillOpacity: 1,
            stroke: "#686f72",
            strokeWidth: 0.52917,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          id="path109"
          d="M38.35 25.908v8.861"
          style={{
            fill: "#589cfb",
            fillOpacity: 1,
            stroke: "#686f72",
            strokeWidth: 0.535017,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          id="path110"
          d="M41.913 26.15v8.62"
          style={{
            fill: "#589cfb",
            fillOpacity: 1,
            stroke: "#686f72",
            strokeWidth: 0.533661,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          id="path111"
          d="M38.446 29.28h3.274"
          style={{
            fill: "#589cfb",
            fillOpacity: 1,
            stroke: "#686f72",
            strokeWidth: 0.52917,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
      </g>
      <path
        id="rect107"
        d="M30.401 18.99h19.083l4.116 7.203H26.472Z"
        style={{
          fill: "#b44500",
          strokeWidth: 1.8521,
          strokeLinejoin: "round",
          strokeDasharray: "3.70419,0,3.70419",
          strokeDashoffset: 1.8521,
          fillOpacity: 1,
        }}
      />
      <g id="g112" transform="matrix(1.05026 0 0 .99875 -1.967 .028)">
        <path
          id="rect111"
          d="M31.927 20.033H48.06v5.105H31.927z"
          style={{
            fill: "#f7f7f7",
            fillOpacity: 1,
            stroke: "#0035b1",
            strokeWidth: 0.264585,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
        <path
          id="path112"
          d="M31.927 20.033v1.062l6.155.022v1.758l3.831-.025v-1.71h6.147v-1.107z"
          style={{
            fill: "#26b90b",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.264585,
            strokeLinecap: "butt",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeDashoffset: 7,
            strokeOpacity: 1,
          }}
        />
      </g>
      <text
        xmlSpace="preserve"
        id="text112"
        x={34.976}
        y={21.343}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontSize: "2.55178px",
          fontFamily: "&quot",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: "#ed0b0f",
          fillOpacity: 1,
          stroke: "#00030b",
          strokeWidth: 0.0478459,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="scale(.90308 1.10732)"
      >
        <tspan
          id="tspan112"
          x={34.976}
          y={21.343}
          style={{
            strokeWidth: 0.0478459,
          }}
        >
          {"KWIK"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        id="text113"
        x={43.047}
        y={20.917}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontSize: "3.42392px",
          fontFamily: "&quot",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: "#ed0b0f",
          fillOpacity: 1,
          stroke: "#00030b",
          strokeWidth: 0.0570654,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="scale(.87944 1.13709)"
      >
        <tspan
          id="tspan113"
          x={43.047}
          y={20.917}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "3.42392px",
            fontFamily: "&quot",
            InkscapeFontSpecification: "&quot",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            strokeWidth: 0.0570654,
          }}
        >
          {"-E-"}
        </tspan>
      </text>
      <text
        xmlSpace="preserve"
        id="text114"
        x={50.981}
        y={19.552}
        style={{
          fontStyle: "normal",
          fontVariant: "normal",
          fontWeight: 700,
          fontStretch: "normal",
          fontSize: "2.60861px",
          fontFamily: "&quot",
          InkscapeFontSpecification: "&quot",
          fontVariantLigatures: "normal",
          fontVariantCaps: "normal",
          fontVariantNumeric: "normal",
          fontVariantEastAsian: "normal",
          fill: "#ed0b0f",
          fillOpacity: 1,
          stroke: "#00030b",
          strokeWidth: 0.0540955,
          strokeLinecap: "butt",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeDashoffset: 7,
          strokeOpacity: 1,
        }}
        transform="scale(.822 1.21653)"
      >
        <tspan
          id="tspan114"
          x={50.981}
          y={19.552}
          style={{
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: 700,
            fontStretch: "normal",
            fontSize: "2.60861px",
            fontFamily: "&quot",
            InkscapeFontSpecification: "&quot",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            strokeWidth: 0.0540955,
          }}
        >
          {"MART"}
        </tspan>
      </text>
    </g>
  </svg>
)
export default MiniMap2
