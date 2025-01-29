import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
// init i18next
// for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: false, // *
        debug: __IS_DEV__,

    // interpolation: {
    //   escapeValue: false, // not needed for react as it escapes by default
    // }
    });

export default i18n;

// * язык, который следует использовать, если переводы на языке пользователя
// недоступны. Явная установка false не приведет к загрузке fallbackLng вообще(чанки-файлы с переводами-
// будут загружаться не несколько сразу а по одному)
