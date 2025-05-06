function toggleMenu() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('open');
}

function filterPhim(loai) {
  const phim = document.querySelectorAll('.film');
  phim.forEach(p => {
    if (loai === 'all' || p.classList.contains(loai)) {
      p.style.display = 'block';
    } else {
      p.style.display = 'none';
    }
  });
}

function searchPhim() {
  const keyword = document.getElementById('searchBox').value.toLowerCase();
  const phim = document.querySelectorAll('.film');
  phim.forEach(p => {
    const title = p.innerText.toLowerCase();
    p.style.display = title.includes(keyword) ? 'block' : 'none';
  });
}
