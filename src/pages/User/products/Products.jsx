import { useEffect, useState } from 'react'
import useFetch from '../../../api/apiFetch.js'
import ProductList from '../../../components/Products/ProductList.jsx'
import ProductPagination from '../../../components/Products/productPagination.jsx'
import	"./products.scss"

function ShowProducts() {
    const { data, loading, error } = useFetch("http://localhost:3000/products")
    const [searchItems, setsearchItems] = useState("")
    const [filter, setFilter] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;
    
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
    }, [data, searchItems])
    


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filter.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filter.length / productsPerPage);
    
    
    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <>
            <nav className='nav'>
                <figure className='nav__figure'>
                    <img src="https://www.google.https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShTbKYgWNaJmUPwDdKBNUtjDiKJzY5SFvUoQ&s/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Ffotos-vectores-gratis%2Flogia&psig=AOvVaw0wdp23MoMbcO9hU43T-ZJg&ust=1726444579614000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiVzPjSw4gDFQAAAAAdAAAAABAJ" alt="" />
                </figure>
            </nav>
            <header className='header'>
                
                <div className='header__text'>
                    <h1 className='color-primary'>La logia</h1>
                    <p className='color-primary'>𝘚𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘊𝘜𝘓𝘛𝘜𝘙𝘈, 𝘴𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘐𝘋𝘌𝘖𝘓𝘖𝘎𝘐́𝘈, 𝘴𝘰𝘮𝘰𝘴 𝘶𝘯𝘢 𝘋𝘖𝘊𝘛𝘙𝘐𝘕𝘈…</p>
                </div>
            </header>
        
            <section className='section-products'>
                <div className='section-products__text'>
                    <h2 className='color-primary'>Producto</h2>
                   
                    <button className='section-products__btn'>Carrito</button>
                </div>
                <div className='section-products__search'>
                     <input type="text" placeholder='buscar' value={searchItems} onChange={(e) => {
                        setsearchItems(e.target.value)
                    }} />
                </div>
                

            </section>
            <section>
                
                
                <ProductList data={currentProducts} />
                <ProductPagination totalPages = {totalPages} setCurrentPage = {handlePageChange} currentPage = {currentPage} ></ProductPagination>
            
            </section>
        </>
  )
}

export default ShowProducts
