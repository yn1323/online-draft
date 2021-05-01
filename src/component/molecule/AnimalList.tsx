import { IonCol, IonGrid, IonRow } from '@ionic/react'
import { assetImages } from 'src/constant'

interface Props {
  callback: (index: string) => void
  selected: string
}
const AnimalList = ({ callback, selected }: Props) => {
  const images = assetImages

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
              <img src={path} />
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
