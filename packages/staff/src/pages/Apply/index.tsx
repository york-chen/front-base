import Cell from '@/components/Cell'
import imgBuKa from '@/assets/images/buka.svg'
import imgLeave from '@/assets/images/leave.svg'
import imgOutOfOffice from '@/assets/images/out_of_office.svg'
import imgBusinessTrip from '@/assets/images/business_trip.svg'
import imgRequestRecord from '@/assets/images/request_records.svg'
import styles from './index.less'
import { useEffect } from 'react'
import {useIntl} from 'react-intl'

export default () => {
    const {formatMessage} = useIntl()
    useEffect(()=>{
        document.title = formatMessage({id:'page.apply.title'})
    },[])
    return <div className={styles.page}>
        <Cell.Group>
            <Cell label={formatMessage({id:'page.apply.replaceCard'})} icon={imgBuKa} />
            <Cell label={formatMessage({id:'page.apply.askForLeave'})} icon={imgLeave} />
            <Cell label={formatMessage({id:'page.apply.goOut'})} icon={imgOutOfOffice} />
            <Cell label={formatMessage({id:'page.apply.errand'})} icon={imgBusinessTrip} />
        </Cell.Group>
        <Cell.Group>
            <Cell label={formatMessage({id:'page.apply.applicationRecord'})} icon={imgRequestRecord} />
        </Cell.Group>
    </div>
}