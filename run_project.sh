#!/bin/bash
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Serenity Africa Safaris — Local Runner Script
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m'

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${CYAN}      SERENITY AFRICA SAFARIS — LOCAL DEVELOPMENT LAUNCHER${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Check Node.js
echo -e "${YELLOW}[1/4] Checking Node.js environment...${NC}"
node -v >/dev/null 2>&1 || { echo -e "${RED}ERROR: Node.js is not installed. Please install it first.${NC}"; exit 1; }
echo -e "${GREEN}✓ Node.js is ready: $(node -v)${NC}"

# Verify Postgres is running on default port
echo -e "${YELLOW}[2/4] Verifying PostgreSQL database server status...${NC}"
pg_isready -h localhost -p 5432 >/dev/null 2>&1
if [ $? -eq 0 ]; then
  echo -e "${GREEN}✓ Local PostgreSQL server is active and running on port 5432.${NC}"
else
  echo -e "${YELLOW}⚠ Local PostgreSQL is not responding on TCP port 5432.${NC}"
  echo -e "${YELLOW}  Checking for Unix domain socket at /private/tmp/.s.PGSQL.5432...${NC}"
  if [ -S "/private/tmp/.s.PGSQL.5432" ]; then
    echo -e "${GREEN}✓ Found active PostgreSQL Unix socket! Server is running.${NC}"
  else
    echo -e "${RED}ERROR: PostgreSQL server does not seem to be running.${NC}"
    echo -e "Please start PostgreSQL (via Applications -> PostgreSQL 18 or pgAdmin) and try again."
    exit 1
  fi
fi

# Sync Database schema
echo -e "${YELLOW}[3/4] Syncing database schema with Prisma...${NC}"
npx prisma db push

# Seed Database
echo -e "${YELLOW}[4/4] Seeding the database with premium tours & content...${NC}"
npm run db:seed

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}🎉 DATABASE IS READY & FULLY SEEDED!${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}Starting Next.js development server...${NC}"
echo -e "${CYAN}Open your browser to: http://localhost:3000${NC}"
echo -e "${CYAN}Admin panel:         http://localhost:3000/admin${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

npm run dev
