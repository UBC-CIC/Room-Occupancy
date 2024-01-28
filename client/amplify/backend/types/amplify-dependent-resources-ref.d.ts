export type AmplifyDependentResourcesAttributes = {
  "api": {
    "roomoccupancy": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
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