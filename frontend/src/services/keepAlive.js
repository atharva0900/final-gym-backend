import { BASE_URL } from "../mainUrl";

export const keepBackendAlive = () => {
  setInterval(
    () => {
      fetch(`${BASE_URL}/health`)
        .then(() => console.log("Backend Pinged"))
        .catch(() => console.log("Backend slepping or unreachable"));
    },
    5 * 60 * 1000,
  );
};
