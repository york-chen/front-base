import { createIntl, createIntlCache } from "react-intl";

const isEn =
  window.navigator.userAgent.includes("Language/en") ||
  window.navigator.userAgent.includes("Lang/en");
const _currentLang = isEn ? "en" : "zh";
const languages: Record<string, any> = {
  en: require.context("./en", false, /\.ts$/),
  zh: require.context("./zh", false, /\.ts$/),
};
const messages: Record<string, any> = {};
for (let language in languages) {
  let files = languages[language],
    tempJson = {};
  files.keys().forEach((key: string) => {
    Object.assign(tempJson, files(key).default);
  });
  messages[language] = tempJson;
}
export const getCurrentLang = () => _currentLang;
export const getCurrentMessages = () => messages[_currentLang];

const cache = createIntlCache();
//这个 intl 是暴露给非react组件用的，比如ts文件
const intl = createIntl(
  {
    locale: _currentLang,
    messages: getCurrentMessages(),
  },
  cache
);

export default intl;
