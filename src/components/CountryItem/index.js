import {
  ListItem,
  CountryName,
  VisitCountry,
  ButtonText,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, addVisitedCountry} = props
  const {name, isVisited, id} = countryDetails
  const countryVisited = isVisited ? 'Visited' : 'Visit'

  const onClickAddCountry = () => {
    addVisitedCountry(id)
  }

  return (
    <ListItem>
      <CountryName>{name}</CountryName>
      {isVisited === true ? (
        <ButtonText>{countryVisited}</ButtonText>
      ) : (
        <VisitCountry onClick={onClickAddCountry}>
          {countryVisited}
        </VisitCountry>
      )}
    </ListItem>
  )
}

export default CountryItem
