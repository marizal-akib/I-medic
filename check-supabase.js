#!/usr/bin/env node

/**
 * Supabase Connection Diagnostic Tool
 * Run this to check if your Supabase configuration is working
 * 
 * Usage: node check-supabase.js
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

console.log('🔍 Checking Supabase Configuration...\n');

// Read .env.local file
const envPath = path.join(__dirname, '.env.local');

if (!fs.existsSync(envPath)) {
  console.error('❌ .env.local file not found!');
  console.log('   Create it from .env.example');
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const urlMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_URL=["']?([^"'\n]+)["']?/);
const keyMatch = envContent.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=["']?([^"'\n]+)["']?/);

if (!urlMatch || !keyMatch) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

const supabaseUrl = urlMatch[1];
const supabaseKey = keyMatch[1];

console.log('✅ Found .env.local file');
console.log(`📍 Supabase URL: ${supabaseUrl}`);
console.log(`🔑 Anon Key: ${supabaseKey.substring(0, 20)}...${supabaseKey.substring(supabaseKey.length - 10)}\n`);

// Check if using placeholder values
if (supabaseUrl.includes('placeholder') || supabaseKey.includes('placeholder')) {
  console.error('❌ Still using placeholder values!');
  console.log('   Update .env.local with your actual Supabase credentials');
  process.exit(1);
}

console.log('🌐 Testing connection to Supabase...\n');

// Test connection to Supabase
const testUrl = new URL('/auth/v1/health', supabaseUrl);

https.get(testUrl.href, {
  headers: {
    'apikey': supabaseKey,
    'Content-Type': 'application/json'
  }
}, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`📡 Response Status: ${res.statusCode}`);
    
    if (res.statusCode === 200) {
      console.log('✅ Supabase is reachable and responding!\n');
      console.log('🎉 Your configuration looks good!\n');
      console.log('Next steps:');
      console.log('  1. Make sure database tables are set up (run supabase-setup.sql)');
      console.log('  2. Enable Email auth in Supabase dashboard');
      console.log('  3. Restart your dev server: npm run dev');
      console.log('  4. Try registering at: http://localhost:3000/register\n');
    } else if (res.statusCode === 404) {
      console.log('⚠️  Supabase is responding but endpoint not found');
      console.log('   This is normal - your configuration is likely correct!\n');
      console.log('Next steps:');
      console.log('  1. Make sure database tables are set up');
      console.log('  2. Try registering at: http://localhost:3000/register\n');
    } else {
      console.log(`⚠️  Unexpected response: ${res.statusCode}`);
      console.log(`   Response: ${data}\n`);
    }
  });
  
}).on('error', (err) => {
  console.error('❌ Cannot connect to Supabase!\n');
  console.log('Possible reasons:');
  console.log('  1. 🛑 Project is PAUSED');
  console.log('     → Go to: https://supabase.com/dashboard');
  console.log('     → Click "Resume Project"');
  console.log('     → Wait 30-60 seconds\n');
  
  console.log('  2. 🔗 Wrong URL in .env.local');
  console.log('     → Check Settings → API in Supabase dashboard');
  console.log('     → Copy the correct Project URL\n');
  
  console.log('  3. 🌐 Network/Internet issue');
  console.log('     → Check your internet connection');
  console.log('     → Try: curl ' + supabaseUrl + '\n');
  
  console.log('  4. 🗑️  Project was deleted');
  console.log('     → Create a new project at supabase.com');
  console.log('     → Update .env.local with new credentials\n');
  
  console.log(`Error details: ${err.code || err.message}\n`);
  
  console.log('📚 See UPDATE-SUPABASE-CREDENTIALS.md for detailed help\n');
  process.exit(1);
});


