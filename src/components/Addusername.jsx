import { RiShoppingCart2Line } from 'react-icons/ri';
import './CartWidget.css'
import { useState } from 'react';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import swal from 'sweetalert';
import { useEffect } from 'react';


function AddUsername() {


    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState(0);
    const [cont, setCont] = useState(0);
    const [numNewOrden, setNumNewOrden] = useState("");


    const nombreChangeHandler = (event) => {
        setNombre(event.target.value);
    }

    const telefonoChangeHandler = (event) => {
        setTelefono(event.target.value);
    }

    const apellidoChangeHandler = (event) => {
        setApellido(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }


    const completarOrden = () => {

        const order = {
            buyer: { name: nombre, lastname: apellido, Email: email },
            items: [...arrayCarrito.cart],
            precioTotal: arrayCarrito.getTotalPrice(),
            fecha: new Date()
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then((doc) => {
            let ordenVar = "";
            setNumNewOrden(doc.id);
            ordenVar = doc.id;
            console.log('Número de orden', ordenVar);
        })


        // arrayCarrito.clear();
        // setNombre("");
        // setApellido("");
        // setEmail("");

    }


    const alert = () => {

        if (email.indexOf("@") == -1 && email.indexOf(".") == -1) {
            swal("Recuerda que el correo debe tener un formato similar a 'correo@dominio.com'", {
                className: "red-bg",
            });

        }
        else if (nombre && apellido && email && telefono) {
            swal({
                title: "Estás por completar tu orden",
                text: "No podrás cancelar esta orden luego de proseguir",
                text: `Por favor valida tus datos primero: \n Nombre: ${nombre} \n Apellido: ${apellido} \n Telefono:${telefono} \n Correo: ${email}`,
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {
                    if (willDelete) {
                        completarOrden();

                        swal(`¡Tu orden ha sido procesada, felicidades!`, {
                            icon: "success",
                        });

                    } else {
                        swal("Puedes continuar comprando. No se ha procesado tu orden");
                    }
                });
        } else {
            swal("Debes completar los campos 'Nombre', 'Apellido', 'Correo' Y 'Telefono' para poder completar la orden", {
                className: "red-bg",
            });
        }

    }

    useEffect(() => {

        if (numNewOrden) {

            swal(`Tu numero de orden es ${numNewOrden}`, {
                icon: "success",
            });

            console.log(`Numero de orden en el estado: ${numNewOrden}`)

            arrayCarrito.clear();
            setNombre("");
            setApellido("");
            setEmail("");
        }

    }, [numNewOrden])




    const arrayCarrito = useCart();

    return (
        <div className="formularioCompra">

            <div className="input-group mb-3" id="formularioCompra__nombre">
                <h5 className="formularioCompra__h5">Nombre </h5><input id="formularioCompra__nombreyapellido__input" type="text" class="form-control" placeholder="Nombre" aria-label="" value={nombre} onChange={nombreChangeHandler} aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3" id="formularioCompra__apellido">
                <h5 className="formularioCompra__h5"> Apellido</h5> <input id="formularioCompra__nombreyapellido__input" type="text" class="form-control" placeholder="Apellido" aria-label="Recipient's username" onChange={apellidoChangeHandler} value={apellido} aria-describedby="basic-addon2" />
            </div>

            <div className="input-group mb-3" id="formularioCompra__email">
                <h5 className="formularioCompra__h5"> Correo Electronico</h5> <input id="formularioCompra__email__input" type="email" class="form-control" placeholder="Correo electrónico: hola@email.com" aria-label="" onChange={emailChangeHandler} value={email} aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3" id="formularioCompra__telefono">
                <h5 className="formularioCompra__h5"> Numero Telefónico </h5><input id="formularioCompra__telefono__input" type="number" class="form-control" placeholder="Telefono" aria-label="" onChange={telefonoChangeHandler} value={telefono} aria-describedby="basic-addon1" />
            </div>

            <button className="btn btn-outline-secondary" onClick={alert} type="button">Completar orden</button>



        </div>
    );


}

export default AddUsername;