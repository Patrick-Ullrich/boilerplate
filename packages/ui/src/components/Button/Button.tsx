import * as React from "react";
import { Button } from "@chakra-ui/react";

export const CounterButton = () => {
  const [count, setCount] = React.useState(0);
  return <Button onClick={() => setCount((c) => c + 1)}>count {count}</Button>;
};
