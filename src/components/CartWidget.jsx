import { RiShoppingCart2Line } from 'react-icons/ri';

function CartWidget(prop) {

    return (
        <div>
            <RiShoppingCart2Line />
            <h2>{prop.numitems}</h2></div>
    );


}

export default CartWidget;