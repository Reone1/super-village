import React, { useState } from 'react';
import ModalView from './style/ModalView'

const Modal = ({component, position}) => {
  const [isClose, setIsClose] = useState(false);
  const {x,y} = position
  const handleClose = (e) => {
    setIsClose(state => !state)
  }
  if (isClose) return null
  return <ModalView x={x} y={y} >
    <div class="close" onClick={handleClose}>x</div>
    <div className="modal-content">
      {component}
    </div>
  </ModalView>
}

export default Modal