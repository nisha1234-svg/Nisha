
'use client';

function Page() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',          
    textAlign: 'center',
    flexDirection: 'column',  
    fontFamily: 'sans-serif',
  };

  return (
    <div style={containerStyle}>
      <h1>This is my Home page</h1>
      
    </div>
  );
}

export default Page;