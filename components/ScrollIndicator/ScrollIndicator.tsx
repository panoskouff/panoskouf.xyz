import s from './ScrollIndicator.module.css';

type Props = {
  sideText?: string;
};

export const ScrollIndicator: React.FC<Props> = ({ sideText = 'scroll' }) => (
  <div className={s.container}>
    <div className={s.line}></div>
    <div className={s.sideText}>{sideText}</div>
  </div>
);
