# Kiota TypeScript API Client with Microsoft Identity Authentication

This project demonstrates how to build API clients for TypeScript with Microsoft identity authentication using Kiota, following the [Microsoft documentation](https://learn.microsoft.com/en-us/openapi/kiota/tutorials/typescript-azure?tabs=portal).

## Prerequisites

- Node.js 18 or later
- TypeScript
- Azure account with Microsoft Graph access

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Generate the API Client

First, install the Kiota CLI tool globally:

```bash
dotnet tool install --global Microsoft.Kiota.Cli
```

Then generate the API client from the OpenAPI specification:

```bash
kiota generate -l typescript -d get-me.yml -c GetUserApiClient -o ./client
```

### 3. Register an Azure Application

You need to create an application registration in Azure Active Directory:

#### Option A: Using Azure Portal

1. Go to [Azure Active Directory admin center](https://aad.portal.azure.com/)
2. Select **App registrations** → **New registration**
3. Set **Name** to `Kiota Test Client`
4. Set **Supported account types** to **Accounts in any organizational directory and personal Microsoft accounts**
5. Leave **Redirect URI** blank
6. Click **Register**
7. Copy the **Application (client) ID**
8. Go to **Authentication** → **Advanced settings**
9. Set **Allow public client flows** to **Yes** and save

#### Option B: Using PowerShell

```powershell
Connect-MgGraph -Scopes "Application.ReadWrite.All"
$app = New-MgApplication -displayName "Kiota Test Client" -IsFallbackPublicClient
# Copy the AppId value
```

### 4. Update Configuration

Edit `src/index.ts` and replace `YOUR_CLIENT_ID` with your actual client ID from step 3.

### 5. Build and Run

```bash
npm run build
npm start
```

## Project Structure

- `get-me.yml` - OpenAPI specification for Microsoft Graph user API
- `src/index.ts` - Main application with authentication and API client usage
- `client/` - Generated API client (created after running kiota generate)
- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration

## Authentication Flow

This project uses the Device Code Flow for authentication, which is suitable for:

- Command-line applications
- Development and testing
- Scenarios where interactive browser authentication isn't available

The authentication process:

1. Creates a `DeviceCodeCredential` with your client ID
2. Uses `AzureIdentityAuthenticationProvider` to handle token acquisition
3. Configures allowed hosts for security (only graph.microsoft.com)
4. Requests `User.Read` scope for Microsoft Graph access

## Dependencies

- `@microsoft/kiota-bundle` - Core Kiota functionality
- `@microsoft/kiota-authentication-azure` - Azure authentication provider
- `@azure/identity` - Azure identity library for credentials
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions

## Troubleshooting

1. **Module not found errors**: Make sure to run `kiota generate` before building
2. **Authentication errors**: Verify your client ID and app registration settings
3. **Permission errors**: Ensure your app has the correct Microsoft Graph permissions

## Next Steps

- Add more Microsoft Graph endpoints to the OpenAPI specification
- Implement different authentication flows (Interactive Browser, Client Secret, etc.)
- Add error handling and retry logic
- Implement caching for access tokens
