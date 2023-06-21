import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
.use(initReactI18next)
.init({
    resources: {
        en: {
            translation: {
                welcome: 'Welcome',
                about: 'About',
                login : 'Login'
            },
        },
        fr: {
            translation: {
                welcome: 'Bienvenue',
                about: 'À propos',
                login : 'Se connecter'
            },
        },
    },
    lng: 'en', // langue par défaut
    fallbackLng: 'en', // langue de secours en cas de traduction manquante
    interpolation: {
        escapeValue: false, // ne pas échapper les caractères HTML
    },
});

export default i18n;
