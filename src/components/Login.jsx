import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';
import '../components/Login.css';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isRegistering) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('User registered:', userCredential.user);
          navigate('/'); 
        })
        .catch((error) => {
          console.error('Error registering:', error);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log('User signed in:', userCredential.user);
          navigate('/'); 
        })
        .catch((error) => {
          console.error('Error signing in:', error);
        });
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User signed in with Google:', result.user);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  };

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('User signed in with GitHub:', result.user);
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error signing in with GitHub:', error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">{isRegistering ? 'Register' : 'Login'}</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="login-input"
          />
          <button type="submit" className="primary-button">{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</button>
        </form>
        <button onClick={handleGoogleSignIn} className="secondary-button">Inicia sesión con Google</button>
        <button onClick={handleGithubSignIn} className="secondary-button">Inicia sesión con GitHub</button>
        <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-button">
          {isRegistering ? 'Ya tienes una cuenta? Inicia Sesión' : 'Todavia no tienes cuenta? Registrate'}
        </button>
      </div>
    </div>
  );
}