function convertAscii(c, c_prev) {
  let code = c.charCodeAt();
  switch(c) {
    case ' ':
      code = 0x2D;
      break;
    case '-':
      code = 0x2010;
      break;
    case '\'':
      code = 0x2019;
      if (c_prev == ' ' || c_prev == '\0')
        code -= 1;
      break;
    case '"':
      code = 0x201D;
      if (c_prev == ' ' || c_prev == '\0')
        code -= 1;
      break;
    default:
      code += 0xFEE0;
  }
  return String.fromCharCode(code);
}

export default function convertChar(c, c_prev) {
  const asciiAlphaNum = /[a-zA-Z0-9]/;
  const nonControlAscii = /[ -~]/;
  
  if (asciiAlphaNum.test(c)) {
    return c;
  } else if (nonControlAscii.test(c)) {
    return convertAscii(c, c_prev);
  } else if (c.charCodeAt() < 0x00A0) {
    //Remove control characters
    return '';
  } else {
    return c;
  }
}
