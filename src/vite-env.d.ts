/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare global {
  function fetchAPI(date: Date): string[];
  function submitAPI(formData: {
    name: string;
    date: string;
    time: string;
    guests: number;
    occasion: string;
  }): boolean;
}

export {};
