import countryCode from "./country-code";

const getFlag = (name) => {
  const regex = new RegExp(`^(${name})`, "ig");
  const theflag = countryCode.find((c) => regex.test(c.name));

  return theflag && theflag.code.toLocaleLowerCase();
};

export default getFlag;
