import React from 'react'
import styles from './index.less'

type CellGroupProps = {
    children?:React.ReactElement|React.ReactElement[]
}
export default (props:CellGroupProps)=>{
    return <div className={styles.cellGroup}>
        {props.children}
    </div>
}