import React, { useEffect, useState } from 'react'
import { ToggleButtonOrders } from '../toggleButton/ToggleButtonOrders'


export const OrderModal = ({data}) => {
  const [products, setProducts] = useState([])
  const [list, setlist] = useState({requests: []})

  useEffect(() => {
    console.log("esto es o no");

    setlist(data)
  }, [data])



  useEffect( () => {
    async function data() {const data = await fetch("https://easyorder-backend-3.onrender.com/api/v1/products")
    const fetchProducts = await data.json()
    setProducts(fetchProducts)}

    data()
  }, [data])




  return (
    <section className="modal fade" id="modalSessions" tabIndex="-1" aria-labelledby="modalSessions" aria-hidden="true">
      <article className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title fs-5 text-dark modal-title" id="modalTables">Productos</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <table>
              <thead>
              <tr>
                <th>Pedido</th>
                <th>Cantidad</th>
                <th>Producto</th>
                <th>Acciones</th>
              </tr>
              </thead>
            <tbody>
                {/* {data.length > 0 ? data.map((e) => e.requests.map((element) => {
                  if(element.status !== "Terminado") {
                    return <tr>
                            <td>{e.name}</td>
                            <td>
                              {element.quantity}
                            </td>
                            <td>
                              {products.find((item) => item.id === element.productId).name}
                            </td>
                            <td>
                              <ToggleButtonOrders id={element.id} reqStatus={element.status}/>
                            </td>
                         </tr>
                  }
                  }
                )): ""} */}
                {data.requests ? data.requests.map((element) => {
                    if(element.status !== "Terminado") {


                      return <tr>
                                <td>{list.name}</td>
                                <td>
                                  {element.quantity}
                                </td>
                                <td>
                                  {products.find((item) => item.id === element.productId).name}
                                </td>
                                <td>
                                  <ToggleButtonOrders id={element.id} reqStatus={element.status}/>
                                </td>
                              </tr>
                    }
                    }
                  ): ""}
            </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  )
}
