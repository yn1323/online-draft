interface Props {
  width?: string | number
  height?: string | number
  minHeight?: string | number
  customClass?: string
  children: JSX.Element | JSX.Element[]
  index?: number
}
const CardBackground = ({
  width = 100,
  height = 100,
  customClass = '',
  children,
  index = 0,
}: Props) => {
  const renderChildElement = () => {
    return Array.isArray(children) ? children[index] : children
  }

  return (
    <section
      className={`card ${customClass}`}
      style={customClass ? {} : { height, width }}
    >
      {renderChildElement()}
    </section>
  )
}

export default CardBackground
