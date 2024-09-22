import Swal from "sweetalert2"

export const useDelete = async (id, url, onDeleteSuccess) => {
    Swal.fire({
      title: "¿Deseas eliminar?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
              'Content-Type': 'application/json',
            },
          });
  
          if (response.ok) {
            Swal.fire({
              title: "¡Eliminado!",
              text: "Eliminado con éxito.",
              icon: "success",
            });
  
            if (onDeleteSuccess) {
              onDeleteSuccess();
            }
          } else {
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al eliminar.",
              icon: "error",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: "Ocurrió un error al intentar eliminar la mesa.",
            icon: "error",
          });
        }
      }
    });
  };