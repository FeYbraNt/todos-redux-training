import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <div className="ui text menu">
    <div className="header item">Sort by</div>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </div>
)

export default Footer
