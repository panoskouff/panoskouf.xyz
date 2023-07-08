import s from './AspectRatioImage.module.css';
import clsx from 'clsx';

// the way this component is built needs to be wrapped in a div that has width set

// @todo maybe https://github.com/panoskouf/react-components/blob/335be49376762cd7ab517bd9354932137c3f67ca/workspaces/react-components/src/components/Image.tsx
// or picture or next image ?
// also better name
type AspectRatioImage = React.AllHTMLAttributes<HTMLImageElement> & {
  aspectRatioHeight: number;
  aspectRatioWidth?: number;
};

export default function ConstrainedImage({
  src,
  aspectRatioHeight = 1,
  aspectRatioWidth = 1,
  className,
  ...rest
}: AspectRatioImage) {
  return (
    <div
      className={clsx(s.aspectRatioBox, className)}
      style={{
        paddingBottom: `calc(100% / ${aspectRatioHeight} * ${aspectRatioWidth})`,
      }}
    >
      <img className={s.image} src={src} {...rest} />
    </div>
  );
}
