import React from 'react';

function Modal({ content, onClose }) {
	if (!content) {
		return null;
	}

	return (
		<div
			className="modal-backdrop-custom"
			onClick={onClose}
		>
			<div
				className="modal-dialog modal-dialog-centered"
				onClick={(event) => event.stopPropagation()}
			>
				<div className="modal-content">
					{/* Modal header */}
					<div className="modal-header">
						<h5 className="modal-title">{content.name}</h5>

						<button
							type="button"
							className="btn-close"
							aria-label="Close"
							onClick={onClose}
						/>
					</div>

					{/* Modal body */}
					<div className="modal-body">
						<img
							src={content.image}
							alt={content.name}
							className="img-fluid mb-3"
						/>

						<p>
							<strong>Price:</strong> ${content.price}
						</p>

						<p>
							<strong>Quantity:</strong> {content.quantity}
						</p>

						<p>{content.description}</p>

						<p>{content.shortDescription}</p>
					</div>

					{/* Modal footer */}
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							onClick={onClose}
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
