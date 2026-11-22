/**
 * תבנית מייל לפנייה שמגיעה מאתר מייטיוב (mysube.com), בעיצוב של מייטיוב.
 * מוסיפים את הקובץ הזה ל-Code.gs (לצד xnet-contact-email-template.gs), ובתוך doPost בוחרים תבנית לפי מקור הפנייה:
 *
 *   var fromMyTube = isMyTubeContact(data);
 *   MailApp.sendEmail({
 *     to: "YOUR-EMAIL@example.com",   // כתובת המייל שלכם
 *     subject: fromMyTube ? "פנייה חדשה ממייטיוב: " + data.name : "הודעה חדשה מהאתר: " + data.name,
 *     htmlBody: fromMyTube ? buildMyTubeContactEmailHtml(data) : buildContactEmailHtml(data),
 *     replyTo: data.email || undefined   // "השב" במייל עונה ישר לפונה
 *   });
 *
 * פנייה ממייטיוב מזוהה לפי ההודעה, שמתחילה ב"פנייה ממייטיוב:" (או לפי data.source === 'mytube').
 * העיצוב בסגנונות שורה בלבד, כי Gmail מסיר תגיות style.
 */

var MYTUBE_PREFIX = 'פנייה ממייטיוב:';

function isMyTubeContact(data) {
  return data.source === 'mytube' || String(data.message || '').trim().indexOf(MYTUBE_PREFIX) === 0;
}

function buildMyTubeContactEmailHtml(data) {
  var raw = String(data.message || '').trim();
  if (raw.indexOf(MYTUBE_PREFIX) === 0) raw = raw.slice(MYTUBE_PREFIX.length).trim();

  var name    = mtEscape(data.name || '');
  var phone   = mtEscape(data.phone || '');
  var email   = mtEscape(data.email || '');
  var message = mtEscape(raw).replace(/\n/g, '<br>');

  var font  = "Rubik,'Segoe UI',Arial,sans-serif";
  var ink   = '#14161b';
  var muted = '#4c5464';
  var soft  = '#868d9b';
  var red   = '#ff0000';
  var bg    = '#f6f7f9';
  var line  = '#eceff4';

  var reply = email
    ? '<tr><td align="center" style="padding:6px 30px 26px;">'
      + '<a href="mailto:' + email + '?subject=' + encodeURIComponent('תשובה לפנייה שלך במייטיוב') + '" style="display:inline-block;background:' + red + ';color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;border-radius:999px;padding:13px 30px;font-family:' + font + ';">לענות ל' + name + '</a>'
      + '</td></tr>'
    : '';

  return ''
  + '<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>'
  + '<body style="margin:0;padding:0;background:' + bg + ';">'
  + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + bg + ';padding:28px 12px;">'
  +   '<tr><td align="center">'
  +     '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e5e8ee;border-radius:20px;overflow:hidden;font-family:' + font + ';color:' + ink + ';direction:rtl;text-align:right;">'

  // הלוגו של מייטיוב
  +       '<tr><td style="padding:26px 30px 18px;border-bottom:1px solid ' + line + ';">'
  +         '<span style="display:inline-block;width:30px;height:21px;background:' + red + ';border-radius:7px;vertical-align:middle;text-align:center;line-height:21px;color:#ffffff;font-size:11px;">&#9654;</span>'
  +         '<span style="font-size:19px;font-weight:800;vertical-align:middle;margin-right:8px;letter-spacing:-.3px;">MyTube</span>'
  +       '</td></tr>'

  // כותרת
  +       '<tr><td style="padding:28px 30px 6px;">'
  +         '<div style="display:inline-block;background:#fff3f3;color:#e53935;font-size:12px;font-weight:800;border-radius:7px;padding:3px 10px;margin-bottom:12px;">צור קשר</div>'
  +         '<h1 style="margin:0 0 6px;font-size:22px;line-height:1.35;font-weight:800;letter-spacing:-.3px;">פנייה חדשה מ' + (name || 'משתמש באתר') + '</h1>'
  +         '<p style="margin:0;font-size:14px;line-height:1.7;color:' + muted + ';">נשלחה דרך "צור קשר" באתר מייטיוב.</p>'
  +       '</td></tr>'

  // ההודעה
  +       '<tr><td style="padding:18px 30px 8px;">'
  +         '<div style="background:' + bg + ';border-radius:14px;padding:18px 20px;font-size:15px;line-height:1.8;color:' + ink + ';">' + (message || '<span style="color:' + soft + ';">(בלי טקסט)</span>') + '</div>'
  +       '</td></tr>'

  // פרטי הפונה
  +       '<tr><td style="padding:14px 30px 18px;">'
  +         '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;">'
  +           mtRow('שם', name, ink, soft, line)
  +           mtRow('מייל', email ? '<span dir="ltr">' + email + '</span>' : '', ink, soft, line)
  +           mtRow('טלפון', phone ? '<span dir="ltr">' + phone + '</span>' : '', ink, soft, line)
  +         '</table>'
  +       '</td></tr>'

  +       reply

  // פוטר
  +       '<tr><td style="padding:14px 30px;background:' + bg + ';border-top:1px solid ' + line + ';font-size:11.5px;color:' + soft + ';text-align:center;">'
  +         'MyTube · mysube.com'
  +       '</td></tr>'

  +     '</table>'
  +   '</td></tr>'
  + '</table>'
  + '</body></html>';
}

function mtRow(label, value, ink, soft, line) {
  if (!value) return '';
  return '<tr>'
  + '<td style="padding:9px 0;border-bottom:1px solid ' + line + ';color:' + soft + ';width:70px;">' + label + '</td>'
  + '<td style="padding:9px 0;border-bottom:1px solid ' + line + ';color:' + ink + ';font-weight:700;">' + value + '</td>'
  + '</tr>';
}

function mtEscape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
