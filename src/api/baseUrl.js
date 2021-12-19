export default function getBaseUrl() {
  const inDevelopment = window.location.hostname.toLowerCase() === "localhost";
  return inDevelopment ? "http://localhost:3001/" : "/";
}
