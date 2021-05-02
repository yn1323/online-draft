import { useSelector } from 'react-redux'
import Modal from 'react-modal'

import { useModal } from 'src/helper'

import { State } from 'Store'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
  },
}

const ModalTemplate: React.FC = () => {
  const {
    component: {
      modal: { component, show, title },
    },
  } = useSelector((state: State) => state)
  const { hideModal } = useModal()

  return (
    <Modal
      isOpen={show}
      onRequestClose={() => hideModal()}
      shouldCloseOnOverlayClick={false}
      ariaHideApp={false}
      style={customStyles}
    >
      <div className="title">{title}</div>
      <div className="component">{component}</div>
    </Modal>
  )
}
export default ModalTemplate
