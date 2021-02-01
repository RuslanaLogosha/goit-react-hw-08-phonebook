import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { useForm } from 'react-hook-form';
import FormContainer from '../components/FormComponents/FormContainer';
import Form from '../components/FormComponents/Form';
import Input from '../components/FormComponents/Input';
import PrimaryButton from '../components/FormComponents/PrimaryButton';
import PageHeader from '../components/HeaderMUI/PageHeaderMUI';

export default function RegisterView() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = data => {
    console.log(data);
    dispatch(authOperations.register(data));
  };

  return (
    <FormContainer>
      <PageHeader title="Страница регистрации" />

      <Form onSubmit={handleSubmit(handleFormSubmit)} autoComplete="off">
        <Input type="text" name="name" label="Name" ref={register} />

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
