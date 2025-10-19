(function(){
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved) html.setAttribute('data-theme', saved);
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const cur = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', cur);
    localStorage.setItem('theme', cur);
  });

  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  hamburger && hamburger.addEventListener('click', ()=>{
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  const copyBtn = document.getElementById('copy-email');
  const emailLink = document.getElementById('email-link');
  copyBtn && copyBtn.addEventListener('click', ()=>{
    const email = (emailLink && emailLink.href.replace('mailto:','')) || '';
    navigator.clipboard && navigator.clipboard.writeText(email).then(()=>{
      copyBtn.textContent = '已复制';
      setTimeout(()=>copyBtn.textContent = '复制邮箱',2000);
    }).catch(()=>{
      alert('复制失败，请手动复制邮箱');
    });
  });

  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // mock submit
    formMsg.textContent = '发送中... (此模板为静态示例，需替换为真实后端或使用 Formspree 等服务)';
    setTimeout(()=>{
      formMsg.textContent = '已发送 — 我会尽快回复。';
      form.reset();
    }, 900);
  });
})();