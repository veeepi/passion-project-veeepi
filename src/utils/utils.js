const nowFormatted = () => {
  const now = new Date();
  // const nowFormatted = `${monthNames[now.getMonth()]}-${now.getDate()}-${now.getFullYear()}T${now.getHours()}:${now.getMinutes()}`;
  return `${now.getFullYear()}-${
    now.getMonth() > 10 ? now.getMonth() + 1 : "0" + (now.getMonth() + 1)
  }-${now.getDate() > 9 ? now.getDate() : "0" + now.getDate()}T${
    now.getHours() > 9 ? now.getHours() : "0" + now.getHours()
  }:${now.getMinutes() > 9 ? now.getMinutes() : "0" + now.getMinutes()}`;
};
export { nowFormatted };
