# Sindbad Platform - Nuxt 3 Frontend with nuxt-auth

This is a Nuxt 3 frontend configured with `@sidebase/nuxt-auth` for authentication with your Laravel backend.

## Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager
- Laravel backend running (default: http://localhost:8000)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` and update with your backend URLs:

```bash
cp .env.example .env.local
```

Update the `.env.local` file:

```env
NUXT_PUBLIC_API_BASE=http://localhost:8000/api
NUXT_PUBLIC_AUTH_URL=http://localhost:8000
NUXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
app/
├── pages/
│   ├── login.vue           # Login page
│   ├── register.vue        # Registration page
│   └── dashboard.vue       # Protected dashboard (requires authentication)
├── middleware/
│   └── auth.ts            # Authentication middleware for route protection
└── composables/
    └── useAuth.ts         # Custom auth composable (if needed)

app.vue                      # Root layout component
nuxt.config.ts              # Nuxt configuration with auth setup
```

## Features

### Authentication Pages
- **Login** (`/login`) - User email/password login
- **Register** (`/register`) - New user registration
- **Dashboard** (`/dashboard`) - Protected page (requires login)

### Authentication Flow
1. Users can create accounts via `/register` endpoint
2. Users login with email/password at `/login`
3. Session is managed by nuxt-auth
4. Protected routes automatically redirect to login if not authenticated
5. Users can logout from the navbar or dashboard

## Backend Integration

This frontend expects the following endpoints from your Laravel backend:

### Authentication Endpoints
- `POST /login` - Login with email and password
- `POST /logout` - Logout (destroy session)
- `POST /register` - Register new user
- `GET /api/user` - Get authenticated user data (Sanctum)

### API Base
- Base URL: `http://localhost:8000/api`
- Authentication: Sanctum (cookie-based for web, token-based for API)

## CORS Configuration

Make sure your Laravel backend has CORS configured correctly:

In `config/cors.php`:
```php
'paths' => ['api/*', 'login', 'logout', 'register'],
'allowed_origins' => ['http://localhost:3000'],
'supports_credentials' => true,
```

In `config/sanctum.php`:
```php
'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', 'localhost,localhost:3000')),
```

## Build for Production

```bash
npm run build
npm run preview
```

## Key Dependencies

- **Nuxt**: ^4.4.2 - Server-side rendering framework
- **Vue**: ^3.5.32 - JavaScript framework
- **@sidebase/nuxt-auth**: ^0.8.8 - Authentication module
- **Vue Router**: ^5.0.4 - Routing library

## Troubleshooting

### Login Not Working
1. Check that Laravel backend is running on the configured URL
2. Verify CORS is properly configured
3. Check browser console for network errors
4. Ensure Sanctum middleware is enabled

### Session Not Persisting
1. Check that cookies are being sent (browser DevTools → Storage → Cookies)
2. Verify `supports_credentials` is true in CORS config
3. Check that session cookie domain matches your setup

### Environment Variables Not Loading
1. Restart the dev server after changing `.env.local`
2. Ensure variable names start with `NUXT_PUBLIC_` for client-side variables
3. Use `NUXT_` prefix for server-side only variables

## Next Steps

1. Customize the login/register pages with your branding
2. Add additional protected pages/components
3. Implement Sanctum token refresh logic if using token-based auth
4. Add more auth-related features (2FA, password reset, etc.)
5. Migrate existing components from the Vue 3 frontend as needed

## Support

For issues or questions:
- Check the Nuxt documentation: https://nuxt.com
- Check nuxt-auth documentation: https://auth.sidebase.io
- Check Laravel Sanctum documentation: https://laravel.com/docs/sanctum
