import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';
import FormContainer from '../components/FormComponents/FormContainer';
import Form from '../components/FormComponents/Form';
import Input from '../components/FormComponents/Input';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = data => {
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
        <label style={styles.label}>
          Имя
          <Input type="text" name="name" ref={register} />
        </label>

        <label style={styles.label}>
          Почта
          <Input type="email" name="email" ref={register} />
        </label>

        <label style={styles.label}>
          Пароль
          <Input type="password" name="password" ref={register} />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </Form>
    </FormContainer>
  );
}
