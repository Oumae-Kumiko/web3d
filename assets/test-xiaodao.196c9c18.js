import{aa as p,u as m,as as u,M as h,o as f,ad as _,af as g,ag as v}from"./OrbitControls.740efb81.js";import{G as x}from"./dat.gui.module.6914edc7.js";import{e as F,f as M,g as H,o as y,c as z}from"./index.1a8ca45c.js";const C={__name:"test-xiaodao",setup(E){new x;let a=F(null),t=new p,n=new m(75,window.innerWidth/window.innerHeight);n.position.set(-50,50,130),t.add(n);const s=new u(100,100),d=new h({color:"#FFFFFF"}),l=new f(s,d);t.add(l);let e=new _;e.shadowMap.enabled=!0,e.physicallyCorrectLights=!0,e.setSize(window.innerWidth,window.innerHeight);let i=new g(n,e.domElement);i.enableDamping=!0;let w=new v(3);t.add(w);function r(){i.update(),e.render(t,n),window.requestAnimationFrame(r)}const o=c=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight),e.setPixelRatio(window.devicePixelRatio)};return M(()=>{a.value.appendChild(e.domElement),r(),window.addEventListener("resize",o)}),H(()=>{window.removeEventListener("resize",o)}),(c,G)=>(y(),z("div",{class:"test",ref_key:"el",ref:a},null,512))}};export{C as default};