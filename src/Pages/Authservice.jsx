const AuthService = {
    login: async (credentials) => {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (response.ok) {
        const userData = await response.json();
        return userData; // Make sure userData includes user type
      } else {
        throw new Error('Login failed');
      }
    },
    // Add other authentication-related functions as needed
  };
  
  export default AuthService;