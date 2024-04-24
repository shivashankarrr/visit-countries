// import React from 'react'
import {
  VisitCountry,
  CountryNameAndRemove,
  RemoveButton,
  CountryName,
  Image,
} from './styledComponents'

const VisitCountries = props => {
  const {visitCountriesDetails, deleteCountriesList} = props
  const {imageUrl, name, id} = visitCountriesDetails

  const remove = () => {
    deleteCountriesList(id)
  }

  return (
    <>
      <VisitCountry>
        <Image src={imageUrl} alt="thumbnail" />
        <CountryNameAndRemove>
          <CountryName>{name}</CountryName>
          <RemoveButton onClick={remove} type="button" data-testid="delete">
            Remove
          </RemoveButton>
        </CountryNameAndRemove>
      </VisitCountry>
    </>
  )
}

export default VisitCountries
