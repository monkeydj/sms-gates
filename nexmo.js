var Nexmo = require('nexmo');

var nexmo = new Nexmo({
  apiKey: '81298ea7',
  apiSecret: '36320ab446f3d5ec',
});

var from = 'EXE Test';
var to = '841665501483';
var text = 'A text message sent using the Nexmo SMS API, from EXE.';

nexmo.message.sendSms(from, to, text);