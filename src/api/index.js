import { post, get } from './ajax';

// 营养师说接口前缀
// const baseUrl = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg';

// 获取营养师说列表
export const getSayList = (data) => get(`${baseUrl}/subject/findUhomeSubjectsList`);