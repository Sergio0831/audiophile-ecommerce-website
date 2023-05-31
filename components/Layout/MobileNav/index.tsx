import clsx from 'clsx';
import Categories from '../../Sections/Categories';
import classes from './MobileNav.module.scss';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import Overlay from '../Overlay';
import { useRef } from 'react';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';
import { close } from '../../../features/mobileNav/mobileNavSlice';

const MobileNav = () => {
	const openNav = useAppSelector((state) => state.mobileNav.open);
	const navRef = useRef<HTMLElement>(null);
	const dispatch = useAppDispatch();
	useLockBodyScroll();

	const mobileNavClasses = clsx({
		[classes.nav]: true,
		[classes.nav__visible]: openNav,
	});

	useOnClickOutside(navRef, () => dispatch(close()));

	return (
		<>
			{openNav && <Overlay navOverlay />}
			<nav className={mobileNavClasses} ref={navRef}>
				<Categories />
			</nav>
		</>
	);
};

export default MobileNav;
