const urlRe = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

export const isUrl = value => {
  return urlRe.test(value);
}

export const parseUrlInText = text => {
  return text.replace(urlRe, (url) =>{
    return `<a href='${/^https?/.test(url) ? url : `//${url}`}' target='_blank'>${url}</a>`;
  });
}