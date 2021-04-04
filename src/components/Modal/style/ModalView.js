import style, {keyframes} from 'styled-components'
const ModalAnimation = (x,y) => keyframes`
  0% {
    transform: scaleY(.1) scaleX(0) 
  }
  30%{
    transform:  scaleY(.1) scaleX(1)
  }
  50% {
    transform:  scaleY(.5)
  }
  100% {
    transform: scaleY(1)
`
const ModalContentAnimation = (x,y) => keyframes`
  0% {
    transform: scale(0)
  }
  50% {
    transform:  scale(.5)
  }
  100% {
    transform: scale(1)
`
const ModalView = style.div`
  background-color: rgba(0,0,0,.3);
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
  z-index:5;
  animation: ${props => ModalAnimation(props.x, props.y)} 1s linear alternate;

  & .modal-content {
    z-index:6;
    min-width:50%;
    max-width:750px;
    overflow:hidden;
    background-color:white;
    border-radius: 15px 15px;
    min-height:200px
    padding:7px;
    h2 {
      color:blue
    }
    animation: ${props => ModalContentAnimation(props.x, props.y)} 1s linear;
  }
  & .close {
    position:absolute;
    top:0;
    margin:10px;
    right:0;
    cursor:pointer
  }
`

export default ModalView