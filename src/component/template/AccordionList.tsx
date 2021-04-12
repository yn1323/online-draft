import React, { useEffect, useRef, useState } from 'react'
import {
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  createAnimation,
} from '@ionic/react'
import { chevronDownOutline } from 'ionicons/icons'
import 'src/asset/scss/component/AccordionList.scss'

interface Component {
  component: any
  label: string
  icon?: any
}

interface Props {
  componentList: Component[]
}

const AccordionList = ({ componentList }: Props) => {
  const arrowAnimation: any[] = componentList.map(() =>
    useRef<HTMLDivElement>(null)
  )

  const [isOpen, setIsOpen] = useState(componentList.map(() => false))

  const toggleOpen = (key: number) => {
    const localIsOpen = { ...isOpen }
    localIsOpen[key] = !localIsOpen[key]
    if (localIsOpen[key] === true) {
      rotate(arrowAnimation[key])
    } else {
      rotateReverse(arrowAnimation[key])
    }
    setIsOpen(localIsOpen)
  }

  const accordionAreaClass = (key: number) =>
    isOpen[key] ? 'accordionArea is-open' : 'accordionArea'

  const rotate = (ref: any) => {
    if (ref.current !== null) {
      const animation = createAnimation()
        .addElement(ref.current)
        .duration(100)
        .fromTo('transform', 'rotate(0)', 'rotate(180deg)')
        .easing('ease-out')

      animation.play()
    }
  }

  const rotateReverse = (ref: any) => {
    if (ref.current !== null) {
      const animation = createAnimation()
        .addElement(ref.current)
        .duration(100)
        .fromTo('transform', 'rotate(180deg)', 'rotate(0)')
        .easing('ease-out')

      animation.play()
    }
  }

  return (
    <IonList>
      {componentList.map(({ component, label, icon }, key) => (
        <React.Fragment key={key}>
          <IonItem button onClick={() => toggleOpen(key)}>
            <IonIcon className={icon ? 'icon' : ''} icon={icon} />
            <IonLabel>
              <h3>{label}</h3>
            </IonLabel>
            <IonIcon icon={chevronDownOutline} ref={arrowAnimation[key]} />
          </IonItem>
          <div className={accordionAreaClass(key)}>
            <div className="inner">{component}</div>
          </div>
        </React.Fragment>
      ))}
    </IonList>
  )
}

export default AccordionList
