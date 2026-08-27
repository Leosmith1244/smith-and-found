async function loadJSON(path) {
  const response = await fetch(path, { cache: 'no-store' });
  if (!response.ok) throw new Error(`Could not load ${path}`);
  return response.json();
}

function formatDate(value) {
  try {
    return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(`${value}T12:00:00`));
  } catch {
    return value;
  }
}

async function renderFinds() {
  const target = document.querySelector('#finds-grid');
  if (!target) return;
  try {
    const finds = await loadJSON('/data/finds.json');
    target.innerHTML = finds.slice().reverse().map(item => `
      <article class="find-card">
        <img src="${item.image || 'https://source.unsplash.com/900x700/?vintage,antiques'}" alt="${item.title}" loading="lazy">
        <div class="find-copy">
          <div class="meta">${item.status || 'Road Find'} · ${formatDate(item.date)}</div>
          <h3>${item.title}</h3>
          <div class="small"><strong>${item.location || 'On the road'}</strong></div>
          <p>${item.story}</p>
        </div>
      </article>
    `).join('');
  } catch (error) {
    target.innerHTML = '<div class="empty-state">Andy’s road finds will appear here soon.</div>';
  }
}

async function renderStatus() {
  const target = document.querySelector('#road-status');
  if (!target) return;
  try {
    const s = await loadJSON('/data/status.json');
    target.innerHTML = `
      <div>
        <span class="kicker">${s.eyebrow}</span>
        <div class="status-mark">${s.location}</div>
      </div>
      <div>
        <h3>${s.headline}</h3>
        <p>${s.message}</p>
        <p class="small" style="margin-top:10px">Updated ${s.updated}</p>
      </div>
    `;
  } catch (error) {
    target.innerHTML = '<p>Andy is out there looking.</p>';
  }
}

renderFinds();
renderStatus();
