import { IonItem, IonLabel, IonList } from '@ionic/react'

const DraftHistoryList = () => {
  const list = [
    { name: 'Pokémon Yellow', draftId: '' },
    { name: 'Mega Man X', draftId: '' },
    { name: 'The Legend of Zelda', draftId: '' },
    { name: 'Pac-Man', draftId: '' },
    { name: 'Super Mario World', draftId: '' },
  ]
  return (
    <IonList className="width-100">
      {list.map(({ name, draftId }, i) => (
        <IonItem button key={i} href={`/draft/${draftId}`}>
          <IonLabel>{name}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default DraftHistoryList
