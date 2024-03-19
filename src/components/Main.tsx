export function Main (props: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="container">
      {props.children}
    </div>
  )
}
