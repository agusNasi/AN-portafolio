import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { getError } from '../utils';

export default function FormContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [summary, setSummary] = useState('');
  const [message, setMessage] = useState('');

  async function contact(ev) {
    ev.preventDefault();
    try {
      await axios.post('/contact', {
        name,
        email,
        summary,
        message,
      });
      toast.success('Su mensaje fue enviado exitosamente!');
      setName('');
      setEmail('');
      setSummary('');
      setMessage('');
    } catch (error) {
      toast.error(getError(error));
    }
  }

  return (
    <>
      <ToastContainer position="bottom-center" limit={1} />
      <h3 className="titulo-seccion">Contacto</h3>
      <div className="contenedor-form">
        <form onSubmit={contact}>
          <div className="fila mitad">
            <input
              type="text"
              name="Nombre"
              placeholder="Nombre Completo"
              className="input-mitad"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Direccion de Email"
              className="input-mitad"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              required
            />
          </div>
          <div className="fila">
            <input
              type="text"
              name="Asunto"
              placeholder="Tema"
              className="input-full"
              value={summary}
              onChange={(ev) => setSummary(ev.target.value)}
            />
          </div>
          <div className="fila">
            <textarea
              name="Mensaje"
              id=""
              cols="30"
              rows="10"
              placeholder="Mensaje"
              className="input-full"
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
            ></textarea>
          </div>
          <div className="container_btn-enviar">
            <button className="btn-enviar">Enviar mensaje</button>
          </div>
        </form>
      </div>
    </>
  );
}
