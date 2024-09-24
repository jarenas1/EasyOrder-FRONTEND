import { useEffect, useState } from 'react';
import '../tableMesas/mesasModal.scss'
import Swal from 'sweetalert2';

export const WaitersModal = ({id = "",name = "", lastname = "", username = "", password = "", button = "", onWaiterUpdate}) => {
    const [waiterName, setWaiterName] = useState(name);
    const [waiterId, setWaiterId] = useState(id);
    const [waiterLastname, setWaiterLatname] = useState(lastname);
    const [waiterUsername, setWaiterUsername] = useState(username);
    const [waiterPassword, setWaiterPassword] = useState(password);
    const [action, setAction] = useState(button);

    useEffect(() => {
      setWaiterName(name);
      setWaiterId(id);
      setWaiterLatname(lastname);
      setWaiterUsername(username);
      setWaiterPassword(password);
      setAction(button);
    }, [name, id, lastname, username, password, button]);

    const setInputValue = (e) => {
      switch (e.target.name) {
        case 'name':
          setWaiterName(e.target.value);
          break;
        case 'lastname':
          setWaiterLatname(e.target.value);
          break;
        case 'username':
          setWaiterUsername(e.target.value);
          break;
        case 'password':
          setWaiterPassword(e.target.value);
          break;
        default:
          return;
      }
    };

    useEffect(() => {
      const modalElement = document.getElementById('modalWaiters');

      const resetModal = () => {
        setWaiterId("");
        setWaiterName("");
        setWaiterLatname("");
        setWaiterPassword("");
        setWaiterUsername("");
        setAction("");
      };

      modalElement.addEventListener('hidden.bs.modal', resetModal);

      return () => {
        modalElement.removeEventListener('hidden.bs.modal', resetModal);
      };
    }, []);

    const handleEditOrCreate = async (action) => {
      const url = action === "edit"
        ? `https://easyorder-backend-3.onrender.com/api/v1/user/${waiterId}`
        : `https://easyorder-backend-3.onrender.com/api/v1/user`;

      const method = action === "edit" ? 'PATCH' : 'POST';

      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("userToken")}`
          },
          body: JSON.stringify({
            username: waiterUsername,
            name: waiterName,
            password: waiterPassword,
            lastname: waiterLastname,
            role: action === "edit" ? undefined : "edddd5fe-b693-4009-8592-209aeb5668e6"
          })
        });
        if (!response.ok) {
          throw new Error('La respuesta de la red no fue satisfactoria');
        }

        const data = await response.json();
        console.log(data);

        Swal.fire({
          title: "¡Éxito!",
          text: `Mesero ${action === "edit" ? "actualizado" : "creado"} correctamente.`,
          icon: "success",
        });

        if (onWaiterUpdate) {
          onWaiterUpdate();
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          title: "Error",
          text: `Hubo un problema al ${action === "edit" ? "actualizar" : "crear"} el mesero.`,
          icon: "error",
        });
      }
    };
  return (
    <>
        <section class="modal fade" id="modalWaiters" tabindex="-1" aria-labelledby="modalWaiters" aria-hidden="true">
      <article class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title fs-5 text-dark modal-title" id="modalWaiters">Meseros</h3>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form className='ModalForm'>
                <input name='username' type="text" required placeholder='Username' value={waiterUsername} onChange={setInputValue}/>
                <input name='password' type="text" required placeholder='Contraseña'value={waiterPassword} onChange={setInputValue}/>
                <input name='name' type="text" required placeholder='Nombre' value={waiterName} onChange={setInputValue}/>
                <input name='lastname' type="text" required placeholder='Apellido' value={waiterLastname} onChange={setInputValue}/>
                <div className='buttons-container'>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal" aria-label="Close" onClick={() => handleEditOrCreate(action)}>Guardar</button>
                </div>

            </form>
          </div>
        </div>
      </article>
  </section>
    </>
  )
}
