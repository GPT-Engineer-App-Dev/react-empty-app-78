import { Container, Box, Heading, VStack, Button } from "@chakra-ui/react";
import { SupabaseAuthUI, useSupabaseAuth } from "../integrations/supabase/auth.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { session, logout } = useSupabaseAuth();
  const navigate = useNavigate();

  if (session) {
    navigate("/");
  }

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box p={8} maxWidth="500px" borderWidth={1} borderRadius={8} boxShadow="lg">
        <VStack spacing={4}>
          <Heading as="h1" size="lg">Login</Heading>
          <SupabaseAuthUI />
          {session && <Button onClick={logout}>Logout</Button>}
        </VStack>
      </Box>
    </Container>
  );
};

export default Login;