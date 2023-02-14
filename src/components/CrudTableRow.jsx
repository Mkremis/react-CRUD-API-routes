import React from 'react';
import { useNavigate } from 'react-router-dom';

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  const navigate = useNavigate();
  let { name, constellation, id } = el;
  const handleEdit = () => {
    setDataToEdit(el);
    navigate(`/editar/${el.id}`);
  };
  return (
    <tr>
      <td>{name}</td>
      <td>{constellation}</td>
      <td>
        <button onClick={handleEdit}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
