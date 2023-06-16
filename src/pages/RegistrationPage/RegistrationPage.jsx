import { useState } from 'react';
import {
  RegistrationForm,
  RegistrationFormLabel,
  RegistrationSection,
} from './RegistrationPage.styles';
import { useDispatch, useSelector } from 'react-redux';
import { registrateUser } from 'store/operations';

function RegistrationPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const errorMessage = useSelector(state => state.auth.errorMessage);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const sendedObj = {
      name,
      email,
      password,
    };
    dispatch(registrateUser(sendedObj));
  };

  return (
    <RegistrationSection>
      <h2 style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px'}}>Registration page</h2>
      <RegistrationForm action="" onSubmit={onFormSubmit}>
        <RegistrationFormLabel>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={({ target: { value } }) => setName(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={({ target: { value } }) => setEmail(value)}
          />
        </RegistrationFormLabel>
        <RegistrationFormLabel>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={({ target: { value } }) => setPassword(value)}
          />
        </RegistrationFormLabel>
        {errorMessage && <p style={{color:'red'}}>This user already exist</p>}
        <button>Registration</button>
      </RegistrationForm>
    </RegistrationSection>
  );
}

export default RegistrationPage;