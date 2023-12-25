import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: "./schema.graphql",
  documents: ["./app/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./app/_types/generated.ts": {
      plugins: [      
        "typescript",
        "typescript-operations",
        "typescript-urql"],
    },
  },
};

export default config;