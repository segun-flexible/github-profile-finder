import trimText from "./trimText";

const searchUser = (str) => {
alert(`https://api.github.com/users/${trimText(str)}`.trim()) 
  const result = fetch(`https://api.github.com/users/${trimText(str)}`)
    .then((res) => (res.status < 299 ? res.json() : res.statusText))
    .catch((err) => err.message);

  return result;
};

export default searchUser;

//Here i trim the string and make the search
