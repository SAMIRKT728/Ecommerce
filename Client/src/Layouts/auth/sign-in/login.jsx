import { useState } from "react";
import { Typography, Input, Button, Card } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import AlertaContenido from "../../../components/Alerts/alert";
import { Link } from 'react-router-dom';



export function LoginForm() {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  let rutaHome = "/"
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '', type: '' });


  const handleSubmit = async (ev) =>{
    ev.preventDefault();

    if (email === '' || password === '' ){
      setAlert({
        open: true,
        message: "Rellenar todos los campos ",
        type: 'error'
      });
        return;
    }

    try{
      const url = 'http://localhost:3001/api/auth/signIn/';
      let credentials = {email, password};
      const res = await axios.post(url,credentials);
      const token = res.data.data.token;
      localStorage.setItem('jw-token', token);
      setAlert({
        open: true,
        message: "Logueo exitoso",
        type: 'success'
      });
      setTimeout(()=>{
        navigate(rutaHome);
      }, 1500)
    } catch (error){
      setAlert({
        open: true,
        message: "Usuario no existe: " + (error.response ? error.response.data : error.message),
        type: 'error'
      });    }

  }

  return (
    <section className="flex h-screen">
   
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            Sign In
          </Typography>
          <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
            Ingresa tu correo electrónico y contraseña para iniciar sesión
          </Typography>
          <AlertaContenido
        open={alert.open}
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ ...alert, open: false })}
      />
          <form onSubmit={handleSubmit} action="#" className="mx-auto text-left">
            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className="mb-2 block font-medium text-gray-900"
                >
                  Password
                </Typography>
              </label>
              <Input
                size="lg"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                labelProps={{
                  className: "hidden",
                }}
                className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <EyeIcon className="h-5 w-5" />
                    ) : (
                      <EyeSlashIcon className="h-5 w-5" />
                    )}
                  </i>
                }
              />
            </div>
            <Button type="submit" color="gray" size="lg" className="mt-6" fullWidth>
              sign in
            </Button>
            <div className="!mt-4 flex justify-end">
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                variant="small"
                className="font-medium"
              >
                ¿olvidaste la contraseña?
              </Typography>
            </div>
            <Button
              variant="outlined"
              size="lg"
              className="mt-6 flex h-12 items-center justify-center gap-2"
              fullWidth
            >
              <img
                src={`https://www.material-tailwind.com/logos/logo-google.png`}
                alt="google"
                className="h-6 w-6"
              />{" "}
              Iniciar sesion con google
            </Button>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal"
            >
              No Registrado?{" "}
              <Link to="/sign-up" className="font-medium text-gray-900">
                Crear una cuenta
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

export default LoginForm;
