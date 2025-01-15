const base64regex =
  /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

export function Base64Encript(text: string) {
  if (!base64regex.test(text)) {
    return Buffer.from(text).toString('base64');
  } else {
    return text;
  }
}

export function Base64UnEncript(text: string) {
  if (base64regex.test(text)) {
    return Buffer.from(text, 'base64').toString('ascii');
  } else {
    return text;
  }
}
