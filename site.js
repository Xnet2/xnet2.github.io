// Xnet: חיפוש באתר מתוך ה-header (משותף לכל העמודים)
(function(){
  // נתיבים יחסיים לשורש האתר
  const INDEX = [{"t":"VODOS","s":"אפליקציה לאנדרואיד · אתר · תוכנה למחשב","u":"projects/vodos.html","i":"assets/vodos.png","k":"פיד של סרטונים קצרים בגלילה אנכית, באתר וגם על נגן אנדרואיד בלי אינטרנט."},{"t":"VODOS אונליין","s":"אפליקציה לאנדרואיד","u":"projects/vodos-online.html","i":"assets/vodos-online.png","k":"כל הסרטונים של VODOS ישר מהאינטרנט. בלי מחשב, ובלי לשמור סרטונים במכשיר."},{"t":"דרך הארץ","s":"אתר · מסלולים וטבע","u":"projects/derech-haaretz.html","i":"https://res.cloudinary.com/dpsgd6esr/image/upload/v1785752770/ghcmqbdryluaunig43co.jpg","k":"מפה שיתופית של מעיינות, מסלולים ואתרי בילוי בישראל, עם ביקורות של מי שהיה שם."},{"t":"נטלינק","s":"אתר · לוח שיתופי","u":"projects/netlink.html","i":"https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/%D7%A0%D7%98%D7%9C%D7%99%D7%A0%D7%A7.png","k":"אינדקס קהילתי של אתרים נפוצים שפתוחים תחת נטפרי."},{"t":"סטורי במייל","s":"תוסף לכרום","u":"projects/story.html","i":"https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/%D7%A1%D7%98%D7%95%D7%A8%D7%99.png","k":"הסטוריז מוואטסאפ ומאינסטגרם, ישר לתיבת המייל."},{"t":"וואטסאפ פון","s":"אתר · ימות המשיח מהמחשב","u":"projects/watsapp-phone.html","i":"https://cdn-icons-png.flaticon.com/128/3670/3670051.png","k":"שולחים ומקבלים הודעות קוליות של מערכת ימות המשיח, ישר מהמחשב."},{"t":"מייטיוב","s":"אתר · מנויי יוטיוב","u":"projects/mytube.html","i":"https://cdn-icons-png.flaticon.com/512/2991/2991195.png","k":"העדכונים מהערוצים שאתם אוהבים, לפי הסדר. בלי אלגוריתם ובלי המלצות."},{"t":"פלאש פוש","s":"תוסף לכרום · חדשות","u":"projects/flash-push.html","i":"https://cdn-icons-png.flaticon.com/512/1827/1827425.png","k":"כמה ערוצי חדשות בפיד אחד, בסרגל הצד של הדפדפן."},{"t":"ClipX","s":"אתר · עורך וידאו","u":"projects/clipx.html","i":"https://cdn-icons-png.flaticon.com/128/17784/17784286.png","k":"עורך קליפים חינמי בעברית, שעובד כולו בדפדפן שלכם."},{"t":"שירותי בניית אתרים","s":"דפי נחיתה ב-250 ₪","u":"services.html","k":"דף נחיתה אתר תדמית מחיר בניית"},{"t":"חנות האפליקציות","s":"אפליקציות לאנדרואיד","u":"store.html","k":"חנות apk אנדרואיד הורדה"},{"t":"כל הפרויקטים","s":"אתרים, תוספים ואפליקציות","u":"projects.html","k":"פרויקטים כלים"},{"t":"יצירת קשר","s":"בואו נדבר","u":"contact.html","k":"צור קשר פנייה טלפון מייל"},{"t":"תשלום","s":"אשראי, ביט ו-Google Pay","u":"payment.html","k":"תשלום תרומה סליקה"},{"t":"ערוץ עדכונים","s":"הערוץ האישי שלי","u":"projects.html#channel","k":"ערוץ עדכונים הכרזות"}];
  const ROOT = new URL('.', document.currentScript.src).href;
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
