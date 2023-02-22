const https = require('node:https');

const postData = JSON.stringify({
  "mailerState": {
    "name": "システムからのテスト送信です。",
    "email": "test@gmailcom",
    "message": "毎日0:00に行われるテスト送信です。問い合わせフォームが正しく機能しています。ホームページ作成者：福田光希",
    "type":"--項目を選択してください--",
    "service":"---ご希望のサービスを選択してください---",
    "tel":"00-0000-0000",
  }
});

const options = {
  hostname: 'sakura-eng.net/api',
  // port: 80,
  // path: '/upload',
  method: 'POST',
  // protocol:"https:",
  headers: {
    'Content-Type': 'application/json',
    // 'Content-Length': Buffer.byteLength(postData)
  }

};

const req = https.request(options);

req.write(postData);
req.end();