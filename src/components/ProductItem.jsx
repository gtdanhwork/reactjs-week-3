import React from 'react';

const ProductItem = ({ item, setStateModal }) => {
	return (
		<div className="col-md-4 mb-4">
			<div className="card h-100">
				<img
					src={item.image}
					className="card-img-top"
					alt={item.name}
				/>

				<div className="card-body">
					<h5 className="card-title">{item.name}</h5>

					<p>Price: {item.price} $</p>

					<p>{item.shortDescription}</p>

					<button
						className="btn btn-dark"
						onClick={() => setStateModal(item)}
					>
						View detail
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductItem;
