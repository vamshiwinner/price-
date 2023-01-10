import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptionDetails,
    ratingListDetails,
    onChangeSearch,
    onChangeCategory,
    onChangeRating,
  } = props
  const onChangeInput = event => {
    onChangeSearch(event.target.value)
  }

  const onClickButton = event => {
    onChangeCategory(event.target.value)
    console.log(event.target)
  }

  const onClickRatingButton = event => {
    console.log(event.target)
    console.log(ratingListDetails[0].ratingId)
    onChangeRating(event.target.value)
    console.log(event.target.value)
  }

  return (
    <div className="filters-group-container">
      <input onChange={onChangeInput} type="search" placeholder="search" />
      <h1 className="category-heading">Category</h1>
      <ul className="ul-container">
        {categoryOptionDetails.map(eachOption => (
          <li className="list">
            <button
              value={eachOption.categoryId}
              onClick={onClickButton}
              className="button"
              type="button"
            >
              {eachOption.name}
            </button>
          </li>
        ))}
      </ul>
      <h1 className="category-heading">Rating</h1>
      <ul className="ul-container">
        {ratingListDetails.map(eachOption => (
          <li className="list-rating">
            <button
              onClick={onClickRatingButton}
              value={eachOption.ratingId}
              className="button"
              type="submit"
            >
              <img
                className="image-size"
                src={eachOption.imageUrl}
                alt="rating"
              />
            </button>
            <p className="pera-up">&up</p>
          </li>
        ))}
      </ul>
      <button className="clear-button" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
