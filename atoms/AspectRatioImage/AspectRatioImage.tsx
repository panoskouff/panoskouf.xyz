import s from './AspectRatioImage.module.css';
import clsx from 'clsx';

/* the way this component is built needs to be
    wrapped in a div that has width set */
type AspectRatioImageProps = {
  width: number;
  height: number;
} & React.AllHTMLAttributes<HTMLImageElement>;

// @todo use picture element to support srcset
export const AspectRatioImage = ({
  src,
  width = 1,
  height = 1,
  className,
  ...rest
}: AspectRatioImageProps) => {
  return (
    <div
      className={clsx(s.aspectRatioBox, className)}
      style={{
        paddingBottom: `calc(100% / ${width} * ${height} )`,
      }}
    >
      {/*
      browser calculates the expected aspect ratio based on width
      and height properties passed to img element
      https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
      // @todo adjust properties passed here to have the intended
      // aspect ratio outcome
       */}
      <img
        style={{ borderRadius: 'var(--border-radius-primary)' }}
        className={s.image}
        src={src}
        width={width}
        height={height}
        {...rest}
      />
    </div>
  );
};
