var An=Array.isArray,gn=Array.from,Rn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,Bt=Object.getOwnPropertyDescriptors,xn=Object.prototype,Dn=Array.prototype,Vt=Object.getPrototypeOf;const In=()=>{};function Sn(t){return t()}function Kt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ct=4,L=8,nt=16,y=32,G=64,I=128,B=256,p=512,R=1024,j=2048,C=4096,H=8192,$t=16384,vt=32768,kn=65536,Gt=1<<18,pt=1<<19,ut=Symbol("$state");function ht(t){return t===this.v}function Zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function dt(t){return!Zt(t,this.v)}function zt(t){throw new Error("effect_in_teardown")}function Wt(){throw new Error("effect_in_unowned_derived")}function Xt(t){throw new Error("effect_orphan")}function Jt(){throw new Error("effect_update_depth_exceeded")}function On(){throw new Error("hydration_failed")}function Nn(t){throw new Error("props_invalid_value")}function Cn(){throw new Error("state_descriptors_fixed")}function bn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}let Z=!1;function Pn(){Z=!0}function rt(t){return{f:0,v:t,reactions:null,equals:ht,version:0}}function Fn(t){return Et(rt(t))}function nn(t,n=!1){var e;const r=rt(t);return n||(r.equals=dt),Z&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function qn(t,n=!1){return Et(nn(t,n))}function Et(t){return u!==null&&u.f&m&&(E===null?hn([t]):E.push(t)),t}function Mn(t,n){return u!==null&&at()&&u.f&(m|nt)&&(E===null||!E.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=Mt(),yt(t,R),at()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(w(o,R),W(o)):g===null?dn([t]):g.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&R||!e&&l===o||(w(l,n),i&(p|I)&&(i&m?yt(l,j):W(l)))}}const Ln=1,jn=2,Hn=16,Yn=1,Un=2,Bn=4,Vn=8,Kn=16,$n=1,Gn=2,en="[",sn="[!",an="]",wt={},Zn=Symbol();function Tt(t){console.warn("hydration_mismatch")}let D=!1;function zn(t){D=t}let d;function F(t){if(t===null)throw Tt(),wt;return d=t}function Wn(){return F(S(d))}function Xn(t){if(D){if(S(d)!==null)throw Tt(),wt;d=t}}function Jn(t=1){if(D){for(var n=t,r=d;n--;)r=S(r);d=r}}function Qn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=S(n);n.remove(),n=e}}var it,mt,At;function tr(){if(it===void 0){it=window;var t=Element.prototype,n=Node.prototype;mt=ot(n,"firstChild").get,At=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return mt.call(t)}function S(t){return At.call(t)}function nr(t,n){if(!D)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),F(e),e}return F(r),r}function rr(t,n){if(!D){var r=J(t);return r instanceof Comment&&r.data===""?S(r):r}return d}function er(t,n=1,r=!1){let e=D?d:t;for(;n--;)e=S(e);if(!D)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),F(a),a}return F(e),e}function sr(t){t.textContent=""}function ln(t){var n=m|R;o===null?n|=I:o.f|=pt;const r={children:null,ctx:f,deps:null,equals:ht,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(u!==null&&u.f&m){var e=u;(e.children??(e.children=[])).push(r)}return r}function ar(t){const n=ln(t);return n.equals=dt,n}function gt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?et(e):P(e)}}}function Rt(t){var n,r=o;$(t.parent);try{gt(t),n=Lt(t)}finally{$(r)}return n}function xt(t){var n=Rt(t),r=(k||t.f&I)&&t.deps!==null?j:p;w(t,r),t.equals(n)||(t.v=n,t.version=Mt())}function et(t){gt(t),M(t,0),w(t,H),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Dt(t){o===null&&u===null&&Xt(),u!==null&&u.f&I&&Wt(),st&&zt()}function on(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function b(t,n,r,e=!0){var s=(t&G)!==0,a=o,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=O;try{ft(!0),z(l),l.f|=$t}catch(c){throw P(l),c}finally{ft(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&pt)===0;if(!T&&!s&&e&&(a!==null&&on(l,a),u!==null&&u.f&m)){var A=u;(A.children??(A.children=[])).push(l)}return l}function lr(t){const n=b(L,null,!1);return w(n,p),n.teardown=t,n}function or(t){Dt();var n=o!==null&&(o.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=It(t);return e}}function ur(t){return Dt(),un(t)}function ir(t){const n=b(G,t,!0);return()=>{P(n)}}function It(t){return b(ct,t,!1)}function un(t){return b(L,t,!0)}function fr(t){return fn(t)}function fn(t,n=0){return b(L|nt|n,t,!0)}function _r(t,n=!0){return b(L|y,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),K(null);try{n.call(null)}finally{_t(r),K(e)}}}function kt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function Ot(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function _n(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&Gt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:S(e);e.remove(),e=a}r=!0}Ot(t,n&&!r),kt(t),M(t,0),w(t,H);var l=t.transitions;if(l!==null)for(const T of l)T.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function cr(t,n){var r=[];Ct(t,r,!0),cn(r,()=>{P(t),n&&n()})}function cn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&vt)!==0||(e.f&y)!==0;Ct(e,n,a?r:!1),e=s}}}function vr(t){bt(t,!0)}function bt(t,n){if(t.f&C){Y(t)&&z(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&vt)!==0||(r.f&y)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let V=!1,Q=[];function Pt(){V=!1;const t=Q.slice();Q=[],Kt(t)}function pr(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function vn(){V&&Pt()}const Ft=0,pn=1;let U=Ft,q=!1,O=!1,st=!1;function ft(t){O=t}function _t(t){st=t}let x=[],N=0;let u=null;function K(t){u=t}let o=null;function $(t){o=t}let E=null;function hn(t){E=t}let _=null,h=0,g=null;function dn(t){g=t}let qt=0,k=!1,f=null;function Mt(){return++qt}function at(){return!Z||f!==null&&f.l===null}function Y(t){var l,i;var n=t.f;if(n&R)return!0;if(n&j){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&B){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=B}for(s=0;s<r.length;s++){var a=r[s];if(Y(a)&&xt(a),e&&o!==null&&!k&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function En(t,n,r){throw t}function Lt(t){var lt;var n=_,r=h,e=g,s=u,a=k,l=E,i=f,T=t.f;_=null,h=0,g=null,u=T&(y|G)?null:t,k=!O&&(T&I)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(M(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!k)for(v=h;v<c.length;v++)((lt=c[v]).reactions??(lt.reactions=[])).push(t)}else c!==null&&h<c.length&&(M(t,h),c.length=h);return A}finally{_=n,h=r,g=e,u=s,k=a,E=l,f=i}}function yn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,j),n.f&(I|B)||(n.f^=B),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)yn(t,r[e])}function z(t){var n=t.f;if(!(n&H)){w(t,p);var r=o;o=t;try{n&nt?_n(t):Ot(t),kt(t),St(t);var e=Lt(t);t.teardown=typeof e=="function"?e:null,t.version=qt}catch(s){En(s)}finally{o=r}}}function jt(){N>1e3&&(N=0,Jt()),N++}function Ht(t){var n=t.length;if(n!==0){jt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Yt(s,a),wn(a)}}finally{O=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(H|C))&&Y(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function Tn(){if(q=!1,N>1001)return;const t=x;x=[],Ht(t),q||(N=0)}function W(t){U===Ft&&(q||(q=!0,queueMicrotask(Tn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|y)){if(!(r&p))return;n.f^=p}}x.push(n)}function Yt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&C))if(s&L){a?r.f^=p:Y(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ct&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Yt(i,n)}function Ut(t){var n=U,r=x;try{jt();const s=[];U=pn,x=s,q=!1,Ht(r);var e=t==null?void 0:t();return vn(),(x.length>0||s.length>0)&&Ut(),N=0,e}finally{U=n,x=r}}async function hr(){await Promise.resolve(),Ut()}function dr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&H){var e=Rt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Qt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,R),W(o))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,Y(a)&&xt(a)),t.v}function Er(t){const n=u;try{return u=null,t()}finally{u=n}}const mn=~(R|j|p);function w(t,n){t.f=t.f&mn|n}function yr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Z&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function wr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=o,e=u;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];$(a.effect),K(a.reaction),It(a.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)tt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&tt(r)}}}function tt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{tt(t[e],n)}catch{}const r=Vt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Bt(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{C as $,vr as A,cr as B,Wn as C,Qn as D,vt as E,F,zn as G,sn as H,Z as I,Rn as J,K,$ as L,An as M,u as N,o as O,tr as P,J as Q,en as R,S,wt as T,an as U,Tt as V,On as W,sr as X,gn as Y,ir as Z,X as _,_r as a,rn as a0,Ct as a1,cn as a2,rt as a3,jn as a4,Ln as a5,Hn as a6,Vt as a7,Bt as a8,qn as a9,Fn as aA,Zt as aB,Jn as aa,$n as ab,Gn as ac,ut as ad,xn as ae,Dn as af,Cn as ag,Zn as ah,ot as ai,bn as aj,It as ak,un as al,pr as am,Nn as an,kn as ao,Bn as ap,dt as aq,y as ar,G as as,Yn as at,Un as au,Vn as av,ar as aw,Kn as ax,Ut as ay,hr as az,fn as b,d as c,P as d,wr as e,rr as f,nr as g,D as h,lr as i,dr as j,Mn as k,ur as l,nn as m,In as n,or as o,yr as p,f as q,Xn as r,er as s,fr as t,Er as u,Kt as v,Sn as w,Tr as x,ln as y,Pn as z};
