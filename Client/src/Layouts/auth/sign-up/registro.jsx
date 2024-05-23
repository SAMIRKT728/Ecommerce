import { Typography, Input, Button, Checkbox } from "@material-tailwind/react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import AlertaContenido from "../../../components/Alerts/alert";
import { Link } from 'react-router-dom';


export function RegisterForm() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', type: '' });

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (username === '' || email === '' || password === '' || !acceptedTerms) {
      setAlert({
        open: true,
        message: "Rellenar todos los campos y aceptar los términos y condiciones",
        type: 'error'
      });
      return;
    }

    try {
      const url = 'http://localhost:3001/api/auth/signUp/';
      let datos = { username, email, password };
      await axios.post(url, datos);
      setAlert({
        open: true,
        message: "Registro exitoso",
        type: 'success'
      });
      setTimeout(() => {
        navigate("/sign-in");
      }, 1500);
    } catch (error) {
      setAlert({
        open: true,
        message: "Error al registrar: " + (error.response ? error.response.data : error.message),
        type: 'error'
      });
    }
  };

  return (

    <section className="flex h-screen">

<div className="w-1/2 flex items-center justify-center p-8">
<div className="w-full max-w-md">

      <Typography variant="h4" className="text-blue-gray-900">
        Sign Up
      </Typography>
      <Typography className="mt-1 text-gray-700">
        ¡Encantado de conocerlo! Ingresa tus datos para registrarte.
      </Typography>

      <AlertaContenido
        open={alert.open}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, open: false })}
      />
      <form onSubmit={handleSubmit} className="mx-auto text-left">
        <div className="flex flex-col gap-6 mb-1">
          <Typography variant="h6" className="-mb-3 text-blue-gray-900">
            Nombre
          </Typography>
          <Input
            placeholder="Nombre"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <Typography variant="h6" className="-mb-3 text-blue-gray-900">
            Email
          </Typography>
          <Input
            placeholder="name@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
          <Typography variant="h6" className="-mb-3 text-blue-gray-900">
            Password
          </Typography>
          <Input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          />
        </div>
        <div className="inline-flex items-center">
          <Checkbox
            id="remember"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            label={
              <span className="font-light text-gray-700 cursor-pointer select-none">
                Acepto los
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Términos y condiciones
                </a>
              </span>
            }
          />
        </div>
        <Button
          color="gray"
          className="mt-6 block w-full py-3"
          type="submit"
        >
          Sign up
        </Button>
        <Typography className="mt-4 text-center text-gray-700">
          Tienes una cuenta?
          <Link to="/sign-in" className="font-medium text-gray-900">
            Sign In
          </Link>
        </Typography>
      </form>
      </div>
    </div>
    <div  className="w-1/2 flex items-center justify-center bg-gray-100 rounded-3xl " >
        <img
          src="https://i.pinimg.com/564x/e7/1f/72/e71f723f691c092d1c6454c66605a17e.jpg" 
          alt="description"
          className="h-full w-full rounded-3xl"
    
        />
      </div>
    </section>

  );
}

export default RegisterForm;
