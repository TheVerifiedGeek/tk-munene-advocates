
document.addEventListener('DOMContentLoaded', function(){
  const header = document.querySelector('.header');
  function checkScroll(){ if(window.scrollY>40) header.classList.add('solid'); else header.classList.remove('solid'); }
  checkScroll(); window.addEventListener('scroll', checkScroll);

  const viewBtns = document.querySelectorAll('.view-btn');
  const lightbox = document.getElementById('cert-lightbox');
  const frame = document.getElementById('cert-frame');
  const closeBtn = document.getElementById('cert-close');
  viewBtns.forEach(b=> b.addEventListener('click', ()=>{ frame.src = b.dataset.file; lightbox.style.display='flex'; document.body.style.overflow='hidden'; }));
  closeBtn && closeBtn.addEventListener('click', ()=>{ lightbox.style.display='none'; frame.src=''; document.body.style.overflow=''; });
});
