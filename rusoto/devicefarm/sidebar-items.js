initSidebarItems({"enum":[["CreateDevicePoolError",""],["CreateProjectError",""],["CreateRemoteAccessSessionError",""],["CreateUploadError",""],["DeleteDevicePoolError",""],["DeleteProjectError",""],["DeleteRemoteAccessSessionError",""],["DeleteRunError",""],["DeleteUploadError",""],["GetAccountSettingsError",""],["GetDeviceError",""],["GetDevicePoolCompatibilityError",""],["GetDevicePoolError",""],["GetJobError",""],["GetOfferingStatusError",""],["GetProjectError",""],["GetRemoteAccessSessionError",""],["GetRunError",""],["GetSuiteError",""],["GetTestError",""],["GetUploadError",""],["InstallToRemoteAccessSessionError",""],["ListArtifactsError",""],["ListDevicePoolsError",""],["ListDevicesError",""],["ListJobsError",""],["ListOfferingTransactionsError",""],["ListOfferingsError",""],["ListProjectsError",""],["ListRemoteAccessSessionsError",""],["ListRunsError",""],["ListSamplesError",""],["ListSuitesError",""],["ListTestsError",""],["ListUniqueProblemsError",""],["ListUploadsError",""],["PurchaseOfferingError",""],["RenewOfferingError",""],["ScheduleRunError",""],["StopRemoteAccessSessionError",""],["StopRunError",""],["UpdateDevicePoolError",""],["UpdateProjectError",""]],"struct":[["AccountSettings","<p>A container for account-level settings within AWS Device Farm.</p>"],["Artifact","<p>Represents the output of a test. Examples of artifacts include logs and screenshots.</p>"],["CPU","<p>Represents the amount of CPU that an app is using on a physical device.</p> <p>Note that this does not represent system-wide CPU usage.</p>"],["Counters","<p>Represents entity counters.</p>"],["CreateDevicePoolRequest","<p>Represents a request to the create device pool operation.</p>"],["CreateDevicePoolResult","<p>Represents the result of a create device pool request.</p>"],["CreateProjectRequest","<p>Represents a request to the create project operation.</p>"],["CreateProjectResult","<p>Represents the result of a create project request.</p>"],["CreateRemoteAccessSessionConfiguration","<p>Creates the configuration settings for a remote access session, including the device model and type.</p>"],["CreateRemoteAccessSessionRequest","<p>Creates and submits a request to start a remote access session.</p>"],["CreateRemoteAccessSessionResult","<p>Represents the server response from a request to create a remote access session.</p>"],["CreateUploadRequest","<p>Represents a request to the create upload operation.</p>"],["CreateUploadResult","<p>Represents the result of a create upload request.</p>"],["DeleteDevicePoolRequest","<p>Represents a request to the delete device pool operation.</p>"],["DeleteDevicePoolResult","<p>Represents the result of a delete device pool request.</p>"],["DeleteProjectRequest","<p>Represents a request to the delete project operation.</p>"],["DeleteProjectResult","<p>Represents the result of a delete project request.</p>"],["DeleteRemoteAccessSessionRequest","<p>Represents the request to delete the specified remote access session.</p>"],["DeleteRemoteAccessSessionResult","<p>The response from the server when a request is made to delete the remote access session.</p>"],["DeleteRunRequest","<p>Represents a request to the delete run operation.</p>"],["DeleteRunResult","<p>Represents the result of a delete run request.</p>"],["DeleteUploadRequest","<p>Represents a request to the delete upload operation.</p>"],["DeleteUploadResult","<p>Represents the result of a delete upload request.</p>"],["Device","<p>Represents a device type that an app is tested against.</p>"],["DeviceFarmClient","A client for the AWS Device Farm API."],["DeviceMinutes","<p>Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.</p>"],["DevicePool","<p>Represents a collection of device types.</p>"],["DevicePoolCompatibilityResult","<p>Represents a device pool compatibility result.</p>"],["GetAccountSettingsRequest","<p>Represents the request sent to retrieve the account settings.</p>"],["GetAccountSettingsResult","<p>Represents the account settings return values from the <code>GetAccountSettings</code> request.</p>"],["GetDevicePoolCompatibilityRequest","<p>Represents a request to the get device pool compatibility operation.</p>"],["GetDevicePoolCompatibilityResult","<p>Represents the result of describe device pool compatibility request.</p>"],["GetDevicePoolRequest","<p>Represents a request to the get device pool operation.</p>"],["GetDevicePoolResult","<p>Represents the result of a get device pool request.</p>"],["GetDeviceRequest","<p>Represents a request to the get device request.</p>"],["GetDeviceResult","<p>Represents the result of a get device request.</p>"],["GetJobRequest","<p>Represents a request to the get job operation.</p>"],["GetJobResult","<p>Represents the result of a get job request.</p>"],["GetOfferingStatusRequest","<p>Represents the request to retrieve the offering status for the specified customer or account.</p>"],["GetOfferingStatusResult","<p>Returns the status result for a device offering.</p>"],["GetProjectRequest","<p>Represents a request to the get project operation.</p>"],["GetProjectResult","<p>Represents the result of a get project request.</p>"],["GetRemoteAccessSessionRequest","<p>Represents the request to get information about the specified remote access session.</p>"],["GetRemoteAccessSessionResult","<p>Represents the response from the server that lists detailed information about the remote access session.</p>"],["GetRunRequest","<p>Represents a request to the get run operation.</p>"],["GetRunResult","<p>Represents the result of a get run request.</p>"],["GetSuiteRequest","<p>Represents a request to the get suite operation.</p>"],["GetSuiteResult","<p>Represents the result of a get suite request.</p>"],["GetTestRequest","<p>Represents a request to the get test operation.</p>"],["GetTestResult","<p>Represents the result of a get test request.</p>"],["GetUploadRequest","<p>Represents a request to the get upload operation.</p>"],["GetUploadResult","<p>Represents the result of a get upload request.</p>"],["IncompatibilityMessage","<p>Represents information about incompatibility.</p>"],["InstallToRemoteAccessSessionRequest","<p>Represents the request to install an Android application (in .apk format) or an iOS application (in .ipa format) as part of a remote access session.</p>"],["InstallToRemoteAccessSessionResult","<p>Represents the response from the server after AWS Device Farm makes a request to install to a remote access session.</p>"],["Job","<p>Represents a device.</p>"],["ListArtifactsRequest","<p>Represents a request to the list artifacts operation.</p>"],["ListArtifactsResult","<p>Represents the result of a list artifacts operation.</p>"],["ListDevicePoolsRequest","<p>Represents the result of a list device pools request.</p>"],["ListDevicePoolsResult","<p>Represents the result of a list device pools request.</p>"],["ListDevicesRequest","<p>Represents the result of a list devices request.</p>"],["ListDevicesResult","<p>Represents the result of a list devices operation.</p>"],["ListJobsRequest","<p>Represents a request to the list jobs operation.</p>"],["ListJobsResult","<p>Represents the result of a list jobs request.</p>"],["ListOfferingTransactionsRequest","<p>Represents the request to list the offering transaction history.</p>"],["ListOfferingTransactionsResult","<p>Returns the transaction log of the specified offerings.</p>"],["ListOfferingsRequest","<p>Represents the request to list all offerings.</p>"],["ListOfferingsResult","<p>Represents the return values of the list of offerings.</p>"],["ListProjectsRequest","<p>Represents a request to the list projects operation.</p>"],["ListProjectsResult","<p>Represents the result of a list projects request.</p>"],["ListRemoteAccessSessionsRequest","<p>Represents the request to return information about the remote access session.</p>"],["ListRemoteAccessSessionsResult","<p>Represents the response from the server after AWS Device Farm makes a request to return information about the remote access session.</p>"],["ListRunsRequest","<p>Represents a request to the list runs operation.</p>"],["ListRunsResult","<p>Represents the result of a list runs request.</p>"],["ListSamplesRequest","<p>Represents a request to the list samples operation.</p>"],["ListSamplesResult","<p>Represents the result of a list samples request.</p>"],["ListSuitesRequest","<p>Represents a request to the list suites operation.</p>"],["ListSuitesResult","<p>Represents the result of a list suites request.</p>"],["ListTestsRequest","<p>Represents a request to the list tests operation.</p>"],["ListTestsResult","<p>Represents the result of a list tests request.</p>"],["ListUniqueProblemsRequest","<p>Represents a request to the list unique problems operation.</p>"],["ListUniqueProblemsResult","<p>Represents the result of a list unique problems request.</p>"],["ListUploadsRequest","<p>Represents a request to the list uploads operation.</p>"],["ListUploadsResult","<p>Represents the result of a list uploads request.</p>"],["Location","<p>Represents a latitude and longitude pair, expressed in geographic coordinate system degrees (for example 47.6204, -122.3491).</p> <p>Elevation is currently not supported.</p>"],["MonetaryAmount","<p>A number representing the monetary amount for an offering or transaction.</p>"],["Offering","<p>Represents the metadata of a device offering.</p>"],["OfferingStatus","<p>The status of the offering.</p>"],["OfferingTransaction","<p>Represents the metadata of an offering transaction.</p>"],["Problem","<p>Represents a specific warning or failure.</p>"],["ProblemDetail","<p>Information about a problem detail.</p>"],["Project","<p>Represents an operating-system neutral workspace for running and managing tests.</p>"],["PurchaseOfferingRequest","<p>Represents a request for a purchase offering.</p>"],["PurchaseOfferingResult","<p>The result of the purchase offering (e.g., success or failure).</p>"],["Radios","<p>Represents the set of radios and their states on a device. Examples of radios include Wi-Fi, GPS, Bluetooth, and NFC.</p>"],["RecurringCharge","<p>Specifies whether charges for devices will be recurring.</p>"],["RemoteAccessSession","<p>Represents information about the remote access session.</p>"],["RenewOfferingRequest","<p>A request representing an offering renewal.</p>"],["RenewOfferingResult","<p>The result of a renewal offering.</p>"],["Resolution","<p>Represents the screen resolution of a device in height and width, expressed in pixels.</p>"],["Rule","<p>Represents a condition for a device pool.</p>"],["Run","<p>Represents an app on a set of devices with a specific test and configuration.</p>"],["Sample","<p>Represents a sample of performance data.</p>"],["ScheduleRunConfiguration","<p>Represents the settings for a run. Includes things like location, radio states, auxiliary apps, and network profiles.</p>"],["ScheduleRunRequest","<p>Represents a request to the schedule run operation.</p>"],["ScheduleRunResult","<p>Represents the result of a schedule run request.</p>"],["ScheduleRunTest","<p>Represents additional test settings.</p>"],["StopRemoteAccessSessionRequest","<p>Represents the request to stop the remote access session.</p>"],["StopRemoteAccessSessionResult","<p>Represents the response from the server that describes the remote access session when AWS Device Farm stops the session.</p>"],["StopRunRequest","<p>Represents the request to stop a specific run.</p>"],["StopRunResult","<p>Represents the results of your stop run attempt.</p>"],["Suite","<p>Represents a collection of one or more tests.</p>"],["Test","<p>Represents a condition that is evaluated.</p>"],["UniqueProblem","<p>A collection of one or more problems, grouped by their result.</p>"],["UpdateDevicePoolRequest","<p>Represents a request to the update device pool operation.</p>"],["UpdateDevicePoolResult","<p>Represents the result of an update device pool request.</p>"],["UpdateProjectRequest","<p>Represents a request to the update project operation.</p>"],["UpdateProjectResult","<p>Represents the result of an update project request.</p>"],["Upload","<p>An app or a set of one or more tests to upload or that have been uploaded.</p>"]],"type":[["AWSAccountNumber",""],["AmazonResourceName",""],["AmazonResourceNames",""],["ArtifactCategory",""],["ArtifactType",""],["Artifacts",""],["BillingMethod",""],["Boolean",""],["ContentType",""],["CurrencyCode",""],["DateTime",""],["DeviceAttribute",""],["DeviceFormFactor",""],["DevicePlatform",""],["DevicePoolCompatibilityResults",""],["DevicePoolType",""],["DevicePools",""],["Devices",""],["Double",""],["ExecutionResult",""],["ExecutionStatus",""],["Filter",""],["IncompatibilityMessages",""],["Integer",""],["Jobs",""],["Long",""],["Message",""],["Metadata",""],["Name",""],["OfferingIdentifier",""],["OfferingStatusMap",""],["OfferingTransactionType",""],["OfferingTransactions",""],["OfferingType",""],["Offerings",""],["PaginationToken",""],["Problems",""],["Projects",""],["PurchasedDevicesMap",""],["RecurringChargeFrequency",""],["RecurringCharges",""],["RemoteAccessSessions",""],["RuleOperator",""],["Rules",""],["Runs",""],["SampleType",""],["Samples",""],["Suites",""],["TestParameters",""],["TestType",""],["Tests",""],["TransactionIdentifier",""],["URL",""],["UniqueProblems",""],["UniqueProblemsByExecutionResultMap",""],["UploadStatus",""],["UploadType",""],["Uploads",""]]});