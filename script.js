const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible')}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.mythCard').forEach(card=>{card.addEventListener('click',()=>card.classList.toggle('open'))});

const menuBtn=document.querySelector('.menuBtn');
const navlinks=document.querySelector('.navlinks');
menuBtn.addEventListener('click',()=>navlinks.classList.toggle('open'));
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>navlinks.classList.remove('open')));

const backTop=document.querySelector('.backTop');
window.addEventListener('scroll',()=>{backTop.classList.toggle('show',window.scrollY>500)});
backTop.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

let counted=false;
function runCounter(){
  const stat=document.querySelector('.statNumber');
  if(!stat||counted)return;
  const rect=stat.getBoundingClientRect();
  if(rect.top<window.innerHeight&&rect.bottom>0){
    counted=true;
    const target=Number(stat.dataset.target);
    let current=0;
    const timer=setInterval(()=>{
      current+=Math.ceil(target/35);
      if(current>=target){current=target;clearInterval(timer)}
      stat.textContent=current;
    },28);
  }
}
window.addEventListener('scroll',runCounter);
window.addEventListener('load',runCounter);
