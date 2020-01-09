import JsonP from 'jsonp';
export default class Axios {
  static jsonp(options){
      return new Promise((resolve,reject)=>{
          JsonP(options.url,{
              param:'callback',
              headers: {
                referer: 'https://c.y.qq.com/',
                host: 'c.y.qq.com'
              },
          },function(err,res){
            console.log(res,'res');
              if(res.status === 'success') {
                  resolve(res)
              } else {
                  reject(err)
              }
          })
      })
  }
}
