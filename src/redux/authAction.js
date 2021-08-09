import AsyncStorage from "@react-native-community/async-storage";

export const host = (module) => {
  return `http://u90480.test-handyhost.ru/${module}`;
};


export const options = (data) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify(data)
  };
};


export function createTokens(access, refresh) {
  //Создание ТОКЕНОВ
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("accessToken", access);
      await AsyncStorage.setItem("refreshToken", refresh);
      await dispatch({
        type: "AUTH",
        payload: {
          access,
          refresh,
        },
      });
    } catch (e) {
      console.log("Ошибка при создании токена");
    }
  };
}

export function removeTokens() {
  //Удаление ТОКЕНОВ
  return async (dispatch) => {
    try {
      await AsyncStorage.removeItem("accessToken");
      await AsyncStorage.removeItem("refreshToken");
      dispatch({
        type: "EXIT",
      });
    } catch (e) {
      console.log("Ошибка при удалении токена");
    }
  };
}


export function refTk(rfToken) {
  //Токен для восстановления доступа
  return async (dispatch) => {
    try {
      const res = await fetch(host("auth.php"), options(rfToken));
      const data = res.json();
      if (data.request === "refreshTokenInvalid" || "refreshTokenExpiresEnded") {
        await dispatch(removeTokens());
      } else {
        await dispatch(createTokens(data.access, data.refresh));
      }
    }catch (e){
      await dispatch({
        type:'ERROR',
        payload:'Неизвестная ошибка!'
      })
    }

  };
}


export function checkTokens() {
  //Получение и валидация ТОКЕНА
  return async (dispatch) => {
    try {
      const accessToken = await AsyncStorage.getItem("accessToken");
      const refreshToken = await AsyncStorage.getItem("refreshToken");
      if (accessToken !== null && refreshToken !== null) {
        const res = await fetch(host("auth.php"), options({ accessToken }));
        const data = await res.json();

        if (data.request === "invalidAccessToken") {
          await dispatch(removeTokens());
        } else if (data.request === "accessTokenExpiresEnded") {
          await dispatch(refTk(refreshToken));
        } else if (data.request === "success") {
          await dispatch({
            type: "AUTH",
            payload: {
              access: data.access,
              refresh: data.refresh,
            },
          });
        }
      } else {
      }
    } catch (e) {
      await dispatch({
        type:'ERROR',
        payload:'Неизвестная ошибка!'
      })
    }
  };
}

export function Auth() {
  //Авторизация пользователя
  return async (dispatch) => {
    try {
      const res = await fetch(host("auth.php"), options());
      const data = await res.json();

      if (data.request === "success") {
        await dispatch(createTokens(data.access, data.refresh));
      } else if (data.request === "incorrectNumber") {
        await dispatch({
          type: "ERROR",
          payload: "Некорректный номер!",
        });
      } else if (data.request === "incorrectCheckCode") {
        await dispatch({
          type: "ERROR",
          payload: "Неверный код!",
        });
      }
    }catch (e){
      await dispatch({
        type: "ERROR",
        payload: "Сервер не отвечает!",
      });
    }
  };
}

export function Exit() {
  return async (dispatch)=> {
    await dispatch({
      type:"EXIT"
    })
  }
}

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};
