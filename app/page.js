"use client";
// app/page.js (Next.js App Router)
import { useEffect } from "react";

const css = `@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap");
:root{--bg:#0a1020;--card:#111a2e;--line:#22304d;--text:#e6edf7;--mute:#93a4bf;--a:#38bdf8;--b:#818cf8}
*{box-sizing:border-box;margin:0}html{scroll-behavior:smooth;scroll-padding-top:72px}
body{font:17px/1.7 Inter,system-ui,sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden}
a{color:inherit;text-decoration:none}a:focus-visible,button:focus-visible{outline:3px solid var(--a);outline-offset:3px}
h1,h2,h3{font-family:"Space Grotesk",system-ui,sans-serif;line-height:1.15}
.bar{position:fixed;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--a),var(--b));z-index:30}
nav{position:fixed;top:0;width:100%;z-index:20;background:#0a1020cc;backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
.nav{max-width:1080px;margin:0 auto;padding:14px 24px;display:flex;justify-content:space-between;align-items:center}
.logo{font:700 1.3rem "Space Grotesk",sans-serif}.logo span{color:var(--a)}
.links{display:flex;gap:26px;font-size:.95rem;color:var(--mute)}.links a{transition:color .2s}.links a:hover,.links a.on{color:var(--a)}
#menu{display:none;background:none;border:1px solid var(--line);color:var(--text);border-radius:8px;padding:6px 12px;font-size:1rem}
.wrap{max-width:1080px;margin:0 auto;padding:0 24px}
section{padding:96px 0}
.hero{min-height:100vh;display:flex;align-items:center;position:relative;padding-top:80px}
.blob{position:absolute;border-radius:50%;filter:blur(90px);opacity:.28;animation:float 14s ease-in-out infinite;z-index:-1}
.b1{width:420px;height:420px;background:var(--a);top:8%;right:6%}.b2{width:360px;height:360px;background:var(--b);bottom:6%;left:2%;animation-delay:-7s}
@keyframes float{50%{transform:translate(30px,-40px) scale(1.1)}}
.grid{display:grid;grid-template-columns:1.4fr 1fr;gap:48px;align-items:center}
.hi{color:var(--a);font-weight:600}h1{font-size:clamp(2.6rem,7vw,4.6rem);margin:8px 0}
.type{font:600 clamp(1.3rem,3vw,1.9rem) "Space Grotesk",sans-serif;color:var(--mute);min-height:2.4rem}
.type b{color:var(--a)}.caret{display:inline-block;width:3px;height:1.1em;background:var(--a);margin-left:3px;vertical-align:-3px;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.lead{max-width:34em;color:var(--mute);margin:16px 0 28px}
.btns{display:flex;flex-wrap:wrap;gap:14px}
.btn{padding:12px 24px;border-radius:999px;font-weight:600;border:1px solid var(--line);transition:transform .2s,box-shadow .2s}
.btn:hover{transform:translateY(-3px)}.pri{background:linear-gradient(90deg,var(--a),var(--b));color:#06101f;border:0}.pri:hover{box-shadow:0 10px 30px #38bdf855}
.ring{width:min(300px,70vw);aspect-ratio:1;margin:auto;border-radius:50%;padding:5px;background:conic-gradient(var(--a),var(--b),var(--a));animation:spin 8s linear infinite}
.ring div{width:100%;height:100%;border-radius:50%;background:var(--card);display:grid;place-items:center;font:700 5rem "Space Grotesk",sans-serif;animation:spin 8s linear infinite reverse}
.ring img{width:100%;height:100%;border-radius:50%;object-fit:cover}
@keyframes spin{to{transform:rotate(360deg)}}
h2{font-size:clamp(1.9rem,4vw,2.6rem);margin-bottom:36px}h2::after{content:"";display:block;width:56px;height:4px;border-radius:4px;background:linear-gradient(90deg,var(--a),var(--b));margin-top:12px}
.facts{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px}
.passion{margin:28px 0 0;padding:20px 24px;border-left:4px solid var(--a);background:linear-gradient(90deg,#38bdf81f,transparent);border-radius:0 14px 14px 0;max-width:46em}.passion p{margin:0;font-size:1.1rem}.passion strong{font-family:"Space Grotesk",sans-serif;color:var(--a)}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:24px;transition:transform .25s,border-color .25s}
.card:hover{transform:translateY(-6px);border-color:var(--a)}.card strong{display:block;font:700 1.6rem "Space Grotesk",sans-serif;color:var(--a)}
.skills{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:16px}
.chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}.chips span{padding:4px 14px;border-radius:999px;background:#38bdf81a;color:var(--a);font-size:.9rem;border:1px solid #38bdf833}
.tag{color:var(--mute);font-size:.95rem}ul{padding-left:1.2em;color:var(--mute)}li{margin:6px 0}
.line{border-left:2px solid var(--line);padding-left:28px;position:relative;margin-bottom:28px}
.line::before{content:"";position:absolute;left:-7px;top:8px;width:12px;height:12px;border-radius:50%;background:var(--a);box-shadow:0 0 0 5px #38bdf833}
.contact{text-align:center}.contact h2::after{margin:12px auto 0}.contact p{color:var(--mute);margin-bottom:28px}.contact .btns{justify-content:center}
footer{text-align:center;color:var(--mute);padding:32px;border-top:1px solid var(--line);font-size:.9rem}
.reveal{opacity:0;transform:translateY(28px);transition:opacity .7s,transform .7s}.reveal.in{opacity:1;transform:none}
@media(max-width:760px){.grid{grid-template-columns:1fr}.ring{order:-1;width:200px}.ring div{font-size:3.4rem}.facts{grid-template-columns:1fr}
#menu{display:block}.links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;background:var(--bg);padding:16px 24px;border-bottom:1px solid var(--line)}.links.open{display:flex}}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}.reveal{opacity:1;transform:none}html{scroll-behavior:auto}}`;

export default function Home() {
  useEffect(() => {
    document.title = "Fasika Tesfaye | Mobile App Developer";
    const stop = (() => {
const $=s=>document.querySelector(s),all=s=>[...document.querySelectorAll(s)];
const typed=$("#typed"),words=["Mobile App Developer","React Native Developer","Software Engineering Student"];
let w=0,c=0,del=false,t;
const reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
function tick(){const word=words[w];c+=del?-1:1;typed.textContent=word.slice(0,c);let d=del?40:80;
if(!del&&c===word.length){del=true;d=1400}else if(del&&c===0){del=false;w=(w+1)%words.length;d=300}t=setTimeout(tick,d)}
if(reduce)typed.textContent=words[0];else tick();
const io=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.15});
all(".reveal").forEach(el=>io.observe(el));
const links=all(".links a"),secs=all("main section, header");
const so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)links.forEach(a=>a.classList.toggle("on",a.getAttribute("href")==="#"+x.target.id))}),{rootMargin:"-45% 0px -50% 0px"});
secs.forEach(s=>so.observe(s));
const bar=$("#bar"),onScroll=()=>{const h=document.documentElement;bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%"};
addEventListener("scroll",onScroll,{passive:true});
$("#menu").onclick=()=>$("#links").classList.toggle("open");
links.forEach(a=>a.addEventListener("click",()=>$("#links").classList.remove("open")));
return()=>{clearTimeout(t);io.disconnect();so.disconnect();removeEventListener("scroll",onScroll)};
    })();
    return stop;
  }, []);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
<div className="bar" id="bar"></div>
<nav><div className="nav"><a className="logo" href="#home">Fafi<span>.</span></a><button id="menu" aria-label="Menu">Menu</button>
<div className="links" id="links"><a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a><a href="#education">Education</a><a href="#contact">Contact</a></div></div></nav>
<header className="hero" id="home"><div className="blob b1"></div><div className="blob b2"></div><div className="wrap grid">
<div><p className="hi">Hi, I&apos;m</p><h1>Fasika Tesfaye</h1><p className="type"><b id="typed"></b><span className="caret"></span></p>
<p className="lead">Third-year Software Engineering student at Bahir Dar University. I build mobile apps with React Native and Convex, and I enjoy making useful products that solve real problems for students.</p>
<div className="btns"><a className="btn pri" href="#projects">View my work</a><a className="btn" href="#contact">Contact me</a><a className="btn" href="https://github.com/Nebeyat" target="_blank" rel="noopener">GitHub</a></div></div>
<div className="ring"><div><img src="/photo.jpg" alt="Fasika Tesfaye" width="300" height="300" /></div></div></div></header>
<main>
<section id="about"><div className="wrap reveal"><h2>About me</h2><p className="lead" style={{maxWidth:"40em"}}>I am a mobile app developer with 6+ months of hands-on experience building apps with React Native and Convex. I study Software Engineering at Bahir Dar University, Ethiopia, and I like turning ideas into apps people can use.</p>
<blockquote className="passion"><p><strong>I am dedicated.</strong> Software is not something I fell into. I chose it, and I choose it again every time I sit down to code. When an app I built runs on my own phone for the first time, I feel proud and hungry to build the next one. This is my passion, and I want to grow it with people who care about building things that matter.</p></blockquote>
<div className="facts"><div className="card"><strong>6+ months</strong>Hands-on mobile development</div><div className="card"><strong>3rd year</strong>BSc Software Engineering</div><div className="card"><strong>2028</strong>Expected graduation</div></div></div></section>
<section id="skills"><div className="wrap reveal"><h2>Skills</h2><div className="skills">
<div className="card"><h3>Languages</h3><div className="chips"><span>JavaScript</span></div></div>
<div className="card"><h3>Mobile</h3><div className="chips"><span>React Native</span><span>Expo</span><span>Expo Router</span></div></div>
<div className="card"><h3>Backend</h3><div className="chips"><span>Convex</span></div></div>
<div className="card"><h3>Tools</h3><div className="chips"><span>Git</span><span>GitHub</span><span>VS Code</span></div></div></div></div></section>
<section id="projects"><div className="wrap reveal"><h2>Projects</h2><div className="card"><h3>DeptAdvisor</h3><p className="tag">React Native, Convex, JavaScript</p>
<p style={{marginTop:12,color:"var(--mute)"}}>A mobile app that helps students choose a university department.</p>
<ul><li>Shows each department&apos;s skills, workplaces and academic stream.</li><li>React Native interface with a Convex backend for data storage.</li></ul>
<div className="chips"><span>React Native</span><span>Convex</span><span>JavaScript</span></div>
<p style={{marginTop:18}}><a className="btn" href="https://github.com/Nebeyat" target="_blank" rel="noopener">View on GitHub</a></p></div></div></section>
<section id="experience"><div className="wrap reveal"><h2>Experience</h2><div className="line"><h3>Mobile App Developer (Learning and Project Work)</h3><p className="tag">6+ months</p>
<ul><li>Learned and applied React Native and Convex while building DeptAdvisor from scratch.</li><li>Practiced version control and project workflow using Git and GitHub.</li></ul></div></div></section>
<section id="education"><div className="wrap reveal"><h2>Education</h2><div className="line"><h3>BSc in Software Engineering</h3><p className="tag">Bahir Dar University, third-year student, expected graduation 2028</p></div></div></section>
<section id="contact"><div className="wrap contact reveal"><h2>Get in touch</h2><p>Open to internships and junior mobile developer roles. Based in Bahir Dar, Ethiopia.</p>
<div className="btns"><a className="btn pri" href="mailto:fasika394@gmail.com">fasika394@gmail.com</a><a className="btn" href="https://linkedin.com/in/fasika-tesfaye" target="_blank" rel="noopener">LinkedIn</a><a className="btn" href="https://github.com/Nebeyat" target="_blank" rel="noopener">GitHub</a></div></div></section>
</main>
<footer>&copy; 2026 Fasika Tesfaye</footer>
    </>
  );
}
