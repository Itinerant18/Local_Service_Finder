# Getting Started - Fixed & Working

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Open in browser/simulator
# The app will automatically open
```

## Using the App

### First Time Setup

1. **Sign Up**
   - Tap "Get Started"
   - Choose role: "I need services" (customer) or "I provide services" (provider)
   - Enter email and password (8+ characters)
   - Complete profile setup

2. **After Login**
   - Home screen loads automatically
   - You'll see content (categories, providers, bookings, etc.)
   - Tab navigation appears at bottom

### As a Customer

**Home Tab**
- Browse featured providers
- View service categories
- Quick access to search

**Search Tab**
- Find providers by name
- Filter by category, price, rating
- Sort by relevance

**Bookings Tab**
- View your bookings
- Filter by status
- See booking details

**Profile Tab**
- View your information
- Manage account settings
- Sign out

### As a Service Provider

**Home Tab (Provider Home)**
- Dashboard with stats
- Upcoming bookings
- Profile status

**Bookings Tab**
- Manage your bookings
- View customer requests
- Track completion

**Profile Tab**
- Edit provider profile
- Manage availability
- View your ratings

---

## Testing with Sample Data

### Create Test Customer Account
1. Sign up with email: `customer@test.com`
2. Password: `Password123`
3. Role: "I need services"
4. Complete profile

### Create Test Provider Account
1. Sign up with email: `provider@test.com`
2. Password: `Password123`
3. Role: "I provide services"
4. Complete profile with:
   - Service: Plumbing
   - Experience: 5 years
   - Rate: ₹500/hour

---

## Troubleshooting

### If You See a Blank Screen
1. Check browser console (F12)
2. Look for error messages
3. See TROUBLESHOOTING.md for solutions

### If Data Doesn't Load
1. Verify you're logged in
2. Check internet connection
3. Try refreshing the page
4. Check Supabase status

### Can't Create Booking
1. Make sure you're a customer
2. Provider must have `verification_status = 'verified'`
3. Check category and hourly rate are set

---

## App Flow Diagram

```
Welcome
  ├─ Sign Up → Role Selection → Profile Setup
  │                                    ↓
  └─ Sign In ────────────────────────  ↓
                                      ↓
                            Home Screen (Tabs)
                                      ↓
                ┌─────────────────────┼─────────────────┐
                │                     │                 │
            Customer              Provider            Admin
                │                     │                 │
         ┌──────┼──────┐        ┌─────┼────┐      (Future)
         │      │      │        │     │    │
        Home  Search  Bookings Profile Home Bookings Profile
         │      │      │        │     │    │
    Categories  │    Filter    Dashboard    │
    Providers   │    Status   Stats    │
    Featured    │             Upcoming │
            Filter &
            Results
```

---

## Key Features Working

✅ Authentication (Sign up/Sign in)
✅ Role-based routing
✅ Home screens (Customer & Provider)
✅ Search with filters
✅ Provider profiles
✅ Booking creation
✅ Booking management
✅ Review system
✅ Dashboard stats
✅ Tab navigation

---

## Database

### Service Categories (Ready to Use)
1. Plumbing
2. Electrical
3. Carpentry
4. Teaching
5. Driving
6. Cooking
7. Cleaning
8. Painting
9. AC Repair
10. Mobile Repair
11. Home Appliance Repair

### Creating Test Data

**Via Supabase Console:**
1. Go to Dashboard
2. Select "SQL Editor"
3. Insert test provider:

```sql
-- First create a user (if not using auth signup)
INSERT INTO users (id, email, full_name, phone_number, role, is_verified)
VALUES
  ('test-provider-id', 'provider@test.com', 'John Plumber', '9999999999', 'provider', true);

-- Then create provider profile
INSERT INTO service_providers
  (id, category_id, experience_years, hourly_rate, verification_status, is_available)
VALUES
  ('test-provider-id',
   (SELECT id FROM service_categories WHERE name = 'Plumbing'),
   5,
   500,
   'verified',
   true);
```

---

## Common Tasks

### Reset to Fresh State
```bash
# Clear cache and rebuild
rm -rf node_modules .expo
npm install
npm run dev
```

### Check Build
```bash
npm run typecheck
```

### Debug with Logs
Open browser console (F12) and look for:
- "Categories loaded" messages
- "Error loading providers" messages
- Network errors in Network tab

---

## What's Fixed

✅ Blank screen after login - FIXED
✅ Tab navigation not showing - FIXED
✅ Loading states - IMPROVED
✅ Error handling - IMPROVED
✅ Navigation routing - FIXED

---

## Next Steps After Basic Testing

1. **Add Sample Provider Data** - Use test SQL above
2. **Create Test Bookings** - Book a service as customer
3. **Leave Reviews** - Rate a completed booking
4. **Invite Others** - Share the dev URL with teammates

---

## Support

- See **TROUBLESHOOTING.md** for common issues
- See **PROJECT_INDEX.md** for code structure
- See **SETUP.md** for technical details
- See **QUICKSTART.md** for feature overview

---

**Status**: ✅ Working and Ready to Use
**Last Updated**: November 2024
