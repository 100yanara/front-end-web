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
      tour: 'Tour',
      createTrip: 'Create Trip',
      calendar: 'Calendar',
      search: 'Search',
    },
  },
  ko: {
    translation: {
      currency: '달러',
      language: '한국어',
      signin: '로그인',
      signup: '회원 가입',
      tour: '데이 투어',
      createTrip: '여행 만들기',
      calendar: '여행 달력',
      search: '검색',
    },
  },
  ru: {
    translation: {
      currency: 'Доллар',
      language: 'Русский',
      signin: 'Вход',
      signup: 'Регистрация',
      tour: 'деневный тур',
      createTrip: 'создавать тур',
      calendar: 'календарь',
      search: 'искать',
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
