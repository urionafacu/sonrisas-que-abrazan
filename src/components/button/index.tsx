import classNames from 'classnames'
import s from './styles.module.css'

type Props = {
  type: 'primary' | 'secondary'
  title: string
}

const Button = ({ title, type = 'primary' }: Props) => {
  return (
    <button
      className={classNames(s.container, {
        [s.primary]: type === 'primary',
      })}
    >
      {title}
    </button>
  )
}

export default Button
