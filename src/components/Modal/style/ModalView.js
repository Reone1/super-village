import style, {keyframes} from 'styled-components'
const ModalAnimation = keyframes`
  0% {
    transform: scale(0)
  }
  50% {
    transform: scale(.5)
  }
  100% {
    transform: scale(1)
  }
`
const ModalView = style.div`
  background-color: rgba(0,0,0,.3);
  position:absolute;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  animation: ${ModalAnimation} 1s linear alternate;

  & .modal-content {
    min-width:50%;
    max-width:750px;
    color:red;
    background-color:white;
    height: 80%;
    border-radius: 15px 15px;
    padding:15px;
    h2 {
      color:blue
    }
  }
`

export default ModalView