import { host, options, checkTokens } from "./authAction";
import store from "./store";

export function GetSalons() {
  //Получаем список салонов
  return async (dispatch) => {
    try {
      await dispatch({ type: "lOAD_SALONS" });
      const res = await fetch(
        host("salon.php"),
        options({
          getSalons: true,
        })
      );
      const data = await res.json();
      await dispatch({
        type: "GET_SALONS",
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: "ERROR",
        payload: "Ошибка сервера! Повторите попытку позже",
      });
    }
  };
}


export function GetMasters() {
  return async (dispatch) => {
    try {
      await dispatch({ type: "lOAD_MASTERS" });
      const res = await fetch(
        host("master.php"),
        options({ salonId: 1, getMasters: true })
      );
      const data = await res.json();
      await dispatch({
        type: "GET_MASTERS",
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: "ERROR",
        payload: "Ошибка сервера! Повторите попытку позже",
      });
    }
  };
}

export function GetFavoriteMasters() {
  //Получаем список избранных мастеров
  return async (dispatch) => {

    await dispatch(checkTokens());
    let auth = store.getState().GetAuth.auth;
    let accessToken = store.getState().GetAuth.accessToken;

    if (auth) {
      await dispatch({
        type: "lOAD_FAVORITE_MASTERS",
      });

      const res = await fetch(
        host("master.php"),
        options({ accessToken, favoriteMasters: true })
      );
      const data = await res.json();
      await dispatch({
        type: "GET_FAVORITE_MASTERS",
        payload: data,
      });
    } else {
      await dispatch({
        type: "ERROR",
        payload: "Ошибка авторизации!",
      });
      console.log('Ошибка авторизации!')
    }
  };
}

export function GetFavoriteSalons() {
  //Получаем список избранных салонов
  return async (dispatch) => {
    await dispatch(checkTokens());
    let auth = store.getState().GetAuth.auth;
    let accessToken = store.getState().GetAuth.accessToken;

    if (auth) {
      await dispatch({
        type: "lOAD_FAVORITE_SALONS"
      });
      const res = await fetch(
        host("salon.php"),
        options({ accessToken, favoriteSalons: true })
      );
      const data = await res.json();
      await dispatch({
        type: "GET_FAVORITE_SALONS",
        payload: data,
      });
    } else {
      await dispatch({
        type: "ERROR",
        payload: "Ошибка авторизации!",
      });
    }
  };
}
