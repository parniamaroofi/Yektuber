module.exports = {
  petstore: {
    input: "https://apiresulto.hoodadtechnology.ir/swagger/v1/swagger.json", // مسیر فایل OpenAPI یا URL
    output: {
      mode: "single", // or 'split' for multiple files
      target: "./src/api/generated/api.ts", // مسیر خروجی فایل تولید شده
      client: "axios", // یا 'fetch'
      mutator: {
        path: "./src/api/axiosInstance.ts",
        name: "customAxiosInstance",
      },
    },
  },
};
