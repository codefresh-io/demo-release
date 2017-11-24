describe('simple e2e', ()=>{
  it('check availability', (done)=>{
    const request = require('superagent');
    request.get(process.env.SERVICE_URL|| "http://release1-demoservice1:80")
    .end(done);
  })
})
