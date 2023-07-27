import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Kryteria zaliczenia
// Użyj tego szablonu projektu React jako punktu wyjścia dla swojej aplikacji.
// https://github.com/goitacademy/react-homework-template#readme
// Stworzone repozytorium goit-react-hw-06-phonebook
// Przy oddawaniu zadania domowego znajdują się w nim odnośniki do: oryginalnych plików i roboczej strony projektu na GitHub Pages.
// W stanie Redux przechowywany jest minimalny wymagany zestaw danych.
// Po włączeniu kodu zadania, na konsoli nie ma błędów i ostrzeżeń.
// Dla każdego komponentu stworzony został folder z plikiem komponentu React i plikiem stylów.
// Dla komponentu opisane są propTypes.
// Wykorzystywana jest biblioteka Redux Toolkit.
