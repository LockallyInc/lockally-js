<!-- lockally-brand-header -->
<p align="center">
  <a href="https://lockally.com">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/LockallyInc/community/main/brand/lockup-dark.png">
      <img alt="Lockally" src="https://raw.githubusercontent.com/LockallyInc/community/main/brand/lockup-light.png" width="260">
    </picture>
  </a>
</p>
<!-- /lockally-brand-header -->

# lockally@0.1.0

A TypeScript SDK client for the api.lockally.com API.

## Usage

First, install the SDK from npm.

```bash
npm install lockally --save
```

Next, try it out.


```ts
import {
  Configuration,
  AddOnsApi,
} from 'lockally';
import type { ActivateAddOnRequest } from 'lockally';

async function example() {
  console.log("🚀 Testing lockally SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Add-on key
    name: name_example,
  } satisfies ActivateAddOnRequest;

  try {
    const data = await api.activateAddOn(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *https://api.lockally.com*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AddOnsApi* | [**activateAddOn**](docs/AddOnsApi.md#activateaddon) | **POST** /v1/add-ons/{name}/activate | Activate an add-on
*AddOnsApi* | [**cancelAddOn**](docs/AddOnsApi.md#canceladdon) | **POST** /v1/add-ons/{name}/cancel | Cancel an add-on
*AddOnsApi* | [**getAddOnStatus**](docs/AddOnsApi.md#getaddonstatus) | **GET** /v1/add-ons/{name} | Get add-on status
*AddOnsApi* | [**listAddOns**](docs/AddOnsApi.md#listaddons) | **GET** /v1/add-ons | List add-ons
*AdminApi* | [**v1AdminLoginPost**](docs/AdminApi.md#v1adminloginpostoperation) | **POST** /v1/admin/login | Tenant-admin email+password login
*AdminApi* | [**v1AdminLogoutPost**](docs/AdminApi.md#v1adminlogoutpost) | **POST** /v1/admin/logout | Invalidate the current admin session
*AdminApi* | [**v1AdminMeGet**](docs/AdminApi.md#v1adminmeget) | **GET** /v1/admin/me | Get the current admin + tenant
*AdminsApi* | [**v1AdminsGet**](docs/AdminsApi.md#v1adminsget) | **GET** /v1/admins | List tenant admins
*AdminsApi* | [**v1AdminsIdDelete**](docs/AdminsApi.md#v1adminsiddelete) | **DELETE** /v1/admins/{id} | Delete an admin
*AdminsApi* | [**v1AdminsIdPatch**](docs/AdminsApi.md#v1adminsidpatchoperation) | **PATCH** /v1/admins/{id} | Update an admin
*AdminsApi* | [**v1AdminsPost**](docs/AdminsApi.md#v1adminspostoperation) | **POST** /v1/admins | Invite a new admin
*AgentsApi* | [**v1ApiKeysKeyIDMailboxesGet**](docs/AgentsApi.md#v1apikeyskeyidmailboxesget) | **GET** /v1/api-keys/{keyID}/mailboxes | List a key\&#39;s mailbox grants
*AgentsApi* | [**v1ApiKeysKeyIDMailboxesMailboxIDDelete**](docs/AgentsApi.md#v1apikeyskeyidmailboxesmailboxiddelete) | **DELETE** /v1/api-keys/{keyID}/mailboxes/{mailboxID} | Revoke a mailbox grant
*AgentsApi* | [**v1ApiKeysKeyIDMailboxesPost**](docs/AgentsApi.md#v1apikeyskeyidmailboxespost) | **POST** /v1/api-keys/{keyID}/mailboxes | Grant a mailbox to a key
*AgentsApi* | [**v1AuthWhoamiGet**](docs/AgentsApi.md#v1authwhoamiget) | **GET** /v1/auth/whoami | Introspect the calling credentials
*AgentsApi* | [**v1ContactsLookupGet**](docs/AgentsApi.md#v1contactslookupget) | **GET** /v1/contacts/lookup | Who is this sender?
*AgentsApi* | [**v1InboxesGet**](docs/AgentsApi.md#v1inboxesget) | **GET** /v1/inboxes | List granted inboxes
*AgentsApi* | [**v1InboxesMailboxMessagesPost**](docs/AgentsApi.md#v1inboxesmailboxmessagespostoperation) | **POST** /v1/inboxes/{mailbox}/messages | Start a new conversation (agent stream)
*AgentsApi* | [**v1InboxesMailboxThreadsGet**](docs/AgentsApi.md#v1inboxesmailboxthreadsget) | **GET** /v1/inboxes/{mailbox}/threads | List conversation threads
*AgentsApi* | [**v1ThreadsThreadIDGet**](docs/AgentsApi.md#v1threadsthreadidget) | **GET** /v1/threads/{threadID} | Get a whole conversation
*AgentsApi* | [**v1ThreadsThreadIDMessagesMessageIDAttachmentsIdxGet**](docs/AgentsApi.md#v1threadsthreadidmessagesmessageidattachmentsidxget) | **GET** /v1/threads/{threadID}/messages/{messageID}/attachments/{idx} | Download an attachment
*AgentsApi* | [**v1ThreadsThreadIDMessagesMessageIDGet**](docs/AgentsApi.md#v1threadsthreadidmessagesmessageidget) | **GET** /v1/threads/{threadID}/messages/{messageID} | Get one message with body
*AgentsApi* | [**v1ThreadsThreadIDMessagesMessageIDReadPost**](docs/AgentsApi.md#v1threadsthreadidmessagesmessageidreadpost) | **POST** /v1/threads/{threadID}/messages/{messageID}/read | Mark read/unread
*AgentsApi* | [**v1ThreadsThreadIDReplyPost**](docs/AgentsApi.md#v1threadsthreadidreplypost) | **POST** /v1/threads/{threadID}/reply | Reply in-thread (agent stream)
*AiApi* | [**v1AiConfigGet**](docs/AiApi.md#v1aiconfigget) | **GET** /v1/ai-config | Read the tenant\&#39;s AI configuration
*AiApi* | [**v1AiConfigPut**](docs/AiApi.md#v1aiconfigput) | **PUT** /v1/ai-config | Configure the AI tier
*AiApi* | [**v1BillingAiUnitsCheckoutPost**](docs/AiApi.md#v1billingaiunitscheckoutpost) | **POST** /v1/billing/ai-units/checkout | Buy prepaid AI units
*AiApi* | [**v1ThreadsThreadIDClassifyPost**](docs/AiApi.md#v1threadsthreadidclassifypost) | **POST** /v1/threads/{threadID}/classify | LLM-classify a thread
*AliasesApi* | [**v1AliasesAddressDelete**](docs/AliasesApi.md#v1aliasesaddressdelete) | **DELETE** /v1/aliases/{address} | Delete an alias
*AliasesApi* | [**v1AliasesGet**](docs/AliasesApi.md#v1aliasesget) | **GET** /v1/aliases | List aliases
*AliasesApi* | [**v1AliasesPost**](docs/AliasesApi.md#v1aliasespostoperation) | **POST** /v1/aliases | Create an alias
*ApiKeysApi* | [**v1ApiKeysGet**](docs/ApiKeysApi.md#v1apikeysget) | **GET** /v1/api-keys | List API keys
*ApiKeysApi* | [**v1ApiKeysIdDelete**](docs/ApiKeysApi.md#v1apikeysiddelete) | **DELETE** /v1/api-keys/{id} | Revoke an API key
*ApiKeysApi* | [**v1ApiKeysPost**](docs/ApiKeysApi.md#v1apikeyspostoperation) | **POST** /v1/api-keys | Create an API key
*BillingApi* | [**createBillingCheckout**](docs/BillingApi.md#createbillingcheckoutoperation) | **POST** /v1/billing/checkout | Create a plan checkout session
*BillingApi* | [**createUnitsCheckout**](docs/BillingApi.md#createunitscheckoutoperation) | **POST** /v1/billing/units/checkout | Create a send-units checkout session
*BillingApi* | [**getBilling**](docs/BillingApi.md#getbilling) | **GET** /v1/billing | Get billing status
*CalendarsApi* | [**addCalendarMember**](docs/CalendarsApi.md#addcalendarmemberoperation) | **POST** /v1/calendars/{id}/members | Add a member to a calendar
*CalendarsApi* | [**createCalendar**](docs/CalendarsApi.md#createcalendaroperation) | **POST** /v1/calendars | Create a calendar
*CalendarsApi* | [**createCalendarEvent**](docs/CalendarsApi.md#createcalendareventoperation) | **POST** /v1/calendars/{id}/events | Create an event in a calendar
*CalendarsApi* | [**createCalendarIntegration**](docs/CalendarsApi.md#createcalendarintegrationoperation) | **POST** /v1/calendar-integrations | Create a calendar integration
*CalendarsApi* | [**deleteCalendar**](docs/CalendarsApi.md#deletecalendar) | **DELETE** /v1/calendars/{id} | Delete a calendar
*CalendarsApi* | [**deleteCalendarEvent**](docs/CalendarsApi.md#deletecalendarevent) | **DELETE** /v1/calendars/{id}/events/{eventId} | Delete a calendar event
*CalendarsApi* | [**deleteCalendarIntegration**](docs/CalendarsApi.md#deletecalendarintegration) | **DELETE** /v1/calendar-integrations/{id} | Delete a calendar integration
*CalendarsApi* | [**getCalendar**](docs/CalendarsApi.md#getcalendar) | **GET** /v1/calendars/{id} | Get a calendar
*CalendarsApi* | [**getCalendarPolicies**](docs/CalendarsApi.md#getcalendarpolicies) | **GET** /v1/calendar-policies | Get calendar policies
*CalendarsApi* | [**getCalendarSecurity**](docs/CalendarsApi.md#getcalendarsecurity) | **GET** /v1/calendar-security | Get calendar security overview
*CalendarsApi* | [**listCalendarEvents**](docs/CalendarsApi.md#listcalendarevents) | **GET** /v1/calendars/{id}/events | List events in a calendar
*CalendarsApi* | [**listCalendarIntegrations**](docs/CalendarsApi.md#listcalendarintegrations) | **GET** /v1/calendar-integrations | List calendar integrations
*CalendarsApi* | [**listCalendarMembers**](docs/CalendarsApi.md#listcalendarmembers) | **GET** /v1/calendars/{id}/members | List calendar members
*CalendarsApi* | [**listCalendars**](docs/CalendarsApi.md#listcalendars) | **GET** /v1/calendars | List calendars
*CalendarsApi* | [**removeCalendarMember**](docs/CalendarsApi.md#removecalendarmember) | **DELETE** /v1/calendars/{id}/members/{memberId} | Remove a member from a calendar
*CalendarsApi* | [**syncCalendarIntegration**](docs/CalendarsApi.md#synccalendarintegration) | **POST** /v1/calendar-integrations/{id}/sync | Trigger sync for a calendar integration
*CalendarsApi* | [**updateCalendar**](docs/CalendarsApi.md#updatecalendaroperation) | **PATCH** /v1/calendars/{id} | Update a calendar
*CalendarsApi* | [**updateCalendarEvent**](docs/CalendarsApi.md#updatecalendareventoperation) | **PATCH** /v1/calendars/{id}/events/{eventId} | Update a calendar event
*CalendarsApi* | [**updateCalendarIntegration**](docs/CalendarsApi.md#updatecalendarintegrationoperation) | **PATCH** /v1/calendar-integrations/{id} | Update a calendar integration
*CalendarsApi* | [**updateCalendarMember**](docs/CalendarsApi.md#updatecalendarmemberoperation) | **PATCH** /v1/calendars/{id}/members/{memberId} | Update a calendar member\&#39;s role
*CalendarsApi* | [**updateCalendarPolicies**](docs/CalendarsApi.md#updatecalendarpoliciesoperation) | **PATCH** /v1/calendar-policies | Update calendar policies
*ContactListsApi* | [**addContactListMember**](docs/ContactListsApi.md#addcontactlistmemberoperation) | **POST** /v1/contact-lists/{id}/members | Add a member to a contact list
*ContactListsApi* | [**createContactList**](docs/ContactListsApi.md#createcontactlistoperation) | **POST** /v1/contact-lists | Create a contact list
*ContactListsApi* | [**deleteContactList**](docs/ContactListsApi.md#deletecontactlist) | **DELETE** /v1/contact-lists/{id} | Delete a contact list
*ContactListsApi* | [**getContactList**](docs/ContactListsApi.md#getcontactlist) | **GET** /v1/contact-lists/{id} | Get a contact list with members
*ContactListsApi* | [**listContactLists**](docs/ContactListsApi.md#listcontactlists) | **GET** /v1/contact-lists | List contact lists
*ContactListsApi* | [**removeContactListMember**](docs/ContactListsApi.md#removecontactlistmember) | **DELETE** /v1/contact-lists/{id}/members/{contactId} | Remove a member from a contact list
*ContactListsApi* | [**updateContactList**](docs/ContactListsApi.md#updatecontactlistoperation) | **PATCH** /v1/contact-lists/{id} | Update a contact list
*ContactsApi* | [**createContact**](docs/ContactsApi.md#createcontactoperation) | **POST** /v1/contacts | Create a contact
*ContactsApi* | [**deleteContact**](docs/ContactsApi.md#deletecontact) | **DELETE** /v1/contacts/{id} | Delete a contact
*ContactsApi* | [**getContact**](docs/ContactsApi.md#getcontact) | **GET** /v1/contacts/{id} | Get a contact
*ContactsApi* | [**getContactLists**](docs/ContactsApi.md#getcontactlists) | **GET** /v1/contacts/{id}/lists | Get lists a contact belongs to
*ContactsApi* | [**listContacts**](docs/ContactsApi.md#listcontacts) | **GET** /v1/contacts | List contacts
*ContactsApi* | [**updateContact**](docs/ContactsApi.md#updatecontactoperation) | **PATCH** /v1/contacts/{id} | Update a contact
*DashboardApi* | [**getAuditSummary**](docs/DashboardApi.md#getauditsummary) | **GET** /v1/audit-summary | Audit summary for the dashboard
*DashboardApi* | [**getDomainsStatus**](docs/DashboardApi.md#getdomainsstatus) | **GET** /v1/domains/status | Domain health status for the dashboard
*DashboardApi* | [**getIntegrationsSummary**](docs/DashboardApi.md#getintegrationssummary) | **GET** /v1/integrations-summary | Integrations summary for the dashboard
*DashboardApi* | [**getSecurity**](docs/DashboardApi.md#getsecurity) | **GET** /v1/security | Security overview for the dashboard
*DashboardApi* | [**getStorage**](docs/DashboardApi.md#getstorage) | **GET** /v1/storage | Storage usage for the dashboard
*DashboardApi* | [**getTenantHealth**](docs/DashboardApi.md#gettenanthealth) | **GET** /v1/health | Full tenant health report
*DashboardApi* | [**getUserInsights**](docs/DashboardApi.md#getuserinsights) | **GET** /v1/user-insights | User insights for the dashboard
*DirectoryApi* | [**getDirectoryActivity**](docs/DirectoryApi.md#getdirectoryactivity) | **GET** /v1/directory-activity | Get recent directory activity
*DirectoryApi* | [**getDirectoryPermissions**](docs/DirectoryApi.md#getdirectorypermissions) | **GET** /v1/directory-permissions | Get directory permission settings
*DirectoryApi* | [**getDirectoryStats**](docs/DirectoryApi.md#getdirectorystats) | **GET** /v1/directory-stats | Get directory statistics
*DirectoryApi* | [**getGALSettings**](docs/DirectoryApi.md#getgalsettings) | **GET** /v1/gal-settings | Get Global Address List settings
*DirectoryApi* | [**rebuildGALIndex**](docs/DirectoryApi.md#rebuildgalindex) | **POST** /v1/gal-settings/rebuild-index | Rebuild the GAL search index
*DirectoryApi* | [**syncGAL**](docs/DirectoryApi.md#syncgal) | **POST** /v1/gal-settings/sync | Sync GAL with external directory sources
*DirectoryApi* | [**updateDirectoryPermissions**](docs/DirectoryApi.md#updatedirectorypermissionsoperation) | **PATCH** /v1/directory-permissions | Update directory permission settings
*DirectoryApi* | [**updateGALSettings**](docs/DirectoryApi.md#updategalsettingsoperation) | **PATCH** /v1/gal-settings | Update GAL settings
*DistributionListsApi* | [**createDistributionList**](docs/DistributionListsApi.md#createdistributionlistoperation) | **POST** /v1/distribution-lists | Create a distribution list
*DistributionListsApi* | [**deleteDistributionList**](docs/DistributionListsApi.md#deletedistributionlist) | **DELETE** /v1/distribution-lists/{address} | Delete a distribution list
*DistributionListsApi* | [**getDistributionList**](docs/DistributionListsApi.md#getdistributionlist) | **GET** /v1/distribution-lists/{address} | Get a distribution list
*DistributionListsApi* | [**listDistributionLists**](docs/DistributionListsApi.md#listdistributionlists) | **GET** /v1/distribution-lists | List distribution lists
*DistributionListsApi* | [**replaceDistributionListMembers**](docs/DistributionListsApi.md#replacedistributionlistmembersoperation) | **PUT** /v1/distribution-lists/{address}/members | Replace distribution list members
*DomainsApi* | [**v1DomainsDomainDelete**](docs/DomainsApi.md#v1domainsdomaindelete) | **DELETE** /v1/domains/{domain} | Delete a domain
*DomainsApi* | [**v1DomainsDomainGet**](docs/DomainsApi.md#v1domainsdomainget) | **GET** /v1/domains/{domain} | Get a domain
*DomainsApi* | [**v1DomainsDomainVerifyPost**](docs/DomainsApi.md#v1domainsdomainverifypost) | **POST** /v1/domains/{domain}/verify | Force-poll DNS verification
*DomainsApi* | [**v1DomainsGet**](docs/DomainsApi.md#v1domainsget) | **GET** /v1/domains | List domains
*DomainsApi* | [**v1DomainsPost**](docs/DomainsApi.md#v1domainspostoperation) | **POST** /v1/domains | Register a domain
*DraftsApi* | [**v1DraftsDraftIDApprovePost**](docs/DraftsApi.md#v1draftsdraftidapprovepost) | **POST** /v1/drafts/{draftID}/approve | Approve a pending draft (human)
*DraftsApi* | [**v1DraftsDraftIDCancelPost**](docs/DraftsApi.md#v1draftsdraftidcancelpost) | **POST** /v1/drafts/{draftID}/cancel | Withdraw a pending draft
*DraftsApi* | [**v1DraftsDraftIDGet**](docs/DraftsApi.md#v1draftsdraftidget) | **GET** /v1/drafts/{draftID} | Get a draft
*DraftsApi* | [**v1DraftsDraftIDRejectPost**](docs/DraftsApi.md#v1draftsdraftidrejectpost) | **POST** /v1/drafts/{draftID}/reject | Reject a pending draft (human)
*DraftsApi* | [**v1DraftsGet**](docs/DraftsApi.md#v1draftsget) | **GET** /v1/drafts | List drafts
*DraftsApi* | [**v1InboxesMailboxDraftsPost**](docs/DraftsApi.md#v1inboxesmailboxdraftspost) | **POST** /v1/inboxes/{mailbox}/drafts | Propose a new conversation as a draft
*DraftsApi* | [**v1ThreadsThreadIDDraftsPost**](docs/DraftsApi.md#v1threadsthreadiddraftspost) | **POST** /v1/threads/{threadID}/drafts | Propose a reply as a draft
*EncryptionApi* | [**batchLookupPublicKeys**](docs/EncryptionApi.md#batchlookuppublickeys) | **GET** /v1/encryption/keys/lookup | Batch-lookup public keys by email
*EncryptionApi* | [**createEncryptionKey**](docs/EncryptionApi.md#createencryptionkeyoperation) | **POST** /v1/encryption/keys | Upload an encryption key pair
*EncryptionApi* | [**createEncryptionRecovery**](docs/EncryptionApi.md#createencryptionrecoveryoperation) | **POST** /v1/encryption/recovery | Store an encryption recovery blob
*EncryptionApi* | [**getEncryptionKey**](docs/EncryptionApi.md#getencryptionkey) | **GET** /v1/encryption/keys/{email} | Get encryption key for a mailbox
*EncryptionApi* | [**rotateEncryptionKey**](docs/EncryptionApi.md#rotateencryptionkeyoperation) | **POST** /v1/encryption/keys/rotate | Rotate an encryption key
*HealthApi* | [**healthzGet**](docs/HealthApi.md#healthzget) | **GET** /healthz | Liveness check
*IpPoolsApi* | [**createDedicatedIPRequest**](docs/IpPoolsApi.md#creatededicatediprequestoperation) | **POST** /v1/dedicated-ip-requests | Request a dedicated IP
*IpPoolsApi* | [**getIPAssignment**](docs/IpPoolsApi.md#getipassignment) | **GET** /v1/ip-assignment | Get current IP assignment
*IpPoolsApi* | [**listDedicatedIPRequests**](docs/IpPoolsApi.md#listdedicatediprequests) | **GET** /v1/dedicated-ip-requests | List dedicated IP requests
*MailboxesApi* | [**addSharedMember**](docs/MailboxesApi.md#addsharedmemberoperation) | **POST** /v1/mailboxes/{email}/members | Add a shared mailbox member
*MailboxesApi* | [**listSharedMembers**](docs/MailboxesApi.md#listsharedmembers) | **GET** /v1/mailboxes/{email}/members | List shared mailbox members
*MailboxesApi* | [**removeSharedMember**](docs/MailboxesApi.md#removesharedmember) | **DELETE** /v1/mailboxes/{email}/members/{memberEmail} | Remove a shared mailbox member
*MailboxesApi* | [**v1MailboxesEmailDelete**](docs/MailboxesApi.md#v1mailboxesemaildelete) | **DELETE** /v1/mailboxes/{email} | Soft-delete a mailbox
*MailboxesApi* | [**v1MailboxesEmailExportDownloadGet**](docs/MailboxesApi.md#v1mailboxesemailexportdownloadget) | **GET** /v1/mailboxes/{email}/export/download | Download a previously-issued mailbox export
*MailboxesApi* | [**v1MailboxesEmailExportPost**](docs/MailboxesApi.md#v1mailboxesemailexportpost) | **POST** /v1/mailboxes/{email}/export | Request a mailbox export
*MailboxesApi* | [**v1MailboxesEmailGet**](docs/MailboxesApi.md#v1mailboxesemailget) | **GET** /v1/mailboxes/{email} | Get a mailbox
*MailboxesApi* | [**v1MailboxesEmailPatch**](docs/MailboxesApi.md#v1mailboxesemailpatchoperation) | **PATCH** /v1/mailboxes/{email} | Update a mailbox
*MailboxesApi* | [**v1MailboxesEmailVacationDelete**](docs/MailboxesApi.md#v1mailboxesemailvacationdelete) | **DELETE** /v1/mailboxes/{email}/vacation | Remove the vacation responder
*MailboxesApi* | [**v1MailboxesEmailVacationGet**](docs/MailboxesApi.md#v1mailboxesemailvacationget) | **GET** /v1/mailboxes/{email}/vacation | Get the vacation responder
*MailboxesApi* | [**v1MailboxesEmailVacationPut**](docs/MailboxesApi.md#v1mailboxesemailvacationputoperation) | **PUT** /v1/mailboxes/{email}/vacation | Set the vacation responder
*MailboxesApi* | [**v1MailboxesGet**](docs/MailboxesApi.md#v1mailboxesget) | **GET** /v1/mailboxes | List mailboxes
*MailboxesApi* | [**v1MailboxesPost**](docs/MailboxesApi.md#v1mailboxespostoperation) | **POST** /v1/mailboxes | Create a mailbox
*MailboxesApi* | [**v1VacationGet**](docs/MailboxesApi.md#v1vacationget) | **GET** /v1/vacation | List all vacation responders
*MigrationsApi* | [**cancelMigration**](docs/MigrationsApi.md#cancelmigration) | **POST** /v1/migrations/{id}/cancel | Cancel a running migration
*MigrationsApi* | [**checkMigrationDNS**](docs/MigrationsApi.md#checkmigrationdns) | **GET** /v1/migrations/{id}/dns-check | Check DNS readiness for cutover
*MigrationsApi* | [**createMigration**](docs/MigrationsApi.md#createmigrationoperation) | **POST** /v1/migrations | Create a migration
*MigrationsApi* | [**createMigrationCredential**](docs/MigrationsApi.md#createmigrationcredentialoperation) | **POST** /v1/migrations/credentials | Store a migration credential
*MigrationsApi* | [**deleteMigration**](docs/MigrationsApi.md#deletemigration) | **DELETE** /v1/migrations/{id} | Delete a migration
*MigrationsApi* | [**deleteMigrationCredential**](docs/MigrationsApi.md#deletemigrationcredential) | **DELETE** /v1/migrations/credentials/{id} | Delete a migration credential
*MigrationsApi* | [**deltaSyncMigration**](docs/MigrationsApi.md#deltasyncmigration) | **POST** /v1/migrations/{id}/delta-sync | Run a delta sync
*MigrationsApi* | [**discoverMigration**](docs/MigrationsApi.md#discovermigration) | **POST** /v1/migrations/{id}/discover | Discover source mailboxes
*MigrationsApi* | [**finalSyncMigration**](docs/MigrationsApi.md#finalsyncmigration) | **POST** /v1/migrations/{id}/final-sync | Run the final sync before cutover
*MigrationsApi* | [**getMigration**](docs/MigrationsApi.md#getmigration) | **GET** /v1/migrations/{id} | Get a migration
*MigrationsApi* | [**getMigrationProgress**](docs/MigrationsApi.md#getmigrationprogress) | **GET** /v1/migrations/{id}/progress | Get migration progress
*MigrationsApi* | [**listMigrationCredentials**](docs/MigrationsApi.md#listmigrationcredentials) | **GET** /v1/migrations/credentials | List migration credentials
*MigrationsApi* | [**listMigrationEvents**](docs/MigrationsApi.md#listmigrationevents) | **GET** /v1/migrations/{id}/events | List migration events
*MigrationsApi* | [**listMigrationMailboxes**](docs/MigrationsApi.md#listmigrationmailboxes) | **GET** /v1/migrations/{id}/mailboxes | List migration mailboxes
*MigrationsApi* | [**listMigrations**](docs/MigrationsApi.md#listmigrations) | **GET** /v1/migrations | List migrations
*MigrationsApi* | [**mapMigration**](docs/MigrationsApi.md#mapmigrationoperation) | **POST** /v1/migrations/{id}/map | Map source to destination mailboxes
*MigrationsApi* | [**retryMigration**](docs/MigrationsApi.md#retrymigration) | **POST** /v1/migrations/{id}/retry | Retry a failed or cancelled migration
*MigrationsApi* | [**startMigration**](docs/MigrationsApi.md#startmigration) | **POST** /v1/migrations/{id}/start | Start the migration
*MigrationsApi* | [**updateMigration**](docs/MigrationsApi.md#updatemigrationoperation) | **PATCH** /v1/migrations/{id} | Update a migration
*MigrationsApi* | [**updateMigrationMailbox**](docs/MigrationsApi.md#updatemigrationmailboxoperation) | **PATCH** /v1/migrations/{id}/mailboxes/{mbxId} | Update a migration mailbox
*MigrationsApi* | [**validateMigration**](docs/MigrationsApi.md#validatemigration) | **POST** /v1/migrations/{id}/validate | Validate migrated data
*ResourcesApi* | [**createResource**](docs/ResourcesApi.md#createresourceoperation) | **POST** /v1/resources | Create a resource
*ResourcesApi* | [**deleteResource**](docs/ResourcesApi.md#deleteresource) | **DELETE** /v1/resources/{id} | Delete a resource
*ResourcesApi* | [**getResource**](docs/ResourcesApi.md#getresource) | **GET** /v1/resources/{id} | Get a resource
*ResourcesApi* | [**listResources**](docs/ResourcesApi.md#listresources) | **GET** /v1/resources | List resources
*ResourcesApi* | [**updateResource**](docs/ResourcesApi.md#updateresourceoperation) | **PATCH** /v1/resources/{id} | Update a resource
*SendApi* | [**v1MessagesGet**](docs/SendApi.md#v1messagesget) | **GET** /v1/messages | List outbound messages
*SendApi* | [**v1MessagesIdDelete**](docs/SendApi.md#v1messagesiddelete) | **DELETE** /v1/messages/{id} | Cancel a scheduled send
*SendApi* | [**v1MessagesIdGet**](docs/SendApi.md#v1messagesidget) | **GET** /v1/messages/{id} | Get message status
*SendApi* | [**v1MessagesStatsGet**](docs/SendApi.md#v1messagesstatsget) | **GET** /v1/messages/stats | Aggregate delivery stats
*SendApi* | [**v1SendBatchPost**](docs/SendApi.md#v1sendbatchpostoperation) | **POST** /v1/send/batch | Send a batch of emails
*SendApi* | [**v1SendPost**](docs/SendApi.md#v1sendpostoperation) | **POST** /v1/send | Send an email
*SignupApi* | [**signup**](docs/SignupApi.md#signupoperation) | **POST** /v1/signup | Sign up a new tenant
*SuppressionsApi* | [**v1SuppressionsEmailDelete**](docs/SuppressionsApi.md#v1suppressionsemaildelete) | **DELETE** /v1/suppressions/{email} | Remove a suppression
*SuppressionsApi* | [**v1SuppressionsEmailGet**](docs/SuppressionsApi.md#v1suppressionsemailget) | **GET** /v1/suppressions/{email} | Check whether an address is suppressed
*SuppressionsApi* | [**v1SuppressionsGet**](docs/SuppressionsApi.md#v1suppressionsget) | **GET** /v1/suppressions | List suppressed recipients
*SuppressionsApi* | [**v1SuppressionsPost**](docs/SuppressionsApi.md#v1suppressionspostoperation) | **POST** /v1/suppressions | Add a suppression
*TemplatesApi* | [**v1TemplatesGet**](docs/TemplatesApi.md#v1templatesget) | **GET** /v1/templates | List templates
*TemplatesApi* | [**v1TemplatesIdDelete**](docs/TemplatesApi.md#v1templatesiddelete) | **DELETE** /v1/templates/{id} | Delete a template
*TemplatesApi* | [**v1TemplatesIdGet**](docs/TemplatesApi.md#v1templatesidget) | **GET** /v1/templates/{id} | Get a template
*TemplatesApi* | [**v1TemplatesIdPut**](docs/TemplatesApi.md#v1templatesidput) | **PUT** /v1/templates/{id} | Update a template
*TemplatesApi* | [**v1TemplatesPost**](docs/TemplatesApi.md#v1templatespost) | **POST** /v1/templates | Create a template
*TenantApi* | [**v1TenantGet**](docs/TenantApi.md#v1tenantget) | **GET** /v1/tenant | Get the calling tenant
*TenantApi* | [**v1UsageGet**](docs/TenantApi.md#v1usageget) | **GET** /v1/usage | Usage snapshot
*TestApi* | [**v1TestInboundPost**](docs/TestApi.md#v1testinboundpost) | **POST** /v1/test/inbound | Simulate an inbound email (test keys only)
*UsersApi* | [**createUser**](docs/UsersApi.md#createuseroperation) | **POST** /v1/users | Create a user
*UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteuser) | **DELETE** /v1/users/{id} | Delete a user
*UsersApi* | [**getUser**](docs/UsersApi.md#getuser) | **GET** /v1/users/{id} | Get a user
*UsersApi* | [**listUsers**](docs/UsersApi.md#listusers) | **GET** /v1/users | List users
*UsersApi* | [**updateUser**](docs/UsersApi.md#updateuseroperation) | **PATCH** /v1/users/{id} | Update a user
*WebhooksApi* | [**v1WebhooksGet**](docs/WebhooksApi.md#v1webhooksget) | **GET** /v1/webhooks | List webhooks
*WebhooksApi* | [**v1WebhooksIdDelete**](docs/WebhooksApi.md#v1webhooksiddelete) | **DELETE** /v1/webhooks/{id} | Delete a webhook
*WebhooksApi* | [**v1WebhooksIdPatch**](docs/WebhooksApi.md#v1webhooksidpatchoperation) | **PATCH** /v1/webhooks/{id} | Update a webhook
*WebhooksApi* | [**v1WebhooksPost**](docs/WebhooksApi.md#v1webhookspostoperation) | **POST** /v1/webhooks | Create a webhook


### Models

- [APIKey](docs/APIKey.md)
- [ActivateAddOn200Response](docs/ActivateAddOn200Response.md)
- [AddCalendarMemberRequest](docs/AddCalendarMemberRequest.md)
- [AddContactListMemberRequest](docs/AddContactListMemberRequest.md)
- [AddOn](docs/AddOn.md)
- [AddSharedMemberRequest](docs/AddSharedMemberRequest.md)
- [Admin](docs/Admin.md)
- [AdminFull](docs/AdminFull.md)
- [Alias](docs/Alias.md)
- [AuditEvent](docs/AuditEvent.md)
- [BatchLookupPublicKeys200Response](docs/BatchLookupPublicKeys200Response.md)
- [BatchLookupPublicKeys200ResponseDataInner](docs/BatchLookupPublicKeys200ResponseDataInner.md)
- [BatchResult](docs/BatchResult.md)
- [BillingStatus](docs/BillingStatus.md)
- [Calendar](docs/Calendar.md)
- [CalendarEvent](docs/CalendarEvent.md)
- [CalendarIntegration](docs/CalendarIntegration.md)
- [CalendarMember](docs/CalendarMember.md)
- [CalendarPolicies](docs/CalendarPolicies.md)
- [Contact](docs/Contact.md)
- [ContactList](docs/ContactList.md)
- [CreateBillingCheckout200Response](docs/CreateBillingCheckout200Response.md)
- [CreateBillingCheckoutRequest](docs/CreateBillingCheckoutRequest.md)
- [CreateCalendarEventRequest](docs/CreateCalendarEventRequest.md)
- [CreateCalendarIntegrationRequest](docs/CreateCalendarIntegrationRequest.md)
- [CreateCalendarRequest](docs/CreateCalendarRequest.md)
- [CreateContactListRequest](docs/CreateContactListRequest.md)
- [CreateContactRequest](docs/CreateContactRequest.md)
- [CreateDedicatedIPRequestRequest](docs/CreateDedicatedIPRequestRequest.md)
- [CreateDistributionListRequest](docs/CreateDistributionListRequest.md)
- [CreateEncryptionKey201Response](docs/CreateEncryptionKey201Response.md)
- [CreateEncryptionKeyRequest](docs/CreateEncryptionKeyRequest.md)
- [CreateEncryptionRecoveryRequest](docs/CreateEncryptionRecoveryRequest.md)
- [CreateMigrationCredentialRequest](docs/CreateMigrationCredentialRequest.md)
- [CreateMigrationCredentialRequestCredentials](docs/CreateMigrationCredentialRequestCredentials.md)
- [CreateMigrationRequest](docs/CreateMigrationRequest.md)
- [CreateResourceRequest](docs/CreateResourceRequest.md)
- [CreateUnitsCheckout200Response](docs/CreateUnitsCheckout200Response.md)
- [CreateUnitsCheckoutRequest](docs/CreateUnitsCheckoutRequest.md)
- [CreateUserRequest](docs/CreateUserRequest.md)
- [DNSRecord](docs/DNSRecord.md)
- [DedicatedIPRequest](docs/DedicatedIPRequest.md)
- [DirectoryPermissions](docs/DirectoryPermissions.md)
- [DiscoverMigration202Response](docs/DiscoverMigration202Response.md)
- [DistributionListDetail](docs/DistributionListDetail.md)
- [DistributionListSummary](docs/DistributionListSummary.md)
- [Domain](docs/Domain.md)
- [GALSettings](docs/GALSettings.md)
- [GetAddOnStatus200Response](docs/GetAddOnStatus200Response.md)
- [GetAuditSummary200Response](docs/GetAuditSummary200Response.md)
- [GetCalendarSecurity200Response](docs/GetCalendarSecurity200Response.md)
- [GetCalendarSecurity200ResponseAlertsInner](docs/GetCalendarSecurity200ResponseAlertsInner.md)
- [GetCalendarSecurity200ResponseDelegatedAccessInner](docs/GetCalendarSecurity200ResponseDelegatedAccessInner.md)
- [GetCalendarSecurity200ResponseExternalSharing](docs/GetCalendarSecurity200ResponseExternalSharing.md)
- [GetCalendarSecurity200ResponsePublicCalendarListInner](docs/GetCalendarSecurity200ResponsePublicCalendarListInner.md)
- [GetContactList200Response](docs/GetContactList200Response.md)
- [GetContactList200ResponseMembersInner](docs/GetContactList200ResponseMembersInner.md)
- [GetContactLists200Response](docs/GetContactLists200Response.md)
- [GetContactLists200ResponseDataInner](docs/GetContactLists200ResponseDataInner.md)
- [GetDirectoryActivity200Response](docs/GetDirectoryActivity200Response.md)
- [GetDirectoryActivity200ResponseDataInner](docs/GetDirectoryActivity200ResponseDataInner.md)
- [GetDirectoryStats200Response](docs/GetDirectoryStats200Response.md)
- [GetDomainsStatus200Response](docs/GetDomainsStatus200Response.md)
- [GetDomainsStatus200ResponseDomainsInner](docs/GetDomainsStatus200ResponseDomainsInner.md)
- [GetDomainsStatus200ResponseDomainsInnerChecksInner](docs/GetDomainsStatus200ResponseDomainsInnerChecksInner.md)
- [GetEncryptionKey200Response](docs/GetEncryptionKey200Response.md)
- [GetIPAssignment200Response](docs/GetIPAssignment200Response.md)
- [GetIntegrationsSummary200Response](docs/GetIntegrationsSummary200Response.md)
- [GetIntegrationsSummary200ResponseApiKeysInner](docs/GetIntegrationsSummary200ResponseApiKeysInner.md)
- [GetIntegrationsSummary200ResponseWebhooksInner](docs/GetIntegrationsSummary200ResponseWebhooksInner.md)
- [GetSecurity200Response](docs/GetSecurity200Response.md)
- [GetSecurity200ResponseAlertsInner](docs/GetSecurity200ResponseAlertsInner.md)
- [GetSecurity200ResponseStatsInner](docs/GetSecurity200ResponseStatsInner.md)
- [GetStorage200Response](docs/GetStorage200Response.md)
- [GetStorage200ResponseTopMailboxesInner](docs/GetStorage200ResponseTopMailboxesInner.md)
- [GetStorage200ResponseTopMessagesInner](docs/GetStorage200ResponseTopMessagesInner.md)
- [GetUserInsights200Response](docs/GetUserInsights200Response.md)
- [HealthzGet200Response](docs/HealthzGet200Response.md)
- [ListAddOns200Response](docs/ListAddOns200Response.md)
- [ListCalendarEvents200Response](docs/ListCalendarEvents200Response.md)
- [ListCalendarIntegrations200Response](docs/ListCalendarIntegrations200Response.md)
- [ListCalendarMembers200Response](docs/ListCalendarMembers200Response.md)
- [ListCalendars200Response](docs/ListCalendars200Response.md)
- [ListContactLists200Response](docs/ListContactLists200Response.md)
- [ListContacts200Response](docs/ListContacts200Response.md)
- [ListDedicatedIPRequests200Response](docs/ListDedicatedIPRequests200Response.md)
- [ListDistributionLists200Response](docs/ListDistributionLists200Response.md)
- [ListMigrationCredentials200Response](docs/ListMigrationCredentials200Response.md)
- [ListMigrationEvents200Response](docs/ListMigrationEvents200Response.md)
- [ListMigrationMailboxes200Response](docs/ListMigrationMailboxes200Response.md)
- [ListMigrations200Response](docs/ListMigrations200Response.md)
- [ListResources200Response](docs/ListResources200Response.md)
- [ListSharedMembers200Response](docs/ListSharedMembers200Response.md)
- [ListUsers200Response](docs/ListUsers200Response.md)
- [Mailbox](docs/Mailbox.md)
- [MapMigrationRequest](docs/MapMigrationRequest.md)
- [MapMigrationRequestMappingsInner](docs/MapMigrationRequestMappingsInner.md)
- [Message](docs/Message.md)
- [MessageDetail](docs/MessageDetail.md)
- [MessageStats](docs/MessageStats.md)
- [MessageStatsCounts](docs/MessageStatsCounts.md)
- [MessageStatsRates](docs/MessageStatsRates.md)
- [MessageStatsWindow](docs/MessageStatsWindow.md)
- [Migration](docs/Migration.md)
- [MigrationCredential](docs/MigrationCredential.md)
- [MigrationEvent](docs/MigrationEvent.md)
- [MigrationMailbox](docs/MigrationMailbox.md)
- [MigrationProgress](docs/MigrationProgress.md)
- [MigrationProgressMailboxesInner](docs/MigrationProgressMailboxesInner.md)
- [MigrationSettings](docs/MigrationSettings.md)
- [PlanCatalogEntry](docs/PlanCatalogEntry.md)
- [Problem](docs/Problem.md)
- [ReplaceDistributionListMembers200Response](docs/ReplaceDistributionListMembers200Response.md)
- [ReplaceDistributionListMembersRequest](docs/ReplaceDistributionListMembersRequest.md)
- [Resource](docs/Resource.md)
- [RotateEncryptionKeyRequest](docs/RotateEncryptionKeyRequest.md)
- [SendMessage](docs/SendMessage.md)
- [SharedMember](docs/SharedMember.md)
- [SignupRequest](docs/SignupRequest.md)
- [StartMigration202Response](docs/StartMigration202Response.md)
- [Suppression](docs/Suppression.md)
- [Template](docs/Template.md)
- [TemplateInput](docs/TemplateInput.md)
- [Tenant](docs/Tenant.md)
- [UnitBundle](docs/UnitBundle.md)
- [UpdateCalendarEventRequest](docs/UpdateCalendarEventRequest.md)
- [UpdateCalendarIntegrationRequest](docs/UpdateCalendarIntegrationRequest.md)
- [UpdateCalendarMemberRequest](docs/UpdateCalendarMemberRequest.md)
- [UpdateCalendarPoliciesRequest](docs/UpdateCalendarPoliciesRequest.md)
- [UpdateCalendarRequest](docs/UpdateCalendarRequest.md)
- [UpdateContactListRequest](docs/UpdateContactListRequest.md)
- [UpdateContactRequest](docs/UpdateContactRequest.md)
- [UpdateDirectoryPermissionsRequest](docs/UpdateDirectoryPermissionsRequest.md)
- [UpdateGALSettingsRequest](docs/UpdateGALSettingsRequest.md)
- [UpdateMigrationMailboxRequest](docs/UpdateMigrationMailboxRequest.md)
- [UpdateMigrationRequest](docs/UpdateMigrationRequest.md)
- [UpdateResourceRequest](docs/UpdateResourceRequest.md)
- [UpdateUserRequest](docs/UpdateUserRequest.md)
- [User](docs/User.md)
- [UserEvent](docs/UserEvent.md)
- [V1AdminLoginPost200Response](docs/V1AdminLoginPost200Response.md)
- [V1AdminLoginPostRequest](docs/V1AdminLoginPostRequest.md)
- [V1AdminMeGet200Response](docs/V1AdminMeGet200Response.md)
- [V1AdminsGet200Response](docs/V1AdminsGet200Response.md)
- [V1AdminsIdPatchRequest](docs/V1AdminsIdPatchRequest.md)
- [V1AdminsPostRequest](docs/V1AdminsPostRequest.md)
- [V1AliasesGet200Response](docs/V1AliasesGet200Response.md)
- [V1AliasesPostRequest](docs/V1AliasesPostRequest.md)
- [V1ApiKeysGet200Response](docs/V1ApiKeysGet200Response.md)
- [V1ApiKeysPost201Response](docs/V1ApiKeysPost201Response.md)
- [V1ApiKeysPostRequest](docs/V1ApiKeysPostRequest.md)
- [V1DomainsGet200Response](docs/V1DomainsGet200Response.md)
- [V1DomainsPostRequest](docs/V1DomainsPostRequest.md)
- [V1InboxesMailboxMessagesPostRequest](docs/V1InboxesMailboxMessagesPostRequest.md)
- [V1MailboxesEmailExportPost201Response](docs/V1MailboxesEmailExportPost201Response.md)
- [V1MailboxesEmailPatchRequest](docs/V1MailboxesEmailPatchRequest.md)
- [V1MailboxesEmailVacationPutRequest](docs/V1MailboxesEmailVacationPutRequest.md)
- [V1MailboxesGet200Response](docs/V1MailboxesGet200Response.md)
- [V1MailboxesPostRequest](docs/V1MailboxesPostRequest.md)
- [V1MessagesGet200Response](docs/V1MessagesGet200Response.md)
- [V1SendBatchPost200Response](docs/V1SendBatchPost200Response.md)
- [V1SendBatchPostRequest](docs/V1SendBatchPostRequest.md)
- [V1SendPost202Response](docs/V1SendPost202Response.md)
- [V1SendPostRequest](docs/V1SendPostRequest.md)
- [V1SendPostRequestAttachmentsInner](docs/V1SendPostRequestAttachmentsInner.md)
- [V1SuppressionsGet200Response](docs/V1SuppressionsGet200Response.md)
- [V1SuppressionsPostRequest](docs/V1SuppressionsPostRequest.md)
- [V1TemplatesGet200Response](docs/V1TemplatesGet200Response.md)
- [V1UsageGet200Response](docs/V1UsageGet200Response.md)
- [V1VacationGet200Response](docs/V1VacationGet200Response.md)
- [V1WebhooksGet200Response](docs/V1WebhooksGet200Response.md)
- [V1WebhooksIdPatchRequest](docs/V1WebhooksIdPatchRequest.md)
- [V1WebhooksPostRequest](docs/V1WebhooksPostRequest.md)
- [VacationParams](docs/VacationParams.md)
- [VacationResponder](docs/VacationResponder.md)
- [Webhook](docs/Webhook.md)

### Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
#### bearerAuth


- **Type**: HTTP Bearer Token authentication (lk_live_<prefix>_<secret>)
<a id="oauth2-accessCode"></a>
#### oauth2 accessCode


- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://api.lockally.com/oauth/authorize
- **Scopes**: 
  - `inboxes:read`: Read agent-accessible mailboxes and threads
  - `inboxes:write`: Send and act on agent-accessible mailboxes

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `0.1.0`
- Package version: `0.1.0`
- Generator version: `7.23.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[AGPL-3.0-only OR LicenseRef-LOC-Commercial]()
