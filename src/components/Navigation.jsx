import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box as="nav" p={4} bg="gray.800" color="white">
      <Link as={RouterLink} to="/" mx={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/projects" mx={2}>
        Projects
      </Link>
      {Array.from({ length: 12 }, (_, i) => (
        <Link as={RouterLink} to={`/project/${i + 1}`} key={i} mx={2}>
          Project {i + 1}
        </Link>
      ))}
    </Box>
  );
}

export default Navigation;
