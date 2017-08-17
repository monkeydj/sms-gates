var Nexmo = require('nexmo');

var nexmo = new Nexmo({
  apiKey: '81298ea7',
  apiSecret: '36320ab446f3d5ec',
  debug: true
});

var from = 'EXE Test';
var to = '841665501483';
var text = 'Đang téting unicode, được k nhỉ?';

nexmo.message.sendSms(from, to, text, { type: "unicode" },
  function (err, resp) {
    if (err) throw err; else console.log(resp);
  });