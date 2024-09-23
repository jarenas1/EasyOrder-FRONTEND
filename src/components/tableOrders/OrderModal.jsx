import React from 'react'

export const OrderModal = ({data}) => {
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
            <tbody>
                {data.map((e) => <td>{e.name}</td>)}
            </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  )
}
