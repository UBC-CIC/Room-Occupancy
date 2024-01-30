export type AmplifyDependentResourcesAttributes = {
  "api": {
    "CamListREST": {
      "ApiId": "string",
      "ApiName": "string",
      "RootUrl": "string"
    },
    "roomoccupancy": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "function": {
    "camListLambda": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "cg22dynamo": {
      "Arn": "string",
      "Name": "string",
      "PartitionKeyName": "string",
      "PartitionKeyType": "string",
      "Region": "string",
      "StreamArn": "string"
    },
    "clientstorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}