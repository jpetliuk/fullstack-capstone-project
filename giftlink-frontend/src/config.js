const config = {
   backendUrl: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000",
};

console.log(`backendUrl in config.js: ${config.backendUrl}`);
export { config as urlConfig };
