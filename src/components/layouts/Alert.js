import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Alert = (props) => {
	return (
		props.alert !== null && (
			<div className={`alert alert-${props.alert.type}`}>
				<FontAwesomeIcon
					icon={faCircleInfo}
					style={{
						fontSize: 16,
						width: 16,
						textAlign: 'center',
						marginRight: 4,
					}}
				/>
				{props.alert.msg}
			</div>
		)
	);
};

export default Alert;
