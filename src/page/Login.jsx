import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';

export const Login = () => {
  const { control, handleSubmit } = useForm({
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
                render={({ field }) => <TextField fullWidth id="outlined-basic" label="Username" variant="outlined" {...field} />}
            />
            <Controller
                name="password"
                control={control}
                render={({ field }) => <TextField fullWidth id="outlined-basic" label="Password" variant="outlined" {...field} />}
            />
            <Button
                variant="outlined"
                type="submit"
            >
                Primary
            </Button>
        </form>
    </div>
  );
};
