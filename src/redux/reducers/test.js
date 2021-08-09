// let data = { access: access, refresh: refresh };
export function options(data) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  };
}

export function Request(url, options) {
  fetch(url, options)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      if (json.request === "ValidAccessToken") {
        return json.request;
      } else if (json.request === "TokenTimeEnded") {
        fetch(url, options)
          .then((response) => response.json())
          .then((json) => {
            if (json.request === "ValidAccessToken") {
              console.log(json);
            } else if (json.request === "TokenTimeEnded") {
              console.log(json);
            } else if (json.request === "InvalidAccessToken") {
              console.log(json);
            }
          });
      } else if (json.request === "InvalidAccessToken") {
        return (dispatch) => {
          dispatch({
            type: "EXIT",
          });
        };
      }
    });
}

function refreshToken() {
  fetch("http://u90480.test-handyhost.ru/test.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({ refreshToken: "a213" }),
  })
    .then((response) => response.json())
    .then((json) => {
      if (json.request === "success") {
        //1.Очисть localStorage
        //2. Добавить новые токены в LocalStorage
      } else {
        return (dispatch) => {
          dispatch({
            type: "EXIT",
          });
        };
      }
    });
}
