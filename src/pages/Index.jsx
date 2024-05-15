import { Container, Box, VStack, Text, Heading, Image, IconButton, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const colorModeIcon = useColorModeValue(<FaMoon />, <FaSun />);
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index === selected ? null : index);
  };

  const projects = [
    { title: "Modern Villa", description: "A luxurious modern villa with an open floor plan and stunning views.", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB2aWxsYXxlbnwwfHx8fDE3MTU3NDQ4NDF8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Urban Apartment", description: "A sleek urban apartment designed for comfort and style.", image: "https://images.unsplash.com/photo-1668584054035-f5ba7d426401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFwYXJ0bWVudHxlbnwwfHx8fDE3MTU3NDQ4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
    { title: "Office Space", description: "A tech-savvy office space with innovative design elements.", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBzcGFjZXxlbnwwfHx8fDE3MTU3NDQ4NDJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  ];

  return (
    <Container maxW="container.xl" p={4}>
      <HStack justifyContent="space-between" mb={8}>
        <Heading as="h1" size="lg">
          Architectural & Interior Design Portfolio
        </Heading>
        <IconButton aria-label="Toggle color mode" icon={colorModeIcon} onClick={toggleColorMode} />
      </HStack>

      <VStack spacing={8}>
        {projects.map((project, index) => (
          <MotionBox key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleSelect(index)} bg={selected === index ? "teal.500" : "white"} color={selected === index ? "white" : "black"} cursor="pointer" width="100%">
            <HStack spacing={4}>
              <Image src={project.image} alt={project.title} boxSize="100px" objectFit="cover" borderRadius="md" />
              <VStack align="start">
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
                <Text>{project.description}</Text>
              </VStack>
            </HStack>
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
