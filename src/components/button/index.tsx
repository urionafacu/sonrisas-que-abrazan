import classNames from 'classnames'
import s from './styles.module.css'

type Props = {
  type: 'primary' | 'secondary'
  title: string
  onClick: () => void
}

const Button = ({ title, type = 'primary', onClick }: Props) => {
  return (
    <button
      className={classNames(s.container, {
        [s.primary]: type === 'primary',
      })}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
