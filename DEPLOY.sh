#!/bin/bash
# ─────────────────────────────────────────────────────────────────────────────
# Serenity Africa Safaris — VPS (Ubuntu/Nginx/PM2) Deployment Script
# Run on server after first-time clone:  bash deploy.sh
# Run on subsequent deploys:             bash deploy.sh
# ─────────────────────────────────────────────────────────────────────────────
set -e

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'
APP_DIR="/var/www/serenityafricasafaris"
APP_NAME="serenity-africa"

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  Serenity Africa Safaris — Deployment${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# ── Check required tools ──────────────────────────────────────────────────────
echo -e "${YELLOW}[1/6]${NC} Checking environment..."
command -v node  >/dev/null || { echo -e "${RED}ERROR: Node.js not found${NC}"; exit 1; }
command -v pm2   >/dev/null || { echo "Installing PM2..."; npm i -g pm2; }
command -v nginx >/dev/null || echo -e "${YELLOW}  WARN: nginx not found — install manually${NC}"

if [ ! -f "$APP_DIR/.env.local" ]; then
  echo -e "${RED}ERROR: $APP_DIR/.env.local not found!${NC}"
  echo "  Copy .env.production.example → .env.local and fill in values"
  exit 1
fi

# ── Pull latest code ──────────────────────────────────────────────────────────
echo -e "${YELLOW}[2/6]${NC} Pulling latest code..."
cd "$APP_DIR"
git pull origin main

# ── Install dependencies ──────────────────────────────────────────────────────
echo -e "${YELLOW}[3/6]${NC} Installing dependencies..."
npm ci --omit=dev

# ── Prisma ────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}[4/6]${NC} Generating Prisma client and syncing schema..."
npx prisma generate
npx prisma db push --skip-generate

# ── Build ─────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}[5/6]${NC} Building Next.js production bundle..."
NODE_ENV=production npm run build

# ── PM2 ───────────────────────────────────────────────────────────────────────
echo -e "${YELLOW}[6/6]${NC} Starting/reloading PM2..."
pm2 reload "$APP_NAME" --update-env 2>/dev/null || pm2 start ecosystem.config.js
pm2 save

echo ""
echo -e "${GREEN}✅ Deployment complete — $(date)${NC}"
echo -e "   App running at http://127.0.0.1:3000"
echo -e "   View logs: pm2 logs $APP_NAME"
