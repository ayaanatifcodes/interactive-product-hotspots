const pairs = [
  {hs:'h1', tip:'t1'},
  {hs:'h2', tip:'t2'},
  {hs:'h3', tip:'t3'},
  {hs:'h4', tip:'t4'}
];

let active = null;

pairs.forEach(p => {
  const hs = document.getElementById(p.hs);
  const tip = document.getElementById(p.tip);

  hs.addEventListener('click', e => {
    e.stopPropagation();

    if(active && active !== tip){
      active.classList.remove('on');
    }

    tip.classList.toggle('on');
    active = tip.classList.contains('on') ? tip : null;
  });
});

document.addEventListener('click', () => {
  if(active){
    active.classList.remove('on');
    active = null;
  }
});
