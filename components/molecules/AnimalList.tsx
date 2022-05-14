import { State } from 'Store'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { assetImages } from '@/constants/common'

const IonCol = dynamic(
  async () => await (await import('@ionic/react')).IonCol,
  {
    ssr: false,
  }
)
const IonGrid = dynamic(
  async () => await (await import('@ionic/react')).IonGrid,
  {
    ssr: false,
  }
)
const IonRow = dynamic(
  async () => await (await import('@ionic/react')).IonRow,
  {
    ssr: false,
  }
)

interface Props {
  callback: (index: string) => void
  selected: string
}
const AnimalList = ({ callback, selected }: Props) => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  const otherUsersAvatars = users.reduce((acc: string[], cur: any) => {
    const avatar = cur.avatarIndex
    return [...acc, avatar]
  }, [])
  // 自動応答用メッセージアイコンを除く
  const excludeAvatarIndexes = [...otherUsersAvatars, '99']
  const images = assetImages.filter(
    ({ index }) => !excludeAvatarIndexes.includes(index)
  )

  return (
    <IonGrid>
      <IonRow>
        {images.map(({ index, path }, key) =>
          index !== '99' ? (
            <IonCol
              key={key}
              size="2"
              className={`cursor-pointer align-centerVH ${
                selected === index ? 'is-selected' : ''
              }`}
              onClick={() => callback(index)}
            >
              <Image src={path} alt="Picture of the author" />
            </IonCol>
          ) : (
            <div key={key}></div>
          )
        )}
      </IonRow>
    </IonGrid>
  )
}

export default AnimalList
