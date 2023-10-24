import React, { useState } from 'react';
import "../common/styles/Signup.css";

const  SignUpForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    celular: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar los datos del formulario al servidor o realizar otras acciones necesarias.
    console.log(formData);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="container-fluid">
        <div className=''>
            <h2>Registrate ahora</h2>
        <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
      </div>

      <div>
        <label>Apellidos:</label>
        <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
      </div>

      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>

      <div>
        <label>Contraseña:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>

      <div>
        <label>Número de celular:</label>
        <input type="tel" name="celular" value={formData.celular} onChange={handleChange} required />
      </div>

      <button type="submit">Registrarse</button>
    </form>
        </div>


    </div>
  );
}

export default SignUpForm;
