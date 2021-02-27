import React from 'react';
import { useForm } from 'react-hook-form';
import FormTextField from "./components/FornTextField/FormTextField";

const App: React.FC = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data: any) => {
    const http = new XMLHttpRequest()
    const url = 'test.php'
    http.open('GET', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(data)

    console.log('QWE');

    http.onload = function () {
      // do something to response
      // eslint-disable-next-line react/no-this-in-sfc
      console.log(this.responseText);
    };

    http.onreadystatechange = () => {
      console.log('http', http.response);




      // if(http.readyState === 4 && http.status === 200) {
      //   alert(http.responseText);
      // }
    }
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <h1>Оформление заказа222222222w</h1>
      <input name="firstName" ref={register({ required: true, maxLength: 20 })} />
      <FormTextField label="Email" errors={{}} />

      <input type="submit" />
    </form>
  );
};

export default App;
