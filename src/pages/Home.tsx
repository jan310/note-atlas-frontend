import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';

export default function Home() {
  const { logout } = useAuth0();

  return (
    <Button
      variant="contained"
      onClick={() =>
        logout({ logoutParams: { returnTo: 'http://localhost:5173/login' } })
      }
    >
      Log out
    </Button>
  );
}
