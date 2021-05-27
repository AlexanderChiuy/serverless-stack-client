const config = {
  s3: {
    REGION: "us-east-2",
    BUCKET: "notes-app-images",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://v4vxqitvx8.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_HiPFmD4C1",
    APP_CLIENT_ID: "2r3n9tvejov4ba9uu8q78cgho2",
    IDENTITY_POOL_ID: "us-east-2:88de9895-dce5-464c-8ad6-a58c02e24266",
  },
};

export default config;