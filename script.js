async function loadFinds() {
  const grid = document.getElementById('finds-grid');
  if (!grid) return;

  try {
    const res = await fetch('/data/finds.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Unable to load finds');
    const raw = await res.json();
    const finds = Array.isArray(raw) ? raw : (Array.isArray(raw.items) ? raw.items : []);

    if (finds.length === 0) {
      grid.innerHTML = `
        <div class="empty-state">
          <strong>Andy is still filling the notebook.</strong><br>
          The first real road finds will show up here as he posts them from his phone.
        </div>`;
      return;
    }

    grid.innerHTML = finds.map(find => `
      <article class="find-card">
        <img src="${escapeHtml(find.image || '')}" alt="${escapeHtml(find.title || 'Road find')}" loading="lazy">
        <div class="find-copy">
          <div class="meta">${escapeHtml(find.date || '')}${find.location ? ' · ' + escapeHtml(find.location) : ''}</div>
          <h3>${escapeHtml(find.title || 'Road Find')}</h3>
          <p>${escapeHtml(find.story || '')}</p>
        </div>
      </article>
    `).join('');
  } catch (err) {
    grid.innerHTML = `<div class="empty-state">Road finds are coming soon.</div>`;
  }
}

async function loadStatus() {
  const holder = document.getElementById('road-status');
  if (!holder) return;

  try {
    const res = await fetch('/data/status.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Unable to load status');
    const s = await res.json();

    holder.innerHTML = `
      <div class="status-mark">${escapeHtml(s.short || 'MIDWEST')}</div>
      <div>
        <span class="section-kicker gold">WHERE'S ANDY?</span>
        <h3>${escapeHtml(s.title || 'Roaming the Midwest')}</h3>
        <p>${escapeHtml(s.message || 'Somewhere between a small town, an estate sale, and a worthwhile detour.')}</p>
      </div>`;
  } catch (err) {
    holder.innerHTML = `
      <div class="status-mark">MIDWEST</div>
      <div>
        <span class="section-kicker gold">WHERE'S ANDY?</span>
        <h3>Roaming the Midwest</h3>
        <p>Somewhere between a small town, an estate sale, and a worthwhile detour.</p>
      </div>`;
  }
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

loadFinds();
loadStatus();
