import React, { useCallback } from 'react'
import { array, string, func } from 'prop-types'
import routes from 'constants/routes'
import { Link } from 'react-router-dom'
import { InputGroup, Text } from '@blueprintjs/core'

const CountryList = ({ data, search, onSearch }) => {
  const onChange = useCallback((e) => onSearch(e.target.value), [onSearch])
  return (
    <div className="country_list">
      <InputGroup large leftIcon="filter" placeholder="Search" defaultValue={search} onChange={onChange} />
      <div className="list">
        {data.map(({ Country, ISO2, Slug }) => (
          <Link to={routes.country.replace(':id', Slug)} key={ISO2}>
            <Text ellipsize>{Country}</Text>
          </Link>
        ))}
      </div>
    </div>
  )
}
CountryList.propTypes = {
  data: array.isRequired,
  search: string,
  onSearch: func.isRequired,
}
CountryList.defaultProps = {
  search: '',
}
export default CountryList
