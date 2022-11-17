import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import AlertContext from '../../context/alert/AlertContext';

const Alert = (props) => {
	const alertContext = useContext(AlertContext);

	return (
		alertContext.alert !== null && (
			<div className={`alert alert-${alertContext.alert.type}`}>
				<FontAwesomeIcon
					icon={faCircleInfo}
					style={{
						fontSize: 16,
						width: 16,
						textAlign: 'center',
						marginRight: 4,
					}}
				/>
				{alertContext.alert.msg}
			</div>
		)
	);
};

export default Alert;
