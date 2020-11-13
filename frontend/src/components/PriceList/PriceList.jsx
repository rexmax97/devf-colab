import React from 'react'

const PriceList = ({ prices }) => {
  return (
    <React.Fragment>
      <ul>
        {
          prices.map((item, itemIndex) => {
            return (
              <li key={`item_${itemIndex}`}>
                { item.item}: { priceFormat(item.price) }
              </li>
            )
          })
        }
      </ul>
    </React.Fragment>
  )
}

const priceFormat = (payload) => {
  return `$${new Intl.NumberFormat().format(payload)}`
}

export default PriceList

