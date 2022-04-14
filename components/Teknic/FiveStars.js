import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function FiveStars({ marginTop, classes }) {
  return (
    <div className='flex'>
      <div className={`mx-auto ${marginTop}`}>
        <FontAwesomeIcon icon={faStar} className={`text-amber-400 ${classes}`} />
        <FontAwesomeIcon icon={faStar} className={`text-amber-400 ${classes}`} />
        <FontAwesomeIcon icon={faStar} className={`text-amber-400 ${classes}`} />
        <FontAwesomeIcon icon={faStar} className={`text-amber-400 ${classes}`} />
        <FontAwesomeIcon icon={faStar} className={`text-amber-400 ${classes}`} />
      </div>
    </div>
  )
}
