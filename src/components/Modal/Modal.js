import React, { useState } from 'react';
import ModalView from './style/ModalView'

const Modal = ({component, position}) => {
  const [isClose, setIsClose] = useState(false);
  const handleClose = () => {
    setIsClose(state => !state)
  }
  if (isClose) return null
  return <ModalView>
    <div class="close" onClick={handleClose}>x</div>
    <div className="modal-content">
      it's modal
    </div>
  </ModalView>
}

export default Modal