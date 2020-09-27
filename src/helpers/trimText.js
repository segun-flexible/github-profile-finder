const trimText = (str) => {
  const text = str.split(" ").join(" - ");
  return text;
};

export default trimText;
