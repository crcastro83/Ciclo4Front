import React from 'react';
import swal from 'sweetalert';
import crud from '../../conexiones/crud';
import { Link, useParams } from 'react-router-dom';

export const ViewProductos = ({ producto }) => {

    const { idProducto } = useParams();
    console.log(idProducto);

    const { nombre, descripcion, stock, precio, imagen } = producto;

    const borrarProducto = async (idProducto) => {
        console.log(idProducto);
        swal({
            title: "¿Estas seguro de eliminar este producto?",
            text: "Una vez eliminado, no se podra recuperar este producto",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const response = crud.DELETE(`/api/producto/${idProducto}`);
                    if (response) {
                        swal("el producto ha sido eliminado correctamente", {
                            icon: "success",
                        });
                    }
                    window.location.reload();
                } else {
                    swal("Se ha cancelado la acción");
                }
            });
    }

    return (
        <div
            className='border-r p-5 flex justify-between items-center'
        >
            <div className='flex flex-col items-start'>
                <p className='mb-1 text-xl text-gray-50' >nombre:{nombre}</p>
                <p className='mb-1 text-xl text-gray-50 uppercase' >descripción:{descripcion}</p>
                <p className='mb-1 text-xl text-gray-50' >stock:{stock}</p>
                <p className='mb-1 text-xl text-gray-50' >precio:{precio}</p>
                <img src={imagen} width="150" height="150"></img>
            </div>

            <div className='flex flex-col lg:flex-row gap-2'>
                <Link
                    to={`/actualizar-producto/${producto._id}`}
                >Editar</Link>
                <button
                    className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={() => borrarProducto(producto._id)}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default ViewProductos;
