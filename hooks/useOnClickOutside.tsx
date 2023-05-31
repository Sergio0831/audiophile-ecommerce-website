import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
	ref: RefObject<T>,
	handler: () => void,
) => {
	useEffect(() => {
		const listener = (event: Event) => {
			if (
				ref.current &&
				!ref.current.contains((event.target as Node) || null)
			) {
				handler();
			}
		};

		document.addEventListener('click', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('click', listener);
			document.removeEventListener('touchstart', listener);
		};
	});
};
