const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const projects = {
  valuematrix: { category: 'FINANCIAL TECHNOLOGY · PERSONAL PROJECT', title: 'ValuMatrix', content: `<p>An interactive, browser-based prototype for DCF and LBO modeling. The project brings assumptions, projections, and valuation into one workspace.</p><h3>What it explores</h3><ul><li>Editable modeling assumptions and forecast horizons.</li><li>Scenarios and charts to explore how assumptions affect outcomes.</li><li>Browser-local saving and JSON import/export.</li></ul><h3>Project status</h3><p>This is a learning prototype, not an audited investment tool. The models use entered assumptions; the prototype does not provide live market data or account synchronization. Some toolbar controls remain placeholders.</p><a class="text-link" href="https://github.com/hamzehaashi/valuematrix" target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>` },
  danaher: { category: 'EQUITY RESEARCH · STUDENT-MANAGED FUND', title: 'The Danaher investment case', content: `<h3>The starting point</h3><p>Our student-managed portfolio had less healthcare exposure than the S&P 500. That allocation gap prompted a closer look at potential investments in the sector.</p><h3>My contribution</h3><p>I worked with another analyst to research Danaher, build a DCF, and compare the company with industry peers. We brought the analysis and investment case to the fund’s members for discussion.</p><h3>The outcome</h3><p>Following the presentation and a member vote, Danaher was selected for inclusion in the portfolio.</p><h3>What I took from it</h3><p>A useful investment recommendation connects the company’s fundamentals to the portfolio’s needs—and makes its assumptions clear enough for others to challenge.</p><p style="margin-top:24px;font-size:13px">Historical experience summary. This is not a current valuation or investment recommendation.</p>` },
  reporting: { category: 'PORTFOLIO OPERATIONS · STUDENT-MANAGED FUND', title: 'Making portfolio reporting useful', content: `<h3>The context</h3><p>Investment discussions need financial information that is organized, understandable, and easy to revisit.</p><h3>My contribution</h3><p>As part of my work with Whitman Investment Company, I contributed to portfolio reporting and Excel automation to support monitoring and investment discussions.</p><h3>The approach</h3><p>Connect the numbers to the decision. Organize analysis so that a reviewer can trace inputs, understand the portfolio context, and focus the discussion on the investment question.</p><h3>Skills applied</h3><p>Excel, portfolio analysis, financial reporting, and communicating analytical work to other fund members.</p>` }
};
const dialog = document.querySelector('#project-dialog');
let opener;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => { const project = projects[button.dataset.project]; opener = button; document.querySelector('#dialog-title').textContent = project.title; document.querySelector('#dialog-category').textContent = project.category; document.querySelector('#dialog-content').innerHTML = project.content; dialog.showModal(); document.body.style.overflow = 'hidden'; }));
document.querySelector('.dialog-close')?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', event => { if(event.target === dialog){ const r = dialog.getBoundingClientRect(); if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
dialog?.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus(); });
const form = document.querySelector('form[name="contact"]');
form?.addEventListener('submit', async event => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  const button = form.querySelector('button[type="submit"]');
  status.className = '';
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:' || location.hostname.endsWith('.github.io')) {
    status.className = 'error';
    status.textContent = 'Message delivery is available on the Netlify site. Please use the email link to contact Hamze from this preview.';
    return;
  }
  button.disabled = true;
  button.textContent = 'Sending…';
  status.textContent = '';
  try {
    const response = await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams(new FormData(form)).toString() });
    if (!response.ok) throw new Error('Submission failed');
    form.reset(); status.textContent = 'Thank you! Your message has been sent.';
  } catch { status.className = 'error'; status.textContent = 'Your message could not be sent. Please try again, or use the email link to reach me directly.'; }
  finally { button.disabled = false; button.innerHTML = 'Send message <span aria-hidden="true">↗</span>'; }
});
