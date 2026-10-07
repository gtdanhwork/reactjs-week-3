import React from 'react';

const Modal = ({ content }) => {
	if (!content) {
		return null;
	}

	return (
		<div
			className="modal fade show"
			style={{ display: 'block' }}
		>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">{content.name}</h5>
					</div>

					<div className="modal-body">
						<img
							src={content.image}
							alt={content.name}
							className="img-fluid mb-3"
						/>

						<h5>{content.price} $</h5>

						<p>
							<strong>Quantity:</strong> {content.quantity}
						</p>

						<p>{content.description}</p>

						<p>{content.shortDescription}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
