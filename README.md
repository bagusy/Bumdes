# Bumdes

A simple admin dashboard and landing site for a village-owned enterprise (Bumdes).

## Overview

This repository contains a React + Vite application with an admin panel and a landing page.

## Development

Install dependencies:

```bash
npm install
```

Run dev server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

## License

MIT

  # BUMDes

  This is a code bundle for BUMDes. The original project is available at https://www.figma.com/design/hRMpA1c3pq6DwMQRRrEgAf/BUMDes.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

Local dockerized setup (frontend + backend + Postgres)

1. Copy env files:

```powershell
copy .env.example .env
copy server/.env.example server/.env
```

2. Build and run with Docker Compose:

```powershell
docker compose build
docker compose up
```

Frontend will be available at http://localhost:3000 and backend at http://localhost:4000/api

Note: To push to GitHub, add your remote and push from your machine (this assistant cannot access your credentials).
