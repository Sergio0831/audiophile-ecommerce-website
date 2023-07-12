import { formatPrice } from '../../../helpers/formatPrice';
import classes from './CartTotal.module.scss';

type CartTotalProps = {
	cartTotalAmount: number;
	summary?: boolean;
};

const CartTotal = ({ cartTotalAmount, summary }: CartTotalProps) => {
	const shipping = cartTotalAmount === 0 ? 0 : 50;
	const vat = (cartTotalAmount / 100) * 21;

	return (
		<ul className={classes.total}>
			<li>
				<p>total</p>
				<h2 className='heading-6'>$ {formatPrice(cartTotalAmount)}</h2>
			</li>
			{summary && (
				<>
					<li>
						<p>shipping</p>
						<h3 className='heading-6'>$ {shipping}</h3>
					</li>
					<li>
						<p>vat (included)</p>
						<h3 className='heading-6'>$ {formatPrice(vat)}</h3>
					</li>
					<li className={classes.total__grand}>
						<p>grand total</p>
						<h3 className='heading-6'>
							$ {formatPrice(cartTotalAmount + shipping)}
						</h3>
					</li>
				</>
			)}
		</ul>
	);
};

export default CartTotal;
