import React from 'react'

function ProductPagination({totalPages, setCurrentPage, currentPage}) {


    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
  return (
    <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Anterior</button>
        <span>Página {currentPage} de {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
    </div>
  )
}

export default ProductPagination
