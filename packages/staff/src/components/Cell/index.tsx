import imgRightArrow from '@/assets/images/rightArrow.svg'
import CellGroup from './CellGroup'
import styles from './index.less'

type CellProps = {
    icon: string
    label: string
}

function Cell(props: CellProps) {
    const { icon, label } = props
    return <div className={styles.cell}>
        <div className={styles.cellName}>
            <img className={styles.icon} src={icon} alt="" />
            <span className={`${styles.label} ellipsis`}>{label}</span>
        </div>
        <img className={styles.rightArrow} src={imgRightArrow} alt="" />
    </div>
}
Cell.Group = CellGroup
export default Cell