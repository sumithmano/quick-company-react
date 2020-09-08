import React from 'react'

const CompanyItem = (props) => (
    <li className="collection-item row">
        {props.item.name}
        <button className="btn btn-small btn-floating yellow right" onClick={() => props.toggleFavourite(props.item)}>
            {props.item.isFavourite ? <i className="fa fa-star"></i> : <i className="fa fa-plus"></i>}
        </button>
    </li>
)

export default CompanyItem