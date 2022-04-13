<<<<<<< HEAD
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    } else {
      return {};
    }
  }
=======
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.token }; // for Spring Boot back-end
    } else {
      return {};
    }
  }
>>>>>>> ebfd4258418cc50828d3b35c9aa9be5a4de1ee6f
  