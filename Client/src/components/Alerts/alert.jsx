import React from "react";
import { Alert, Button, Typography } from "@material-tailwind/react";

function Icon({ type }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      {type === "success" ? (
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      ) : (
        <path
          fillRule="evenodd"
          d="M4.5 12a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm8.97-3.97a.75.75 0 00-1.44 0l-2.25 9a.75.75 0 001.44.44l2.25-9zM12 14a.75.75 0 100-1.5A.75.75 0 0012 14z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
}

export function AlertaContenido({ open, message, type, onClose }) {
  return (
    <Alert
      open={open}
      className="max-w-screen-md"
      icon={<Icon type={type} />}
      onClose={onClose}
    >
      <Typography variant="h5" color="white">
        {type === "success" ? "Success" : "Error"}
      </Typography>
      <Typography color="white" className="mt-2 font-normal">
        {message}
      </Typography>
    </Alert>
  );
}

export default AlertaContenido;
