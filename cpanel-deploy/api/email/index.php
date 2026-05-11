<?php
/**
 * Serenity Africa Safaris — PHP Mail Proxy
 * Replaces the Next.js /api/email route for static cPanel deployments.
 *
 * Upload to: public_html/api/email/index.php
 * or place at: public_html/mail.php and update fetch URL accordingly.
 *
 * This file handles both:
 *   - Contact form submissions
 *   - Custom quote / safari enquiry form submissions
 */

// ── CONFIGURATION ──────────────────────────────────────────────
define('RECEIVER_EMAIL', 'info@serenityafricasafaris.com');
define('SENDER_FROM',    'Serenity Africa Safaris <noreply@serenityafricasafaris.com>');
define('SITE_NAME',      'Serenity Africa Safaris');
define('SITE_URL',       'https://serenityafricasafaris.com');
// ───────────────────────────────────────────────────────────────

// Only accept POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die(json_encode(['error' => 'Method not allowed']));
}

// CORS — allow only your domain
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ['https://serenityafricasafaris.com', 'https://www.serenityafricasafaris.com'], true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ── PARSE JSON BODY ─────────────────────────────────────────────
$raw = file_get_contents('php://input');
$body = json_decode($raw, true);

if (!is_array($body)) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid request body']));
}

// ── SANITIZE HELPERS ────────────────────────────────────────────
function esc(mixed $v, int $max = 500): string {
    if ($v === null) return '';
    $s = trim((string)$v);
    if (strlen($s) > $max) $s = substr($s, 0, $max);
    return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
}

function require_str(mixed $v, int $max = 500): string|false {
    if (!is_string($v)) return false;
    $s = trim($v);
    if ($s === '' || strlen($s) > $max) return false;
    return $s;
}

function valid_email(string $e): bool {
    return filter_var($e, FILTER_VALIDATE_EMAIL) !== false && strlen($e) <= 254;
}

// ── EXTRACT + VALIDATE FIELDS ───────────────────────────────────
$firstName   = require_str($body['firstName'] ?? null, 100);
$lastName    = require_str($body['lastName']  ?? null, 100);
$email       = require_str($body['email']     ?? null, 254);
$phone       = esc($body['phone']       ?? '', 30);
$country     = require_str($body['country']   ?? null, 100);
$message     = esc($body['message']     ?? '', 2000);
$interest    = esc($body['interest']    ?? '', 200);
$tripType    = esc($body['tripType']    ?? '', 200);
$destinations= esc($body['destinations']?? '', 500);
$travelDates = esc($body['travelDates'] ?? '', 200);
$duration    = esc($body['duration']    ?? '', 100);
$travelers   = esc($body['travelers']   ?? '', 20);
$budget      = esc($body['budget']      ?? '', 100);
$accommodation = esc($body['accommodation'] ?? '', 200);
$specialRequests = esc($body['specialRequests'] ?? '', 2000);

if (!$firstName || !$lastName || !$email || !$country) {
    http_response_code(400);
    die(json_encode(['error' => 'Required fields missing: firstName, lastName, email, country']));
}

if (!valid_email($email)) {
    http_response_code(400);
    die(json_encode(['error' => 'Invalid email address']));
}

// ── BUILD EMAIL HTML ────────────────────────────────────────────
$isQuote = ($tripType !== '' || $destinations !== '');

$subject = $isQuote
    ? "New Safari Quote Request — {$firstName} {$lastName}"
    : "New Contact Message — {$firstName} {$lastName}";

$innerHtml = $isQuote ? "
    <h2 style='color:#c2410c;margin-top:0'>New Custom Quote Request</h2>
    <p><strong>Name:</strong> {$firstName} {$lastName}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> " . ($phone ?: 'Not provided') . "</p>
    <p><strong>Country:</strong> {$country}</p>
    <h3 style='color:#9a3412'>Trip Details</h3>
    <ul>
        <li><strong>Trip Type:</strong> {$tripType}</li>
        <li><strong>Destinations:</strong> " . ($destinations ?: 'N/A') . "</li>
        <li><strong>Dates:</strong> " . ($travelDates ?: 'N/A') . "</li>
        <li><strong>Duration:</strong> " . ($duration ?: 'N/A') . "</li>
        <li><strong>Travelers:</strong> " . ($travelers ?: 'N/A') . "</li>
        <li><strong>Budget:</strong> " . ($budget ?: 'N/A') . "</li>
        <li><strong>Accommodation:</strong> " . ($accommodation ?: 'N/A') . "</li>
    </ul>
    <h3 style='color:#9a3412'>Special Requests</h3>
    <p style='white-space:pre-wrap'>" . ($specialRequests ?: 'None') . "</p>
" : "
    <h2 style='color:#c2410c;margin-top:0'>New Contact Message</h2>
    <p><strong>Name:</strong> {$firstName} {$lastName}</p>
    <p><strong>Email:</strong> {$email}</p>
    <p><strong>Phone:</strong> " . ($phone ?: 'Not provided') . "</p>
    <p><strong>Country:</strong> {$country}</p>
    " . ($interest ? "<p><strong>Interest:</strong> {$interest}</p>" : '') . "
    <h3 style='color:#9a3412'>Message</h3>
    <p style='white-space:pre-wrap'>{$message}</p>
";

$year = date('Y');
$wrap = fn(string $inner) => "
<div style='font-family:sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #eee;padding:24px;border-radius:10px'>
    {$inner}
    <div style='margin-top:30px;padding-top:16px;border-top:1px solid #eee;font-size:12px;color:#888'>
        <p>Sent from " . SITE_URL . "</p>
    </div>
</div>";

$autoReply = $wrap("
    <h2 style='color:#c2410c;margin-top:0'>Jambo, {$firstName}!</h2>
    <p>Thank you for reaching out to <strong>" . SITE_NAME . "</strong>. We have received your inquiry and our team of safari experts is reviewing it now.</p>
    <p>One of our consultants will be in touch within <strong>24 hours</strong> with a detailed response or a custom itinerary.</p>
    <div style='background:#fff7ed;padding:16px;border-radius:8px;margin:20px 0'>
        <h3 style='font-size:15px;margin-top:0;color:#9a3412'>What happens next?</h3>
        <ul style='margin-bottom:0'>
            <li>A dedicated safari expert will review your preferences.</li>
            <li>We will craft a tailored proposal based on your interests.</li>
            <li>You will receive your custom itinerary by email.</li>
        </ul>
    </div>
    <p>Best regards,<br><strong>The Serenity Africa Safaris Team</strong></p>
    <p style='font-size:12px;color:#888'>&copy; {$year} Serenity Africa Safaris</p>
");

// ── SEND EMAILS VIA PHP MAIL() ──────────────────────────────────
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: " . SENDER_FROM . "\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// 1. Email to business
$sent1 = mail(RECEIVER_EMAIL, $subject, $wrap($innerHtml), $headers);

// 2. Auto-reply to client
$headers2  = "MIME-Version: 1.0\r\n";
$headers2 .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers2 .= "From: " . SENDER_FROM . "\r\n";
$headers2 .= "X-Mailer: PHP/" . phpversion();

$sent2 = mail($email, 'We received your inquiry — ' . SITE_NAME, $autoReply, $headers2);

if ($sent1) {
    http_response_code(200);
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send message. Please try again.']);
}
