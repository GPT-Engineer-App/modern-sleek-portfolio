import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function Project() {
  const { projectId } = useParams();
  return (
    <Box>
      <Heading>Project {projectId}</Heading>
      <p>Details about project {projectId}...</p>
    </Box>
  );
}

export default Project;
