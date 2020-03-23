import {request} from "./request";

export function food(showapi_appid,showapi_sign,keyword) {
  return request({
    url:'http://route.showapi.com/268-1',
    params:{
      showapi_appid,
      showapi_sign,
      keyword,
    }
  })
}