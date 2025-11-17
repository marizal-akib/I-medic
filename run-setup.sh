#!/bin/bash

echo "📋 Supabase Database Setup Instructions"
echo "========================================"
echo ""
echo "1. Open your Supabase dashboard:"
echo "   https://supabase.com/dashboard/project/rwkuvcrpldwzptucqotp"
echo ""
echo "2. Click 'SQL Editor' in the left sidebar"
echo ""
echo "3. Click 'New Query'"
echo ""
echo "4. Copy the contents of 'supabase-setup.sql'"
echo "   (The file is in your project root)"
echo ""
echo "5. Paste into the SQL Editor"
echo ""
echo "6. Click 'Run' (or press Ctrl+Enter)"
echo ""
echo "7. You should see: ✅ 'Success. No rows returned'"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Would you like me to show the SQL content? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
    echo ""
    echo "📄 SQL Content:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    cat supabase-setup.sql
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Copy the above SQL and paste into Supabase SQL Editor"
fi

echo ""
echo "After running the SQL, come back here and continue!"
