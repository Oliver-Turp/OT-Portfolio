export default function isValidLink(text) {
  const regexMatch = text.match(
    /https?:\/\/[a-z]+\.[a-z]+(?:\/[a-zA-Z0-9]*)*(?:\.[a-z]+)?/g
  );
  if (!regexMatch) return false;
  return regexMatch[0] === text;
}

// console.log(isValidLink('https://dk.c/dkie/asdf...d')) //false
