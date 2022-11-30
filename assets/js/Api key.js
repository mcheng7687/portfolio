const api_key = "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";
const email_api = "https://api.sendgrid.com/v3/mail/send";

// curl --request POST \
// --url https://api.sendgrid.com/v3/mail/send \
// --header 'Authorization: Bearer <<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>>' \
// --header 'Content-Type: application/json' \
// --data '{"personalizations":[{"to":[{"email":"mcheng7687@gmail.com","name":"Me"}],"subject":"Hello, World!"}],"content": [{"type": "text/plain", "value": "Heya!"}],"from":{"email":"mcheng7687@gmail.com","name":"Me"},"reply_to":{"email":"mcheng7687@gmail.com","name":"Me"}}'


// curl --request POST \
//   --url https://api.sendgrid.com/v3/mail/send \
//   --header "Authorization: Bearer $SENDGRID_API_KEY" \
//   --header 'Content-Type: application/json' \
//   --data '{"personalizations": [{"to": [{"email": "test@example.com"}]}],"from": {"email": "test@example.com"},"subject": "Sending with SendGrid is Fun","content": [{"type": "text/plain", "value": "and easy to do anywhere, even with cURL"}]}'