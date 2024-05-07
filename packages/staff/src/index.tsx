import { createRoot } from 'react-dom/client'
import { IntlProvider } from "react-intl";
import { getCurrentLang, getCurrentMessages } from '@/locals'
import './global.css'
import {dataflowProvider} from '@/hooks/use-model/runtime'
import RouteConfig from './routes'
import hacks from 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'
import viewportUnitsBuggyfill from 'viewport-units-buggyfill'
import Vconsole from 'vconsole'
import { ConfigProvider } from 'react-vant'
import enUS from 'react-vant/es/locale/lang/en-US'
import zhCN from 'react-vant/es/locale/lang/zh-CN'
import 'dayjs/locale/en'
import 'dayjs/locale/zh'


new Vconsole()
//解决某些浏览器不支持 vw单位的一个hack操作,
//主要是postcss插件postcss-viewport-units会在css类里面添加content属性，
//然后buggyfill会操作这个content属性
viewportUnitsBuggyfill.init({
    hacks: hacks
})

createRoot(document.querySelector('#app')!).render(
    <IntlProvider locale={getCurrentLang()} messages={getCurrentMessages()}>
        <ConfigProvider locale={getCurrentLang() === 'en' ? enUS : zhCN}>
            {dataflowProvider(<RouteConfig />,{})}
        </ConfigProvider>
    </IntlProvider>
)