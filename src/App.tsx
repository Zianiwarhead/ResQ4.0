{/* Previous imports remain the same */}

function App() {
  // ... previous state and effects remain the same ...

  const handleLogin = async (data: { email: string; password: string }) => {
    // Simulate authentication
    setTimeout(() => {
      setIsAuthenticated(true);
      toast.success('Successfully logged in!');
      
      // Add default emergency contacts after login
      setContacts([
        {
          id: crypto.randomUUID(),
          name: 'Brian Murimi Muchiri',
          phone: '+254710593779',
          email: 'brian@example.com',
          relationship: 'Primary Contact'
        },
        {
          id: crypto.randomUUID(),
          name: 'Krystal Kamau',
          phone: '+254706643788',
          email: 'krystal@example.com',
          relationship: 'Secondary Contact'
        }
      ]);
    }, 1000);
  };

  // ... rest of the component remains exactly the same ...
}

export default App;