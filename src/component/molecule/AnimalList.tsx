import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { assetImages } from 'src/constant'

interface Props {
  callback: (index: string) => void
  selected: string
}
const AnimalList = ({ callback, selected }: Props) => {
  // 自動応答用メッセージアイコンを除く
  const images = assetImages.filter(({ index }) => index !== '99')

  return (
    <IonGrid>
      <IonRow>
        {images.map(({ index, path }, key) => (
          <IonCol
            key={key}
            size="2"
            className={`cursor-pointer align-centerVH ${
              selected === index ? 'is-selected' : ''
            }`}
            onClick={() => callback(index)}
          >
            <img src={path} />
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
  )
}

export default AnimalList
