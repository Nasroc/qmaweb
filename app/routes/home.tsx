import type { Route } from "./+types/home";
import { Dashboard } from "../Dashboard/dashboard";
import NavBar from "../navbar/nav";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quantum Martial Arts" },
    { name: "description", content: "Welcome to Quantum!" },
  ];
}

export default function Home() {
  return (
    <>
      <NavBar />
      <Dashboard />
    </>
);
}
