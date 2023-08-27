export default function Layout(props: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div>{props.children}</div>
        <br />
        <div>{props.team}</div>
        <br />
        <div>{props.analytics}</div>
      </div>
    </>
  );
}
