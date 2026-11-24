// Xnet: חיפוש באתר מתוך ה-header (משותף לכל העמודים)
(function(){
  // נתיבים יחסיים לשורש האתר
  const INDEX = [{"t":"VODOS","s":"אפליקציה לאנדרואיד · אתר · תוכנה למחשב","u":"store.html#app/vodos","i":"assets/vodos.png","k":"פיד של סרטונים קצרים בגלילה אנכית, באתר וגם על נגן אנדרואיד בלי אינטרנט."},{"t":"VODOS אונליין","s":"אפליקציה לאנדרואיד","u":"store.html#app/vodos-online","i":"assets/vodos-online.png","k":"כל הסרטונים של VODOS ישר מהאינטרנט. בלי מחשב, ובלי לשמור סרטונים במכשיר."},{"t":"מנהל הקבצים X","s":"אפליקציה לאנדרואיד","u":"store.html#app/file-manager-x","i":"assets/file-manager-x.svg","k":"מנהל קבצים file manager קבצים תיקיות אנדרואיד"},{"t":"מסך נעילה","s":"אפליקציה לאנדרואיד","u":"store.html#app/lockscreen","i":"assets/lockscreen.png","k":"מסך נעילה lock screen נעילה שעון התראות אנדרואיד"},{"t":"החתול בבלוטות'","s":"אפליקציה לאנדרואיד · גימיק","u":"store.html#app/btcat","i":"assets/btcat.png","k":"החתול השחור btcat חתול שמחצל סטטוסים בלוטות נגן גימיק"},{"t":"ביטיצ'אט","s":"אפליקציה לאנדרואיד · תוכנה למחשב","u":"store.html#app/btchat","i":"assets/btchat.png","k":"ביטיצאט btchat bt chat גוגל צאט google chat צ'אט הודעות בלוטות נגן"},{"t":"הארנק","s":"אפליקציה לאנדרואיד","u":"store.html#app/haarnak","i":"assets/haarnak.svg","k":"הארנק haarnak ארנק תקציב הוצאות הכנסות חובות מעשר חומש ישיבה בחורים"},{"t":"ShadeX","s":"אפליקציה לאנדרואיד","u":"store.html#app/shadex","i":"assets/shadex.png","k":"shadex וילון התראות מרכז בקרה control center iOS שיאומי xiaomi מסך בית launcher"},{"t":"ביטיפוש","s":"אפליקציה לאנדרואיד · תוכנה למחשב","u":"store.html#app/btpush","i":"assets/btpush.png","k":"ביטיפוש btpush bt push פושים מבזקים התראות חדשות הגיזרה אותנטי בלוטות נגן"},{"t":"Pulse","s":"אפליקציה לאנדרואיד · תוכנה למחשב","u":"store.html#app/pulse","i":"assets/pulse.png","k":"מוזיקה שירים חדשים נגן mp3 בלי אינטרנט שיר חדש שיר בוט music"},{"t":"דרך הארץ","s":"אתר · מסלולים וטבע","u":"projects/derech-haaretz.html","i":"https://res.cloudinary.com/dpsgd6esr/image/upload/v1785752770/ghcmqbdryluaunig43co.jpg","k":"מפה שיתופית של מעיינות, מסלולים ואתרי בילוי בישראל, עם ביקורות של מי שהיה שם."},{"t":"נטלינק","s":"אתר · לוח שיתופי","u":"projects/netlink.html","i":"https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/%D7%A0%D7%98%D7%9C%D7%99%D7%A0%D7%A7.png","k":"אינדקס קהילתי של אתרים נפוצים שפתוחים תחת נטפרי."},{"t":"סטורי במייל","s":"תוסף לכרום","u":"projects/story.html","i":"https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/%D7%A1%D7%98%D7%95%D7%A8%D7%99.png","k":"הסטוריז מוואטסאפ ומאינסטגרם, ישר לתיבת המייל."},{"t":"וואטסאפ פון","s":"אתר · ימות המשיח מהמחשב","u":"projects/watsapp-phone.html","i":"https://cdn-icons-png.flaticon.com/128/3670/3670051.png","k":"שולחים ומקבלים הודעות קוליות של מערכת ימות המשיח, ישר מהמחשב."},{"t":"מייטיוב","s":"אתר · מנויי יוטיוב","u":"projects/mytube.html","i":"https://cdn-icons-png.flaticon.com/512/2991/2991195.png","k":"העדכונים מהערוצים שאתם אוהבים, לפי הסדר. בלי אלגוריתם ובלי המלצות."},{"t":"פלאש פוש","s":"תוסף לכרום · חדשות","u":"projects/flash-push.html","i":"https://cdn-icons-png.flaticon.com/512/1827/1827425.png","k":"כמה ערוצי חדשות בפיד אחד, בסרגל הצד של הדפדפן."},{"t":"ClipX","s":"אתר · עורך וידאו","u":"projects/clipx.html","i":"https://cdn-icons-png.flaticon.com/128/17784/17784286.png","k":"עורך קליפים חינמי בעברית, שעובד כולו בדפדפן שלכם."},{"t":"GifX","s":"אתר · ממיר וידאו ל-GIF","u":"projects/gifx.html","i":"assets/gifx.svg","k":"gifx גיף gif ממיר וידאו סרטון המרה אנימציה"},{"t":"שירותי בניית אתרים","s":"דפי נחיתה ב-250 ₪","u":"services.html","k":"דף נחיתה אתר תדמית מחיר בניית"},{"t":"X Store","s":"חנות האפליקציות","u":"store.html","k":"חנות האפליקציות apk אנדרואיד הורדה store"},{"t":"כל הפרויקטים","s":"אתרים, תוספים ואפליקציות","u":"projects.html","k":"פרויקטים כלים"},{"t":"יצירת קשר","s":"בואו נדבר","u":"contact.html","k":"צור קשר פנייה טלפון מייל"},{"t":"תשלום","s":"אשראי, ביט ו-Google Pay","u":"payment.html","k":"תשלום תרומה סליקה"},{"t":"ערוץ עדכונים","s":"הערוץ האישי שלי","u":"projects.html#channel","k":"ערוץ עדכונים הכרזות"}];
  const ROOT = new URL('.', document.currentScript.src).href;
  // הבאה מראש של דפים באתר כשמצביעים על קישור (Chrome / Edge), כדי שהמעבר יהיה מיידי
  if (HTMLScriptElement.supports && HTMLScriptElement.supports('speculationrules')) {
    const sr = document.createElement('script');
    sr.type = 'speculationrules';
    sr.textContent = JSON.stringify({ prefetch: [{ where: { href_matches: '/*' }, eagerness: 'moderate' }] });
    document.head.appendChild(sr);
  }
  const input = document.getElementById('site-q');
  const box = document.getElementById('search-results');
  if(!input || !box) return;

  const norm = s => s.toLowerCase().replace(/["'״׳]/g, '');
  const url = u => /^https?:/.test(u) ? u : ROOT + u;
  const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  let hits = [], active = 0;

  function draw(){
    const q = norm(input.value.trim());
    if(!q){ box.hidden = true; return; }
    hits = INDEX.filter(x => norm(x.t + ' ' + x.s + ' ' + (x.k || '')).includes(q)).slice(0, 7);
    active = 0;
    box.innerHTML = hits.length ? hits.map((x, i) => `
      <a href="${url(x.u)}" class="sr${i === 0 ? ' on' : ''}">
        <span class="sr-ic">${x.i ? `<img src="${url(x.i)}" alt="">` : '#'}</span>
        <span><b>${esc(x.t)}</b><small>${esc(x.s)}</small></span>
      </a>`).join('') : '<div class="sr-empty">לא נמצאו תוצאות</div>';
    box.hidden = false;
  }
  function mark(){ box.querySelectorAll('.sr').forEach((a, i) => a.classList.toggle('on', i === active)); }

  input.addEventListener('input', draw);
  input.addEventListener('focus', draw);
  input.addEventListener('keydown', e => {
    if(e.key === 'ArrowDown' && hits.length){ active = (active + 1) % hits.length; mark(); e.preventDefault(); }
    else if(e.key === 'ArrowUp' && hits.length){ active = (active - 1 + hits.length) % hits.length; mark(); e.preventDefault(); }
    else if(e.key === 'Enter' && hits[active]){ location.href = url(hits[active].u); }
    else if(e.key === 'Escape'){ box.hidden = true; input.blur(); }
  });
  document.addEventListener('click', e => { if(!e.target.closest('.site-search')) box.hidden = true; });
})();

// ---------- חלונית "הערוץ שלי": נכנסת מלמטה משמאל כמה שניות אחרי הכניסה לאתר ----------
// מופיעה פעם אחת בביקור. מי שסגר אותה או לחץ על הקישור לא יראה אותה שוב שבוע.
(function(){
  const CHANNEL = 'https://xnet2.github.io/status';
  const KEY = 'xnet-channel-promo';
  const WEEK = 7 * 24 * 60 * 60 * 1000;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const until = +localStorage.getItem(KEY) || 0;
    if (Date.now() < until) return;
    sessionStorage.setItem(KEY, '1');
  } catch (e) {}

  const el = document.createElement('aside');
  el.className = 'ch-promo';
  el.setAttribute('role', 'dialog');
  el.setAttribute('aria-label', 'הערוץ האישי שלי');
  el.innerHTML =
    '<button class="ch-close" type="button" aria-label="סגירה">' +
      '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>' +
    '</button>' +
    '<div class="ch-icon"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 5-2 6-2 6h16s-2-1-2-6Z"/><path d="M10.3 19a1.7 1.7 0 0 0 3.4 0"/></svg></div>' +
    '<div class="ch-text">' +
      '<b>הערוץ האישי שלי</b>' +
      '<span>עדכונים, הכרזות ומאחורי הקלעים על כל מה שאני בונה. כדאי לעקוב.</span>' +
      '<a class="ch-btn" href="' + CHANNEL + '" target="_blank" rel="noopener">למעקב אחרי הערוץ ' +
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M5 12l6-6M5 12l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</a>' +
    '</div>';

  function close(remember){
    el.classList.remove('show');
    if (remember) { try { localStorage.setItem(KEY, String(Date.now() + WEEK)); } catch (e) {} }
    setTimeout(() => el.remove(), 500);
  }
  el.querySelector('.ch-close').addEventListener('click', () => close(true));
  el.querySelector('.ch-btn').addEventListener('click', () => close(true));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && el.isConnected) close(true); });

  setTimeout(() => {
    document.body.appendChild(el);
    requestAnimationFrame(() => requestAnimationFrame(() => el.classList.add('show')));
  }, 2500);
})();
