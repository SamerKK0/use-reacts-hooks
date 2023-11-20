import Cookies from 'js-cookie';
declare const useCookie: (cookieName: string) => [string, (newValue: string, options?: Cookies.CookieAttributes) => void, () => void];
export default useCookie;
