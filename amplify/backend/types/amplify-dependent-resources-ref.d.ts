export type AmplifyDependentResourcesAttributes = {
    "function": {
        "SaveLinkLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "ListUserLinksLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "DependenciesLayer": {
            "Arn": "string"
        },
        "LinksLockerAuthPostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        },
        "ScheduleReminderLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "OnConnectWebsocketLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "OnDisconnectWebsocketLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "SendWebNotficationLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "NotificationLambda": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "auth": {
        "userPoolGroups": {
            "GuestUsersGroupRole": "string",
            "AuthenticatedUsersGroupRole": "string"
        },
        "LinksLockerAuth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string",
            "AppClientSecret": "string",
            "CreatedSNSRole": "string"
        }
    },
    "api": {
        "LinksLockerAPI": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    },
    "storage": {
        "LinksTable": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "SortKeyName": "string",
            "SortKeyType": "string",
            "Region": "string"
        },
        "WebSocketConnectionIdTable": {
            "Name": "string",
            "Arn": "string",
            "StreamArn": "string",
            "PartitionKeyName": "string",
            "PartitionKeyType": "string",
            "Region": "string"
        }
    },
    "sns": {
        "ReminderNotificationTopic": {
            "Arn": "string",
            "Name": "string"
        }
    },
    "custom": {
        "LinksLockerWebsocketAPI": {
            "ApiId": "string",
            "ApiName": "string",
            "Endpoint": "string",
            "WebSocketURI": "string",
            "WebSocketConnectionBaseURL": "string"
        }
    }
}