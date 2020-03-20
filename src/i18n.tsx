import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      currency: 'Dollar',
      language: 'English',
      signin: 'Sign in',
      signup: 'Sign up',
      Tour: 'Tour',
      'Create Trip': 'Create Trip',
    },
  },
  ko: {
    translation: {
      currency: '달러',
      language: '한국어',
      signin: '로그인',
      signup: '회원가입',
      Tour: '데이투어',
      'Create Trip': '여행 만들기',
    },
  },
  ru: {
    translation: {
      currency: 'Доллар',
      language: 'Русский',
      signin: 'Вход',
      signup: 'Регистрация',
      Tour: 'деневный тур',
      'Create Trip': 'создавать тур',
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
