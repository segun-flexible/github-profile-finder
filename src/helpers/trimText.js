const trimText = (str) => {
  const text = str.split(" ").join("-");
alert(text.slice(0,-1)) 
  return text;
};

export default trimText;
