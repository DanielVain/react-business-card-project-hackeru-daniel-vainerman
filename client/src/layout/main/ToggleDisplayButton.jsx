import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function ToggleDisplayButton({
	isDisplay,
	faTableCellsLarge,
	faTableList,
}) {
	return (
		<div>
			{isDisplay ? (
				<FontAwesomeIcon
					title="Display as Cards"
					icon={faTableCellsLarge}
				/>
			) : (
				<FontAwesomeIcon title="Display as Table" icon={faTableList} />
			)}
		</div>
	);
}
