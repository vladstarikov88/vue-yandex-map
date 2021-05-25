import Vue from 'vue'
import YmapPlugin from 'st-yandex-maps'

const settings = { 
    lang: 'ru_RU'
}

Vue.use(YmapPlugin, settings);