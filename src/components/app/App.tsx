import './App.scss';
import Header from '../header/Header';
import CardForm from '../credit-card/CardForm';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <CardForm />
      </div>
    </>
  );
}

export default App;
