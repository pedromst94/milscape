import * as React from "react"
const MiniMap1 = (props) => (
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
        d="M-2.433-1.871h57.156v31.992H-2.433z"
        style={{
          fill: "#6ac2e7",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.32292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path77"
        d="M5.238 5.285s.42 1.59-.188 2.573a44.63 44.63 0 0 1-1.45 2.151s1.871 1.263 2.199 2.292c.327 1.03.28 2.198.28 2.198s2.105-1.075 3.321-.748c1.216.328 2.245 1.076 2.245 1.076s.468-1.544 2.012-2.245c1.543-.702 2.478-.421 2.478-.421s-1.122-1.871-.795-2.947c.328-1.076 1.31-1.964 1.31-1.964s-1.73-.187-2.76-1.497c-1.029-1.31-.56-1.824-.56-1.824s-.702.982-2.76.42c-2.058-.56-1.684-.981-1.684-.981s-.608 1.87-1.59 1.964c-.983.094-2.058-.047-2.058-.047z"
        style={{
          fill: "#ffa900",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.32292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        id="path76"
        cx={9.915}
        cy={9.214}
        rx={4.49}
        ry={3.976}
        style={{
          fill: "#fbff00",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.32292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path78"
        d="m25.796 11.708 13.295.066s.915-1.617.443-2.599c-.227-.472-1.384-1.438-1.964-1.502-1.786-.198-2.315 1.389-2.315 1.389s-.53-2.778-2.447-2.844c-1.862-.064-2.712 2.05-2.712 2.05s-1.39-1.984-2.448-1.323c-.508.318-1.55.727-2.29 1.892-.801 1.26.438 2.87.438 2.87z"
        style={{
          fill: "#fff",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 1.32292,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="layer1">
      <path
        id="rect78"
        d="M-1.124 22.86s2.481-.561 3.742-.561c1.342 0 2.643.502 3.982.599.926.067 2.276-.535 3.5-.55a11.44 11.44 0 0 1 3.393.512c1.383-3.784 4.235-4.737 7.86-2.404-.964.213-3.67-.41-3.48.64.07.388 1.762 1.152 4.88 1.764 0 0 2.742-.933 4.14-.795 2.068.204 2.718.628 6.171.896.635.049 2.33-.47 4.507-.47 1.531 0 2.436.35 4.243.384 2.024.037 4.062-.186 6.033-.189 3.616-.005 6.68.181 6.689.174v15.774h-55.66Z"
        style={{
          fill: "#010097",
          strokeWidth: 1.07611,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      <path
        id="path79"
        d="M25.035 27.914h1.555s1.323-2.778 3.44-2.91c2.116-.133 2.315.925 2.315.925s-2.216-.132-2.547.893c-.33 1.026.595 1.059.595 1.059l2.117.033"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path80"
        d="M9.026 27.175s1.403-.842 3.18-.795c1.778.046.843.842 3.04.842 2.2 0 2.994-.421 2.994-.421"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <path
        id="path81"
        d="M36.107 25.631s1.684-1.403 3.368-1.263c1.684.14 2.853 1.45 3.789 1.45"
        style={{
          fill: "none",
          fillOpacity: 1,
          stroke: "#fff",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <g id="layer4">
      <path
        id="rect81"
        d="M-.656 34.705s12.394-2.83 18.71-3.087c12.535-.51 37.51 3.087 37.51 3.087v18.99H-.655Z"
        style={{
          fill: "#e7cc6a",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}
      />
      <g id="g83" transform="translate(-5.923 -7.146) scale(1.16341)">
        <path
          id="path82"
          d="M41.533 43.639s-.748-2.9-.748-4.397c0-1.497.514-3.508.514-3.508h1.356s.749 2.48.655 3.602c-.093 1.122-.514 4.396-.514 4.396z"
          style={{
            fill: "#520",
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
          id="path83"
          d="M41.307 35.719s.397.43.662.364c.264-.066.694-.364.694-.364s.926-.463 1.555 0c.628.463 1.025 1.19 1.025 1.19s-.496-1.818-1.124-2.15c-.629-.33-1.39-.065-1.39-.065s.397-1.257 1.39-1.158c.992.1 1.422 1.125 1.422 1.125s-.496-1.919-1.257-1.985c-.76-.066-1.885.695-1.885.695s-.166-.76-.43-1.125c-.265-.364-1.125-.86-1.125-.86s.364.629.364 1.158c0 .53-.1 1.19-.1 1.19s-.66-.959-1.157-1.157c-.496-.198-2.249.198-2.249.198s1.588.133 1.753.563c.166.43.166 1.025.166 1.025s-.827-.463-1.919-.165c-1.091.297-1.455.893-1.455.893s1.654-.265 2.381-.067c.728.199 1.092.629 1.092.629s-.364.132-.463.529c-.1.397.132.992.132.992s.265-.794.53-.926c.264-.132 1.388-.529 1.388-.529z"
          style={{
            fill: "#005505",
            fillOpacity: 1,
            stroke: "none",
            strokeWidth: 0.105834,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeDasharray: "none",
            strokeOpacity: 1,
          }}
        />
      </g>
      <ellipse
        id="path84"
        cx={32.132}
        cy={42.259}
        rx={1.871}
        ry={1.848}
        style={{
          fill: "#f9fffa",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
      <ellipse
        id="path85"
        cx={32.167}
        cy={40.821}
        rx={0.199}
        ry={0.175}
        style={{
          fill: "#f91804",
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
        id="path86"
        d="M32.202 40.856s-.842 1.029-.912 1.543c-.07.515.14 1.567.14 1.567s.795-.935.865-1.31c.07-.374-.093-1.8-.093-1.8z"
        style={{
          fill: "#f91804",
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
        id="path87"
        d="M32.272 40.844s.514.363.748.854c.234.49.281.701.258 1.099-.024.397-.304 1.099-.304 1.099s.888-.819.912-1.193c.023-.374.046-1.24-.445-1.613-.49-.375-1.169-.246-1.169-.246Z"
        style={{
          fill: "#f91804",
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
        id="path88"
        d="m32.108 40.715-.07-.304s.31-.011.368.018c.059.03-.298.286-.298.286z"
        style={{
          fill: "#f91804",
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
        id="path89"
        d="M31.997 40.82s-.824.141-1.192.802c-.369.66-.281 1.555-.281 1.555s-.38-1.006-.064-1.602c.315-.596.9-.743 1.04-.754z"
        style={{
          fill: "#f91804",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.105834,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <path
      id="rect75"
      d="M.74.743h51.277v51.462H.74Z"
      style={{
        display: "inline",
        fill: "none",
        stroke: "#f8e503",
        strokeWidth: 1.30895,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}
    />
  </svg>
)
export default MiniMap1
