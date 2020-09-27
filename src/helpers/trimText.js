const trimText = (str) => {
  const text = str.split(" ").join(" - ");
alert(text.substr(-1)) 
  return text;
};

export default trimText;
