import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import i18nHttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Axios from 'axios';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(i18nHttpBackend)
  .init({
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    lng: 'en',
    fallbackLng: 'en',
    react: {
      useSuspense: false
    },
    backend: {
      loadPath: 'http://localhost:4000/public/translations/{{lng}}.json',
      parse: (data) => {
        return data;
      },
      request: (options, url, payload, callback) => {
        Axios.get(url)
          .then((res) => {
            console.log(res.data);
            callback(null, res);
          })
          .catch((err) => {
            console.log(err);
            callback(err, null);
          });
      },
    },
    // resources: {
    //   en: {
    //     translation: {
    //       // here we will place our translations...
    //       description: {
    //         part1: 'Edit <1>src/App.js</1> and save to reload.',
    //         part2: 'Learn React'
    //       },
    //       counter_one: 'Changed language just once',
    //       counter_other: 'Changed language already {{count}} times'
    //     }
    //   },
    //   de: {
    //     translation: {
    //       description: {
    //         part1: 'Ändere <1>src/App.js</1> und speichere um neu zu laden.',
    //         part2: 'Lerne React'
    //       },
    //       counter_one: 'Die Sprache wurde erst ein mal gewechselt',
    //       counter_other: 'Die Sprache wurde {{count}} mal gewechselt'
    //     }
    //   }
    // }
  });

export default i18n;