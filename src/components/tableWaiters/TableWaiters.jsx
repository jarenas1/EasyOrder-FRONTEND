import { useCallback, useEffect, useState } from "react";
import { ButtonModal } from "../ButtonCreateModal/ButtonModal"
import { WaitersModal } from "./WaitersModal"
import { useDelete } from "../../api/useDelete";

export const TableWaiters = () => {

    const [dataWaiters, setDataWaiters] = useState([]);
    const [errorWaiters, setErrorWaiters] = useState(null);
    const [selectedWaiter, setSelectedWaiters] = useState({ id: "", name: "", lastname: "", username: "", password: "", button: "" });
  
    const fetchWaiters = useCallback(async () => {
      try {
        const response = await fetch("https://easyorder-backend-3.onrender.com/api/v1/user", {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Hubo un problema al obtener los meseros');
        }
        const data = await response.json();
        setDataWaiters(data);
      } catch (error) {
        setErrorWaiters(error.message);
      }
    }, []);
  
    useEffect(() => {
        fetchWaiters();
    }, [fetchWaiters]);
  
    const handleEditClick = (id, name, lastname, username, password, button ) => {
        setSelectedWaiters({id, name, lastname, username, password, button});
    };
  
    const handleDelete = useCallback(async (id) => {
      await useDelete(id, "https://easyorder-backend-3.onrender.com/api/v1/user", fetchWaiters);
    }, [fetchWaiters]);
  
    const handleWaiterUpdate = useCallback(() => {
        fetchWaiters();
        }, [fetchWaiters]);
  
    if (errorWaiters) {
      return <div>Error: {errorWaiters}</div>;
    }
  
    
    return (
      <>
          <section className="table-container">
          <ButtonModal className = "button-add" id = "modalWaiters" text="Crear"/>

              <table>
                  <thead>
                      <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Acciones</th>
                      </tr>
                  </thead>
                  <tbody>
                  {dataWaiters
                    .filter(waiter => waiter.role.id !== "3ca4d91f-4ca2-46e5-ba9c-8bd12fe0645a")  // Filtrar los admins
                    .map(waiter => (
                        <tr key={waiter.id}>
                        <td>{waiter.id}</td>
                        <td>{waiter.name} {waiter.lastname}</td>
                        <td>
                        <ButtonModal className = "edit-btn" id = "modalWaiters" text="Editar" handleClick={() => handleEditClick( waiter.id, waiter.name, waiter.lastname, waiter.username, waiter.password, "edit")}/>
                            <button id={waiter.id} onClick={() => handleDelete(waiter.id)} className="delete-btn">Eliminar</button>
                        </td>
                        </tr>
                    ))
                    }
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>JUAN ARENAS GAVIRIA</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
  
                      <tr>
                      <td>1229232asds021a</td>
                      <td>JUAN ARENAS GAVIRIA</td>
                      <td>
                          <button className="edit-btn">Editar</button>
                          <button className="delete-btn">Eliminar</button>
                      </td>
                      </tr>
                  </tbody>
              </table>
          </section>
          <WaitersModal
          id={selectedWaiter.id}
          name={selectedWaiter.name}
          lastname={selectedWaiter.lastname}
          username={selectedWaiter.username}
          password={selectedWaiter.password}
          button={selectedWaiter.button}
        onWaiterUpdate={handleWaiterUpdate}/>

      </>
    )
  }
