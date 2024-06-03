import { ExistHelper } from "./exist.helper";

export const CookieHelper = {
  getCookie: (name: string): string | undefined => {
    const decodedCookies = decodeURIComponent(document.cookie);
    const splitedCookie = decodedCookies.split(";").map((it) => it.trim());
    const foundCookie = splitedCookie.find((it) => {
      return it.startsWith(`${name}=`);
    });
    if (foundCookie) {
      return foundCookie.substring(name.length + 1);
    }
    return undefined;
  },

  setCookie: (name: string, value: string, hours = 1): void => {
    let expires = "";
    if (hours) {
      const date = new Date();
      date.setTime(date.getTime() + hours * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;
  },

  checkCookie: (name: string): boolean => {
    const cookie = CookieHelper.getCookie(name);
    return ExistHelper.isNotNullorUndefined(cookie);
  },

  deleteCookie: (name: string): void => {
    if (CookieHelper.checkCookie(name)) {
      CookieHelper.setCookie(name, "", -1);
    }
  },
};
