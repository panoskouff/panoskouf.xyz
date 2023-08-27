export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  // team: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div>{props.analytics}</div>
        {/*
        <br />
        <div>{props.team}</div>
        <br /> */}
        <div>⭐{props.children}⭐</div>
      </div>
    </>
  );
}
