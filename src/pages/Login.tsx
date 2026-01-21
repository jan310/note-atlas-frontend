import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Stack, Typography } from '@mui/material';
import logo from '../assets/logo.png';

export default function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'grey.50',
        px: 2,
        pt: { xs: 8, sm: 12 },
      }}
    >
      <Stack spacing={3} alignItems="center" textAlign="center" maxWidth={520}>
        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            component="img"
            src={logo}
            alt="Note Atlas logo"
            sx={{ width: 72, height: 72, objectFit: 'contain' }}
          />
          <Typography variant="h3" fontWeight={600}>
            Note Atlas
          </Typography>
        </Stack>
        <Typography variant="body1" color="text.secondary">
          Easily organize and manage your book notes with Note Atlas.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => loginWithRedirect()}
          sx={{ px: 6, textTransform: 'none' }}
        >
          Login
        </Button>
      </Stack>
    </Box>
  );
}
