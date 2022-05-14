import { State } from 'Store'
import { shareSocialOutline, thumbsUpOutline } from 'ionicons/icons'
import { FC, useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { isProduction } from '@/constants/common'
import { goToNextRound, setFinishedRounds } from '@/helpers/firebase'
import { useModal } from '@/helpers/hooks'
import ShareModal from '@/molecules/ShareModal'
import { getGroupNameOnce } from '@/stores/userInfo'
import dynamic from 'next/dynamic'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  {
    ssr: false,
  }
)
const IonButtons = dynamic(
  async () => await (await import('@ionic/react')).IonButtons,
  {
    ssr: false,
  }
)
const IonHeader = dynamic(
  async () => await (await import('@ionic/react')).IonHeader,
  {
    ssr: false,
  }
)
const IonIcon = dynamic(
  async () => await (await import('@ionic/react')).IonIcon,
  {
    ssr: false,
  }
)
const IonTitle = dynamic(
  async () => await (await import('@ionic/react')).IonTitle,
  {
    ssr: false,
  }
)
const IonToolbar = dynamic(
  async () => await (await import('@ionic/react')).IonToolbar,
  {
    ssr: false,
  }
)

const LOCATIONS = ['home', 'entry', 'draft'] as const

type PropTypes = {
  location: typeof LOCATIONS[number]
  groupIdFromPath?: string
}

const Header: FC<PropTypes> = ({ location, groupIdFromPath = '' }) => {
  const {
    userInfo: { groupId, groupName },
    draft: { round, finishedRound },
  } = useSelector((state: State) => state)

  const dispatch = useDispatch()

  const isHome = location === 'home'
  const isEntry = location === 'entry'
  const isDraft = location === 'draft'

  const [headerTitle, setHeaderTitle] = useState(
    isHome ? 'オンラインドラフト会議' : ''
  )
  const { setModalComponent, showModal } = useModal()

  useEffect(() => {
    if (!isHome) {
      dispatch(getGroupNameOnce({ groupId: groupIdFromPath }))
    }
  }, [])

  useEffect(() => {
    if (groupName) {
      if (isEntry) {
        setHeaderTitle(groupName)
      } else {
        setHeaderTitle(`${groupName}    [ROUND-${round}]`)
      }
    }
  }, [groupName, round])

  const debugGoBack = () => {
    goToNextRound({ groupId, nextRound: round - 1 })
    console.log(round)
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound.filter(
        r => r !== 0 && r !== round - 1
      ),
      finishedRound: 0,
    })
  }
  const showShareModal = () => {
    setModalComponent({ title: 'シェア', component: <ShareModal /> })
    showModal()
  }
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>{headerTitle}</IonTitle>
        {(isEntry || isDraft) && (
          <IonButtons slot="end" style={{ marginRight: 10 }}>
            {!isProduction && (
              <IonButton fill="solid" onClick={debugGoBack}>
                <IonIcon slot="start" icon={thumbsUpOutline} />
                {'DEBUG用-ROUND戻る'}
              </IonButton>
            )}
            <IonButton fill="solid" onClick={showShareModal}>
              <IonIcon slot="start" icon={shareSocialOutline} />
              シェア
            </IonButton>
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  )
}

export default Header
