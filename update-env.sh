#!/bin/bash

# Script to update Supabase credentials in .env.local
# Usage: ./update-env.sh

echo "🔧 Supabase Credentials Updater"
echo "================================"
echo ""

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Creating .env.local from .env.example..."
    cp .env.example .env.local
fi

echo "Please enter your NEW Supabase credentials:"
echo ""
echo -n "Project URL (e.g., https://abcdefgh.supabase.co): "
read NEW_URL

echo -n "Anon/Public Key (starts with eyJ...): "
read NEW_KEY

echo ""
echo "Updating .env.local..."

# Backup existing .env.local
cp .env.local .env.local.backup
echo "✅ Backed up to .env.local.backup"

# Update the values
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    sed -i '' "s|NEXT_PUBLIC_SUPABASE_URL=.*|NEXT_PUBLIC_SUPABASE_URL=\"$NEW_URL\"|g" .env.local
    sed -i '' "s|NEXT_PUBLIC_SUPABASE_ANON_KEY=.*|NEXT_PUBLIC_SUPABASE_ANON_KEY=\"$NEW_KEY\"|g" .env.local
else
    # Linux
    sed -i "s|NEXT_PUBLIC_SUPABASE_URL=.*|NEXT_PUBLIC_SUPABASE_URL=\"$NEW_URL\"|g" .env.local
    sed -i "s|NEXT_PUBLIC_SUPABASE_ANON_KEY=.*|NEXT_PUBLIC_SUPABASE_ANON_KEY=\"$NEW_KEY\"|g" .env.local
fi

echo "✅ Updated .env.local"
echo ""
echo "Your new credentials:"
echo "URL: $NEW_URL"
echo "Key: ${NEW_KEY:0:30}..."
echo ""
echo "Next steps:"
echo "1. Run: node check-supabase.js (to verify connection)"
echo "2. Set up database tables in Supabase dashboard"
echo "3. Restart dev server: npm run dev"
echo ""


