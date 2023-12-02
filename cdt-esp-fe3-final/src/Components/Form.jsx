import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../css/styles.css'


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm();

  const [form, setForm] = useState(false);
  const [fullName, setFullName] = useState("");

  const onSubmit = (data) => {
    setForm(true);
    setFullName(data.fullName);
  };

  const resetForm = () => {
    setForm(false);
    setFullName("");
    reset();
  }

  return (
    <div className="Form">
      {form ? (
        <div>
          <p>{`${fullName},Gracias, en breve te contactaremos`}</p>
          <div className="BtnSend">
            <button onClick={resetForm}>Limpiar Formulario</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className='formx'>
            Nombre completo:
            <input
              {...register("fullName", {
                required: "Campo requerido",
                minLength: {
                  value: 5,
                  message: "Verifique la información ingresada",
                },
              })}
              onChange={(e) => setValue("fullName", e.target.value)}
            />
          </label>
          {errors.fullName && <p>{errors.fullName.message}</p>}

          <label className='form2'>
            Email:
            <input
              {...register("email", {
                required: "Campo requerido",
                pattern: {
                  value: /^(([^<>()\\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Verifique la información ingresada",
                },
              })}
            />
          </label>
          {errors.email?.message && <p>{errors.email.message}</p>}
          <div className="BtnSend">
            <button type="submit">Enviar</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;

