const fetch = require("node-fetch");

const getData = async url => {
  let res;
  await fetch(url, {
    method: "GET",
    headers: {
      authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE3Mjg3NjE5Nzd9.scvbbx_tnxNRoEi9-AQX623MJYWAdgx31SdtiRD851k"
    }
  })
    .then(data => data.json())
    .then(data => (res = data));
  return res;
};

module.exports = getData;
