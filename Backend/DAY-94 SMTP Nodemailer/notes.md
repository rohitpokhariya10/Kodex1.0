# DAY-94 SMTP Nodemailer - Short Notes

## Project Purpose

This project demonstrates a password reset OTP email flow using Express.js and Nodemailer SMTP.

## Main Packages

- `express`: Creates the backend server and API routes.
- `dotenv`: Loads secret values from `.env`.
- `nodemailer`: Sends emails through an SMTP server.
- `nodemon`: Restarts the server automatically during development.

## Folder Flow

- `server.js`: Entry point of the project. Loads `.env`, imports the app, and starts the server.
- `src/app.js`: Creates the Express app, adds middleware, health route, auth routes, and global error handling.
- `src/routes/auth.routes.js`: Defines authentication routes.
- `src/controllers/auth.controller.js`: Handles request logic for forgot password.
- `src/services/mail.service.js`: Reusable service that sends emails using Nodemailer.
- `src/config/mail.config.js`: Creates and exports the SMTP transporter.
- `src/template/otpEmail.template.js`: Builds the HTML email template for OTP.
- `src/middleware/error.middleware.js`: Sends a clean JSON response when errors occur.
- `src/utils/apiError.js`: Custom error class for status code based errors.

## Full Request Flow

1. Client sends a `POST` request to `/api/auth/forgot-password`.
2. Request body should contain `email`.
3. `auth.routes.js` forwards the request to `forgotPassword`.
4. Controller checks if email is present.
5. Controller generates a 6-digit OTP.
6. Controller calls `sendmail()` with receiver email, subject, text, and HTML template.
7. `mail.service.js` validates mail data.
8. `mail.service.js` sends email using the transporter from `mail.config.js`.
9. If mail is sent successfully, client receives success response.
10. If any error happens, global error middleware sends an error response.

## API Endpoint

### Health Check

`GET /health`

Purpose: Check whether the server is running.

Success response:

```json
{
  "message": "Server is healthy",
  "success": true
}
```

### Forgot Password

`POST /api/auth/forgot-password`

Purpose: Generate OTP and send it to the user's email.

Request body:

```json
{
  "email": "user@example.com"
}
```

Success response:

```json
{
  "message": "OTP sent successfully",
  "success": true
}
```

## Environment Variables

The project needs these values in `.env`:

```env
MAIL_HOST=your_smtp_host
MAIL_USER=your_email_or_smtp_user
MAIL_PASS=your_email_or_smtp_password
```

## Important Learning Points

- Keep email sending code in a service so it can be reused.
- Keep SMTP configuration separate from controller logic.
- Never hardcode email passwords in code.
- Use `.env` for secrets.
- Validate request data before processing.
- Use a global error handler for consistent error responses.

## Production Improvements

- Store OTP in database with expiry time.
- Hash OTP before saving it.
- Add rate limiting to prevent OTP spam.
- Validate email format.
- Remove sensitive console logs before deployment.
- Use a trusted SMTP provider for production emails.
