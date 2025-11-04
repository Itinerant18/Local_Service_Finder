# Troubleshooting Guide

## Issue: Blank screen after login

**Symptoms**: After successful login, the screen appears blank/black with no content

**Fixes Applied**:
1. ✅ Fixed tabs layout to handle loading state properly
2. ✅ Added proper error logging for data loading
3. ✅ Fixed auth context to load user data correctly
4. ✅ Added navigation guard in root layout

**What to do if still blank**:

### Step 1: Check Console Logs
Open browser/simulator console and look for errors:
```
- Authentication errors
- Database connection errors
- RLS policy violations
```

### Step 2: Verify Auth Session
User should be logged in. Check:
- Supabase Auth shows active session
- User record exists in `users` table
- User has `role` set (customer or provider)

### Step 3: Check RLS Policies
If you see "permission denied" errors:
- Navigate to Supabase console
- Go to Authentication > Policies
- Verify policies on `users` table
- Check `service_categories` is readable

---

## Issue: Can't create a booking

**Solution**:
- Make sure you're logged in as a **customer** (not provider)
- Provider account searches but can't create bookings
- Check browser console for validation errors

---

## Issue: No providers showing in search

**Reasons**:
1. No providers exist in database
2. Providers have `verification_status = 'pending'` (only verified show)
3. RLS policy blocking access

**To add test providers**:

### Via Supabase Console:
1. Go to `users` table
2. Add a user with role = 'provider'
3. Go to `service_providers` table
4. Add provider record with:
   - `verification_status = 'verified'`
   - `hourly_rate = 500`
   - `category_id = (pick one from service_categories)`

---

## Issue: Categories not loading

**Check**:
- `service_categories` table has data
- RLS policy allows public read on categories
- Browser console for SQL errors

**To verify**:
```sql
SELECT COUNT(*) FROM service_categories;
-- Should return 11
```

---

## Common Error Messages & Solutions

### "Permission denied"
- User doesn't have RLS permission
- Check RLS policies on the table
- Ensure user is authenticated

### "Relation does not exist"
- Table doesn't exist
- Run migrations: Check Supabase > SQL Editor
- Run the two migration files if not already done

### "Invalid JWT"
- Session expired
- Try signing out and back in
- Clear browser cache

### "Network error"
- Supabase connection issue
- Check internet connection
- Verify EXPO_PUBLIC_SUPABASE_URL in .env

---

## Testing the App

### Test Customer Flow:
1. Sign up as customer
2. Go to Home tab
3. Verify categories load
4. Go to Search tab
5. Verify provider list loads
6. Try creating booking

### Test Provider Flow:
1. Sign up as provider
2. Fill in profile (category, rate, experience)
3. Go to Home tab (Provider Home)
4. Verify bookings list shows
5. Go to Bookings tab

### Test Issue:
If any tab shows nothing:
1. Check browser console for errors
2. Check Supabase logs
3. Verify RLS policies

---

## Performance Tips

### Slow Loading:
- Check database query performance
- Verify indexes exist
- Check RLS policy complexity

### Blank Screens:
- Clear browser cache
- Restart dev server: `npm run dev`
- Check console for JS errors

---

## Database Reset (if needed)

### Clear All Data:
```sql
-- In Supabase SQL Editor

DELETE FROM reviews;
DELETE FROM notifications;
DELETE FROM bookings;
DELETE FROM provider_availability;
DELETE FROM service_providers;
DELETE FROM users;

-- Re-insert categories
INSERT INTO service_categories (name, description, icon_name) VALUES
  ('Plumbing', 'Plumbing repairs', 'pipe'),
  -- ... add all 11 categories
;
```

---

## Getting Help

1. **Check console logs** - Browser DevTools > Console
2. **Check Supabase logs** - Dashboard > Logs
3. **Review RLS policies** - Dashboard > Database > Policies
4. **Verify data exists** - Dashboard > SQL Editor > SELECT queries

---

## Quick Restart

```bash
# Clear cache and rebuild
rm -rf node_modules
npm install
npm run dev
```

---

**Updated**: November 2024
