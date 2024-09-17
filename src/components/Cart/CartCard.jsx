import "./cartCard.scss"

function CartCard({products}) {
    return (<>
        {
            products.map(ele => {
                return <article key={ele.id} className='serctio-card-container__article'>
                    <div className="serctio-card-container__info">
                        <figure className='serctio-card-container__figure'>
                            <img src={ele.img} alt="" />
                        </figure>
                        <p>{ele.name.toUpperCase()}</p>
                        <p>Units</p>
                        <p>{ele.price}</p>
                    </div>
                    
                    
                    </article >
            })
        }
    
    </>
      
  )
}

export default CartCard
