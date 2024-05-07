import {DemoComponent} from '@hcy-frontend/components'
import NavigationTabBar from '@/components/NavigationTabBar'
import styles from './index.less'

export default () => {
    return <div className={styles.page}>
        我是首页
        <DemoComponent/>
        <NavigationTabBar/>
    </div>
}