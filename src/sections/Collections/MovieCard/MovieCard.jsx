import './MovieCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    season,
    href = '/movie'
  } = props

  const basePath = import.meta.env.MODE === 'production'
    ? import.meta.env.VITE_PUBLIC_PATH
    : ''
  const isInternal = typeof href === 'string' && href.startsWith('/')
  const finalHref = isInternal ? `${basePath}${href}` : href

  return (
    <a
      className='movie-card'
      href={finalHref}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {season && (
          <Badge
            iconName="catalog"
            hasFillIcon
          >
            {season}
          </Badge>
        )}

        {rating && (
          <Badge
            className="movie-card__rating-badge"
          >
            <RatingView {...rating} />
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__released-badge">
            Released at <time className="movie-card__released-badge-label" dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}
      </div>
    </a>
  )
}

export default MovieCard