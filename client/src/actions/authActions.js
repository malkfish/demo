import axios from 'axios';

// Register User
export const loginUser = () => {
    axios
      .post('/api/users/login')
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };