import { RiShoppingCart2Line } from 'react-icons/ri';
import './CartWidget.css'
import { useState } from 'react';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import swal from 'sweetalert';


function AddUsername() {


    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [cont, setCont] = useState(0);

    const nombreChangeHandler = (event) => {
        setNombre(event.target.value);
    }

    const apellidoChangeHandler = (event) => {
        setApellido(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }


    const completarOrden = () => {

        const order = {
            //CHEQUEAR SI FUNCIONA
            buyer: { name: nombre, lastname: apellido, Email: email },
            items: [...arrayCarrito.cart],
            precioTotal: arrayCarrito.getTotalPrice(),
            //CHEQUEAR SI FUNCIONA
            fecha: new Date()
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order)

        arrayCarrito.clear();
        setNombre("");
        setApellido("");
        setEmail("");

    }

    const alert = () => {

        if (nombre && apellido && email) {
            swal({
                title: "Estás por completar tu orden",
                text: "No podrás cancelar esta orden luego de proseguir",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        swal("¡Tu orden ha sido procesada, felicidades! Recibirás un correo con tu número de orden", {
                            icon: "success",
                        });
                        completarOrden();
                    } else {
                        swal("Puedes continuar comprando. No se ha procesado tu orden");
                    }
                });
        } else {
            swal("Debes completar los campos 'Nombre', 'Apellido' y 'Correo' para poder completar la orden", {
                className: "red-bg",
            });
        }

    }

    const arrayCarrito = useCart();

    return (
        <div className="div-cart">

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nombre" aria-label="" value={nombre} onChange={nombreChangeHandler} aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Apellido" aria-label="Recipient's username" onChange={apellidoChangeHandler} value={apellido} aria-describedby="basic-addon2" />
            </div>

            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Correo electrónico" aria-label="" onChange={emailChangeHandler} value={email} aria-describedby="basic-addon1" />
            </div>

            <button class="btn btn-outline-secondary" onClick={alert} type="button">Completar orden</button>



        </div>
    );


}

export default AddUsername;