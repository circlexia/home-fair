export function strlen(str){//判断字符串长度
  var len = 0;
  if (!str) {
    return len;
  }
  for (var i=0; i<str.length; i++) { 
    var c = str.charCodeAt(i); 
    //单字节加1
    if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
      len++; 
    }else { 
      len+=2; 
    } 
  } 
  return len;
}