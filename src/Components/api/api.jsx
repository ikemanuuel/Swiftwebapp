import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000/'
})


export const registerUser = (formData) => {
    api.post('api/v1/accounts/user-create', formData)
    .then((response)=> {
       
    })
    .catch((error) => {
        console.log(error)
    })
}

export const loginUser = (formData, navigate) => {
    api.post('api/v1/accounts/token/login', formData)
      .then((response) => {
        const token = response.data.auth_token;
        localStorage.setItem("token", token);
  
        api.get('api/v1/accounts/me', {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
          }
        }).then((response) => {
          const userType = response.data.user_type;
  
          // Redirect based on user type
          switch (userType) {
            case 'Admin':
              navigate('/dashboard');
              break;
            case 'Cashier':
              navigate('/cashdashboard');
              break;
            case 'AnotherUserType':
              navigate('/another-user-type-dashboard');
              break;
            // Add more cases for additional user types
  
            default:
              // Handle unexpected user types or scenarios
              console.error("Unexpected user type:", userType);
              break;
          }
        })
  
      }).catch((error) => {
        console.log(error);
        // Handle login failure
      });
  };
  



export const fetchAccountRequest = (setAccountRequests) => {
    const token = localStorage.getItem("token")
    api.get('api/v1/accounts/account-requests', {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
           } 
    }).then((response) => {
        setAccountRequests(response.data)
      
    }).catch((error)=>{
        console.log(error)
    })
}

export const fetchRegisteredAccount = (setRegisteredAccounts) => {
    const token = localStorage.getItem("token")
    api.get('api/v1/accounts/registered-accounts', {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
           } 
    }).then((response) => {
        setRegisteredAccounts(response.data)
        console.log("fetch",response);
        setData("");
          setSuccess(
            "Successfully Registered!\nplease check your email\n  for activation!"
          );
        
    }).catch((error)=>{
        console.log(error)
    })
}


export const acceptAccountRequest = (id) => {
    const token = localStorage.getItem("token")
    api.patch(`api/v1/accounts/accept-account-request/${id}/`, {}, {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
        } 
    }).then((response) => {
        window.location.reload()
    }).catch((error) =>{
        console.log(error)
    })
}

export const declineAccountRequest = (id) => {
    const token = localStorage.getItem("token")
    api.patch(`api/v1/accounts/decline-account-request/${id}/`, {}, {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
        } 
    }).then((response) => {
        window.location.reload()
    }).catch((error) =>{
        console.log(error)
    })
}

export const activateAccount = (id) => {
    const token = localStorage.getItem("token")
    api.patch(`api/v1/accounts/activate-account/${id}/`, {}, {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
        } 
    }).then((response) => {
        window.location.reload()
    }).catch((error) =>{
        console.log(error)
    })
}

export const deactivateAccount = (id) => {
    const token = localStorage.getItem("token")
    api.patch(`api/v1/accounts/deactivate-account/${id}/`, {}, {
        headers: {
            Authorization: `Token ${token}`,
            "Content-Type": 'application/json'
        } 
    }).then((response) => {
        window.location.reload()
    }).catch((error) =>{
        console.log(error)
    })
}