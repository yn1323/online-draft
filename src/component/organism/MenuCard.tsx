import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { IonButton, IonIcon } from '@ionic/react'
import {
  colorWandOutline,
  download,
  downloadOutline,
  openOutline,
  thumbsUpOutline,
} from 'ionicons/icons'
import {
  getDuplicateItemInRound,
  goToNextRound,
  isEveryOneEntered,
  useToast,
  useCSV,
} from 'src/helper'
import { CSVLink } from 'react-csv'
import { State } from 'Store'
import { changeTableMode } from 'src/store/component'

const MenuCard = () => {
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, selections, finishedRound },
    component: { tableMode },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { setToast, showToast } = useToast()
  const csvData = useCSV()

  const showResult = () => {
    const { hasDuplicate } = getDuplicateItemInRound(selections, '', round - 1)
    if (hasDuplicate) {
      setToast({
        message: t('重複しているデータあります。データを修正してください。'),
        color: 'danger',
      })
      showToast()
      return false
    }
    const everyOneEntered = isEveryOneEntered(selections, users, round)
    if (!everyOneEntered) {
      setToast({
        message: t(
          '入力が完了していないユーザーがいます。入力が完了するまでしばらくお待ち下さい。'
        ),
        color: 'danger',
      })
      showToast()
      return false
    }

    goToNextRound({ groupId, nextRound: round + 1 })
  }
  const switchTable = () => {
    dispatch(changeTableMode({ tableMode: tableMode === 0 ? 1 : 0 }))
  }

  return (
    <div className="height-100 align-centerVH menu">
      <IonButton fill="outline" onClick={switchTable}>
        <IonIcon slot="start" icon-only icon={colorWandOutline} />
        {t('表示切替')}
      </IonButton>

      <CSVLink data={csvData} target="_blank" filename={`${groupName}.csv`}>
        <IonButton fill="outline">
          <IonIcon
            slot="start"
            icon-only
            icon={downloadOutline}
            size="default"
          />
          {t('CSV出力')}
        </IonButton>
      </CSVLink>
      <IonButton fill="solid" onClick={showResult}>
        <IonIcon slot="start" icon={thumbsUpOutline} />
        {t('結果発表')}
      </IonButton>
    </div>
  )
}

export default MenuCard
