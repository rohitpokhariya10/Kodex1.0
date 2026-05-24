
// Returns the HTML body used for the password reset OTP email.
const otpEmailTemplate = (otp) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Your OTP Code</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
        <div style="max-width: 500px; margin: auto; background: white; padding: 24px; border-radius: 10px;">
          <h2 style="color: #111;">Password Reset OTP</h2>

          <p>Hello,</p>

          <p>Your OTP code is:</p>

          <h1 style="letter-spacing: 6px; color: #2563eb;">${otp}</h1>

          <p>This OTP is valid for 10 minutes.</p>

          <p>If you did not request this, please ignore this email.</p>

          <br />

          <p>Thanks,</p>
          <p><strong>Kodex Team</strong></p>
        </div>
      </body>
    </html>
  `;
};

module.exports = otpEmailTemplate;
