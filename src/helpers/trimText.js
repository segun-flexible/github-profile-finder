const trimText = (str) => {
  const text = str.split(" ").join("-");

  return text.slice(-1) === '-'? text.slice(0,-1) :text;
};

export default trimText;
