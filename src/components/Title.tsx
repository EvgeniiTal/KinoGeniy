interface Props {
  title: string
}

export function Title (props: Props): JSX.Element {

  return (
    <h1>{props.title}</h1>
  )
}
