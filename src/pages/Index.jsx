import React from "react";
import { Box, Container, Grid, GridItem, Heading, Image, Text, VStack, Button, useColorModeValue } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";

const artworks = [
  {
    id: 1,
    title: "Sunset Bliss",
    artist: "Alice Hart",
    price: "0.5 ETH",
    image: "https://images.unsplash.com/photo-1422493757035-1e5e03968f95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBwYWludGluZyUyMGJ5JTIwQWxpY2UlMjBIYXJ0fGVufDB8fHx8MTcxNTA1NTg3MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "The Lonely Tree",
    artist: "Bob Smith",
    price: "0.3 ETH",
    image: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb25lbHklMjB0cmVlJTIwcGFpbnRpbmclMjBieSUyMEJvYiUyMFNtaXRofGVufDB8fHx8MTcxNTA1NTg3M3ww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Dreamscape",
    artist: "Cathy May",
    price: "0.8 ETH",
    image: "https://images.unsplash.com/photo-1579783928621-7a13d66a62d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkcmVhbXNjYXBlJTIwcGFpbnRpbmclMjBieSUyMENhdGh5JTIwTWF5fGVufDB8fHx8MTcxNTA1NTg3OHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const bg = useColorModeValue("gray.50", "gray.800");

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          Fine Art Digital Marketplace
        </Heading>
        <Text>Welcome to the exclusive marketplace for digital editions of fine art. Discover and collect unique digital artworks.</Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {artworks.map((art) => (
            <GridItem key={art.id} w="100%" bg={bg} boxShadow="md" rounded="lg" overflow="hidden">
              <Image src={art.image} alt={art.title} boxSize="100%" objectFit="cover" />
              <Box p={5}>
                <Text fontWeight="bold" fontSize="xl">
                  {art.title}
                </Text>
                <Text fontSize="md">by {art.artist}</Text>
                <Button leftIcon={<FaEthereum />} colorScheme="teal" variant="solid" mt={3}>
                  Buy for {art.price}
                </Button>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </VStack>
    </Container>
  );
};

export default Index;
