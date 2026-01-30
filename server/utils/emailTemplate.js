export function generateVerificationOtpEmailTemplate(otpCode) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verification Code</title>
</head>

<body style="
  margin:0;
  padding:0;
  background-color:#f3f4f6;
  font-family:Arial, Helvetica, sans-serif;
">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
    <tr>
      <td align="center">

        <!-- Main Card -->
        <table width="100%" cellpadding="0" cellspacing="0" style="
          max-width:420px;
          background-color:#ffffff;
          border-radius:12px;
          overflow:hidden;
          box-shadow:0 10px 25px rgba(0,0,0,0.1);
        ">

          <!-- Header -->
          <tr>
            <td style="
              background-color:#4f46e5;
              padding:24px;
              text-align:center;
              color:#ffffff;
            ">
              <h1 style="margin:0;font-size:22px;">
                Bookworm Library
              </h1>
              <p style="margin:6px 0 0;font-size:13px;opacity:0.9;">
                Library Management System
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:24px;color:#1f2937;">

              <h2 style="
                margin:0 0 12px;
                font-size:18px;
                font-weight:bold;
              ">
                Email Verification
              </h2>

              <p style="
                margin:0 0 18px;
                font-size:14px;
                line-height:1.6;
                color:#374151;
              ">
                Thank you for signing up with <strong>Bookworm Library Management System</strong>.
                Please use the verification code below to complete your registration.
              </p>

              <!-- OTP -->
              <div style="
                background-color:#f9fafb;
                border:2px dashed #4f46e5;
                border-radius:8px;
                padding:16px;
                text-align:center;
                margin-bottom:18px;
              ">
                <p style="
                  margin:0;
                  font-size:11px;
                  letter-spacing:1px;
                  color:#6b7280;
                ">
                  YOUR VERIFICATION CODE
                </p>
                <p style="
                  margin:6px 0 0;
                  font-size:28px;
                  font-weight:bold;
                  letter-spacing:6px;
                  color:#4f46e5;
                ">
                  ${otpCode}
                </p>
              </div>

              <p style="
                margin:0 0 10px;
                font-size:13px;
                color:#374151;
              ">
                ⏳ This code is valid for a limited time.
              </p>

              <p style="
                margin:0;
                font-size:13px;
                color:#6b7280;
              ">
                If you did not request this code, please ignore this email.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              background-color:#f9fafb;
              padding:16px;
              text-align:center;
              font-size:12px;
              color:#6b7280;
            ">
              <p style="margin:0;">
                © 2026 Bookworm Library Management System
              </p>
              <p style="margin:4px 0 0;">
                Managing knowledge, made simple 📚
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;
}
