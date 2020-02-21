import flyio from '../utils/request';

// 登陆接口
export function login(code): Promise<any>{
  return flyio.post('/user/code2session', {code});
}

// 添加面试
export function addSign(params){
  return flyio.post('/sign', params);
}
