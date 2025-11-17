export default {
    "scalars": [
        1,
        2,
        3,
        13,
        15,
        16,
        17,
        18,
        20,
        22,
        25,
        36,
        37,
        38,
        40,
        46,
        51,
        53,
        56,
        61,
        70,
        78,
        83,
        91,
        96,
        98,
        109,
        111,
        112,
        120,
        122,
        128,
        130,
        131,
        134,
        135,
        136,
        144,
        145,
        148,
        149,
        150,
        159,
        168,
        170,
        172,
        179,
        180,
        217,
        227,
        236,
        285,
        291,
        294,
        298,
        301,
        302,
        306,
        307,
        308,
        319,
        330,
        333,
        337,
        338,
        339,
        340,
        341,
        342,
        350,
        353,
        362,
        365,
        369,
        370,
        377,
        379,
        380,
        385,
        411,
        416,
        425,
        426,
        429,
        432
    ],
    "types": {
        "AccessRule": {
            "disallowed": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ActiveFeatureFlag": {},
        "ActivePlatformFlag": {},
        "ActiveServiceFeatureFlag": {},
        "AdoptionInfo": {
            "adoptionLevel": [
                96
            ],
            "createdAt": [
                40
            ],
            "deltaLevel": [
                96
            ],
            "id": [
                109
            ],
            "matchedIcpEmail": [
                333
            ],
            "monthlyEstimatedUsage": [
                96
            ],
            "numConfigFile": [
                112
            ],
            "numCronSchedule": [
                112
            ],
            "numDeploys": [
                112
            ],
            "numEnvs": [
                112
            ],
            "numFailedDeploys": [
                112
            ],
            "numHealthcheck": [
                112
            ],
            "numIconConfig": [
                112
            ],
            "numRegion": [
                112
            ],
            "numReplicas": [
                112
            ],
            "numRootDirectory": [
                112
            ],
            "numSeats": [
                112
            ],
            "numServices": [
                112
            ],
            "numVariables": [
                112
            ],
            "numWatchPatterns": [
                112
            ],
            "totalCores": [
                96
            ],
            "totalDisk": [
                96
            ],
            "totalNetwork": [
                96
            ],
            "updatedAt": [
                40
            ],
            "workspace": [
                430
            ],
            "__typename": [
                333
            ]
        },
        "AggregatedUsage": {
            "measurement": [
                130
            ],
            "tags": [
                132
            ],
            "value": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "AllDomains": {
            "customDomains": [
                26
            ],
            "serviceDomains": [
                314
            ],
            "__typename": [
                333
            ]
        },
        "ApiToken": {
            "displayToken": [
                333
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ApiTokenCreateInput": {
            "name": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ApiTokenRateLimit": {
            "remainingPoints": [
                112
            ],
            "resetsAt": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "AppliedByMember": {
            "avatar": [
                333
            ],
            "email": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "username": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "BanReasonHistory": {
            "actor": [
                384
            ],
            "banReason": [
                333
            ],
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "__typename": [
                333
            ]
        },
        "BaseEnvironmentOverrideInput": {
            "baseEnvironmentOverrideId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "BigInt": {},
        "BillingPeriod": {
            "end": [
                40
            ],
            "start": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "Boolean": {},
        "Builder": {},
        "CDNProvider": {},
        "CanvasConfig": {},
        "CertificatePublicData": {
            "domainNames": [
                333
            ],
            "expiresAt": [
                40
            ],
            "fingerprintSha256": [
                333
            ],
            "issuedAt": [
                40
            ],
            "keyType": [
                122
            ],
            "__typename": [
                333
            ]
        },
        "CertificateStatus": {},
        "CnameCheck": {
            "link": [
                333
            ],
            "message": [
                333
            ],
            "status": [
                22
            ],
            "__typename": [
                333
            ]
        },
        "CnameCheckStatus": {},
        "Container": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "migratedAt": [
                40
            ],
            "plugin": [
                174
            ],
            "pluginId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Credit": {
            "amount": [
                96
            ],
            "createdAt": [
                40
            ],
            "customerId": [
                333
            ],
            "id": [
                109
            ],
            "memo": [
                333
            ],
            "type": [
                25
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "CreditType": {},
        "CustomDomain": {
            "cnameCheck": [
                21
            ],
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "domain": [
                333
            ],
            "edgeId": [
                333
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "status": [
                28
            ],
            "targetPort": [
                112
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "CustomDomainCreateInput": {
            "domain": [
                333
            ],
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "targetPort": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "CustomDomainStatus": {
            "cdnProvider": [
                17
            ],
            "certificateStatus": [
                20
            ],
            "certificates": [
                19
            ],
            "dnsRecords": [
                39
            ],
            "__typename": [
                333
            ]
        },
        "Customer": {
            "appliedCredits": [
                96
            ],
            "billingAddress": [
                30
            ],
            "billingEmail": [
                333
            ],
            "billingPeriod": [
                14
            ],
            "creditBalance": [
                96
            ],
            "credits": [
                31,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "currentUsage": [
                96
            ],
            "defaultPaymentMethod": [
                166
            ],
            "defaultPaymentMethodId": [
                333
            ],
            "hasExhaustedFreePlan": [
                15
            ],
            "id": [
                109
            ],
            "invoices": [
                33
            ],
            "isPrepaying": [
                15
            ],
            "isTrialing": [
                15
            ],
            "isUsageSubscriber": [
                15
            ],
            "isWithdrawingToCredits": [
                15
            ],
            "planLimitOverride": [
                169
            ],
            "remainingUsageCreditBalance": [
                96
            ],
            "state": [
                340
            ],
            "stripeCustomerId": [
                333
            ],
            "subscriptions": [
                34
            ],
            "supportedWithdrawalPlatforms": [
                425
            ],
            "taxIds": [
                35
            ],
            "trialDaysRemaining": [
                112
            ],
            "usageLimit": [
                381
            ],
            "workspace": [
                430
            ],
            "__typename": [
                333
            ]
        },
        "CustomerAddress": {
            "city": [
                333
            ],
            "country": [
                333
            ],
            "line1": [
                333
            ],
            "line2": [
                333
            ],
            "name": [
                333
            ],
            "postalCode": [
                333
            ],
            "state": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "CustomerCreditsConnection": {
            "edges": [
                32
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "CustomerCreditsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                24
            ],
            "__typename": [
                333
            ]
        },
        "CustomerInvoice": {
            "amountDue": [
                96
            ],
            "amountPaid": [
                96
            ],
            "hostedURL": [
                333
            ],
            "invoiceId": [
                333
            ],
            "items": [
                336
            ],
            "lastPaymentError": [
                333
            ],
            "paymentIntentStatus": [
                333
            ],
            "pdfURL": [
                333
            ],
            "periodEnd": [
                333
            ],
            "periodStart": [
                333
            ],
            "reissuedInvoiceFrom": [
                333
            ],
            "reissuedInvoiceOf": [
                333
            ],
            "status": [
                333
            ],
            "subscriptionId": [
                333
            ],
            "total": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "CustomerSubscription": {
            "billingCycleAnchor": [
                40
            ],
            "cancelAt": [
                333
            ],
            "cancelAtPeriodEnd": [
                15
            ],
            "couponId": [
                333
            ],
            "discounts": [
                335
            ],
            "id": [
                333
            ],
            "items": [
                336
            ],
            "latestInvoiceId": [
                333
            ],
            "nextInvoiceCurrentTotal": [
                112
            ],
            "nextInvoiceDate": [
                333
            ],
            "status": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "CustomerTaxId": {
            "id": [
                333
            ],
            "type": [
                333
            ],
            "value": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DNSRecordPurpose": {},
        "DNSRecordStatus": {},
        "DNSRecordType": {},
        "DNSRecords": {
            "currentValue": [
                333
            ],
            "fqdn": [
                333
            ],
            "hostlabel": [
                333
            ],
            "purpose": [
                36
            ],
            "recordType": [
                38
            ],
            "requiredValue": [
                333
            ],
            "status": [
                37
            ],
            "zone": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DateTime": {},
        "Deployment": {
            "canRedeploy": [
                15
            ],
            "canRollback": [
                15
            ],
            "createdAt": [
                40
            ],
            "creator": [
                42
            ],
            "deploymentStopped": [
                15
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "instances": [
                43
            ],
            "meta": [
                53
            ],
            "projectId": [
                333
            ],
            "service": [
                309
            ],
            "serviceId": [
                333
            ],
            "snapshotId": [
                333
            ],
            "sockets": [
                55
            ],
            "staticUrl": [
                333
            ],
            "status": [
                56
            ],
            "statusUpdatedAt": [
                40
            ],
            "suggestAddServiceDomain": [
                15
            ],
            "updatedAt": [
                40
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentCreator": {
            "avatar": [
                333
            ],
            "email": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentDeploymentInstance": {
            "id": [
                333
            ],
            "status": [
                51
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentEvent": {
            "completedAt": [
                40
            ],
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "payload": [
                45
            ],
            "step": [
                46
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentEventPayload": {
            "error": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentEventStep": {},
        "DeploymentInstanceExecution": {
            "completedAt": [
                40
            ],
            "createdAt": [
                40
            ],
            "deploymentId": [
                333
            ],
            "deploymentMeta": [
                53
            ],
            "id": [
                109
            ],
            "status": [
                51
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentInstanceExecutionCreateInput": {
            "serviceInstanceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentInstanceExecutionInput": {
            "deploymentId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentInstanceExecutionListInput": {
            "environmentId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentInstanceStatus": {},
        "DeploymentListInput": {
            "environmentId": [
                333
            ],
            "includeDeleted": [
                15
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "status": [
                57
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentMeta": {},
        "DeploymentSnapshot": {
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "updatedAt": [
                40
            ],
            "variables": [
                83
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentSocket": {
            "ipv6": [
                15
            ],
            "port": [
                112
            ],
            "processName": [
                333
            ],
            "updatedAt": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentStatus": {},
        "DeploymentStatusInput": {
            "in": [
                56
            ],
            "notIn": [
                56
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentTrigger": {
            "baseEnvironmentOverrideId": [
                333
            ],
            "branch": [
                333
            ],
            "checkSuites": [
                15
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "projectId": [
                333
            ],
            "provider": [
                333
            ],
            "repository": [
                333
            ],
            "serviceId": [
                333
            ],
            "validCheckSuites": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentTriggerCreateInput": {
            "branch": [
                333
            ],
            "checkSuites": [
                15
            ],
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "provider": [
                333
            ],
            "repository": [
                333
            ],
            "rootDirectory": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DeploymentTriggerUpdateInput": {
            "branch": [
                333
            ],
            "checkSuites": [
                15
            ],
            "repository": [
                333
            ],
            "rootDirectory": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DisplayConfig": {},
        "DockerComposeImport": {
            "errors": [
                333
            ],
            "patch": [
                70
            ],
            "__typename": [
                333
            ]
        },
        "Domain": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "domain": [
                333
            ],
            "edgeId": [
                333
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "targetPort": [
                112
            ],
            "updatedAt": [
                40
            ],
            "on_CustomDomain": [
                26
            ],
            "on_ServiceDomain": [
                314
            ],
            "__typename": [
                333
            ]
        },
        "DomainAvailable": {
            "available": [
                15
            ],
            "message": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "DomainWithStatus": {
            "cdnProvider": [
                17
            ],
            "certificateStatus": [
                20
            ],
            "certificates": [
                19
            ],
            "dnsRecords": [
                39
            ],
            "domain": [
                63
            ],
            "__typename": [
                333
            ]
        },
        "EgressGateway": {
            "ipv4": [
                333
            ],
            "region": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "EgressGatewayCreateInput": {
            "environmentId": [
                333
            ],
            "region": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "EgressGatewayServiceTargetInput": {
            "environmentId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Environment": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "deploymentTriggers": [
                72,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "deployments": [
                74,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "id": [
                109
            ],
            "isEphemeral": [
                15
            ],
            "meta": [
                76
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceInstances": [
                80,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "sourceEnvironment": [
                69
            ],
            "unmergedChangesCount": [
                112
            ],
            "updatedAt": [
                40
            ],
            "variables": [
                84,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "volumeInstances": [
                86,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentConfig": {},
        "EnvironmentCreateInput": {
            "applyChangesInBackground": [
                15
            ],
            "ephemeral": [
                15
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "skipInitialDeploys": [
                15
            ],
            "sourceEnvironmentId": [
                333
            ],
            "stageInitialChanges": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentDeploymentTriggersConnection": {
            "edges": [
                73
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentDeploymentTriggersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                58
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentDeploymentsConnection": {
            "edges": [
                75
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentDeploymentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                41
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentMeta": {
            "baseBranch": [
                333
            ],
            "branch": [
                333
            ],
            "prCommentId": [
                112
            ],
            "prNumber": [
                112
            ],
            "prRepo": [
                333
            ],
            "prTitle": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentPatch": {
            "appliedAt": [
                40
            ],
            "appliedBy": [
                10
            ],
            "createdAt": [
                40
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "lastAppliedError": [
                333
            ],
            "message": [
                333
            ],
            "status": [
                78
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentPatchStatus": {},
        "EnvironmentRenameInput": {
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentServiceInstancesConnection": {
            "edges": [
                81
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentServiceInstancesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                318
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentTriggersDeployInput": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentVariables": {},
        "EnvironmentVariablesConnection": {
            "edges": [
                85
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentVariablesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                399
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentVolumeInstancesConnection": {
            "edges": [
                87
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "EnvironmentVolumeInstancesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                408
            ],
            "__typename": [
                333
            ]
        },
        "EstimatedUsage": {
            "estimatedValue": [
                96
            ],
            "measurement": [
                130
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Event": {
            "action": [
                333
            ],
            "createdAt": [
                40
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "object": [
                333
            ],
            "payload": [
                120
            ],
            "project": [
                193
            ],
            "projectId": [
                333
            ],
            "severity": [
                91
            ],
            "__typename": [
                333
            ]
        },
        "EventFilterInput": {
            "action": [
                92
            ],
            "object": [
                92
            ],
            "__typename": [
                333
            ]
        },
        "EventSeverity": {},
        "EventStringListFilter": {
            "in": [
                333
            ],
            "notIn": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ExplicitOwnerInput": {
            "id": [
                333
            ],
            "type": [
                306
            ],
            "__typename": [
                333
            ]
        },
        "ExternalWorkspace": {
            "allowDeprecatedRegions": [
                15
            ],
            "avatar": [
                333
            ],
            "banReason": [
                333
            ],
            "createdAt": [
                40
            ],
            "currentSessionHasAccess": [
                15
            ],
            "customerId": [
                333
            ],
            "customerState": [
                340
            ],
            "discordRole": [
                333
            ],
            "hasBAA": [
                15
            ],
            "hasSAML": [
                15
            ],
            "id": [
                333
            ],
            "isTrialing": [
                15
            ],
            "name": [
                333
            ],
            "plan": [
                168
            ],
            "preferredRegion": [
                333
            ],
            "projects": [
                193
            ],
            "supportTierOverride": [
                333
            ],
            "teamId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "FeatureFlagToggleInput": {
            "flag": [
                1
            ],
            "__typename": [
                333
            ]
        },
        "Float": {},
        "FunctionRuntime": {
            "image": [
                333
            ],
            "latestVersion": [
                99
            ],
            "name": [
                98
            ],
            "versions": [
                99
            ],
            "__typename": [
                333
            ]
        },
        "FunctionRuntimeName": {},
        "FunctionRuntimeVersion": {
            "image": [
                333
            ],
            "tag": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "GitHubAccess": {
            "hasAccess": [
                15
            ],
            "isPublic": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "GitHubBranch": {
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "GitHubRepo": {
            "defaultBranch": [
                333
            ],
            "description": [
                333
            ],
            "fullName": [
                333
            ],
            "id": [
                112
            ],
            "installationId": [
                333
            ],
            "isPrivate": [
                15
            ],
            "name": [
                333
            ],
            "ownerAvatarUrl": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "GitHubRepoDeployInput": {
            "branch": [
                333
            ],
            "projectId": [
                333
            ],
            "repo": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "GitHubRepoUpdateInput": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "GitHubRepoWithoutInstallation": {
            "defaultBranch": [
                333
            ],
            "description": [
                333
            ],
            "fullName": [
                333
            ],
            "id": [
                112
            ],
            "isPrivate": [
                15
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "HerokuApp": {
            "id": [
                333
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "HerokuImportVariablesInput": {
            "environmentId": [
                333
            ],
            "herokuAppId": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "HttpLog": {
            "clientUa": [
                333
            ],
            "deploymentId": [
                333
            ],
            "deploymentInstanceId": [
                333
            ],
            "downstreamProto": [
                333
            ],
            "edgeRegion": [
                333
            ],
            "host": [
                333
            ],
            "httpStatus": [
                112
            ],
            "method": [
                333
            ],
            "path": [
                333
            ],
            "requestId": [
                333
            ],
            "responseDetails": [
                333
            ],
            "rxBytes": [
                112
            ],
            "srcIp": [
                333
            ],
            "timestamp": [
                333
            ],
            "totalDuration": [
                112
            ],
            "txBytes": [
                112
            ],
            "upstreamAddress": [
                333
            ],
            "upstreamErrors": [
                333
            ],
            "upstreamProto": [
                333
            ],
            "upstreamRqDuration": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "ID": {},
        "Incident": {
            "id": [
                333
            ],
            "message": [
                333
            ],
            "status": [
                111
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "IncidentStatus": {},
        "Int": {},
        "Integration": {
            "config": [
                120
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "IntegrationAuth": {
            "id": [
                109
            ],
            "integrations": [
                115,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "provider": [
                333
            ],
            "providerId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "IntegrationAuthIntegrationsConnection": {
            "edges": [
                116
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "IntegrationAuthIntegrationsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                113
            ],
            "__typename": [
                333
            ]
        },
        "IntegrationCreateInput": {
            "config": [
                120
            ],
            "integrationAuthId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "IntegrationUpdateInput": {
            "config": [
                120
            ],
            "integrationAuthId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "InviteCode": {
            "code": [
                333
            ],
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "project": [
                193
            ],
            "projectId": [
                333
            ],
            "role": [
                217
            ],
            "__typename": [
                333
            ]
        },
        "JSON": {},
        "JobApplicationCreateInput": {
            "email": [
                333
            ],
            "jobId": [
                333
            ],
            "name": [
                333
            ],
            "why": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "KeyType": {},
        "Log": {
            "attributes": [
                124
            ],
            "message": [
                333
            ],
            "severity": [
                333
            ],
            "tags": [
                125
            ],
            "timestamp": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "LogAttribute": {
            "key": [
                333
            ],
            "value": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "LogTags": {
            "deploymentId": [
                333
            ],
            "deploymentInstanceId": [
                333
            ],
            "environmentId": [
                333
            ],
            "pluginId": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "snapshotId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "LoginSessionAuthInput": {
            "code": [
                333
            ],
            "hostname": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Maintenance": {
            "id": [
                333
            ],
            "message": [
                333
            ],
            "status": [
                128
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "MaintenanceStatus": {},
        "Metric": {
            "ts": [
                112
            ],
            "value": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "MetricMeasurement": {},
        "MetricTag": {},
        "MetricTags": {
            "deploymentId": [
                333
            ],
            "deploymentInstanceId": [
                333
            ],
            "environmentId": [
                333
            ],
            "pluginId": [
                333
            ],
            "projectId": [
                333
            ],
            "region": [
                333
            ],
            "serviceId": [
                333
            ],
            "volumeId": [
                333
            ],
            "volumeInstanceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "MetricsResult": {
            "measurement": [
                130
            ],
            "tags": [
                132
            ],
            "values": [
                129
            ],
            "__typename": [
                333
            ]
        },
        "MonitorAlertResourceType": {},
        "MonitorStatus": {},
        "MonitorThresholdCondition": {},
        "MonitorThresholdConfig": {
            "condition": [
                136
            ],
            "measurement": [
                130
            ],
            "threshold": [
                96
            ],
            "type": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Mutation": {
            "apiTokenCreate": [
                333,
                {
                    "input": [
                        8,
                        "ApiTokenCreateInput!"
                    ]
                }
            ],
            "apiTokenDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "baseEnvironmentOverride": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        12,
                        "BaseEnvironmentOverrideInput!"
                    ]
                }
            ],
            "customDomainCreate": [
                26,
                {
                    "input": [
                        27,
                        "CustomDomainCreateInput!"
                    ]
                }
            ],
            "customDomainDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "customDomainUpdate": [
                15,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "id": [
                        333,
                        "String!"
                    ],
                    "targetPort": [
                        112
                    ]
                }
            ],
            "customerCreateFreePlanSubscription": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "customerTogglePayoutsToCredits": [
                15,
                {
                    "customerId": [
                        333,
                        "String!"
                    ],
                    "input": [
                        445,
                        "customerTogglePayoutsToCreditsInput!"
                    ]
                }
            ],
            "deploymentApprove": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentCancel": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutionCreate": [
                15,
                {
                    "input": [
                        48,
                        "DeploymentInstanceExecutionCreateInput!"
                    ]
                }
            ],
            "deploymentRedeploy": [
                41,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "usePreviousImageTag": [
                        15
                    ]
                }
            ],
            "deploymentRemove": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentRestart": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentRollback": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentStop": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerCreate": [
                58,
                {
                    "input": [
                        59,
                        "DeploymentTriggerCreateInput!"
                    ]
                }
            ],
            "deploymentTriggerDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggerUpdate": [
                58,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        60,
                        "DeploymentTriggerUpdateInput!"
                    ]
                }
            ],
            "dockerComposeImport": [
                62,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "skipStagingPatch": [
                        15
                    ],
                    "yaml": [
                        333,
                        "String!"
                    ]
                }
            ],
            "egressGatewayAssociationCreate": [
                66,
                {
                    "input": [
                        67,
                        "EgressGatewayCreateInput!"
                    ]
                }
            ],
            "egressGatewayAssociationsClear": [
                15,
                {
                    "input": [
                        68,
                        "EgressGatewayServiceTargetInput!"
                    ]
                }
            ],
            "emailChangeConfirm": [
                15,
                {
                    "nonce": [
                        333,
                        "String!"
                    ]
                }
            ],
            "emailChangeInitiate": [
                15,
                {
                    "newEmail": [
                        333,
                        "String!"
                    ]
                }
            ],
            "environmentCreate": [
                69,
                {
                    "input": [
                        71,
                        "EnvironmentCreateInput!"
                    ]
                }
            ],
            "environmentDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "environmentPatchCommit": [
                333,
                {
                    "commitMessage": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "patch": [
                        70
                    ]
                }
            ],
            "environmentRename": [
                69,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        79,
                        "EnvironmentRenameInput!"
                    ]
                }
            ],
            "environmentTriggersDeploy": [
                15,
                {
                    "input": [
                        82,
                        "EnvironmentTriggersDeployInput!"
                    ]
                }
            ],
            "fairUseAgree": [
                15,
                {
                    "agree": [
                        15,
                        "Boolean!"
                    ]
                }
            ],
            "featureFlagAdd": [
                15,
                {
                    "input": [
                        95,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "featureFlagRemove": [
                15,
                {
                    "input": [
                        95,
                        "FeatureFlagToggleInput!"
                    ]
                }
            ],
            "githubRepoDeploy": [
                333,
                {
                    "input": [
                        103,
                        "GitHubRepoDeployInput!"
                    ]
                }
            ],
            "githubRepoUpdate": [
                15,
                {
                    "input": [
                        104,
                        "GitHubRepoUpdateInput!"
                    ]
                }
            ],
            "herokuImportVariables": [
                112,
                {
                    "input": [
                        107,
                        "HerokuImportVariablesInput!"
                    ]
                }
            ],
            "integrationCreate": [
                113,
                {
                    "input": [
                        117,
                        "IntegrationCreateInput!"
                    ]
                }
            ],
            "integrationDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "integrationUpdate": [
                113,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        118,
                        "IntegrationUpdateInput!"
                    ]
                }
            ],
            "inviteCodeUse": [
                193,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "jobApplicationCreate": [
                15,
                {
                    "input": [
                        121,
                        "JobApplicationCreateInput!"
                    ],
                    "resume": [
                        377,
                        "Upload!"
                    ]
                }
            ],
            "loginSessionAuth": [
                15,
                {
                    "input": [
                        126,
                        "LoginSessionAuthInput!"
                    ]
                }
            ],
            "loginSessionCancel": [
                15,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "loginSessionConsume": [
                333,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "loginSessionCreate": [
                333
            ],
            "loginSessionVerify": [
                15,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "notificationDeliveriesMarkAsRead": [
                15,
                {
                    "deliveryIds": [
                        333,
                        "[String!]!"
                    ]
                }
            ],
            "observabilityDashboardCreate": [
                15,
                {
                    "input": [
                        153,
                        "ObservabilityDashboardCreateInput!"
                    ]
                }
            ],
            "observabilityDashboardReset": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "observabilityDashboardUpdate": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        162,
                        "[ObservabilityDashboardUpdateInput!]!"
                    ]
                }
            ],
            "passkeyDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "pluginCreate": [
                174,
                {
                    "input": [
                        177,
                        "PluginCreateInput!"
                    ]
                }
            ],
            "pluginDelete": [
                15,
                {
                    "environmentId": [
                        333
                    ],
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "pluginReset": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        304,
                        "ResetPluginInput!"
                    ]
                }
            ],
            "pluginResetCredentials": [
                333,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        303,
                        "ResetPluginCredentialsInput!"
                    ]
                }
            ],
            "pluginRestart": [
                174,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        178,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginStart": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        178,
                        "PluginRestartInput!"
                    ]
                }
            ],
            "pluginUpdate": [
                174,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        181,
                        "PluginUpdateInput!"
                    ]
                }
            ],
            "preferenceOverridesCreateUpdate": [
                15,
                {
                    "input": [
                        185,
                        "PreferenceOverridesCreateUpdateData!"
                    ]
                }
            ],
            "preferenceOverridesDestroyForResource": [
                15,
                {
                    "input": [
                        186,
                        "PreferenceOverridesDestroyData!"
                    ]
                }
            ],
            "preferencesUpdate": [
                187,
                {
                    "input": [
                        188,
                        "PreferencesUpdateData!"
                    ]
                }
            ],
            "privateNetworkCreateOrGet": [
                189,
                {
                    "input": [
                        190,
                        "PrivateNetworkCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointCreateOrGet": [
                191,
                {
                    "input": [
                        192,
                        "PrivateNetworkEndpointCreateOrGetInput!"
                    ]
                }
            ],
            "privateNetworkEndpointDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointRename": [
                15,
                {
                    "dnsName": [
                        333,
                        "String!"
                    ],
                    "id": [
                        333,
                        "String!"
                    ],
                    "privateNetworkId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "privateNetworksForEnvironmentDelete": [
                15,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectClaim": [
                193,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectCreate": [
                193,
                {
                    "input": [
                        194,
                        "ProjectCreateInput!"
                    ]
                }
            ],
            "projectDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInvitationAccept": [
                211,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInvitationCreate": [
                204,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        207,
                        "ProjectInvitee!"
                    ]
                }
            ],
            "projectInvitationDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInvitationResend": [
                204,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInviteUser": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        206,
                        "ProjectInviteUserInput!"
                    ]
                }
            ],
            "projectLeave": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectMemberRemove": [
                208,
                {
                    "input": [
                        209,
                        "ProjectMemberRemoveInput!"
                    ]
                }
            ],
            "projectMemberUpdate": [
                208,
                {
                    "input": [
                        210,
                        "ProjectMemberUpdateInput!"
                    ]
                }
            ],
            "projectScheduleDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteCancel": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectScheduleDeleteForce": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectTokenCreate": [
                333,
                {
                    "input": [
                        221,
                        "ProjectTokenCreateInput!"
                    ]
                }
            ],
            "projectTokenDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectTransfer": [
                15,
                {
                    "input": [
                        224,
                        "ProjectTransferInput!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectTransferConfirm": [
                15,
                {
                    "input": [
                        222,
                        "ProjectTransferConfirmInput!"
                    ]
                }
            ],
            "projectTransferInitiate": [
                15,
                {
                    "input": [
                        223,
                        "ProjectTransferInitiateInput!"
                    ]
                }
            ],
            "projectTransferToTeam": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        225,
                        "ProjectTransferToTeamInput!"
                    ]
                }
            ],
            "projectUpdate": [
                193,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        226,
                        "ProjectUpdateInput!"
                    ]
                }
            ],
            "providerAuthRemove": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "recoveryCodeGenerate": [
                287
            ],
            "recoveryCodeValidate": [
                15,
                {
                    "input": [
                        286,
                        "RecoveryCodeValidateInput!"
                    ]
                }
            ],
            "referralInfoUpdate": [
                288,
                {
                    "input": [
                        289,
                        "ReferralInfoUpdateInput!"
                    ]
                }
            ],
            "serviceConnect": [
                309,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        310,
                        "ServiceConnectInput!"
                    ]
                }
            ],
            "serviceCreate": [
                309,
                {
                    "input": [
                        311,
                        "ServiceCreateInput!"
                    ]
                }
            ],
            "serviceDelete": [
                15,
                {
                    "environmentId": [
                        333
                    ],
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceDisconnect": [
                309,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceDomainCreate": [
                314,
                {
                    "input": [
                        315,
                        "ServiceDomainCreateInput!"
                    ]
                }
            ],
            "serviceDomainDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceDomainUpdate": [
                15,
                {
                    "input": [
                        316,
                        "ServiceDomainUpdateInput!"
                    ]
                }
            ],
            "serviceDuplicate": [
                309,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceFeatureFlagAdd": [
                15,
                {
                    "input": [
                        317,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceFeatureFlagRemove": [
                15,
                {
                    "input": [
                        317,
                        "ServiceFeatureFlagToggleInput!"
                    ]
                }
            ],
            "serviceInstanceDeploy": [
                15,
                {
                    "commitSha": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "latestCommit": [
                        15
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceDeployV2": [
                333,
                {
                    "commitSha": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitsUpdate": [
                15,
                {
                    "input": [
                        320,
                        "ServiceInstanceLimitsUpdateInput!"
                    ]
                }
            ],
            "serviceInstanceRedeploy": [
                15,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceUpdate": [
                15,
                {
                    "environmentId": [
                        333
                    ],
                    "input": [
                        321,
                        "ServiceInstanceUpdateInput!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceRemoveUpstreamUrl": [
                309,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceUpdate": [
                309,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        328,
                        "ServiceUpdateInput!"
                    ]
                }
            ],
            "sessionDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "sharedVariableConfigure": [
                399,
                {
                    "input": [
                        331,
                        "SharedVariableConfigureInput!"
                    ]
                }
            ],
            "tcpProxyCreate": [
                343,
                {
                    "input": [
                        344,
                        "TCPProxyCreateInput!"
                    ]
                }
            ],
            "tcpProxyDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "templateClone": [
                351,
                {
                    "input": [
                        352,
                        "TemplateCloneInput!"
                    ]
                }
            ],
            "templateDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        355,
                        "TemplateDeleteInput!"
                    ]
                }
            ],
            "templateDeploy": [
                357,
                {
                    "input": [
                        356,
                        "TemplateDeployInput!"
                    ]
                }
            ],
            "templateDeployV2": [
                357,
                {
                    "input": [
                        359,
                        "TemplateDeployV2Input!"
                    ]
                }
            ],
            "templateGenerate": [
                351,
                {
                    "input": [
                        360,
                        "TemplateGenerateInput!"
                    ]
                }
            ],
            "templatePublish": [
                351,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        363,
                        "TemplatePublishInput!"
                    ]
                }
            ],
            "templateServiceSourceEject": [
                15,
                {
                    "input": [
                        366,
                        "TemplateServiceSourceEjectInput!"
                    ]
                }
            ],
            "templateUnpublish": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "trustedDomainCreate": [
                15,
                {
                    "input": [
                        441,
                        "WorkspaceTrustedDomainCreateInput!"
                    ]
                }
            ],
            "trustedDomainDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfoCreate": [
                287,
                {
                    "input": [
                        374,
                        "TwoFactorInfoCreateInput!"
                    ]
                }
            ],
            "twoFactorInfoDelete": [
                15
            ],
            "twoFactorInfoSecret": [
                375
            ],
            "twoFactorInfoValidate": [
                15,
                {
                    "input": [
                        376,
                        "TwoFactorInfoValidateInput!"
                    ]
                }
            ],
            "upsertSlackChannel": [
                15,
                {
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "usageLimitRemove": [
                15,
                {
                    "input": [
                        382,
                        "UsageLimitRemoveInput!"
                    ]
                }
            ],
            "usageLimitSet": [
                15,
                {
                    "input": [
                        383,
                        "UsageLimitSetInput!"
                    ]
                }
            ],
            "userBetaLeave": [
                15
            ],
            "userDelete": [
                15
            ],
            "userDiscordDisconnect": [
                15
            ],
            "userFlagsRemove": [
                15,
                {
                    "input": [
                        386,
                        "UserFlagsRemoveInput!"
                    ]
                }
            ],
            "userFlagsSet": [
                15,
                {
                    "input": [
                        387,
                        "UserFlagsSetInput!"
                    ]
                }
            ],
            "userProfileUpdate": [
                15,
                {
                    "input": [
                        394,
                        "UserProfileUpdateInput!"
                    ]
                }
            ],
            "userTermsUpdate": [
                384
            ],
            "variableCollectionUpsert": [
                15,
                {
                    "input": [
                        400,
                        "VariableCollectionUpsertInput!"
                    ]
                }
            ],
            "variableDelete": [
                15,
                {
                    "input": [
                        401,
                        "VariableDeleteInput!"
                    ]
                }
            ],
            "variableUpsert": [
                15,
                {
                    "input": [
                        402,
                        "VariableUpsertInput!"
                    ]
                }
            ],
            "volumeCreate": [
                406,
                {
                    "input": [
                        407,
                        "VolumeCreateInput!"
                    ]
                }
            ],
            "volumeDelete": [
                15,
                {
                    "volumeId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupCreate": [
                427,
                {
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupDelete": [
                427,
                {
                    "volumeInstanceBackupId": [
                        333,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupLock": [
                15,
                {
                    "volumeInstanceBackupId": [
                        333,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupRestore": [
                427,
                {
                    "volumeInstanceBackupId": [
                        333,
                        "String!"
                    ],
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleUpdate": [
                15,
                {
                    "kinds": [
                        411,
                        "[VolumeInstanceBackupScheduleKind!]!"
                    ],
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceUpdate": [
                15,
                {
                    "environmentId": [
                        333
                    ],
                    "input": [
                        413,
                        "VolumeInstanceUpdateInput!"
                    ],
                    "volumeId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeUpdate": [
                406,
                {
                    "input": [
                        417,
                        "VolumeUpdateInput!"
                    ],
                    "volumeId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "webhookCreate": [
                230,
                {
                    "input": [
                        420,
                        "WebhookCreateInput!"
                    ]
                }
            ],
            "webhookDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "webhookUpdate": [
                230,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        421,
                        "WebhookUpdateInput!"
                    ]
                }
            ],
            "workspaceDelete": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceInviteCodeCreate": [
                333,
                {
                    "input": [
                        436,
                        "WorkspaceInviteCodeCreateInput!"
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceInviteCodeUse": [
                430,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceLeave": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspacePermissionChange": [
                15,
                {
                    "input": [
                        438,
                        "WorkspacePermissionChangeInput!"
                    ]
                }
            ],
            "workspaceUpdate": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "input": [
                        442,
                        "WorkspaceUpdateInput!"
                    ]
                }
            ],
            "workspaceUpsertSlackChannel": [
                15,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceUserInvite": [
                15,
                {
                    "input": [
                        443,
                        "WorkspaceUserInviteInput!"
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceUserRemove": [
                15,
                {
                    "input": [
                        444,
                        "WorkspaceUserRemoveInput!"
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "Node": {
            "id": [
                109
            ],
            "on_AdoptionInfo": [
                4
            ],
            "on_ApiToken": [
                7
            ],
            "on_BanReasonHistory": [
                11
            ],
            "on_Container": [
                23
            ],
            "on_Credit": [
                24
            ],
            "on_Customer": [
                29
            ],
            "on_Deployment": [
                41
            ],
            "on_DeploymentEvent": [
                44
            ],
            "on_DeploymentInstanceExecution": [
                47
            ],
            "on_DeploymentSnapshot": [
                54
            ],
            "on_DeploymentTrigger": [
                58
            ],
            "on_Environment": [
                69
            ],
            "on_EnvironmentPatch": [
                77
            ],
            "on_Event": [
                89
            ],
            "on_Integration": [
                113
            ],
            "on_IntegrationAuth": [
                114
            ],
            "on_InviteCode": [
                119
            ],
            "on_NotificationDelivery": [
                140
            ],
            "on_NotificationInstance": [
                147
            ],
            "on_ObservabilityDashboard": [
                151
            ],
            "on_ObservabilityDashboardAlert": [
                152
            ],
            "on_ObservabilityDashboardItem": [
                154
            ],
            "on_ObservabilityDashboardItemInstance": [
                158
            ],
            "on_ObservabilityDashboardMonitor": [
                160
            ],
            "on_Passkey": [
                165
            ],
            "on_PlanLimitOverride": [
                169
            ],
            "on_Plugin": [
                174
            ],
            "on_PreferenceOverride": [
                184
            ],
            "on_Preferences": [
                187
            ],
            "on_Project": [
                193
            ],
            "on_ProjectPermission": [
                211
            ],
            "on_ProjectToken": [
                220
            ],
            "on_ProjectWebhook": [
                230
            ],
            "on_ProviderAuth": [
                233
            ],
            "on_ReferralInfo": [
                288
            ],
            "on_RefundRequest": [
                293
            ],
            "on_ReissuedInvoice": [
                300
            ],
            "on_Service": [
                309
            ],
            "on_ServiceInstance": [
                318
            ],
            "on_Session": [
                329
            ],
            "on_Team": [
                345
            ],
            "on_TeamPermission": [
                347
            ],
            "on_Template": [
                351
            ],
            "on_TemplateService": [
                364
            ],
            "on_UsageAnomaly": [
                378
            ],
            "on_UsageLimit": [
                381
            ],
            "on_User": [
                384
            ],
            "on_UserGithubRepo": [
                388
            ],
            "on_Variable": [
                399
            ],
            "on_Volume": [
                406
            ],
            "on_VolumeInstance": [
                408
            ],
            "on_VolumeInstanceBackupSchedule": [
                410
            ],
            "on_Withdrawal": [
                422
            ],
            "on_WithdrawalAccount": [
                423
            ],
            "on_Workspace": [
                430
            ],
            "on_WorkspaceIdentityProvider": [
                433
            ],
            "__typename": [
                333
            ]
        },
        "NotificationDelivery": {
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "notificationInstance": [
                147
            ],
            "readAt": [
                40
            ],
            "status": [
                144
            ],
            "type": [
                145
            ],
            "updatedAt": [
                40
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "NotificationDeliveryCreated": {
            "delivery": [
                140
            ],
            "type": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "NotificationDeliveryFilterInput": {
            "environmentId": [
                333
            ],
            "onlyUnread": [
                15
            ],
            "projectId": [
                333
            ],
            "status": [
                150
            ],
            "type": [
                145
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "NotificationDeliveryResolved": {
            "deliveryIds": [
                333
            ],
            "type": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "NotificationDeliveryStatus": {},
        "NotificationDeliveryType": {},
        "NotificationDeliveryUpdate": {
            "on_NotificationDeliveryCreated": [
                141
            ],
            "on_NotificationDeliveryResolved": [
                143
            ],
            "__typename": [
                333
            ]
        },
        "NotificationInstance": {
            "createdAt": [
                40
            ],
            "environmentId": [
                333
            ],
            "event": [
                89
            ],
            "eventId": [
                333
            ],
            "eventType": [
                333
            ],
            "id": [
                109
            ],
            "payload": [
                148
            ],
            "projectId": [
                333
            ],
            "resolvedAt": [
                40
            ],
            "resourceId": [
                333
            ],
            "resourceType": [
                333
            ],
            "serviceId": [
                333
            ],
            "severity": [
                149
            ],
            "status": [
                150
            ],
            "updatedAt": [
                40
            ],
            "volumeId": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "NotificationPayload": {},
        "NotificationSeverity": {},
        "NotificationStatus": {},
        "ObservabilityDashboard": {
            "id": [
                109
            ],
            "items": [
                158
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardAlert": {
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "resolvedAt": [
                40
            ],
            "resourceId": [
                333
            ],
            "resourceType": [
                134
            ],
            "status": [
                135
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardCreateInput": {
            "environmentId": [
                333
            ],
            "items": [
                162
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItem": {
            "config": [
                155
            ],
            "description": [
                333
            ],
            "id": [
                109
            ],
            "monitors": [
                160
            ],
            "name": [
                333
            ],
            "type": [
                159
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItemConfig": {
            "logsFilter": [
                333
            ],
            "measurements": [
                130
            ],
            "projectUsageProperties": [
                227
            ],
            "resourceIds": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItemConfigInput": {
            "logsFilter": [
                333
            ],
            "measurements": [
                130
            ],
            "projectUsageProperties": [
                227
            ],
            "resourceIds": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItemCreateInput": {
            "config": [
                156
            ],
            "description": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "type": [
                159
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItemInstance": {
            "dashboardItem": [
                154
            ],
            "displayConfig": [
                61
            ],
            "id": [
                109
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardItemType": {},
        "ObservabilityDashboardMonitor": {
            "alerts": [
                152,
                {
                    "endDate": [
                        40
                    ],
                    "startDate": [
                        40
                    ]
                }
            ],
            "config": [
                161
            ],
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardMonitorConfig": {
            "on_MonitorThresholdConfig": [
                137
            ],
            "__typename": [
                333
            ]
        },
        "ObservabilityDashboardUpdateInput": {
            "dashboardItem": [
                157
            ],
            "displayConfig": [
                61
            ],
            "id": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "OverrideInput": {
            "enabled": [
                15
            ],
            "name": [
                333
            ],
            "resource": [
                333
            ],
            "resourceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PageInfo": {
            "endCursor": [
                333
            ],
            "hasNextPage": [
                15
            ],
            "hasPreviousPage": [
                15
            ],
            "startCursor": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Passkey": {
            "aaguid": [
                333
            ],
            "backedUp": [
                15
            ],
            "createdAt": [
                40
            ],
            "credentialId": [
                333
            ],
            "deviceName": [
                333
            ],
            "deviceType": [
                333
            ],
            "displayName": [
                333
            ],
            "id": [
                109
            ],
            "lastUsedAt": [
                40
            ],
            "lastUsedDevice": [
                333
            ],
            "transports": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "PaymentMethod": {
            "card": [
                167
            ],
            "id": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PaymentMethodCard": {
            "brand": [
                333
            ],
            "country": [
                333
            ],
            "last4": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Plan": {},
        "PlanLimitOverride": {
            "config": [
                338
            ],
            "id": [
                109
            ],
            "__typename": [
                333
            ]
        },
        "PlatformFeatureFlag": {},
        "PlatformFeatureFlagStatus": {
            "flag": [
                170
            ],
            "rolloutPercentage": [
                112
            ],
            "status": [
                15
            ],
            "type": [
                172
            ],
            "__typename": [
                333
            ]
        },
        "PlatformFeatureFlagType": {},
        "PlatformStatus": {
            "incident": [
                110
            ],
            "isStable": [
                15
            ],
            "maintenance": [
                127
            ],
            "__typename": [
                333
            ]
        },
        "Plugin": {
            "containers": [
                175,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "deprecatedAt": [
                40
            ],
            "friendlyName": [
                333
            ],
            "id": [
                109
            ],
            "logsEnabled": [
                15
            ],
            "migrationDatabaseServiceId": [
                333
            ],
            "name": [
                180
            ],
            "project": [
                193
            ],
            "status": [
                179
            ],
            "variables": [
                182,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "PluginContainersConnection": {
            "edges": [
                176
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "PluginContainersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                23
            ],
            "__typename": [
                333
            ]
        },
        "PluginCreateInput": {
            "environmentId": [
                333
            ],
            "friendlyName": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PluginRestartInput": {
            "environmentId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PluginStatus": {},
        "PluginType": {},
        "PluginUpdateInput": {
            "friendlyName": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PluginVariablesConnection": {
            "edges": [
                183
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "PluginVariablesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                399
            ],
            "__typename": [
                333
            ]
        },
        "PreferenceOverride": {
            "enabled": [
                15
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "resource": [
                333
            ],
            "resourceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PreferenceOverridesCreateUpdateData": {
            "overrides": [
                163
            ],
            "__typename": [
                333
            ]
        },
        "PreferenceOverridesDestroyData": {
            "resource": [
                333
            ],
            "resourceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Preferences": {
            "buildFailedEmail": [
                15
            ],
            "changelogEmail": [
                15
            ],
            "communityEmail": [
                15
            ],
            "deployCrashedEmail": [
                15
            ],
            "ephemeralEnvironmentEmail": [
                15
            ],
            "id": [
                109
            ],
            "marketingEmail": [
                15
            ],
            "preferenceOverrides": [
                184
            ],
            "subprocessorUpdatesEmail": [
                15
            ],
            "usageEmail": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "PreferencesUpdateData": {
            "buildFailedEmail": [
                15
            ],
            "changelogEmail": [
                15
            ],
            "communityEmail": [
                15
            ],
            "deployCrashedEmail": [
                15
            ],
            "ephemeralEnvironmentEmail": [
                15
            ],
            "marketingEmail": [
                15
            ],
            "subprocessorUpdatesEmail": [
                15
            ],
            "token": [
                333
            ],
            "usageEmail": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "PrivateNetwork": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "dnsName": [
                333
            ],
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "networkId": [
                13
            ],
            "projectId": [
                333
            ],
            "publicId": [
                333
            ],
            "tags": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PrivateNetworkCreateOrGetInput": {
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "tags": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PrivateNetworkEndpoint": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "dnsName": [
                333
            ],
            "privateIps": [
                333
            ],
            "publicId": [
                333
            ],
            "serviceInstanceId": [
                333
            ],
            "tags": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PrivateNetworkEndpointCreateOrGetInput": {
            "environmentId": [
                333
            ],
            "privateNetworkId": [
                333
            ],
            "serviceId": [
                333
            ],
            "serviceName": [
                333
            ],
            "tags": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Project": {
            "baseEnvironment": [
                69
            ],
            "baseEnvironmentId": [
                333
            ],
            "botPrEnvironments": [
                15
            ],
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "deploymentTriggers": [
                196,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "deployments": [
                198,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "description": [
                333
            ],
            "environments": [
                200,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "expiredAt": [
                40
            ],
            "groups": [
                202,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "id": [
                109
            ],
            "isPublic": [
                15
            ],
            "isTempProject": [
                15
            ],
            "members": [
                208
            ],
            "name": [
                333
            ],
            "plugins": [
                212,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "prDeploys": [
                15
            ],
            "projectPermissions": [
                214,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "services": [
                218,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "subscriptionPlanLimit": [
                338
            ],
            "subscriptionType": [
                339
            ],
            "team": [
                345
            ],
            "teamId": [
                333
            ],
            "updatedAt": [
                40
            ],
            "volumes": [
                228,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "webhooks": [
                231,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "workspace": [
                430
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectCreateInput": {
            "defaultEnvironmentName": [
                333
            ],
            "description": [
                333
            ],
            "isMonorepo": [
                15
            ],
            "isPublic": [
                15
            ],
            "name": [
                333
            ],
            "prDeploys": [
                15
            ],
            "repo": [
                195
            ],
            "runtime": [
                236
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectCreateRepo": {
            "branch": [
                333
            ],
            "fullRepoName": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectDeploymentTriggersConnection": {
            "edges": [
                197
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectDeploymentTriggersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                58
            ],
            "__typename": [
                333
            ]
        },
        "ProjectDeploymentsConnection": {
            "edges": [
                199
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectDeploymentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                41
            ],
            "__typename": [
                333
            ]
        },
        "ProjectEnvironmentsConnection": {
            "edges": [
                201
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectEnvironmentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                69
            ],
            "__typename": [
                333
            ]
        },
        "ProjectGroupsConnection": {
            "edges": [
                203
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectGroupsConnectionEdge": {
            "cursor": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectInvitation": {
            "email": [
                333
            ],
            "expiresAt": [
                40
            ],
            "id": [
                109
            ],
            "inviter": [
                205
            ],
            "isExpired": [
                15
            ],
            "project": [
                234
            ],
            "__typename": [
                333
            ]
        },
        "ProjectInvitationInviter": {
            "email": [
                333
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectInviteUserInput": {
            "email": [
                333
            ],
            "link": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectInvitee": {
            "email": [
                333
            ],
            "role": [
                217
            ],
            "__typename": [
                333
            ]
        },
        "ProjectMember": {
            "avatar": [
                333
            ],
            "email": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "role": [
                217
            ],
            "__typename": [
                333
            ]
        },
        "ProjectMemberRemoveInput": {
            "projectId": [
                333
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectMemberUpdateInput": {
            "projectId": [
                333
            ],
            "role": [
                217
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectPermission": {
            "id": [
                109
            ],
            "projectId": [
                333
            ],
            "role": [
                217
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectPluginsConnection": {
            "edges": [
                213
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectPluginsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                174
            ],
            "__typename": [
                333
            ]
        },
        "ProjectProjectPermissionsConnection": {
            "edges": [
                215
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectProjectPermissionsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                211
            ],
            "__typename": [
                333
            ]
        },
        "ProjectResourceAccess": {
            "customDomain": [
                0
            ],
            "databaseDeployment": [
                0
            ],
            "deployment": [
                0
            ],
            "environment": [
                0
            ],
            "plugin": [
                0
            ],
            "__typename": [
                333
            ]
        },
        "ProjectRole": {},
        "ProjectServicesConnection": {
            "edges": [
                219
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectServicesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                309
            ],
            "__typename": [
                333
            ]
        },
        "ProjectToken": {
            "createdAt": [
                40
            ],
            "displayToken": [
                333
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "project": [
                193
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectTokenCreateInput": {
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectTransferConfirmInput": {
            "destinationWorkspaceId": [
                333
            ],
            "ownershipTransferId": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectTransferInitiateInput": {
            "memberId": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectTransferInput": {
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectTransferToTeamInput": {
            "teamId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectUpdateInput": {
            "baseEnvironmentId": [
                333
            ],
            "botPrEnvironments": [
                15
            ],
            "description": [
                333
            ],
            "isPublic": [
                15
            ],
            "name": [
                333
            ],
            "prDeploys": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "ProjectUsageProperty": {},
        "ProjectVolumesConnection": {
            "edges": [
                229
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectVolumesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                406
            ],
            "__typename": [
                333
            ]
        },
        "ProjectWebhook": {
            "filters": [
                333
            ],
            "id": [
                109
            ],
            "lastStatus": [
                112
            ],
            "projectId": [
                333
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ProjectWebhooksConnection": {
            "edges": [
                232
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ProjectWebhooksConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                230
            ],
            "__typename": [
                333
            ]
        },
        "ProviderAuth": {
            "email": [
                333
            ],
            "id": [
                109
            ],
            "isAuthEnabled": [
                15
            ],
            "metadata": [
                120
            ],
            "provider": [
                333
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PublicProjectInformation": {
            "id": [
                109
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "PublicProjectInvitation": {
            "on_InviteCode": [
                119
            ],
            "on_ProjectInvitation": [
                204
            ],
            "on_Node": [
                139
            ],
            "__typename": [
                333
            ]
        },
        "PublicRuntime": {},
        "PublicStats": {
            "totalDeploymentsLastMonth": [
                112
            ],
            "totalLogsLastMonth": [
                13
            ],
            "totalProjects": [
                112
            ],
            "totalRequestsLastMonth": [
                13
            ],
            "totalServices": [
                112
            ],
            "totalUsers": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "Query": {
            "adminVolumeInstancesForVolume": [
                408,
                {
                    "volumeId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "allPlatformFeatureFlags": [
                171
            ],
            "apiTokens": [
                239,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "buildLogs": [
                123,
                {
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "endDate": [
                        40
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ],
                    "startDate": [
                        40
                    ]
                }
            ],
            "changelogBlockImage": [
                333,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "customDomain": [
                26,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "customDomainAvailable": [
                64,
                {
                    "domain": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deployment": [
                41,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                241,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "id": [
                        333,
                        "String!"
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                243,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "input": [
                        50,
                        "DeploymentInstanceExecutionListInput!"
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "deploymentLogs": [
                123,
                {
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "endDate": [
                        40
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ],
                    "startDate": [
                        40
                    ]
                }
            ],
            "deploymentSnapshot": [
                54,
                {
                    "deploymentId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentTriggers": [
                245,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deployments": [
                247,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "input": [
                        52,
                        "DeploymentListInput!"
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "domainStatus": [
                65,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "domains": [
                6,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "egressGateways": [
                66,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "environment": [
                69,
                {
                    "id": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333
                    ]
                }
            ],
            "environmentLogs": [
                123,
                {
                    "afterDate": [
                        333
                    ],
                    "afterLimit": [
                        112
                    ],
                    "anchorDate": [
                        333
                    ],
                    "beforeDate": [
                        333
                    ],
                    "beforeLimit": [
                        112
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ]
                }
            ],
            "environmentPatch": [
                77,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "environmentPatches": [
                249,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "environmentStagedChanges": [
                77,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "environments": [
                251,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "isEphemeral": [
                        15
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "estimatedUsage": [
                88,
                {
                    "includeDeleted": [
                        15
                    ],
                    "measurements": [
                        130,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        333
                    ],
                    "workspaceId": [
                        333
                    ]
                }
            ],
            "events": [
                253,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "environmentId": [
                        333
                    ],
                    "filter": [
                        90
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "externalWorkspaces": [
                94,
                {
                    "projectId": [
                        333
                    ]
                }
            ],
            "functionRuntime": [
                97,
                {
                    "name": [
                        98,
                        "FunctionRuntimeName!"
                    ]
                }
            ],
            "functionRuntimes": [
                97
            ],
            "gitHubRepoAccessAvailable": [
                100,
                {
                    "fullRepoName": [
                        333,
                        "String!"
                    ]
                }
            ],
            "githubIsRepoNameAvailable": [
                15,
                {
                    "fullRepoName": [
                        333,
                        "String!"
                    ]
                }
            ],
            "githubRepo": [
                105,
                {
                    "fullRepoName": [
                        333,
                        "String!"
                    ]
                }
            ],
            "githubRepoBranches": [
                101,
                {
                    "owner": [
                        333,
                        "String!"
                    ],
                    "repo": [
                        333,
                        "String!"
                    ]
                }
            ],
            "githubRepos": [
                102
            ],
            "githubWritableScopes": [
                333
            ],
            "herokuApps": [
                106
            ],
            "httpLogs": [
                108,
                {
                    "afterDate": [
                        333
                    ],
                    "afterLimit": [
                        112
                    ],
                    "anchorDate": [
                        333
                    ],
                    "beforeDate": [
                        333
                    ],
                    "beforeLimit": [
                        112
                    ],
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "endDate": [
                        333
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ],
                    "startDate": [
                        333
                    ]
                }
            ],
            "integrationAuth": [
                114,
                {
                    "provider": [
                        333,
                        "String!"
                    ],
                    "providerId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "integrationAuths": [
                255,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "integrations": [
                257,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "inviteCode": [
                119,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "me": [
                384
            ],
            "metrics": [
                133,
                {
                    "averagingWindowSeconds": [
                        112
                    ],
                    "endDate": [
                        40
                    ],
                    "environmentId": [
                        333
                    ],
                    "groupBy": [
                        131,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        15
                    ],
                    "measurements": [
                        130,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        333
                    ],
                    "sampleRateSeconds": [
                        112
                    ],
                    "serviceId": [
                        333
                    ],
                    "startDate": [
                        40,
                        "DateTime!"
                    ],
                    "volumeId": [
                        333
                    ],
                    "volumeInstanceExternalId": [
                        333
                    ],
                    "workspaceId": [
                        333
                    ]
                }
            ],
            "node": [
                139,
                {
                    "id": [
                        109,
                        "ID!"
                    ]
                }
            ],
            "nodes": [
                139,
                {
                    "ids": [
                        109,
                        "[ID!]!"
                    ]
                }
            ],
            "notificationDeliveries": [
                259,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "filter": [
                        142
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "observabilityDashboards": [
                261,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "passkeys": [
                263,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "platformStatus": [
                173
            ],
            "plugin": [
                174,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "pluginLogs": [
                123,
                {
                    "endDate": [
                        40
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ],
                    "pluginId": [
                        333,
                        "String!"
                    ],
                    "startDate": [
                        40
                    ]
                }
            ],
            "preferences": [
                187,
                {
                    "token": [
                        333
                    ]
                }
            ],
            "privateNetworkEndpoint": [
                191,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "privateNetworkId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "privateNetworkEndpointNameAvailable": [
                15,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "prefix": [
                        333,
                        "String!"
                    ],
                    "privateNetworkId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "privateNetworks": [
                189,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "project": [
                193,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInvitation": [
                235,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInvitations": [
                204,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectInviteCode": [
                119,
                {
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "role": [
                        217,
                        "ProjectRole!"
                    ]
                }
            ],
            "projectMembers": [
                208,
                {
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectResourceAccess": [
                216,
                {
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projectToken": [
                220
            ],
            "projectTokens": [
                265,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "projects": [
                267,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "includeDeleted": [
                        15
                    ],
                    "last": [
                        112
                    ],
                    "userId": [
                        333
                    ],
                    "workspaceId": [
                        333
                    ]
                }
            ],
            "publicStats": [
                237
            ],
            "referralInfo": [
                288,
                {
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "regions": [
                295,
                {
                    "projectId": [
                        333
                    ]
                }
            ],
            "resourceAccess": [
                305,
                {
                    "explicitResourceOwner": [
                        93,
                        "ExplicitOwnerInput!"
                    ]
                }
            ],
            "service": [
                309,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceDomainAvailable": [
                64,
                {
                    "domain": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstance": [
                318,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceIsUpdatable": [
                15,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimitOverride": [
                319,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "serviceInstanceLimits": [
                319,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "sessions": [
                269,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "tcpProxies": [
                343,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "team": [
                345,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "teamTemplates": [
                271,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "teamId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "template": [
                351,
                {
                    "code": [
                        333
                    ],
                    "id": [
                        333
                    ],
                    "owner": [
                        333
                    ],
                    "repo": [
                        333
                    ]
                }
            ],
            "templateSourceForProject": [
                351,
                {
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "templates": [
                273,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "recommended": [
                        15
                    ],
                    "verified": [
                        15
                    ]
                }
            ],
            "templatesCount": [
                112
            ],
            "trustedDomains": [
                275,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "twoFactorInfo": [
                373
            ],
            "usage": [
                5,
                {
                    "endDate": [
                        40
                    ],
                    "groupBy": [
                        131,
                        "[MetricTag!]"
                    ],
                    "includeDeleted": [
                        15
                    ],
                    "measurements": [
                        130,
                        "[MetricMeasurement!]!"
                    ],
                    "projectId": [
                        333
                    ],
                    "startDate": [
                        40
                    ],
                    "workspaceId": [
                        333
                    ]
                }
            ],
            "userKickbackEarnings": [
                389,
                {
                    "userId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "userProfile": [
                391,
                {
                    "username": [
                        333,
                        "String!"
                    ]
                }
            ],
            "userTemplates": [
                277,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "variables": [
                83,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333
                    ],
                    "unrendered": [
                        15
                    ]
                }
            ],
            "variablesForServiceDeployment": [
                83,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ],
                    "serviceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "vercelInfo": [
                404
            ],
            "volumeInstance": [
                408,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupList": [
                409,
                {
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "volumeInstanceBackupScheduleList": [
                410,
                {
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "webhooks": [
                279,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "projectId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workflowStatus": [
                428,
                {
                    "workflowId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspace": [
                430,
                {
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceByCode": [
                430,
                {
                    "code": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceIdentityProviders": [
                281,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "workspaceTemplates": [
                283,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ],
                    "workspaceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "QueryApiTokensConnection": {
            "edges": [
                240
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryApiTokensConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                7
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentEventsConnection": {
            "edges": [
                242
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentEventsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                44
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentInstanceExecutionsConnection": {
            "edges": [
                244
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentInstanceExecutionsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                47
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentTriggersConnection": {
            "edges": [
                246
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentTriggersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                58
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentsConnection": {
            "edges": [
                248
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryDeploymentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                41
            ],
            "__typename": [
                333
            ]
        },
        "QueryEnvironmentPatchesConnection": {
            "edges": [
                250
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryEnvironmentPatchesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                77
            ],
            "__typename": [
                333
            ]
        },
        "QueryEnvironmentsConnection": {
            "edges": [
                252
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryEnvironmentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                69
            ],
            "__typename": [
                333
            ]
        },
        "QueryEventsConnection": {
            "edges": [
                254
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryEventsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                89
            ],
            "__typename": [
                333
            ]
        },
        "QueryIntegrationAuthsConnection": {
            "edges": [
                256
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryIntegrationAuthsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                114
            ],
            "__typename": [
                333
            ]
        },
        "QueryIntegrationsConnection": {
            "edges": [
                258
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryIntegrationsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                113
            ],
            "__typename": [
                333
            ]
        },
        "QueryNotificationDeliveriesConnection": {
            "edges": [
                260
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryNotificationDeliveriesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                140
            ],
            "__typename": [
                333
            ]
        },
        "QueryObservabilityDashboardsConnection": {
            "edges": [
                262
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryObservabilityDashboardsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                151
            ],
            "__typename": [
                333
            ]
        },
        "QueryPasskeysConnection": {
            "edges": [
                264
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryPasskeysConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                165
            ],
            "__typename": [
                333
            ]
        },
        "QueryProjectTokensConnection": {
            "edges": [
                266
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryProjectTokensConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                220
            ],
            "__typename": [
                333
            ]
        },
        "QueryProjectsConnection": {
            "edges": [
                268
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryProjectsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                193
            ],
            "__typename": [
                333
            ]
        },
        "QuerySessionsConnection": {
            "edges": [
                270
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QuerySessionsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                329
            ],
            "__typename": [
                333
            ]
        },
        "QueryTeamTemplatesConnection": {
            "edges": [
                272
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryTeamTemplatesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                351
            ],
            "__typename": [
                333
            ]
        },
        "QueryTemplatesConnection": {
            "edges": [
                274
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryTemplatesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                351
            ],
            "__typename": [
                333
            ]
        },
        "QueryTrustedDomainsConnection": {
            "edges": [
                276
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryTrustedDomainsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                371
            ],
            "__typename": [
                333
            ]
        },
        "QueryUserTemplatesConnection": {
            "edges": [
                278
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryUserTemplatesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                351
            ],
            "__typename": [
                333
            ]
        },
        "QueryWebhooksConnection": {
            "edges": [
                280
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryWebhooksConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                230
            ],
            "__typename": [
                333
            ]
        },
        "QueryWorkspaceIdentityProvidersConnection": {
            "edges": [
                282
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryWorkspaceIdentityProvidersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                433
            ],
            "__typename": [
                333
            ]
        },
        "QueryWorkspaceTemplatesConnection": {
            "edges": [
                284
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "QueryWorkspaceTemplatesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                351
            ],
            "__typename": [
                333
            ]
        },
        "RailpackInfo": {},
        "RecoveryCodeValidateInput": {
            "code": [
                333
            ],
            "twoFactorLinkingKey": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "RecoveryCodes": {
            "recoveryCodes": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ReferralInfo": {
            "code": [
                333
            ],
            "id": [
                109
            ],
            "referralStats": [
                290
            ],
            "status": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ReferralInfoUpdateInput": {
            "code": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ReferralStats": {
            "credited": [
                112
            ],
            "pending": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "ReferralStatus": {},
        "ReferralUser": {
            "code": [
                333
            ],
            "id": [
                333
            ],
            "status": [
                291
            ],
            "__typename": [
                333
            ]
        },
        "RefundRequest": {
            "amount": [
                112
            ],
            "decision": [
                294
            ],
            "id": [
                109
            ],
            "invoiceId": [
                333
            ],
            "plainThreadId": [
                333
            ],
            "reason": [
                333
            ],
            "userId": [
                333
            ],
            "workspace": [
                430
            ],
            "__typename": [
                333
            ]
        },
        "RefundRequestDecisionEnum": {},
        "Region": {
            "country": [
                333
            ],
            "deploymentConstraints": [
                296
            ],
            "location": [
                333
            ],
            "name": [
                333
            ],
            "railwayMetal": [
                15
            ],
            "region": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "RegionDeploymentConstraints": {
            "adminOnly": [
                15
            ],
            "deprecationInfo": [
                297
            ],
            "runtimeExclusivity": [
                333
            ],
            "stagingOnly": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "RegionDeprecationInfo": {
            "isDeprecated": [
                15
            ],
            "replacementRegion": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "RegistrationStatus": {},
        "RegistryCredentialsInput": {
            "password": [
                333
            ],
            "username": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ReissuedInvoice": {
            "id": [
                109
            ],
            "originalInvoiceId": [
                333
            ],
            "reissuedInvoiceId": [
                333
            ],
            "workspace": [
                430
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ReplicateVolumeInstanceSnapshotStatus": {},
        "ReplicateVolumeInstanceStatus": {},
        "ResetPluginCredentialsInput": {
            "environmentId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ResetPluginInput": {
            "environmentId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ResourceAccess": {
            "deployment": [
                0
            ],
            "project": [
                0
            ],
            "__typename": [
                333
            ]
        },
        "ResourceOwnerType": {},
        "RestartPolicyType": {},
        "SerializedTemplateConfig": {},
        "Service": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "deployments": [
                312,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "featureFlags": [
                3
            ],
            "icon": [
                333
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "project": [
                193
            ],
            "projectId": [
                333
            ],
            "repoTriggers": [
                322,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "serviceInstances": [
                324,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "templateServiceId": [
                333
            ],
            "templateThreadSlug": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "ServiceConnectInput": {
            "branch": [
                333
            ],
            "image": [
                333
            ],
            "repo": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceCreateInput": {
            "branch": [
                333
            ],
            "environmentId": [
                333
            ],
            "icon": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "registryCredentials": [
                299
            ],
            "source": [
                327
            ],
            "templateServiceId": [
                333
            ],
            "variables": [
                83
            ],
            "__typename": [
                333
            ]
        },
        "ServiceDeploymentsConnection": {
            "edges": [
                313
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ServiceDeploymentsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                41
            ],
            "__typename": [
                333
            ]
        },
        "ServiceDomain": {
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "domain": [
                333
            ],
            "edgeId": [
                333
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "suffix": [
                333
            ],
            "targetPort": [
                112
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "ServiceDomainCreateInput": {
            "environmentId": [
                333
            ],
            "serviceId": [
                333
            ],
            "targetPort": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "ServiceDomainUpdateInput": {
            "domain": [
                333
            ],
            "environmentId": [
                333
            ],
            "serviceDomainId": [
                333
            ],
            "serviceId": [
                333
            ],
            "targetPort": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "ServiceFeatureFlagToggleInput": {
            "flag": [
                3
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceInstance": {
            "buildCommand": [
                333
            ],
            "builder": [
                16
            ],
            "createdAt": [
                40
            ],
            "cronSchedule": [
                333
            ],
            "deletedAt": [
                40
            ],
            "dockerfilePath": [
                333
            ],
            "domains": [
                6
            ],
            "drainingSeconds": [
                112
            ],
            "environmentId": [
                333
            ],
            "healthcheckPath": [
                333
            ],
            "healthcheckTimeout": [
                112
            ],
            "id": [
                109
            ],
            "isUpdatable": [
                15
            ],
            "latestDeployment": [
                41
            ],
            "nextCronRunAt": [
                40
            ],
            "nixpacksPlan": [
                120
            ],
            "numReplicas": [
                112
            ],
            "overlapSeconds": [
                112
            ],
            "preDeployCommand": [
                120
            ],
            "railpackInfo": [
                285
            ],
            "railwayConfigFile": [
                333
            ],
            "region": [
                333
            ],
            "restartPolicyMaxRetries": [
                112
            ],
            "restartPolicyType": [
                307
            ],
            "rootDirectory": [
                333
            ],
            "serviceId": [
                333
            ],
            "serviceName": [
                333
            ],
            "sleepApplication": [
                15
            ],
            "source": [
                326
            ],
            "startCommand": [
                333
            ],
            "updatedAt": [
                40
            ],
            "upstreamUrl": [
                333
            ],
            "watchPatterns": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceInstanceLimit": {},
        "ServiceInstanceLimitsUpdateInput": {
            "environmentId": [
                333
            ],
            "memoryGB": [
                96
            ],
            "serviceId": [
                333
            ],
            "vCPUs": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "ServiceInstanceUpdateInput": {
            "buildCommand": [
                333
            ],
            "builder": [
                16
            ],
            "cronSchedule": [
                333
            ],
            "dockerfilePath": [
                333
            ],
            "drainingSeconds": [
                112
            ],
            "healthcheckPath": [
                333
            ],
            "healthcheckTimeout": [
                112
            ],
            "multiRegionConfig": [
                120
            ],
            "nixpacksPlan": [
                120
            ],
            "numReplicas": [
                112
            ],
            "overlapSeconds": [
                112
            ],
            "preDeployCommand": [
                333
            ],
            "railwayConfigFile": [
                333
            ],
            "region": [
                333
            ],
            "registryCredentials": [
                299
            ],
            "restartPolicyMaxRetries": [
                112
            ],
            "restartPolicyType": [
                307
            ],
            "rootDirectory": [
                333
            ],
            "sleepApplication": [
                15
            ],
            "source": [
                327
            ],
            "startCommand": [
                333
            ],
            "watchPatterns": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceRepoTriggersConnection": {
            "edges": [
                323
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ServiceRepoTriggersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                58
            ],
            "__typename": [
                333
            ]
        },
        "ServiceServiceInstancesConnection": {
            "edges": [
                325
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "ServiceServiceInstancesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                318
            ],
            "__typename": [
                333
            ]
        },
        "ServiceSource": {
            "image": [
                333
            ],
            "repo": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceSourceInput": {
            "image": [
                333
            ],
            "repo": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "ServiceUpdateInput": {
            "icon": [
                333
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Session": {
            "createdAt": [
                40
            ],
            "expiredAt": [
                40
            ],
            "id": [
                109
            ],
            "isCurrent": [
                15
            ],
            "name": [
                333
            ],
            "type": [
                330
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "SessionType": {},
        "SharedVariableConfigureInput": {
            "disabledServiceIds": [
                333
            ],
            "enabledServiceIds": [
                333
            ],
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "SimilarTemplate": {
            "code": [
                333
            ],
            "createdAt": [
                40
            ],
            "creator": [
                354
            ],
            "deploys": [
                112
            ],
            "description": [
                333
            ],
            "health": [
                96
            ],
            "image": [
                333
            ],
            "name": [
                333
            ],
            "teamId": [
                333
            ],
            "userId": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "String": {},
        "Subscription": {
            "buildLogs": [
                123,
                {
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ]
                }
            ],
            "deployment": [
                41,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentEvents": [
                44,
                {
                    "id": [
                        333,
                        "String!"
                    ]
                }
            ],
            "deploymentInstanceExecutions": [
                47,
                {
                    "input": [
                        49,
                        "DeploymentInstanceExecutionInput!"
                    ]
                }
            ],
            "deploymentLogs": [
                123,
                {
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ]
                }
            ],
            "environmentLogs": [
                123,
                {
                    "afterDate": [
                        333
                    ],
                    "afterLimit": [
                        112
                    ],
                    "anchorDate": [
                        333
                    ],
                    "beforeDate": [
                        333
                    ],
                    "beforeLimit": [
                        112
                    ],
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ]
                }
            ],
            "environmentStagedPatch": [
                77,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "httpLogs": [
                108,
                {
                    "afterDate": [
                        333
                    ],
                    "afterLimit": [
                        112
                    ],
                    "anchorDate": [
                        333
                    ],
                    "beforeDate": [
                        333
                    ],
                    "beforeLimit": [
                        112
                    ],
                    "deploymentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ]
                }
            ],
            "notificationDeliveryUpdated": [
                146
            ],
            "pluginLogs": [
                123,
                {
                    "environmentId": [
                        333,
                        "String!"
                    ],
                    "filter": [
                        333
                    ],
                    "limit": [
                        112
                    ],
                    "pluginId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "replicationProgress": [
                414,
                {
                    "volumeInstanceId": [
                        333,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "SubscriptionDiscount": {
            "couponId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "SubscriptionItem": {
            "itemId": [
                333
            ],
            "priceId": [
                333
            ],
            "productId": [
                333
            ],
            "quantity": [
                13
            ],
            "__typename": [
                333
            ]
        },
        "SubscriptionModel": {},
        "SubscriptionPlanLimit": {},
        "SubscriptionPlanType": {},
        "SubscriptionState": {},
        "SupportHealthMetrics": {},
        "SupportTierOverride": {},
        "TCPProxy": {
            "applicationPort": [
                112
            ],
            "createdAt": [
                40
            ],
            "deletedAt": [
                40
            ],
            "domain": [
                333
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "proxyPort": [
                112
            ],
            "serviceId": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "TCPProxyCreateInput": {
            "applicationPort": [
                112
            ],
            "environmentId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Team": {
            "adoptionHistory": [
                4
            ],
            "adoptionLevel": [
                96
            ],
            "apiTokenRateLimit": [
                9
            ],
            "avatar": [
                333
            ],
            "createdAt": [
                40
            ],
            "customer": [
                29
            ],
            "id": [
                109
            ],
            "members": [
                346
            ],
            "name": [
                333
            ],
            "preferredRegion": [
                333
            ],
            "projects": [
                348,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "slackChannelId": [
                333
            ],
            "supportTierOverride": [
                342
            ],
            "teamPermissions": [
                347
            ],
            "updatedAt": [
                40
            ],
            "workspace": [
                430
            ],
            "__typename": [
                333
            ]
        },
        "TeamMember": {
            "avatar": [
                333
            ],
            "email": [
                333
            ],
            "featureFlags": [
                1
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "role": [
                350
            ],
            "__typename": [
                333
            ]
        },
        "TeamPermission": {
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "role": [
                350
            ],
            "updatedAt": [
                40
            ],
            "userId": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TeamProjectsConnection": {
            "edges": [
                349
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "TeamProjectsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                193
            ],
            "__typename": [
                333
            ]
        },
        "TeamRole": {},
        "Template": {
            "activeProjects": [
                112
            ],
            "canvasConfig": [
                18
            ],
            "category": [
                333
            ],
            "code": [
                333
            ],
            "communityThreadSlug": [
                333
            ],
            "config": [
                353
            ],
            "createdAt": [
                40
            ],
            "creator": [
                354
            ],
            "demoProjectId": [
                333
            ],
            "description": [
                333
            ],
            "guides": [
                361
            ],
            "health": [
                96
            ],
            "id": [
                109
            ],
            "image": [
                333
            ],
            "isApproved": [
                15
            ],
            "isV2Template": [
                15
            ],
            "isVerified": [
                15
            ],
            "languages": [
                333
            ],
            "metadata": [
                362
            ],
            "name": [
                333
            ],
            "projects": [
                112
            ],
            "readme": [
                333
            ],
            "recentProjects": [
                112
            ],
            "serializedConfig": [
                308
            ],
            "services": [
                367,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "similarTemplates": [
                332
            ],
            "status": [
                369
            ],
            "supportHealthMetrics": [
                341
            ],
            "tags": [
                333
            ],
            "teamId": [
                333
            ],
            "totalPayout": [
                96
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateCloneInput": {
            "code": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateConfig": {},
        "TemplateCreator": {
            "avatar": [
                333
            ],
            "hasPublicProfile": [
                15
            ],
            "name": [
                333
            ],
            "username": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateDeleteInput": {
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateDeployInput": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "services": [
                358
            ],
            "templateCode": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateDeployPayload": {
            "projectId": [
                333
            ],
            "workflowId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateDeployService": {
            "commit": [
                333
            ],
            "hasDomain": [
                15
            ],
            "healthcheckPath": [
                333
            ],
            "id": [
                333
            ],
            "isPrivate": [
                15
            ],
            "name": [
                333
            ],
            "owner": [
                333
            ],
            "preDeployCommand": [
                333
            ],
            "rootDirectory": [
                333
            ],
            "serviceIcon": [
                333
            ],
            "serviceName": [
                333
            ],
            "startCommand": [
                333
            ],
            "tcpProxyApplicationPort": [
                112
            ],
            "template": [
                333
            ],
            "variables": [
                83
            ],
            "volumes": [
                370
            ],
            "__typename": [
                333
            ]
        },
        "TemplateDeployV2Input": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "serializedConfig": [
                308
            ],
            "templateId": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateGenerateInput": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateGuide": {
            "post": [
                333
            ],
            "video": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateMetadata": {},
        "TemplatePublishInput": {
            "category": [
                333
            ],
            "demoProjectId": [
                333
            ],
            "description": [
                333
            ],
            "image": [
                333
            ],
            "readme": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateService": {
            "config": [
                365
            ],
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "templateId": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "TemplateServiceConfig": {},
        "TemplateServiceSourceEjectInput": {
            "projectId": [
                333
            ],
            "repoName": [
                333
            ],
            "repoOwner": [
                333
            ],
            "serviceIds": [
                333
            ],
            "upstreamUrl": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TemplateServicesConnection": {
            "edges": [
                368
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "TemplateServicesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                364
            ],
            "__typename": [
                333
            ]
        },
        "TemplateStatus": {},
        "TemplateVolume": {},
        "TrustedDomain": {
            "domainName": [
                333
            ],
            "id": [
                109
            ],
            "role": [
                333
            ],
            "verificationData": [
                372
            ],
            "verificationType": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TrustedDomainVerificationData": {
            "domainMatch": [
                63
            ],
            "domainStatus": [
                28
            ],
            "__typename": [
                333
            ]
        },
        "TwoFactorInfo": {
            "hasRecoveryCodes": [
                15
            ],
            "isVerified": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "TwoFactorInfoCreateInput": {
            "token": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TwoFactorInfoSecret": {
            "secret": [
                333
            ],
            "uri": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "TwoFactorInfoValidateInput": {
            "token": [
                333
            ],
            "twoFactorLinkingKey": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Upload": {},
        "UsageAnomaly": {
            "actedOn": [
                40
            ],
            "action": [
                379
            ],
            "actorId": [
                333
            ],
            "flaggedAt": [
                40
            ],
            "flaggedFor": [
                380
            ],
            "id": [
                109
            ],
            "__typename": [
                333
            ]
        },
        "UsageAnomalyAction": {},
        "UsageAnomalyFlagReason": {},
        "UsageLimit": {
            "customerId": [
                333
            ],
            "hardLimit": [
                112
            ],
            "id": [
                109
            ],
            "isOverLimit": [
                15
            ],
            "softLimit": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "UsageLimitRemoveInput": {
            "customerId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UsageLimitSetInput": {
            "customerId": [
                333
            ],
            "hardLimitDollars": [
                112
            ],
            "softLimitDollars": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "User": {
            "agreedFairUse": [
                15
            ],
            "apiTokenRateLimit": [
                9
            ],
            "avatar": [
                333
            ],
            "banReason": [
                333
            ],
            "createdAt": [
                40
            ],
            "email": [
                333
            ],
            "featureFlags": [
                1
            ],
            "flags": [
                385
            ],
            "has2FA": [
                15
            ],
            "id": [
                109
            ],
            "isAdmin": [
                15
            ],
            "isConductor": [
                15
            ],
            "isVerified": [
                15
            ],
            "lastLogin": [
                40
            ],
            "name": [
                333
            ],
            "platformFeatureFlags": [
                2
            ],
            "profile": [
                390
            ],
            "projects": [
                395,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "providerAuths": [
                397,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "registrationStatus": [
                298
            ],
            "riskLevel": [
                96
            ],
            "termsAgreedOn": [
                40
            ],
            "username": [
                333
            ],
            "workspace": [
                430
            ],
            "workspaces": [
                430
            ],
            "__typename": [
                333
            ]
        },
        "UserFlag": {},
        "UserFlagsRemoveInput": {
            "flags": [
                385
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UserFlagsSetInput": {
            "flags": [
                385
            ],
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UserGithubRepo": {
            "createdAt": [
                40
            ],
            "defaultBranch": [
                333
            ],
            "description": [
                333
            ],
            "fullName": [
                333
            ],
            "id": [
                109
            ],
            "installationId": [
                333
            ],
            "isPrivate": [
                15
            ],
            "lastPushedAt": [
                40
            ],
            "name": [
                333
            ],
            "ownerAvatarUrl": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "UserKickbackEarnings": {
            "total_amount": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "UserProfile": {
            "bio": [
                333
            ],
            "isPublic": [
                15
            ],
            "website": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UserProfileResponse": {
            "avatar": [
                333
            ],
            "createdAt": [
                40
            ],
            "customerId": [
                333
            ],
            "id": [
                333
            ],
            "isTrialing": [
                15
            ],
            "name": [
                333
            ],
            "profile": [
                390
            ],
            "publicProjects": [
                392,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "publishedTemplates": [
                332
            ],
            "state": [
                333
            ],
            "totalDeploys": [
                112
            ],
            "username": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UserProfileResponsePublicProjectsConnection": {
            "edges": [
                393
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "UserProfileResponsePublicProjectsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                193
            ],
            "__typename": [
                333
            ]
        },
        "UserProfileUpdateInput": {
            "bio": [
                333
            ],
            "isPublic": [
                15
            ],
            "website": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "UserProjectsConnection": {
            "edges": [
                396
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "UserProjectsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                193
            ],
            "__typename": [
                333
            ]
        },
        "UserProviderAuthsConnection": {
            "edges": [
                398
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "UserProviderAuthsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                233
            ],
            "__typename": [
                333
            ]
        },
        "Variable": {
            "createdAt": [
                40
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "id": [
                109
            ],
            "isSealed": [
                15
            ],
            "name": [
                333
            ],
            "plugin": [
                174
            ],
            "pluginId": [
                333
            ],
            "references": [
                333
            ],
            "service": [
                309
            ],
            "serviceId": [
                333
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "VariableCollectionUpsertInput": {
            "environmentId": [
                333
            ],
            "projectId": [
                333
            ],
            "replace": [
                15
            ],
            "serviceId": [
                333
            ],
            "skipDeploys": [
                15
            ],
            "variables": [
                83
            ],
            "__typename": [
                333
            ]
        },
        "VariableDeleteInput": {
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VariableUpsertInput": {
            "environmentId": [
                333
            ],
            "name": [
                333
            ],
            "projectId": [
                333
            ],
            "serviceId": [
                333
            ],
            "skipDeploys": [
                15
            ],
            "value": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VercelAccount": {
            "id": [
                333
            ],
            "integrationAuthId": [
                333
            ],
            "isUser": [
                15
            ],
            "name": [
                333
            ],
            "projects": [
                405
            ],
            "slug": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VercelInfo": {
            "accounts": [
                403
            ],
            "__typename": [
                333
            ]
        },
        "VercelProject": {
            "accountId": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Volume": {
            "createdAt": [
                40
            ],
            "id": [
                109
            ],
            "name": [
                333
            ],
            "project": [
                193
            ],
            "projectId": [
                333
            ],
            "volumeInstances": [
                418,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "__typename": [
                333
            ]
        },
        "VolumeCreateInput": {
            "environmentId": [
                333
            ],
            "mountPath": [
                333
            ],
            "projectId": [
                333
            ],
            "region": [
                333
            ],
            "serviceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VolumeInstance": {
            "createdAt": [
                40
            ],
            "currentSizeMB": [
                96
            ],
            "environment": [
                69
            ],
            "environmentId": [
                333
            ],
            "externalId": [
                333
            ],
            "id": [
                109
            ],
            "mountPath": [
                333
            ],
            "region": [
                333
            ],
            "service": [
                309
            ],
            "serviceId": [
                333
            ],
            "sizeMB": [
                112
            ],
            "state": [
                416
            ],
            "volume": [
                406
            ],
            "volumeId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VolumeInstanceBackup": {
            "createdAt": [
                40
            ],
            "creatorId": [
                333
            ],
            "expiresAt": [
                40
            ],
            "externalId": [
                333
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "referencedMB": [
                112
            ],
            "scheduleId": [
                333
            ],
            "usedMB": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "VolumeInstanceBackupSchedule": {
            "createdAt": [
                40
            ],
            "cron": [
                333
            ],
            "id": [
                109
            ],
            "kind": [
                411
            ],
            "name": [
                333
            ],
            "retentionSeconds": [
                112
            ],
            "__typename": [
                333
            ]
        },
        "VolumeInstanceBackupScheduleKind": {},
        "VolumeInstanceReplicationProgress": {
            "bytesTransferred": [
                13
            ],
            "percentComplete": [
                96
            ],
            "timestamp": [
                40
            ],
            "transferRateMbps": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "VolumeInstanceUpdateInput": {
            "mountPath": [
                333
            ],
            "serviceId": [
                333
            ],
            "state": [
                416
            ],
            "__typename": [
                333
            ]
        },
        "VolumeReplicationProgressUpdate": {
            "currentSnapshot": [
                415
            ],
            "destExternalId": [
                333
            ],
            "destRegion": [
                333
            ],
            "destStackerId": [
                333
            ],
            "error": [
                333
            ],
            "estimatedTimeRemainingMs": [
                13
            ],
            "history": [
                412
            ],
            "nbSnapshots": [
                112
            ],
            "offlineBytesTransferred": [
                13
            ],
            "offlineTotalBytes": [
                13
            ],
            "onlineBytesTransferred": [
                13
            ],
            "onlineTotalBytes": [
                13
            ],
            "percentComplete": [
                96
            ],
            "snapshotsSizes": [
                13
            ],
            "srcExternalId": [
                333
            ],
            "srcRegion": [
                333
            ],
            "srcStackerId": [
                333
            ],
            "status": [
                302
            ],
            "transferRateMbps": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "VolumeSnapshotReplicationProgressUpdate": {
            "bytesTransferred": [
                13
            ],
            "compressedBytesTransferred": [
                13
            ],
            "compressedTransferRateMbps": [
                96
            ],
            "elapsedMs": [
                112
            ],
            "error": [
                333
            ],
            "estimatedTimeRemainingMs": [
                13
            ],
            "index": [
                112
            ],
            "percentComplete": [
                96
            ],
            "startedAt": [
                40
            ],
            "status": [
                301
            ],
            "totalBytes": [
                13
            ],
            "transferRateMbps": [
                96
            ],
            "__typename": [
                333
            ]
        },
        "VolumeState": {},
        "VolumeUpdateInput": {
            "name": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "VolumeVolumeInstancesConnection": {
            "edges": [
                419
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "VolumeVolumeInstancesConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                408
            ],
            "__typename": [
                333
            ]
        },
        "WebhookCreateInput": {
            "filters": [
                333
            ],
            "projectId": [
                333
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WebhookUpdateInput": {
            "filters": [
                333
            ],
            "url": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "Withdrawal": {
            "amount": [
                96
            ],
            "createdAt": [
                40
            ],
            "customerId": [
                333
            ],
            "id": [
                109
            ],
            "status": [
                426
            ],
            "updatedAt": [
                40
            ],
            "withdrawalAccount": [
                423
            ],
            "withdrawalAccountId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WithdrawalAccount": {
            "customerId": [
                333
            ],
            "id": [
                109
            ],
            "platform": [
                425
            ],
            "platformDetails": [
                333
            ],
            "stripeConnectInfo": [
                424
            ],
            "__typename": [
                333
            ]
        },
        "WithdrawalAccountStripeConnectInfo": {
            "bankLast4": [
                333
            ],
            "cardLast4": [
                333
            ],
            "hasOnboarded": [
                15
            ],
            "needsAttention": [
                15
            ],
            "__typename": [
                333
            ]
        },
        "WithdrawalPlatformTypes": {},
        "WithdrawalStatusType": {},
        "WorkflowId": {
            "workflowId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkflowResult": {
            "error": [
                333
            ],
            "status": [
                429
            ],
            "__typename": [
                333
            ]
        },
        "WorkflowStatus": {},
        "Workspace": {
            "adoptionHistory": [
                4
            ],
            "adoptionLevel": [
                96
            ],
            "allowDeprecatedRegions": [
                15
            ],
            "apiTokenRateLimit": [
                9
            ],
            "avatar": [
                333
            ],
            "banReason": [
                333
            ],
            "createdAt": [
                40
            ],
            "customer": [
                29
            ],
            "discordRole": [
                333
            ],
            "hasSAML": [
                15
            ],
            "id": [
                109
            ],
            "identityProviders": [
                434,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "members": [
                437
            ],
            "name": [
                333
            ],
            "plan": [
                168
            ],
            "preferredRegion": [
                333
            ],
            "projects": [
                439,
                {
                    "after": [
                        333
                    ],
                    "before": [
                        333
                    ],
                    "first": [
                        112
                    ],
                    "last": [
                        112
                    ]
                }
            ],
            "referredUsers": [
                292
            ],
            "slackChannelId": [
                333
            ],
            "subscriptionModel": [
                337
            ],
            "supportTierOverride": [
                342
            ],
            "team": [
                345
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceIdPConnection": {
            "createdAt": [
                40
            ],
            "provider": [
                333
            ],
            "status": [
                432
            ],
            "updatedAt": [
                40
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceIdPConnectionStatus": {},
        "WorkspaceIdentityProvider": {
            "connection": [
                431
            ],
            "createdAt": [
                40
            ],
            "enforcementEnabledAt": [
                40
            ],
            "id": [
                109
            ],
            "updatedAt": [
                40
            ],
            "workspace": [
                430
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceIdentityProvidersConnection": {
            "edges": [
                435
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceIdentityProvidersConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                433
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceInviteCodeCreateInput": {
            "role": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceMember": {
            "avatar": [
                333
            ],
            "email": [
                333
            ],
            "featureFlags": [
                1
            ],
            "id": [
                333
            ],
            "name": [
                333
            ],
            "role": [
                350
            ],
            "__typename": [
                333
            ]
        },
        "WorkspacePermissionChangeInput": {
            "role": [
                350
            ],
            "userId": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceProjectsConnection": {
            "edges": [
                440
            ],
            "pageInfo": [
                164
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceProjectsConnectionEdge": {
            "cursor": [
                333
            ],
            "node": [
                193
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceTrustedDomainCreateInput": {
            "domainName": [
                333
            ],
            "role": [
                333
            ],
            "workspaceId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceUpdateInput": {
            "avatar": [
                333
            ],
            "name": [
                333
            ],
            "preferredRegion": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceUserInviteInput": {
            "code": [
                333
            ],
            "email": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "WorkspaceUserRemoveInput": {
            "userId": [
                333
            ],
            "__typename": [
                333
            ]
        },
        "customerTogglePayoutsToCreditsInput": {
            "isWithdrawingToCredits": [
                15
            ],
            "__typename": [
                333
            ]
        }
    }
}