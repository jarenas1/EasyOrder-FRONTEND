import { useContext, useEffect, useState } from 'react'
import useFetch from '../../../api/apiFetch.js'
import ProductList from '../../../components/Products/productList/ProductList.jsx'
import ProductPagination from '../../../components/Products/productPagination/ProductPagination.jsx'
import	"./products.scss"
import { CartContext } from '../../../context/CartContext'
import { useNavigate } from 'react-router-dom'

function ShowProducts() {
    
    const { data, loading, error } = useFetch("https://easyorder-backend-3.onrender.com/api/v1/products")
    const [searchItems, setsearchItems] = useState("")
    const [filter, setFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const navigate = useNavigate();
    
    const [slogan, setSlogan] = useState("");
    const fullSlogan = "𝘚𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘊𝘜𝘓𝘛𝘜𝘙𝘈, 𝘴𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘐𝘋𝘌𝘖𝘓𝘖𝘎𝘐́𝘈, 𝘴𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘋𝘖𝘊𝘛𝘙𝘐𝘕𝘈…";

    useEffect(() => {
        let index = -1;
        const interval = setInterval(() => {
            setSlogan((prev) => prev + fullSlogan[index]);
            index++;
            if (index === fullSlogan.length-1) clearInterval(interval);
        }, 20); // Velocidad de la animación (en milisegundos)
        
        return () => clearInterval(interval);
    }, []);



    useEffect(() => {
         if (data && Array.isArray(data)) {
            
            setFilter(data.filter((ele) =>
                ele.name.toLowerCase().includes(searchItems.toLowerCase())
            ));
             // Ajustar la página actual si es necesario
            if (currentPage > Math.ceil(filter.length / productsPerPage)) {
                setCurrentPage(1);
            }
        }
    }, [data, searchItems, currentPage])
    


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filter.length / productsPerPage);
    
    
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    const handleCartClick = (e) => {
        e.preventDefault()
        navigate('/cart'); 
    };
    return (
        <>
            <header className='header'>
                <div className='header__text'>
                    <h1 className='color-primary'>La Logia</h1>
                    <p className='color-primary typewriter'>{ slogan}</p>
                </div>
            </header>
        
            <section className='section-products'>
                <div className='section-products__text'>
                    {/* <h2 className='color-primary'>Productos</h2> */}
                   
                    <a href="" className='section-products__btn' onClick={handleCartClick}>
                        <i className="bi bi-cart-fill"></i>
                    </a>
                </div>
                <div className='section-products__search'>
                     <input type="text" placeholder='Buscar' value={searchItems} onChange={(e) => {
                        setsearchItems(e.target.value)
                    }} />
                </div>
                

            </section>
            {filter.length === 0 ? (
                <p className='no-results'>La búsqueda de «{ searchItems }» no arrojó coincidencias</p>
            ) : (
                <>
                    <ProductList data={currentProducts} />
                    <ProductPagination
                        totalPages={totalPages}
                        setCurrentPage={handlePageChange}
                        currentPage={currentPage}
                    />
                </>
            )}
           
                
                
                
            
            
        </>
  )
}

export default ShowProducts
