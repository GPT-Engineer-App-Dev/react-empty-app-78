import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Index = () => {
  const navigate = useNavigate();
  const { session, logout } = useSupabaseAuth();

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
      {!session ? (
          <Button onClick={() => navigate("/login")}>Login</Button>
        ) : (
          <Button onClick={logout}>Logout</Button>
        )}
      </VStack>
    </Container>
  );
};

export default Index;