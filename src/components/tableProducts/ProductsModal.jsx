import { useEffect, useState } from 'react';
import '../tableMesas/mesasModal.scss'
import Swal from 'sweetalert2';

export const ProductsModal = ({ name = "", url = "", price = "",  idProduct = "",button = "", onProductUpdate }) => {
    const [product, setProduct] = useState(name);
    const [productId, setProductId] = useState(idProduct);
    const [urlImg, setUrlImg] = useState(url);
    const [priceProduct, setPriceProduct] = useState(price);
    const [action, setAction] = useState(button);

    useEffect(() => {
      setProduct(name);
      setProductId(idProduct);
      setUrlImg(url);
      setPriceProduct(price)
      setAction(button);
    }, [name, idProduct, url, price, button]);

    const setInputValue = (e) => {
      switch (e.target.name) {
        case 'url':
          setUrlImg(e.target.value);
          break;
        case 'name':
          setProduct(e.target.value);
          break;
        case 'price':
          setPriceProduct(Number(e.target.value));
          break;
        default:
          return;
      }
    };

    useEffect(() => {
      const modalElement = document.getElementById('modalProducts');

      const resetModal = () => {
        setProduct("");
        setProductId("");
        setUrlImg("");
        setAction("");
        setPriceProduct("");
      };

      modalElement.addEventListener('hidden.bs.modal', resetModal);

      return () => {
        modalElement.removeEventListener('hidden.bs.modal', resetModal);
      };
    }, []);

    const handleEditOrCreate = async (action) => {
      const url = action === "edit"
        ? `https://easyorder-backend-3.onrender.com/api/v1/products/${productId}`
        : `https://easyorder-backend-3.onrender.com/api/v1/products`;

      const method = action === "edit" ? 'PATCH' : 'POST';

      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("userToken")}`
          },
          body: JSON.stringify({
            url: urlImg,
            name: product,
            price: priceProduct

          })
        });

        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }

        const data = await response.json();
        console.log(data);

        Swal.fire({
          title: "¡Éxito!",
          text: `Producto ${action === "edit" ? "actualizado" : "creado"} correctamente.`,
          icon: "success",
        });

        if (onProductUpdate) {
          onProductUpdate();
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: "Error",
          text: `Hubo un problema al ${action === "edit" ? "actualizar" : "crear"} el producto.`,
          icon: "error",
        });
      }
    };

  return (
    <>
    <section class="modal fade" id="modalProducts" tabindex="-1" aria-labelledby="modalProducts" aria-hidden="true">
      <article class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title fs-5 text-dark modal-title" id="modalProducts">Mesas</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='ModalForm'>
                <input name='url' type="text" required placeholder='Url de la imagen' value={urlImg} onChange={setInputValue}/>
                <input name='name' type="text" required placeholder='Nombre del producto' value={product} onChange={setInputValue} />
                <input name='price' type="text" required placeholder='Precio' value={priceProduct} onChange={setInputValue}/>
                <div className='buttons-container'>
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                  <button type="button" className="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleEditOrCreate(action)}>Guardar</button>
                </div>

            </form>
          </div>
        </div>
      </article>
  </section>
      </>
  )
}
