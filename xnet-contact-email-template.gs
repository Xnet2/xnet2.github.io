/**
 * תבנית מייל מעוצבת להודעת "יצירת קשר" חדשה מאתר Xnet.
 * מתאים להוספה לתוך Code.gs הקיים שלכם, לצד הפונקציה doPost שכבר שולחת/שומרת את הפנייה.
 *
 * שימוש (בתוך doPost, אחרי שכבר יש לכם את ה-data המפורסר):
 *
 *   var html = buildContactEmailHtml(data);
 *   MailApp.sendEmail({
 *     to: "YOUR-EMAIL@example.com",   // כתובת המייל שלכם
 *     subject: "הודעה חדשה מהאתר: " + data.name,
 *     htmlBody: html
 *   });
 *
 * data צריך לכלול: name, phone, email, message (בדיוק כמו שנשלח מ-contact.html).
 */

function buildContactEmailHtml(data) {
  var name    = escapeHtml(data.name || '');
  var phone   = escapeHtml(data.phone || '');
  var email   = escapeHtml(data.email || '');
  var message = escapeHtml(data.message || '').replace(/\n/g, '<br>');

  var font   = "'Rubik', Arial, Helvetica, sans-serif";
  var indigo = '#4338ca';
  var ink    = '#131417';
  var muted  = '#686d7c';
  var bg     = '#f7f7fb';
  var line   = '#e8e8f0';

  return ''
  + '<!DOCTYPE html>'
  + '<html lang="he" dir="rtl"><head><meta charset="UTF-8">'
  + '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  + '<style>@import url(\'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap\');</style>'
  + '</head>'
  + '<body style="margin:0;padding:0;background:' + bg + ';font-family:' + font + ';">'
  + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + bg + ';padding:32px 16px;">'
  +   '<tr><td align="center">'
  +     '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:24px;overflow:hidden;box-shadow:0 20px 45px -20px rgba(19,20,23,.25);">'

  // כותרת עליונה בגרדיאנט אינדיגו, ממורכזת
  +       '<tr><td style="background:linear-gradient(135deg,' + indigo + ',#6d5ef0);padding:36px 24px;text-align:center;">'
  +         '<img src="https://raw.githubusercontent.com/Xnet2/GOOGLE-MY/refs/heads/main/image-removebg-preview%20(2).png" width="44" height="44" alt="Xnet" style="display:block;margin:0 auto 14px;">'
  +         '<div style="color:#ffffff;font-size:22px;font-weight:800;font-family:' + font + ';">הודעה חדשה מיצירת קשר</div>'
  +         '<div style="color:rgba(255,255,255,.82);font-size:13px;margin-top:6px;font-family:' + font + ';">התקבלה פנייה חדשה דרך אתר Xnet</div>'
  +       '</td></tr>'

  // גוף עם פרטי הפנייה
  +       '<tr><td style="padding:32px 28px;">'
  +         fieldRow('שם', name, indigo, ink, font)
  +         fieldRow('טלפון', phone, indigo, ink, font)
  +         fieldRow('מייל', email, indigo, ink, font)
  +         messageRow(message, indigo, ink, bg, font)
  +       '</td></tr>'

  // פוטר
  +       '<tr><td style="padding:20px 28px 28px;border-top:1px solid ' + line + ';">'
  +         '<div style="color:' + muted + ';font-size:12px;text-align:center;font-family:' + font + ';">נשלח אוטומטית מטופס יצירת הקשר באתר Xnet</div>'
  +       '</td></tr>'

  +     '</table>'
  +   '</td></tr>'
  + '</table>'
  + '</body></html>';
}

function fieldRow(label, value, indigo, ink, font) {
  return ''
  + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">'
  +   '<tr><td style="text-align:right;font-size:12px;font-weight:700;color:' + indigo + ';text-transform:uppercase;letter-spacing:.04em;font-family:' + font + ';padding-bottom:4px;">' + label + '</td></tr>'
  +   '<tr><td style="text-align:right;font-size:16px;font-weight:600;color:' + ink + ';font-family:' + font + ';">' + value + '</td></tr>'
  + '</table>';
}

function messageRow(message, indigo, ink, bg, font) {
  return ''
  + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:4px;">'
  +   '<tr><td style="text-align:right;font-size:12px;font-weight:700;color:' + indigo + ';text-transform:uppercase;letter-spacing:.04em;font-family:' + font + ';padding-bottom:8px;">הודעה</td></tr>'
  +   '<tr><td style="text-align:right;font-size:15px;line-height:1.7;color:' + ink + ';background:' + bg + ';border-radius:14px;padding:16px 18px;font-family:' + font + ';">' + message + '</td></tr>'
  + '</table>';
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
