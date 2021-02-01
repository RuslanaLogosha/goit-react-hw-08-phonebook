import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';
import FormContainer from '../components/FormComponents/FormContainer';
import Form from '../components/FormComponents/Form';
import Input from '../components/FormComponents/Input';
import PrimaryButton from '../components/FormComponents/PrimaryButton';

const styles = {
  form: {
    width: 320,
  },
  // input: {
  //   disply: 'flex',
  // },
  // label: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   marginBottom: 15,
  // },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = data => {
    console.log(data);
    dispatch(authOperations.register(data));
  };

  return (
    <FormContainer>
      <h1>Страница регистрации</h1>

      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        style={styles.form}
        autoComplete="off"
      >
        <Input
          // style={styles.input}
          type="text"
          name="name"
          label="Name"
          ref={register}
        />

        <Input type="email" name="email" label="Email" ref={register} />

        <Input
          type="password"
          name="password"
          label="Password"
          ref={register}
        />

        <PrimaryButton type="submit">Зарегистрироваться</PrimaryButton>
      </Form>
    </FormContainer>
  );
}
