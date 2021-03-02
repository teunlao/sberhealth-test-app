import { FormSchema } from '../context/DataContext';

interface RequestResponse {
  success: boolean;
}

// eslint-disable-next-line import/prefer-default-export
const sendFormData = (data: FormSchema): Promise<RequestResponse> =>
  new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    const url = 'test.php';
    http.open('POST', url, true);
    http.setRequestHeader('Content-type', 'application/json');
    http.send(JSON.stringify(data));

    http.onload = () => {
      resolve(JSON.parse(http.responseText));
    };
    http.onerror = (error) => {
      reject(error);
    };
  });

const api = {
  sendFormData
}

export default api
