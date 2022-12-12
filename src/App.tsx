import { Text } from "@chakra-ui/react";
import KanbanBoard from "./components/Board";

export const App = () => (
  <div>
    <Text fontSize="2xl" padding="5" fontWeight="bold" fontStyle="italic">
      Roda
    </Text>
    <KanbanBoard />
  </div>
);
