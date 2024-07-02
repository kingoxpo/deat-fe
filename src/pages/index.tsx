import { useAuthStore } from '../stores/useAuthStore';

const Home = () => {
  const token = useAuthStore((state) => state.token);

  return (
    <div>
      <h1>Home Page</h1>
      {token ? (
        <p>Logged in with token: {token}</p>
      ) : (
        <p>Please log in to see your details.</p>
      )}
    </div>
  );
};

export default Home;
