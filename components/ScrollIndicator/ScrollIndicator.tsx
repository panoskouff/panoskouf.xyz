import { Mask, Transform } from '#/atoms';
import { css } from '#/styled-system/css';
import s from './ScrollIndicator.module.css';

type Props = {
  sideText?: string;
};

export const ScrollIndicator: React.FC<Props> = ({ sideText = 'scroll' }) => (
  <Mask w={46} h={105}>
    <div className={s.line}></div>
    {/* @todo use Text instead css ?*/}
    <Transform
      left={46}
      transform='perspective(0px) rotate(90deg)'
      transformOrigin='0% 0%'
      css={{ fontWeight: 700, textTransform: 'uppercase' }}
    >
      {sideText}
    </Transform>
  </Mask>
);

/*
export const ScrollIndicator: React.FC<Props> = ({ sideText = 'scroll' }) => (
  <div className={s.container}>
    <div className={s.line}></div>
    <div className={s.sideText}>{sideText}</div>
  </div>
);
*/
