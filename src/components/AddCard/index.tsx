import { Flex, Text, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddCard({ addCard }: { addCard: (title: string) => void }) {
  const [title, setTitle] = useState<string>("");

  return (
    <Flex w="60%" p="5" alignItems="center">
      <Text flex="1" textAlign="center">
        Tarefa:
      </Text>
      <Input
        type="text"
        flex="4"
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <Button
        flex="1"
        marginX="3"
        bgColor="blue.400"
        color="white"
        onClick={() => {
          setTitle("");
          addCard(title);
        }}
      >
        Adicionar Tarefa
      </Button>
    </Flex>
  );
}
