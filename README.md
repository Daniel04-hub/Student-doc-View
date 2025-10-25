# Student-doc-View

Local run instructions

Prerequisites
- Node.js LTS installed (https://nodejs.org/) or use nvm-windows
- Git

Install and build

Open PowerShell in the project root and run:

```powershell
Set-Location -Path 's:\Project\project 5(doc view)\Doc-View-doc-agent'
npm.cmd ci
npm.cmd run build
```

Start the production server

```powershell
# optional: set a different port
$env:PORT = '5000'
$env:NODE_ENV = 'production'
node dist/index.js
```

Notes
- On PowerShell the `npm` shim (npm.ps1) may be blocked by execution policy. Use `npm.cmd` or enable RemoteSigned for the current user:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force
```

- `DATABASE_URL` is required by `drizzle.config.ts` when running tooling that imports it. Set it if you use the database:

```powershell
$env:DATABASE_URL = 'postgres://user:pass@host:5432/dbname'
```

- Server listens on `0.0.0.0` and defaults to port `5000`.

Development

Run in development mode (TSX dev server):

```powershell
npm.cmd run dev
```
