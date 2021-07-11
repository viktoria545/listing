import React from 'react';
import PropTypes from 'prop-types';

function Listing(prop) {

    const currency = {
        USD: '$',
        EUR: '€',
    };

    return (
        <div className="item-list">
            {prop.items.map(item => {

                return (
                    <div className="item" key={item.listing_id}>
                        <div className="item-image">
                            <a href={item.url}>
                                <img src={(item.MainImage && item.MainImage.url_570xN) ? item.MainImage.url_570xN : 'no image'} alt={item.title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">
                                {(item.title && item.title.length > 50) ? `${item.title.slice(0, 50)}...` : item.title}
                            </p>
                            <p className="item-price">{item.price} {currency[item.currency_code] ? currency[item.currency_code] : item.currency_code}</p>
                            <p className=
                                {item.quantity <= 20 ? (item.quantity < 10 ? "level-low item-quantity" : "level-medium item-quantity") : "level-high item-quantity"}>
                                {item.quantity} left</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

Listing.defaultProps = {
    items: []
}

Listing.propTypes = {
    prop: PropTypes.shape({
        listing_id: PropTypes.number,
        url: PropTypes.string,
        MainImage: PropTypes.shape({
            url_570xN: PropTypes.string
        }),
        title: PropTypes.string,
        currency_code: PropTypes.string,
        price: PropTypes.string,
        quantity: PropTypes.number
    })
}

export default Listing;