import Link from 'next/link';
import s from './Navigation.module.css';
export const Navigation = () => (
  <div className={s.navigation}>
    <Link href='/'>
      {/* should this be a div ? */}
      <div className={s.logo}>panos.</div>
    </Link>
    <div className={s.navigationEnd}>
      <Link className={s.link} href='/#Portfolio'>
        my work
      </Link>
      <Link className={s.link} href='mailto:me@panoskouf.xyz'>
        get in touch
      </Link>
      <Link className={s.link} href='/cv.html'>
        📃CV
      </Link>
    </div>
  </div>
);
