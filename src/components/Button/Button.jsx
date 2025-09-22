import './Button.scss'
import classNames from 'classnames'
import Icon from '@/components/Icon'

const Button = (props) => {
  const {
    className,
    type = 'button',
    href,
    target,
    /**
     * '' (default) | 'transparent' | 'black-10' | 'black-08' | 'black-06'
     */
    mode = '',
    label,
    isLabelHidden = false,
    iconName,
    /**
     * 'before' | 'after'
     */
    iconPosition = 'before',
    hasFillIcon,
    extraAttrs,
  } = props

  const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''

  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const isInternal = typeof href === 'string' && href.startsWith('/')
  const finalHref = isInternal ? `${basePath}${href}` : href
  const linkProps = { href: finalHref, target }
  const buttonProps = { type }
  const specificProps = isLink ? linkProps : buttonProps
  const title = isLabelHidden ? label : undefined
  const iconComponent = iconName && (
    <Icon
      className="button__icon"
      name={iconName}
      hasFill={hasFillIcon}
    />
  )

  return (
    <Component
      className={classNames(className, 'button', {
        [`button--${mode}`]: mode,
      })}
      title={title}
      aria-label={title}
      {...specificProps}
      {...extraAttrs}
    >
      {iconPosition === 'before' && iconComponent}
      {!isLabelHidden && (
        <span className="button__label">{label}</span>
      )}
      {iconPosition === 'after' && iconComponent}
    </Component>
  )
}

export default Button
