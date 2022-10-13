import"./dat.gui.module.6914edc7.js";import{e as c,f as d,o as h,c as _}from"./index.e21e3831.js";function s(r){r.width=window.innerWidth,r.height=window.innerHeight;var e=r.getContext("webgl");console.log(e),e.viewport(0,0,r.width,r.height);var t=e.createShader(e.VERTEX_SHADER);e.shaderSource(t,`
    attribute vec4 a_Position;
    void main() {
      gl_Position = a_Position;
    }
  `),e.compileShader(t);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,`
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `),e.compileShader(o);var a=e.createProgram();e.attachShader(a,t),e.attachShader(a,o),e.linkProgram(a),e.useProgram(a);var n=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,n);var l=new Float32Array([0,.5,-.5,-.5,.5,-.5]);e.bufferData(e.ARRAY_BUFFER,l,e.STATIC_DRAW);var i=e.getAttribLocation(a,"a_Position");e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(i),e.drawArrays(e.TRIANGLES,0,3)}const u={__name:"webgl",setup(r){let e=c(null);return d(()=>{let t=e.value;s(t)}),(t,o)=>(h(),_("canvas",{ref_key:"el",ref:e},null,512))}};export{u as default};
