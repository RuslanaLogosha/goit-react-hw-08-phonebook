// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';

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
  const authCredentials = useSelector(state => state.auth.user);

  const { register, handleSubmit } = useForm();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleFormSubmit = ({ name, email, password }) => {
    // e.preventDefault();
    console.log(name);
    console.log(authCredentials);
    dispatch(authOperations.register(name, email, password));
    // setName('');
    // setEmail('');
    // setPassword('');
  };

  return (
    <div>
      <h1>Страница регистрации</h1>

      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        style={styles.form}
        autoComplete="off"
      >
        <label style={styles.label}>
          Имя
          <input
            type="text"
            name="name"
            // value={name}
            ref={register}
            // onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Почта
          <input
            type="email"
            name="email"
            // value={email}
            ref={register}
            // onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          Пароль
          <input
            type="password"
            name="password"
            // value={password}
            ref={register}
            // onChange={handleChange}
          />
        </label>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}
