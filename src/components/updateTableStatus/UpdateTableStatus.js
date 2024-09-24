export const updateTableStatus = async (id, newStatus) => {
    try {
        const response = await fetch(`https://easyorder-backend-3.onrender.com/api/v1/tables/${id}/status`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
        });

        if (!response.ok) {
        throw new Error('Error al actualizar el estado');
        }

        return await response.json();
    } catch (error) {
      console.error('Error en la actualización:', error);
      return null;
    }
  };