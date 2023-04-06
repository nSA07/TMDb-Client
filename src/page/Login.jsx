import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  name: yup.string(),
  password: yup.number(),
}).required();

export const Login = () => {
  const { 
    control,
    handleSubmit } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      password: ''
    }
  });
  const onSubmit = data => console.log(data);

  return (
    <div className="login">
        <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                rules={{
                  required: 'Name is require field'
                }}
                render={({ field, fieldState: {error} }) => (
                <>
                  <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" {...field} />
                  {error && <div style={{color: 'red'}}>{error.message}</div>}
                </>)}
            />
            <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Name is require field'
                }}
                render={({ field, fieldState: {error} }) => (
                  <>
                    <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" {...field} />
                    {error && <div style={{color: 'red'}}>{error.message}</div>}
                  </>)}
            />
            <Button
                variant="outlined"
                type="submit"
            >
                Login
            </Button>
        </form>
    </div>
  );
};
