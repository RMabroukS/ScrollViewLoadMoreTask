import ReactNative,{View} from 'react-native';
import I18n from 'react-native-i18n';
import en from './en';
import ar from './ar';
import RNRestart from 'react-native-restart';


export const isArabic=()=>{
if (getAppLanguage()=='en')
return true
else
return false
}

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;
// Define the supported translations
I18n.translations = {
    en,
    ar
};
// Is it a RTL language?
export const isRTL = function () {
    const currentLocale = I18n.currentLocale();
    return currentLocale === "en";
}
// Allow RTL alignment in RTL languages
ReactNative.I18nManager.allowRTL(false);

let AppLanguage = "en"
export const getAppLanguage = () => {
    return AppLanguage
}
export const setAppLanguage = async (lang,restart=true) => {
    //console.log("TAG","setapplang",lang)
    AppLanguage = lang
    if (lang == "en") {
        ReactNative.I18nManager.forceRTL(true);
    } else {
        ReactNative.I18nManager.forceRTL(false);
    }
    await ReactNative.AsyncStorage.setItem('language', lang)
    if(restart){
        RNRestart.Restart();
    }
   
}
// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    params = { locale: AppLanguage }
    return I18n.t(name, params);
};
// setAppLanguage('ar',true);
export default I18n;