import store from '../store'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const locales = {
    'ru-RU': ru,
    'en-US': en
}

export default function localizeFilter(key){
    const locale = store.getters.info.locale
    try {
        return locales[locale][key]
    } catch(e) {
        return locales['ru-RU'][key]
    }
}