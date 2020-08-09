const secret = "GoogleBot123";
const http = require('http');
const crypto = require('crypto')
const {exec} = require('child_process')
const repo = "~/GoogleBot/";



http.createServer((req, res) => {
    req.on('data', async chunk => {
      const signature = `sha1=${crypto.createHmac('sha1', secret).update(chunk).digest('hex')}`;
 
      const isAllowed = req.headers['x-hub-signature'] === signature;
 
      const body = JSON.parse(chunk);
 
      const isMaster = body?.ref === 'refs/heads/master';
 
      if (isAllowed && isMaster) {
        try {
        await exec('cd ' + repo + ' && git pull')
        await exec('pm2 restart index')
        } catch (err) {
        console.log(err)
         }
      }
    });
 
    res.end();
  }).listen(8080);
