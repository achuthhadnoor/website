"use client";
import { useEffect, useState } from "react";

const Scramble = ({ value }: { value: string }) => {
  const [text, setText] = useState(value);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  function randomChars(length: number) {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join("");
  }
  async function scramble(input: string) {
    let prefix = "";
    for (let index = 0; index < input.length; index++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(index);
      setText(prefix + randomChars(input.length - prefix.length));
    }
  }
  const startScrambling = (text: string) => {
    scramble(text);
    // setTimeout(() => console.log("Submitted"), text.length * 50);
  };
  useEffect(() => {
    startScrambling(value);
  }, []);

  return <>{text}</>;
};

export default Scramble;
