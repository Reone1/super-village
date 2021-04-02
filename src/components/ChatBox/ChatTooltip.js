import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  left: ${props => props.x};
  top: ${props => props.y};
`;

export default function ChatTooltip({ user }) {
  const [isVisible, setIsVisible] = useState({ state: false, timeOutID: null });

  useEffect(() => {
    setIsVisible(state => {
      if (state.timeOutID) {
        clearTimeout(state.timeOutID);
      }
      return {
        ...state,
        state: true,
        timeOutID: setTimeout(() => {
          setIsVisible({
            state: false,
            timeOutID: null,
          });
        }, 3000),
      };
    });
  }, [user.message]);

  const [height, setHeight] = useState(0);

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  if (!isVisible.state) return '';
  return (
    <Div
      ref={measuredRef}
      className="chatTooltip"
      x={user.position.x - 60 + 'px'}
      y={user.position.y - height + 'px'}
    >
      <div className="chatTooltipText">{user.message}</div>
      <Div className="triangleToolTip" x={70 + 'px'} y={height + 'px'} />
    </Div>
  );
}
