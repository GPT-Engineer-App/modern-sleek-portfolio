import { Container, Box, VStack, Text, Heading, Image, IconButton, HStack, useColorMode, useColorModeValue, Link } from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MotionBox = motion(Box);

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const containerBg = useColorModeValue("white", "gray.700");
  const containerColor = useColorModeValue("black", "white");
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index === selected ? null : index);
  };

  const projects = Array.from({ length: 12 }, (_, i) => ({
    title: `Project ${i + 1}`,
    description: `Description for project ${i + 1}`,
    image: `https://via.placeholder.com/150?text=Project+${i + 1}`,
  }));

  useEffect(() => {
    const shapes = document.querySelectorAll(".shape");
    shapes.forEach((shape) => {
      shape.addEventListener("click", () => {
        shape.style.transform = `translate(${Math.random() * 100}px, ${Math.random() * 100}px)`;
      });
    });
  }, []);

  return (
    <Container maxW="container.2xl" p={8} position="relative">
      <HStack justifyContent="space-between" mb={8}>
        <Heading as="h1" size="lg">
          Architectural & Interior Design Portfolio
        </Heading>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </HStack>

      <Box className="shape" position="absolute" top="10%" left="10%" width="100px" height="100px" bg="rgba(255, 255, 255, 0.2)" borderRadius="50%" backdropFilter="blur(10px)" zIndex="-1"></Box>
      <Box className="shape" position="absolute" top="30%" left="50%" width="150px" height="150px" bg="rgba(255, 255, 255, 0.2)" borderRadius="50%" backdropFilter="blur(10px)" zIndex="-1"></Box>
      <Box className="shape" position="absolute" top="50%" left="80%" width="200px" height="200px" bg="rgba(255, 255, 255, 0.2)" borderRadius="50%" backdropFilter="blur(10px)" zIndex="-1"></Box>

      <VStack spacing={12}>
        {projects.map((project, index) => (
          <MotionBox key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleSelect(index)} bg={selected === index ? "teal.500" : containerBg} color={selected === index ? "white" : containerColor} cursor="pointer" width="100%">
            <Link href={`/project/${index + 1}`} width="100%">
              <HStack spacing={4}>
                <Image src={project.image} alt={project.title} boxSize="100px" objectFit="cover" borderRadius="md" />
                <VStack align="start">
                  <Heading as="h3" size="md">
                    {project.title}
                  </Heading>
                  <Text>{project.description}</Text>
                </VStack>
              </HStack>
            </Link>
          </MotionBox>
        ))}
      </VStack>

      <HStack spacing={4} mt={8}>
        <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} as="a" href="https://www.linkedin.com" target="_blank" />
        <IconButton aria-label="GitHub" icon={<FaGithub />} as="a" href="https://www.github.com" target="_blank" />
        <IconButton aria-label="Email" icon={<FaEnvelope />} as="a" href="mailto:example@example.com" />
      </HStack>
    </Container>
  );
};

export default Index;
