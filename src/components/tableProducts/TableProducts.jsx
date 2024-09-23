import { useCallback, useEffect, useState } from "react";
import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import { ProductsModal } from "./ProductsModal"
import { useDelete } from "../../api/useDelete";

export const TableProducts = () => {

    const [dataProducts, setDataProducts] = useState([]);
    const [errorProducts, setErrorProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState({ id: "", name: "", price: "", url: "", button: "" });
  
    const fetchProducts = useCallback(async () => {
      try {
        const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/products", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los productos');
        }
        const data = await response.json();
        setDataProducts(data);
      } catch (error) {
        setErrorProducts(error.message);
      }
    }, []);
  
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);
  
    const handleEditClick = (id, name, price, url, button) => {
      setSelectedProduct({id, name, price, url, button});
    };
  
    const handleDelete = useCallback(async (id) => {
      await useDelete(id, "https://easyorder-backend-3.onrender.com/api/v1/products", fetchProducts);
    }, [fetchProducts]);
  
    const handleProductUpdate = useCallback(() => {
        fetchProducts();
        }, [fetchProducts]);
  
    if (errorProducts) {
      return <div>Error: {errorProducts}</div>;
    }
  
    const formatPrice = (price) => {
      return new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP'
      }).format(price);
  };


    return (
      <>
        <section className="table-container">
        <ButtonModal className = "button-add" id = "modalProducts" text="Crear"/>

              <table>
                  <thead>
                      <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>

                    {dataProducts.map(product =>(
                          <tr key={product.id}>
                            <td><img className="img-product-table" src={product.url} alt="" /></td>
                            <td>{product.name}</td>
                            <td>{formatPrice(product.price)}</td>
                            <td>
                            <ButtonModal className = "edit-btn" id = "modalProducts" text="Editar" handleClick={() => handleEditClick( product.id, product.name, product.price, product.url, "edit")}/>

                            <button id={product.id} onClick={() => handleDelete(product.id)} className="delete-btn">Eliminar</button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
              </table>
          </section>

          <ProductsModal 
        name={selectedProduct.name}
        url={selectedProduct.url}
        price={selectedProduct.price}
        idProduct={selectedProduct.id}
        button={selectedProduct.button}
        onProductUpdate={handleProductUpdate}/>

      </>
    )
  }
