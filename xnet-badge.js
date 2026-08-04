/*!
 * Xnet Badge — תג "נבנה ע״י Xnet" עם קישור לבלוג/ערוץ העדכונים.
 * הטמעה: להדביק את התג הבא ממש לפני </body> בכל אתר:
 *   <script src="https://xnet2.github.io/badge/xnet-badge.js"></script>
 * (או להעתיק את הקובץ הזה ישירות ולטעון אותו מקומית)
 */
(function () {
  var BLOG_URL = "https://xnet2.github.io/status";

  var style = document.createElement("style");
  style.textContent =
    '.xnet-badge{position:fixed;bottom:18px;left:18px;z-index:999999;' +
    'display:flex;align-items:center;gap:8px;direction:rtl;' +
    'font-family:Assistant,system-ui,sans-serif;font-size:13px;font-weight:700;' +
    'color:#fff;background:#17181d;border:1px solid rgba(255,255,255,.1);' +
    'padding:9px 14px 9px 10px;border-radius:100px;cursor:pointer;' +
    'box-shadow:0 14px 30px -12px rgba(0,0,0,.45);' +
    'text-decoration:none;transition:transform .18s ease, box-shadow .18s ease;}' +
    '.xnet-badge:hover{transform:translateY(-2px);box-shadow:0 18px 36px -12px rgba(0,0,0,.55);}' +
    '.xnet-badge .xnet-dot{width:7px;height:7px;border-radius:50%;background:#ff4d5e;flex:0 0 auto;' +
    'box-shadow:0 0 0 0 rgba(255,77,94,.6);animation:xnet-pulse 1.8s infinite;}' +
    '@keyframes xnet-pulse{0%{box-shadow:0 0 0 0 rgba(255,77,94,.55);}' +
    '70%{box-shadow:0 0 0 8px rgba(255,77,94,0);}100%{box-shadow:0 0 0 0 rgba(255,77,94,0);}}' +
    '.xnet-badge span{white-space:nowrap;}' +
    '@media (max-width:480px){.xnet-badge{font-size:11px;padding:7px 12px 7px 8px;bottom:12px;left:12px;}}';
  document.head.appendChild(style);

  var badge = document.createElement("a");
  badge.className = "xnet-badge";
  badge.href = BLOG_URL;
  badge.target = "_blank";
  badge.rel = "noopener";
  badge.setAttribute("aria-label", "נבנה על ידי Xnet — מעבר לבלוג העדכונים");
  badge.innerHTML =
    '<span class="xnet-dot"></span><span>נבנה ע״י Xnet · לבלוג</span>';

  function mount() {
    if (!document.body.contains(badge)) {
      document.body.appendChild(badge);
    }
  }
  if (document.body) {
    mount();
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
