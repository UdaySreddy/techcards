// Write your code here.
import './index.css'

const Cards = props => {
  const {details} = props
  const {title, description, imgUrl, className} = details
  return (
    <div>
      <li className={className}>
        <h1>{title}</h1>
        <p>{description}</p>
      </li>
      <img src={imgUrl} alt="title" />
    </div>
  )
}

export default Cards
