import axios from 'axios';
import { Toast } from 'antd-mobile';
import sha256 from 'crypto-js/sha256';

// http response 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response) {
      switch (error.response.status) {
      case 400:
        error.message = '请求错误(400)';
        break;
      case 401:
        error.message = '未授权，请重新登录(401)';
        break;
      case 403: error.message = '拒绝访问(403)';
        break;
      case 404: error.message = '请求出错(404)';
        break;
      case 408: error.message = '请求超时(408)';
        break;
      case 500: error.message = '服务器错误(500)';
        break;
      case 501: error.message = '服务未实现(501)';
        break;
      case 502: error.message = '网络错误(502)';
        break;
      case 503: error.message = '服务不可用(503)';
        break;
      case 504: error.message = '网络超时(504)';
        break;
      case 505: error.message = 'HTTP版本不受支持(505)';
        break;
      default:
        error.message = `连接出错(${error.response.status})!`;
      }
    } else {
      error.message = '连接服务器失败!';
    }
    // setError({ msg: error.message });
    setError({ msg: '请您检查网络' });

    return Promise.reject(error); // 返回接口返回的错误信息
  },
);

// Toast 弹框
function setError(params) {
  // window.console.log(params.msg);
  Toast.offline(params.msg, 1);
}

export const post = (name = '', data) => {
  const url = `${name}`;

  // console.log('data', data);
  return axios({
    method: 'POST',
    url,
    data,
  });
};

export const get = (name = '') => {
  const url = `${name}`;

  return axios({
    method: 'GET',
    url,
  });
};

export const checkPost = (url = '', Authorization, data) => {
  // 时间戳
  let timestamp = Date.parse(new Date()).toString().substr(0, 10);
  const sign = toGenerateTheSignature(url, data, timestamp);

  // console.log('sign', sign);

  return axios({
    method: 'POST',
    url,
    data,
    headers: {
      Authorization: Authorization,
      timestamp: timestamp,
      sign: sha256(sign).toString(),
    }
  });

};

export const checkGet = (url = '', Authorization) => {
  // 时间戳
  let timestamp = Date.parse(new Date()).toString().substr(0, 10);
  const sign = toGenerateTheSignature(url, null ,timestamp);

  // console.log('sign', sign);

  return axios({
    method: 'GET',
    url,
    headers: {
      Authorization: Authorization,
      timestamp: timestamp,
      sign: sha256(sign).toString(),
    }
  });

};

// 生成签名
function toGenerateTheSignature(url, data, timestamp) {
  let urls = '/recipeApi/v1' + url.split('/recipeApi/v1')[1];
  urls = urls.replace('?','');
  // console.log('url',url,'urls',urls);
  let dataInfo = !data || data === null ? '' : JSON.stringify(data);
  // window.console.log('urls',urls,'dataInfo',dataInfo,'appId',appId,'appSecret',appSecret,'timestamp',timestamp);
  return urls + dataInfo + appId + appSecret + timestamp;
}
