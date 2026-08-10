fileBuffer--> <Buffer 25 50 44 46 2d 31 2e 34 0a 25 93 8c 8b 9e 20 52 65 70 6f 72 74 4c 61 62 20 47 65 6e 65 72 61 74 65 64 20 50 44 46 20 64 6f 63 75 6d 65 6e 74 20 28 6f ... 31478 more bytes>
parser--> PDFParse {
  options: {
    data: Uint8Array(31528) [
       37,  80,  68,  70,  45,  49,  46,  52,  10,  37, 147, 140,
      139, 158,  32,  82, 101, 112, 111, 114, 116,  76,  97,  98,
       32,  71, 101, 110, 101, 114,  97, 116, 101, 100,  32,  80,
       68,  70,  32, 100, 111,  99, 117, 109, 101, 110, 116,  32,
       40, 111, 112, 101, 110, 115, 111, 117, 114,  99, 101,  41,
       10,  49,  32,  48,  32, 111,  98, 106,  10,  60,  60,  10,
       47,  70,  49,  32,  50,  32,  48,  32,  82,  32,  47,  70,
       50,  32,  51,  32,  48,  32,  82,  10,  62,  62,  10, 101,
      110, 100, 111,  98,
   
    ],
    verbosity: 0
  },
  doc: undefined,
  progress: { loaded: -1, total: 0 }
}
result--> TextResult {
  pages: [
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 1 of 10 | Records 1-5 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-001 | Arjun Agarwal | Paid\n' +
        'Contact arjun.agarwal1@example.com | +91 973124697 Invoice / Due 10 May 2026 / 20 May 2026\n' +
        'Address 15, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 3,076.50\n' +
        'Paid: INR 3,076.50\n' +
        'Pending: INR 0.00\n' +
        'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-001. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-002 | Karan Saxena | Paid\n' +
        'Contact karan.saxena2@example.com | +91 973124834 Invoice / Due 12 May 2026 / 26 May 2026\n' +
        'Address 18, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 3,759.00\n' +
        'Paid: INR 3,759.00\n' +
        'Pending: INR 0.00\n' +
        'Items Tea 1kg x3; LED Bulb Pack x1; Mineral Water Case x2; Detergent Pack\n' +
        'x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-002. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-003 | Ananya Gupta | Paid\n' +
        'Contact ananya.gupta3@example.com | +91 973124971 Invoice / Due 14 May 2026 / 29 May 2026\n' +
        'Address 21, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 1,942.50\n' +
        'Paid: INR 1,942.50\n' +
        'Pending: INR 0.00\n' +
        'Items Dry Fruits Box x1; Snack Assortment x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-003. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-004 | Kabir Agarwal | Pending\n' +
        'Contact kabir.agarwal4@example.com | +91 973125108 Invoice / Due 16 May 2026 / 06 Jun 2026\n' +
        'Address 24, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 4,599.00\n' +
        'Paid: INR 1,149.75\n' +
        'Pending: INR 3,449.25\n' +
        'Items Printer Cartridge x2; Stationery Kit x3; Wheat Flour 10kg x1 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
        'Message Reminder: INR 3,449.25 is pending on INV-2026-004, due 06 Jun 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-005 | Sanya Saxena | Pending\n' +
        'Contact sanya.saxena5@example.com | +91 973125245 Invoice / Due 18 May 2026 / 17 Jun 2026\n' +
        'Address 27, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 5,601.75\n' +
        'Paid: INR 2,800.88\n' +
        'Pending: INR 2,800.87\n' +
        'Items Cleaning Supplies x3; Spice Combo x1; Tea 1kg x2; LED Bulb Pack x3 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
        'Message Reminder: INR 2,800.87 is pending on INV-2026-005, due 17 Jun 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending',
      num: 1
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 2 of 10 | Records 6-10 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-006 | Pooja Gupta | Pending\n' +
        'Contact pooja.gupta6@example.com | +91 973125382 Invoice / Due 20 May 2026 / 27 May 2026\n' +
        'Address 30, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,320.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 2,320.50\n' +
        'Items Coffee Pack x1; Cooking Oil 5L x2 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
        'Message Reminder: INR 2,320.50 is pending on INV-2026-006, due 27 May 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-007 | Siddharth Agarwal | Overdue\n' +
        'Contact siddharth.agarwal7@example.com | +91 973125519 Invoice / Due 22 May 2026 / 01 Jun 2026\n' +
        'Address 33, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 3,139.50\n' +
        'Paid: INR 941.85\n' +
        'Pending: INR 2,197.65\n' +
        'Items Mineral Water Case x2; Detergent Pack x3; Printer Cartridge x1 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
        'Message Overdue notice: INV-2026-007 was due 01 Jun 2026. Outstanding\n' +
        'balance: INR 2,197.65. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-008 | Sneha Saxena | Overdue\n' +
        'Contact sneha.saxena8@example.com | +91 973125656 Invoice / Due 24 May 2026 / 07 Jun 2026\n' +
        'Address 36, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 5,533.50\n' +
        'Paid: INR 3,320.10\n' +
        'Pending: INR 2,213.40\n' +
        'Items Basmati Rice 5kg x3; Sugar 5kg x1; Cleaning Supplies x2; Spice Combo\n' +
        'x3\n' +
        'Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
        'Message Overdue notice: INV-2026-008 was due 07 Jun 2026. Outstanding\n' +
        'balance: INR 2,213.40. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-009 | Aditya Gupta | Overdue\n' +
        'Contact aditya.gupta9@example.com | +91 973125793 Invoice / Due 26 May 2026 / 10 Jun 2026\n' +
        'Address 39, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 1,417.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,417.50\n' +
        'Items Wheat Flour 10kg x1; Office Paper Bundle x2 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
        'Message Overdue notice: INV-2026-009 was due 10 Jun 2026. Outstanding\n' +
        'balance: INR 1,417.50. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-010 | Rahul Agarwal | Paid\n' +
        'Contact rahul.agarwal10@example.com | +91 973125930 Invoice / Due 28 May 2026 / 18 Jun 2026\n' +
        'Address 42, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 3,055.50\n' +
        'Paid: INR 3,055.50\n' +
        'Pending: INR 0.00\n' +
        'Items Tea 1kg x2; LED Bulb Pack x3; Mineral Water Case x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-010. Thank you. No balance is pending. Status Paid',
      num: 2
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 3 of 10 | Records 11-15 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-011 | Priya Saxena | Paid\n' +
        'Contact priya.saxena11@example.com | +91 973126067 Invoice / Due 30 May 2026 / 29 Jun 2026\n' +
        'Address 45, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 5,381.25\n' +
        'Paid: INR 5,381.25\n' +
        'Pending: INR 0.00\n' +
        'Items Dry Fruits Box x3; Snack Assortment x1; Basmati Rice 5kg x2; Sugar 5kg\n' +
        'x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-011. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-012 | Meera Gupta | Paid\n' +
        'Contact meera.gupta12@example.com | +91 973126204 Invoice / Due 01 Jun 2026 / 08 Jun 2026\n' +
        'Address 48, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 2,236.50\n' +
        'Paid: INR 2,236.50\n' +
        'Pending: INR 0.00\n' +
        'Items Printer Cartridge x1; Stationery Kit x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-012. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-013 | Nikhil Agarwal | Paid\n' +
        'Contact nikhil.agarwal13@example.com | +91 973126341 Invoice / Due 03 Jun 2026 / 13 Jun 2026\n' +
        'Address 51, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 3,806.25\n' +
        'Paid: INR 3,806.25\n' +
        'Pending: INR 0.00\n' +
        'Items Cleaning Supplies x2; Spice Combo x3; Tea 1kg x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-013. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-014 | Manish Saxena | Pending\n' +
        'Contact manish.saxena14@example.com | +91 973126478 Invoice / Due 05 Jun 2026 / 19 Jun 2026\n' +
        'Address 54, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 6,247.50\n' +
        'Paid: INR 3,123.75\n' +
        'Pending: INR 3,123.75\n' +
        'Items Coffee Pack x3; Cooking Oil 5L x1; Dry Fruits Box x2; Snack Assortment\n' +
        'x3\n' +
        'Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
        'Message Reminder: INR 3,123.75 is pending on INV-2026-014, due 19 Jun 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-015 | Aditi Gupta | Pending\n' +
        'Contact aditi.gupta15@example.com | +91 973126615 Invoice / Due 07 Jun 2026 / 22 Jun 2026\n' +
        'Address 57, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 1,039.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,039.50\n' +
        'Items Mineral Water Case x1; Detergent Pack x2 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
        'Message Reminder: INR 1,039.50 is pending on INV-2026-015, due 22 Jun 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending',
      num: 3
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 4 of 10 | Records 16-20 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-016 | Harsh Agarwal | Pending\n' +
        'Contact harsh.agarwal16@example.com | +91 973126752 Invoice / Due 09 Jun 2026 / 30 Jun 2026\n' +
        'Address 60, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,829.75\n' +
        'Paid: INR 707.44\n' +
        'Pending: INR 2,122.31\n' +
        'Items Basmati Rice 5kg x2; Sugar 5kg x3; Cleaning Supplies x1 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
        'Message Reminder: INR 2,122.31 is pending on INV-2026-016, due 30 Jun 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-017 | Vivaan Saxena | Overdue\n' +
        'Contact vivaan.saxena17@example.com | +91 973126889 Invoice / Due 11 Jun 2026 / 11 Jul 2026\n' +
        'Address 63, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 5,869.50\n' +
        'Paid: INR 3,521.70\n' +
        'Pending: INR 2,347.80\n' +
        'Items Wheat Flour 10kg x3; Office Paper Bundle x1; Coffee Pack x2; Cooking\n' +
        'Oil 5L x3\n' +
        'Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
        'Message Overdue notice: INV-2026-017 was due 11 Jul 2026. Outstanding\n' +
        'balance: INR 2,347.80. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-018 | Rohan Gupta | Overdue\n' +
        'Contact rohan.gupta18@example.com | +91 973127026 Invoice / Due 13 Jun 2026 / 20 Jun 2026\n' +
        'Address 66, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 1,659.00\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,659.00\n' +
        'Items Tea 1kg x1; LED Bulb Pack x2 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
        'Message Overdue notice: INV-2026-018 was due 20 Jun 2026. Outstanding\n' +
        'balance: INR 1,659.00. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-019 | Neha Agarwal | Overdue\n' +
        'Contact neha.agarwal19@example.com | +91 973127163 Invoice / Due 15 Jun 2026 / 25 Jun 2026\n' +
        'Address 69, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 4,032.00\n' +
        'Paid: INR 1,209.60\n' +
        'Pending: INR 2,822.40\n' +
        'Items Dry Fruits Box x2; Snack Assortment x3; Basmati Rice 5kg x1 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
        'Message Overdue notice: INV-2026-019 was due 25 Jun 2026. Outstanding\n' +
        'balance: INR 2,822.40. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-020 | Ishita Saxena | Paid\n' +
        'Contact ishita.saxena20@example.com | +91 973127300 Invoice / Due 17 Jun 2026 / 01 Jul 2026\n' +
        'Address 72, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 7,056.00\n' +
        'Paid: INR 7,056.00\n' +
        'Pending: INR 0.00\n' +
        'Items Printer Cartridge x3; Stationery Kit x1; Wheat Flour 10kg x2; Office Paper\n' +
        'Bundle x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-020. Thank you. No balance is pending. Status Paid',
      num: 4
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 5 of 10 | Records 21-25 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-021 | Dev Gupta | Paid\n' +
        'Contact dev.gupta21@example.com | +91 973127437 Invoice / Due 19 Jun 2026 / 04 Jul 2026\n' +
        'Address 75, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 1,963.50\n' +
        'Paid: INR 1,963.50\n' +
        'Pending: INR 0.00\n' +
        'Items Cleaning Supplies x1; Spice Combo x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-021. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-022 | Ritika Agarwal | Paid\n' +
        'Contact ritika.agarwal22@example.com | +91 973127574 Invoice / Due 21 Jun 2026 / 12 Jul 2026\n' +
        'Address 78, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 4,756.50\n' +
        'Paid: INR 4,756.50\n' +
        'Pending: INR 0.00\n' +
        'Items Coffee Pack x2; Cooking Oil 5L x3; Dry Fruits Box x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-022. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-023 | Vikram Saxena | Paid\n' +
        'Contact vikram.saxena23@example.com | +91 973127711 Invoice / Due 23 Jun 2026 / 23 Jul 2026\n' +
        'Address 81, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 5,397.00\n' +
        'Paid: INR 5,397.00\n' +
        'Pending: INR 0.00\n' +
        'Items Mineral Water Case x3; Detergent Pack x1; Printer Cartridge x2;\n' +
        'Stationery Kit x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-023. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-024 | Tanvi Gupta | Pending\n' +
        'Contact tanvi.gupta24@example.com | +91 973127848 Invoice / Due 25 Jun 2026 / 02 Jul 2026\n' +
        'Address 84, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 1,165.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,165.50\n' +
        'Items Basmati Rice 5kg x1; Sugar 5kg x2 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
        'Message Reminder: INR 1,165.50 is pending on INV-2026-024, due 02 Jul 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-025 | Aarav Agarwal | Pending\n' +
        'Contact aarav.agarwal25@example.com | +91 973127985 Invoice / Due 27 Jun 2026 / 07 Jul 2026\n' +
        'Address 87, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 3,076.50\n' +
        'Paid: INR 769.12\n' +
        'Pending: INR 2,307.38\n' +
        'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
        'Message Reminder: INR 2,307.38 is pending on INV-2026-025, due 07 Jul 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending',
      num: 5
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 6 of 10 | Records 26-30 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-026 | Arjun Saxena | Pending\n' +
        'Contact arjun.saxena26@example.com | +91 973128122 Invoice / Due 29 Jun 2026 / 13 Jul 2026\n' +
        'Address 90, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 3,759.00\n' +
        'Paid: INR 1,879.50\n' +
        'Pending: INR 1,879.50\n' +
        'Items Tea 1kg x3; LED Bulb Pack x1; Mineral Water Case x2; Detergent Pack\n' +
        'x3\n' +
        'Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
        'Message Reminder: INR 1,879.50 is pending on INV-2026-026, due 13 Jul 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-027 | Karan Gupta | Overdue\n' +
        'Contact karan.gupta27@example.com | +91 973128259 Invoice / Due 01 Jul 2026 / 16 Jul 2026\n' +
        'Address 93, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 1,942.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,942.50\n' +
        'Items Dry Fruits Box x1; Snack Assortment x2 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
        'Message Overdue notice: INV-2026-027 was due 16 Jul 2026. Outstanding\n' +
        'balance: INR 1,942.50. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-028 | Ananya Agarwal | Overdue\n' +
        'Contact ananya.agarwal28@example.com | +91 973128396 Invoice / Due 03 Jul 2026 / 24 Jul 2026\n' +
        'Address 96, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 4,599.00\n' +
        'Paid: INR 1,379.70\n' +
        'Pending: INR 3,219.30\n' +
        'Items Printer Cartridge x2; Stationery Kit x3; Wheat Flour 10kg x1 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
        'Message Overdue notice: INV-2026-028 was due 24 Jul 2026. Outstanding\n' +
        'balance: INR 3,219.30. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-029 | Kabir Saxena | Overdue\n' +
        'Contact kabir.saxena29@example.com | +91 973128533 Invoice / Due 05 Jul 2026 / 04 Aug 2026\n' +
        'Address 99, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 5,601.75\n' +
        'Paid: INR 3,361.05\n' +
        'Pending: INR 2,240.70\n' +
        'Items Cleaning Supplies x3; Spice Combo x1; Tea 1kg x2; LED Bulb Pack x3 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
        'Message Overdue notice: INV-2026-029 was due 04 Aug 2026. Outstanding\n' +
        'balance: INR 2,240.70. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-030 | Sanya Gupta | Paid\n' +
        'Contact sanya.gupta30@example.com | +91 973128670 Invoice / Due 07 Jul 2026 / 14 Jul 2026\n' +
        'Address 102, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 2,320.50\n' +
        'Paid: INR 2,320.50\n' +
        'Pending: INR 0.00\n' +
        'Items Coffee Pack x1; Cooking Oil 5L x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-030. Thank you. No balance is pending. Status Paid',
      num: 6
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 7 of 10 | Records 31-35 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-031 | Pooja Agarwal | Paid\n' +
        'Contact pooja.agarwal31@example.com | +91 973128807 Invoice / Due 09 Jul 2026 / 19 Jul 2026\n' +
        'Address 105, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 3,139.50\n' +
        'Paid: INR 3,139.50\n' +
        'Pending: INR 0.00\n' +
        'Items Mineral Water Case x2; Detergent Pack x3; Printer Cartridge x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-031. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-032 | Siddharth Saxena | Paid\n' +
        'Contact siddharth.saxena32@example.com | +91 973128944 Invoice / Due 11 Jul 2026 / 25 Jul 2026\n' +
        'Address 108, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 5,533.50\n' +
        'Paid: INR 5,533.50\n' +
        'Pending: INR 0.00\n' +
        'Items Basmati Rice 5kg x3; Sugar 5kg x1; Cleaning Supplies x2; Spice Combo\n' +
        'x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-032. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-033 | Sneha Gupta | Paid\n' +
        'Contact sneha.gupta33@example.com | +91 973129081 Invoice / Due 13 Jul 2026 / 28 Jul 2026\n' +
        'Address 111, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 1,417.50\n' +
        'Paid: INR 1,417.50\n' +
        'Pending: INR 0.00\n' +
        'Items Wheat Flour 10kg x1; Office Paper Bundle x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-033. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-034 | Aditya Agarwal | Pending\n' +
        'Contact aditya.agarwal34@example.com | +91 973129218 Invoice / Due 15 Jul 2026 / 05 Aug 2026\n' +
        'Address 114, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 3,055.50\n' +
        'Paid: INR 763.88\n' +
        'Pending: INR 2,291.62\n' +
        'Items Tea 1kg x2; LED Bulb Pack x3; Mineral Water Case x1 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
        'Message Reminder: INR 2,291.62 is pending on INV-2026-034, due 05 Aug 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-035 | Rahul Saxena | Pending\n' +
        'Contact rahul.saxena35@example.com | +91 973129355 Invoice / Due 17 Jul 2026 / 16 Aug 2026\n' +
        'Address 117, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 5,381.25\n' +
        'Paid: INR 2,690.62\n' +
        'Pending: INR 2,690.63\n' +
        'Items Dry Fruits Box x3; Snack Assortment x1; Basmati Rice 5kg x2; Sugar 5kg\n' +
        'x3\n' +
        'Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
        'Message Reminder: INR 2,690.63 is pending on INV-2026-035, due 16 Aug 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending',
      num: 7
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 8 of 10 | Records 36-40 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-036 | Priya Gupta | Pending\n' +
        'Contact priya.gupta36@example.com | +91 973129492 Invoice / Due 19 Jul 2026 / 26 Jul 2026\n' +
        'Address 120, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,236.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 2,236.50\n' +
        'Items Printer Cartridge x1; Stationery Kit x2 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
        'Message Reminder: INR 2,236.50 is pending on INV-2026-036, due 26 Jul 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-037 | Meera Agarwal | Overdue\n' +
        'Contact meera.agarwal37@example.com | +91 973129629 Invoice / Due 21 Jul 2026 / 31 Jul 2026\n' +
        'Address 123, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 3,806.25\n' +
        'Paid: INR 1,141.88\n' +
        'Pending: INR 2,664.37\n' +
        'Items Cleaning Supplies x2; Spice Combo x3; Tea 1kg x1 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
        'Message Overdue notice: INV-2026-037 was due 31 Jul 2026. Outstanding\n' +
        'balance: INR 2,664.37. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-038 | Nikhil Saxena | Overdue\n' +
        'Contact nikhil.saxena38@example.com | +91 973129766 Invoice / Due 23 Jul 2026 / 06 Aug 2026\n' +
        'Address 126, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 6,247.50\n' +
        'Paid: INR 3,748.50\n' +
        'Pending: INR 2,499.00\n' +
        'Items Coffee Pack x3; Cooking Oil 5L x1; Dry Fruits Box x2; Snack Assortment\n' +
        'x3\n' +
        'Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
        'Message Overdue notice: INV-2026-038 was due 06 Aug 2026. Outstanding\n' +
        'balance: INR 2,499.00. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-039 | Manish Gupta | Overdue\n' +
        'Contact manish.gupta39@example.com | +91 973129903 Invoice / Due 25 Jul 2026 / 09 Aug 2026\n' +
        'Address 129, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 1,039.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,039.50\n' +
        'Items Mineral Water Case x1; Detergent Pack x2 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
        'Message Overdue notice: INV-2026-039 was due 09 Aug 2026. Outstanding\n' +
        'balance: INR 1,039.50. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-040 | Aditi Agarwal | Paid\n' +
        'Contact aditi.agarwal40@example.com | +91 973130040 Invoice / Due 27 Jul 2026 / 17 Aug 2026\n' +
        'Address 132, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 2,829.75\n' +
        'Paid: INR 2,829.75\n' +
        'Pending: INR 0.00\n' +
        'Items Basmati Rice 5kg x2; Sugar 5kg x3; Cleaning Supplies x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-040. Thank you. No balance is pending. Status Paid',
      num: 8
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 9 of 10 | Records 41-45 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-041 | Harsh Saxena | Paid\n' +
        'Contact harsh.saxena41@example.com | +91 973130177 Invoice / Due 29 Jul 2026 / 28 Aug 2026\n' +
        'Address 135, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 5,869.50\n' +
        'Paid: INR 5,869.50\n' +
        'Pending: INR 0.00\n' +
        'Items Wheat Flour 10kg x3; Office Paper Bundle x1; Coffee Pack x2; Cooking\n' +
        'Oil 5L x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-041. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-042 | Vivaan Gupta | Paid\n' +
        'Contact vivaan.gupta42@example.com | +91 973130314 Invoice / Due 31 Jul 2026 / 07 Aug 2026\n' +
        'Address 138, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 1,659.00\n' +
        'Paid: INR 1,659.00\n' +
        'Pending: INR 0.00\n' +
        'Items Tea 1kg x1; LED Bulb Pack x2 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-042. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-043 | Rohan Agarwal | Paid\n' +
        'Contact rohan.agarwal43@example.com | +91 973130451 Invoice / Due 02 Aug 2026 / 12 Aug 2026\n' +
        'Address 141, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 4,032.00\n' +
        'Paid: INR 4,032.00\n' +
        'Pending: INR 0.00\n' +
        'Items Dry Fruits Box x2; Snack Assortment x3; Basmati Rice 5kg x1 Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-043. Thank you. No balance is pending. Status Paid\n' +
        'INV-2026-044 | Neha Saxena | Pending\n' +
        'Contact neha.saxena44@example.com | +91 973130588 Invoice / Due 04 Aug 2026 / 18 Aug 2026\n' +
        'Address 144, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 7,056.00\n' +
        'Paid: INR 3,528.00\n' +
        'Pending: INR 3,528.00\n' +
        'Items Printer Cartridge x3; Stationery Kit x1; Wheat Flour 10kg x2; Office Paper\n' +
        'Bundle x3\n' +
        'Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
        'Message Reminder: INR 3,528.00 is pending on INV-2026-044, due 18 Aug 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-045 | Ishita Gupta | Pending\n' +
        'Contact ishita.gupta45@example.com | +91 973130725 Invoice / Due 06 Aug 2026 / 21 Aug 2026\n' +
        'Address 147, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 1,963.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,963.50\n' +
        'Items Cleaning Supplies x1; Spice Combo x2 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
        'Message Reminder: INR 1,963.50 is pending on INV-2026-045, due 21 Aug 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending',
      num: 9
    },
    {
      text: 'RAG Test Dataset - Invoice & Payment Records\n' +
        'Synthetic data only | Page 10 of 10 | Records 46-50 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
        'INV-2026-046 | Dev Agarwal | Pending\n' +
        'Contact dev.agarwal46@example.com | +91 973130862 Invoice / Due 08 Aug 2026 / 29 Aug 2026\n' +
        'Address 150, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 4,756.50\n' +
        'Paid: INR 1,189.12\n' +
        'Pending: INR 3,567.38\n' +
        'Items Coffee Pack x2; Cooking Oil 5L x3; Dry Fruits Box x1 Payment link Active\n' +
        'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
        'Message Reminder: INR 3,567.38 is pending on INV-2026-046, due 29 Aug 2026.\n' +
        'Please pay using the active link.\n' +
        'Status Pending\n' +
        'INV-2026-047 | Ritika Saxena | Overdue\n' +
        'Contact ritika.saxena47@example.com | +91 973130999 Invoice / Due 10 Aug 2026 / 09 Sep 2026\n' +
        'Address 153, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 5,397.00\n' +
        'Paid: INR 3,238.20\n' +
        'Pending: INR 2,158.80\n' +
        'Items Mineral Water Case x3; Detergent Pack x1; Printer Cartridge x2;\n' +
        'Stationery Kit x3\n' +
        'Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
        'Message Overdue notice: INV-2026-047 was due 09 Sep 2026. Outstanding\n' +
        'balance: INR 2,158.80. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-048 | Vikram Gupta | Overdue\n' +
        'Contact vikram.gupta48@example.com | +91 973131136 Invoice / Due 12 Aug 2026 / 19 Aug 2026\n' +
        'Address 156, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 1,165.50\n' +
        'Paid: INR 0.00\n' +
        'Pending: INR 1,165.50\n' +
        'Items Basmati Rice 5kg x1; Sugar 5kg x2 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
        'Message Overdue notice: INV-2026-048 was due 19 Aug 2026. Outstanding\n' +
        'balance: INR 1,165.50. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-049 | Tanvi Agarwal | Overdue\n' +
        'Contact tanvi.agarwal49@example.com | +91 973131273 Invoice / Due 14 Aug 2026 / 24 Aug 2026\n' +
        'Address 159, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 3,076.50\n' +
        'Paid: INR 922.95\n' +
        'Pending: INR 2,153.55\n' +
        'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Active - overdue\n' +
        'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
        'Message Overdue notice: INV-2026-049 was due 24 Aug 2026. Outstanding\n' +
        'balance: INR 2,153.55. Please clear it promptly.\n' +
        'Status Overdue\n' +
        'INV-2026-050 | Aarav Saxena | Paid\n' +
        'Contact aarav.saxena50@example.com | +91 973131410 Invoice / Due 16 Aug 2026 / 30 Aug 2026\n' +
        'Address 162, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 3,759.00\n' +
        'Paid: INR 3,759.00\n' +
        'Pending: INR 0.00\n' +
        'Items Tea 1kg x3; LED Bulb Pack x1; Mineral Water Case x2; Detergent Pack\n' +
        'x3\n' +
        'Payment link Completed / disabled\n' +
        'Reminder No future reminders; payment receipt sent. Channels Email\n' +
        'Message Payment received for INV-2026-050. Thank you. No balance is pending. Status Paid',
      num: 10
    }
  ],

  text: 'RAG Test Dataset - Invoice & Payment Records\n' +
    'Synthetic data only | Page 1 of 10 | Records 1-5 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
    'INV-2026-001 | Arjun Agarwal | Paid\n' +
    'Contact arjun.agarwal1@example.com | +91 973124697 Invoice / Due 10 May 2026 / 20 May 2026\n' +
    'Address 15, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 3,076.50\n' +
    'Paid: INR 3,076.50\n' +
    'Pending: INR 0.00\n' +
    'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-001. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-002 | Karan Saxena | Paid\n' +
    'Contact karan.saxena2@example.com | +91 973124834 Invoice / Due 12 May 2026 / 26 May 2026\n' +
    'Address 18, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 3,759.00\n' +
    'Paid: INR 3,759.00\n' +
    'Pending: INR 0.00\n' +
    'Items Tea 1kg x3; LED Bulb Pack x1; Mineral Water Case x2; Detergent Pack\n' +
    'x3\n' +
    'Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-002. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-003 | Ananya Gupta | Paid\n' +
    'Contact ananya.gupta3@example.com | +91 973124971 Invoice / Due 14 May 2026 / 29 May 2026\n' +
    'Address 21, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 1,942.50\n' +
    'Paid: INR 1,942.50\n' +
    'Pending: INR 0.00\n' +
    'Items Dry Fruits Box x1; Snack Assortment x2 Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-003. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-004 | Kabir Agarwal | Pending\n' +
    'Contact kabir.agarwal4@example.com | +91 973125108 Invoice / Due 16 May 2026 / 06 Jun 2026\n' +
    'Address 24, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 4,599.00\n' +
    'Paid: INR 1,149.75\n' +
    'Pending: INR 3,449.25\n' +
    'Items Printer Cartridge x2; Stationery Kit x3; Wheat Flour 10kg x1 Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
    'Message Reminder: INR 3,449.25 is pending on INV-2026-004, due 06 Jun 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    'INV-2026-005 | Sanya Saxena | Pending\n' +
    'Contact sanya.saxena5@example.com | +91 973125245 Invoice / Due 18 May 2026 / 17 Jun 2026\n' +
    'Address 27, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 5,601.75\n' +
    'Paid: INR 2,800.88\n' +
    'Pending: INR 2,800.87\n' +
    'Items Cleaning Supplies x3; Spice Combo x1; Tea 1kg x2; LED Bulb Pack x3 Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
    'Message Reminder: INR 2,800.87 is pending on INV-2026-005, due 17 Jun 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    '\n' +
    '-- 1 of 10 --\n' +
    '\n' +
    'RAG Test Dataset - Invoice & Payment Records\n' +
    'Synthetic data only | Page 2 of 10 | Records 6-10 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
    'INV-2026-006 | Pooja Gupta | Pending\n' +
    'Contact pooja.gupta6@example.com | +91 973125382 Invoice / Due 20 May 2026 / 27 May 2026\n' +
    'Address 30, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,320.50\n' +
    'Paid: INR 0.00\n' +
    'Pending: INR 2,320.50\n' +
    'Items Coffee Pack x1; Cooking Oil 5L x2 Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
    'Message Reminder: INR 2,320.50 is pending on INV-2026-006, due 27 May 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    'INV-2026-007 | Siddharth Agarwal | Overdue\n' +
    'Contact siddharth.agarwal7@example.com | +91 973125519 Invoice / Due 22 May 2026 / 01 Jun 2026\n' +
    'Address 33, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 3,139.50\n' +
    'Paid: INR 941.85\n' +
    'Pending: INR 2,197.65\n' +
    'Items Mineral Water Case x2; Detergent Pack x3; Printer Cartridge x1 Payment link Active - overdue\n' +
    'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
    'Message Overdue notice: INV-2026-007 was due 01 Jun 2026. Outstanding\n' +
    'balance: INR 2,197.65. Please clear it promptly.\n' +
    'Status Overdue\n' +
    'INV-2026-008 | Sneha Saxena | Overdue\n' +
    'Contact sneha.saxena8@example.com | +91 973125656 Invoice / Due 24 May 2026 / 07 Jun 2026\n' +
    'Address 36, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 5,533.50\n' +
    'Paid: INR 3,320.10\n' +
    'Pending: INR 2,213.40\n' +
    'Items Basmati Rice 5kg x3; Sugar 5kg x1; Cleaning Supplies x2; Spice Combo\n' +
    'x3\n' +
    'Payment link Active - overdue\n' +
    'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
    'Message Overdue notice: INV-2026-008 was due 07 Jun 2026. Outstanding\n' +
    'balance: INR 2,213.40. Please clear it promptly.\n' +
    'Status Overdue\n' +
    'INV-2026-009 | Aditya Gupta | Overdue\n' +
    'Contact aditya.gupta9@example.com | +91 973125793 Invoice / Due 26 May 2026 / 10 Jun 2026\n' +
    'Address 39, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 1,417.50\n' +
    'Paid: INR 0.00\n' +
    'Pending: INR 1,417.50\n' +
    'Items Wheat Flour 10kg x1; Office Paper Bundle x2 Payment link Active - overdue\n' +
    'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
    'Message Overdue notice: INV-2026-009 was due 10 Jun 2026. Outstanding\n' +
    'balance: INR 1,417.50. Please clear it promptly.\n' +
    'Status Overdue\n' +
    'INV-2026-010 | Rahul Agarwal | Paid\n' +
    'Contact rahul.agarwal10@example.com | +91 973125930 Invoice / Due 28 May 2026 / 18 Jun 2026\n' +
    'Address 42, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 3,055.50\n' +
    'Paid: INR 3,055.50\n' +
    'Pending: INR 0.00\n' +
    'Items Tea 1kg x2; LED Bulb Pack x3; Mineral Water Case x1 Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-010. Thank you. No balance is pending. Status Paid\n' +
    '\n' +
    '-- 2 of 10 --\n' +
    '\n' +
    'RAG Test Dataset - Invoice & Payment Records\n' +
    'Synthetic data only | Page 3 of 10 | Records 11-15 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
    'INV-2026-011 | Priya Saxena | Paid\n' +
    'Contact priya.saxena11@example.com | +91 973126067 Invoice / Due 30 May 2026 / 29 Jun 2026\n' +
    'Address 45, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 5,381.25\n' +
    'Paid: INR 5,381.25\n' +
    'Pending: INR 0.00\n' +
    'Items Dry Fruits Box x3; Snack Assortment x1; Basmati Rice 5kg x2; Sugar 5kg\n' +
    'x3\n' +
    'Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-011. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-012 | Meera Gupta | Paid\n' +
    'Contact meera.gupta12@example.com | +91 973126204 Invoice / Due 01 Jun 2026 / 08 Jun 2026\n' +
    'Address 48, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 2,236.50\n' +
    'Paid: INR 2,236.50\n' +
    'Pending: INR 0.00\n' +
    'Items Printer Cartridge x1; Stationery Kit x2 Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-012. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-013 | Nikhil Agarwal | Paid\n' +
    'Contact nikhil.agarwal13@example.com | +91 973126341 Invoice / Due 03 Jun 2026 / 13 Jun 2026\n' +
    'Address 51, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 3,806.25\n' +
    'Paid: INR 3,806.25\n' +
    'Pending: INR 0.00\n' +
    'Items Cleaning Supplies x2; Spice Combo x3; Tea 1kg x1 Payment link Completed / disabled\n' +
    'Reminder No future reminders; payment receipt sent. Channels Email\n' +
    'Message Payment received for INV-2026-013. Thank you. No balance is pending. Status Paid\n' +
    'INV-2026-014 | Manish Saxena | Pending\n' +
    'Contact manish.saxena14@example.com | +91 973126478 Invoice / Due 05 Jun 2026 / 19 Jun 2026\n' +
    'Address 54, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 6,247.50\n' +
    'Paid: INR 3,123.75\n' +
    'Pending: INR 3,123.75\n' +
    'Items Coffee Pack x3; Cooking Oil 5L x1; Dry Fruits Box x2; Snack Assortment\n' +
    'x3\n' +
    'Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
    'Message Reminder: INR 3,123.75 is pending on INV-2026-014, due 19 Jun 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    'INV-2026-015 | Aditi Gupta | Pending\n' +
    'Contact aditi.gupta15@example.com | +91 973126615 Invoice / Due 07 Jun 2026 / 22 Jun 2026\n' +
    'Address 57, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 1,039.50\n' +
    'Paid: INR 0.00\n' +
    'Pending: INR 1,039.50\n' +
    'Items Mineral Water Case x1; Detergent Pack x2 Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
    'Message Reminder: INR 1,039.50 is pending on INV-2026-015, due 22 Jun 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    '\n' +
    '-- 3 of 10 --\n' +
    '\n' +
    'RAG Test Dataset - Invoice & Payment Records\n' +
    'Synthetic data only | Page 4 of 10 | Records 16-20 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.\n' +
    'INV-2026-016 | Harsh Agarwal | Pending\n' +
    'Contact harsh.agarwal16@example.com | +91 973126752 Invoice / Due 09 Jun 2026 / 30 Jun 2026\n' +
    'Address 60, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,829.75\n' +
    'Paid: INR 707.44\n' +
    'Pending: INR 2,122.31\n' +
    'Items Basmati Rice 5kg x2; Sugar 5kg x3; Cleaning Supplies x1 Payment link Active\n' +
    'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
    'Message Reminder: INR 2,122.31 is pending on INV-2026-016, due 30 Jun 2026.\n' +
    'Please pay using the active link.\n' +
    'Status Pending\n' +
    'INV-2026-017 | Vivaan Saxena | Overdue\n' +
    'Contact vivaan.saxena17@example.com | +91 973126889 Invoice / Due 11 Jun 2026 / 11 Jul 2026\n' +
    'Address 63, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 5,869.50\n' +
    'Paid: INR 3,521.70\n' +
    'Pending: INR 2,347.80\n' +
    'Items Wheat Flour 10kg x3; Office Paper Bundle x1; Coffee Pack x2; Cooking\n' +
    'Oil 5L x3\n' +
    'Payment link Active - overdue\n' +
    'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
    'Message Overdue notice: INV-2026-017 was due 11 Jul 2026. Outstanding\n' +
    'balance: INR 2,347.80. Please clear it promptly.\n' +
    'Status Overdue\n' +
    'INV-2026-018 | Rohan Gupta | Overdue\n' +
    'Contact rohan.gupta18@example.com | +91 973127026 Invoice / Due 13 Jun 2026 / 20 Jun 2026\n' +
    'Address 66, Gree'... 18707 more characters,
  total: 10
}



{/*        Splitter Output*/  }
Chunks-->[
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records\n' +
      'Synthetic data only | Page 1 of 10 | Records 1-5 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-001 | Arjun Agarwal | Paid\n' +
      'Contact arjun.agarwal1@example.com | +91 973124697 Invoice / Due 10 May 2026 / 20 May 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 15, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 3,076.50\n' +
      'Paid: INR 3,076.50\n' +
      'Pending: INR 0.00',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 3,076.50\n' +
      'Pending: INR 0.00\n' +
      'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Completed / disabled',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-001. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-002 | Karan Saxena | Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-002 | Karan Saxena | Paid\n' +
      'Contact karan.saxena2@example.com | +91 973124834 Invoice / Due 12 May 2026 / 26 May 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 18, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 3,759.00\n' +
      'Paid: INR 3,759.00\n' +
      'Pending: INR 0.00\n' +
      'Items Tea 1kg x3; LED Bulb Pack x1; Mineral Water Case x2; Detergent Pack\n' +
      'x3',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'x3\n' +
      'Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-002. Thank you. No balance is pending. Status Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-003 | Ananya Gupta | Paid\n' +
      'Contact ananya.gupta3@example.com | +91 973124971 Invoice / Due 14 May 2026 / 29 May 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 21, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 1,942.50\n' +
      'Paid: INR 1,942.50\n' +
      'Pending: INR 0.00\n' +
      'Items Dry Fruits Box x1; Snack Assortment x2 Payment link Completed / disabled',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-003. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-004 | Kabir Agarwal | Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-004 | Kabir Agarwal | Pending\n' +
      'Contact kabir.agarwal4@example.com | +91 973125108 Invoice / Due 16 May 2026 / 06 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 24, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 4,599.00\n' +
      'Paid: INR 1,149.75\n' +
      'Pending: INR 3,449.25',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 1,149.75\n' +
      'Pending: INR 3,449.25\n' +
      'Items Printer Cartridge x2; Stationery Kit x3; Wheat Flour 10kg x1 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
      'Message Reminder: INR 3,449.25 is pending on INV-2026-004, due 06 Jun 2026.\n' +
      'Please pay using the active link.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\n' +
      'Status Pending\n' +
      'INV-2026-005 | Sanya Saxena | Pending\n' +
      'Contact sanya.saxena5@example.com | +91 973125245 Invoice / Due 18 May 2026 / 17 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 27, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 5,601.75\n' +
      'Paid: INR 2,800.88\n' +
      'Pending: INR 2,800.87',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 2,800.88\n' +
      'Pending: INR 2,800.87\n' +
      'Items Cleaning Supplies x3; Spice Combo x1; Tea 1kg x2; LED Bulb Pack x3 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
      'Message Reminder: INR 2,800.87 is pending on INV-2026-005, due 17 Jun 2026.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\nStatus Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: '-- 1 of 10 --',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records\n' +
      'Synthetic data only | Page 2 of 10 | Records 6-10 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-006 | Pooja Gupta | Pending\n' +
      'Contact pooja.gupta6@example.com | +91 973125382 Invoice / Due 20 May 2026 / 27 May 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 30, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,320.50\n' +
      'Paid: INR 0.00\n' +
      'Pending: INR 2,320.50\n' +
      'Items Coffee Pack x1; Cooking Oil 5L x2 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
      'Message Reminder: INR 2,320.50 is pending on INV-2026-006, due 27 May 2026.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\n' +
      'Status Pending\n' +
      'INV-2026-007 | Siddharth Agarwal | Overdue\n' +
      'Contact siddharth.agarwal7@example.com | +91 973125519 Invoice / Due 22 May 2026 / 01 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 33, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 3,139.50\n' +
      'Paid: INR 941.85\n' +
      'Pending: INR 2,197.65',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 941.85\n' +
      'Pending: INR 2,197.65\n' +
      'Items Mineral Water Case x2; Detergent Pack x3; Printer Cartridge x1 Payment link Active - overdue',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
      'Message Overdue notice: INV-2026-007 was due 01 Jun 2026. Outstanding',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 2,197.65. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-008 | Sneha Saxena | Overdue\n' +
      'Contact sneha.saxena8@example.com | +91 973125656 Invoice / Due 24 May 2026 / 07 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 36, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 5,533.50\n' +
      'Paid: INR 3,320.10\n' +
      'Pending: INR 2,213.40\n' +
      'Items Basmati Rice 5kg x3; Sugar 5kg x1; Cleaning Supplies x2; Spice Combo',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'x3\n' +
      'Payment link Active - overdue\n' +
      'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
      'Message Overdue notice: INV-2026-008 was due 07 Jun 2026. Outstanding',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 2,213.40. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-009 | Aditya Gupta | Overdue\n' +
      'Contact aditya.gupta9@example.com | +91 973125793 Invoice / Due 26 May 2026 / 10 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 39, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 1,417.50\n' +
      'Paid: INR 0.00\n' +
      'Pending: INR 1,417.50\n' +
      'Items Wheat Flour 10kg x1; Office Paper Bundle x2 Payment link Active - overdue',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
      'Message Overdue notice: INV-2026-009 was due 10 Jun 2026. Outstanding\n' +
      'balance: INR 1,417.50. Please clear it promptly.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 1,417.50. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-010 | Rahul Agarwal | Paid\n' +
      'Contact rahul.agarwal10@example.com | +91 973125930 Invoice / Due 28 May 2026 / 18 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 42, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 3,055.50\n' +
      'Paid: INR 3,055.50\n' +
      'Pending: INR 0.00',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 3,055.50\n' +
      'Pending: INR 0.00\n' +
      'Items Tea 1kg x2; LED Bulb Pack x3; Mineral Water Case x1 Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Message Payment received for INV-2026-010. Thank you. No balance is pending. Status Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: '-- 2 of 10 --',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records\n' +
      'Synthetic data only | Page 3 of 10 | Records 11-15 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-011 | Priya Saxena | Paid\n' +
      'Contact priya.saxena11@example.com | +91 973126067 Invoice / Due 30 May 2026 / 29 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 45, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 5,381.25\n' +
      'Paid: INR 5,381.25\n' +
      'Pending: INR 0.00\n' +
      'Items Dry Fruits Box x3; Snack Assortment x1; Basmati Rice 5kg x2; Sugar 5kg\n' +
      'x3',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'x3\n' +
      'Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-011. Thank you. No balance is pending. Status Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-012 | Meera Gupta | Paid\n' +
      'Contact meera.gupta12@example.com | +91 973126204 Invoice / Due 01 Jun 2026 / 08 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 48, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 2,236.50\n' +
      'Paid: INR 2,236.50\n' +
      'Pending: INR 0.00\n' +
      'Items Printer Cartridge x1; Stationery Kit x2 Payment link Completed / disabled',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-012. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-013 | Nikhil Agarwal | Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-013 | Nikhil Agarwal | Paid\n' +
      'Contact nikhil.agarwal13@example.com | +91 973126341 Invoice / Due 03 Jun 2026 / 13 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 51, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 3,806.25\n' +
      'Paid: INR 3,806.25\n' +
      'Pending: INR 0.00',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 3,806.25\n' +
      'Pending: INR 0.00\n' +
      'Items Cleaning Supplies x2; Spice Combo x3; Tea 1kg x1 Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Message Payment received for INV-2026-013. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-014 | Manish Saxena | Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-014 | Manish Saxena | Pending\n' +
      'Contact manish.saxena14@example.com | +91 973126478 Invoice / Due 05 Jun 2026 / 19 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 54, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 6,247.50\n' +
      'Paid: INR 3,123.75\n' +
      'Pending: INR 3,123.75\n' +
      'Items Coffee Pack x3; Cooking Oil 5L x1; Dry Fruits Box x2; Snack Assortment',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'x3\n' +
      'Payment link Active\n' +
      'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + SMS + Email\n' +
      'Message Reminder: INR 3,123.75 is pending on INV-2026-014, due 19 Jun 2026.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\n' +
      'Status Pending\n' +
      'INV-2026-015 | Aditi Gupta | Pending\n' +
      'Contact aditi.gupta15@example.com | +91 973126615 Invoice / Due 07 Jun 2026 / 22 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 57, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 1,039.50\n' +
      'Paid: INR 0.00\n' +
      'Pending: INR 1,039.50\n' +
      'Items Mineral Water Case x1; Detergent Pack x2 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
      'Message Reminder: INR 1,039.50 is pending on INV-2026-015, due 22 Jun 2026.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\nStatus Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: '-- 3 of 10 --',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records\n' +
      'Synthetic data only | Page 4 of 10 | Records 16-20 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-016 | Harsh Agarwal | Pending\n' +
      'Contact harsh.agarwal16@example.com | +91 973126752 Invoice / Due 09 Jun 2026 / 30 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 60, Vijay Nagar, Gurugram, Haryana 122018 Amounts Total: INR 2,829.75\n' +
      'Paid: INR 707.44\n' +
      'Pending: INR 2,122.31\n' +
      'Items Basmati Rice 5kg x2; Sugar 5kg x3; Cleaning Supplies x1 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
      'Message Reminder: INR 2,122.31 is pending on INV-2026-016, due 30 Jun 2026.\n' +
      'Please pay using the active link.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\n' +
      'Status Pending\n' +
      'INV-2026-017 | Vivaan Saxena | Overdue\n' +
      'Contact vivaan.saxena17@example.com | +91 973126889 Invoice / Due 11 Jun 2026 / 11 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 63, Model Town, Chandigarh, Chandigarh 160022 Amounts Total: INR 5,869.50\n' +
      'Paid: INR 3,521.70\n' +
      'Pending: INR 2,347.80\n' +
      'Items Wheat Flour 10kg x3; Office Paper Bundle x1; Coffee Pack x2; Cooking',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Oil 5L x3\n' +
      'Payment link Active - overdue\n' +
      'Reminder Daily for 3 days, then every 3 days until paid Channels SMS + Email\n' +
      'Message Overdue notice: INV-2026-017 was due 11 Jul 2026. Outstanding',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 2,347.80. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-018 | Rohan Gupta | Overdue\n' +
      'Contact rohan.gupta18@example.com | +91 973127026 Invoice / Due 13 Jun 2026 / 20 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 66, Green Park, Indore, Madhya Pradesh 452001 Amounts Total: INR 1,659.00\n' +
      'Paid: INR 0.00\n' +
      'Pending: INR 1,659.00\n' +
      'Items Tea 1kg x1; LED Bulb Pack x2 Payment link Active - overdue',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + SMS\n' +
      'Message Overdue notice: INV-2026-018 was due 20 Jun 2026. Outstanding\n' +
      'balance: INR 1,659.00. Please clear it promptly.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 1,659.00. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-019 | Neha Agarwal | Overdue\n' +
      'Contact neha.agarwal19@example.com | +91 973127163 Invoice / Due 15 Jun 2026 / 25 Jun 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 69, Lake View Road, Pune, Maharashtra 411014 Amounts Total: INR 4,032.00\n' +
      'Paid: INR 1,209.60\n' +
      'Pending: INR 2,822.40',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 1,209.60\n' +
      'Pending: INR 2,822.40\n' +
      'Items Dry Fruits Box x2; Snack Assortment x3; Basmati Rice 5kg x1 Payment link Active - overdue',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder Daily for 3 days, then every 3 days until paid Channels WhatsApp + Email\n' +
      'Message Overdue notice: INV-2026-019 was due 25 Jun 2026. Outstanding',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'balance: INR 2,822.40. Please clear it promptly.\n' +
      'Status Overdue\n' +
      'INV-2026-020 | Ishita Saxena | Paid\n' +
      'Contact ishita.saxena20@example.com | +91 973127300 Invoice / Due 17 Jun 2026 / 01 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 72, MG Road, Bengaluru, Karnataka 560102 Amounts Total: INR 7,056.00\n' +
      'Paid: INR 7,056.00\n' +
      'Pending: INR 0.00\n' +
      'Items Printer Cartridge x3; Stationery Kit x1; Wheat Flour 10kg x2; Office Paper',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Bundle x3\n' +
      'Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-020. Thank you. No balance is pending. Status Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: '-- 4 of 10 --',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'RAG Test Dataset - Invoice & Payment Records\n' +
      'Synthetic data only | Page 5 of 10 | Records 21-25 | Designed for retrieval, filtering, date lookup, status queries, reminders, and payment-state testing.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-021 | Dev Gupta | Paid\n' +
      'Contact dev.gupta21@example.com | +91 973127437 Invoice / Due 19 Jun 2026 / 04 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 75, Rajpur Road, Dehradun, Uttarakhand 248001 Amounts Total: INR 1,963.50\n' +
      'Paid: INR 1,963.50\n' +
      'Pending: INR 0.00\n' +
      'Items Cleaning Supplies x1; Spice Combo x2 Payment link Completed / disabled',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder No future reminders; payment receipt sent. Channels Email\n' +
      'Message Payment received for INV-2026-021. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-022 | Ritika Agarwal | Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-022 | Ritika Agarwal | Paid\n' +
      'Contact ritika.agarwal22@example.com | +91 973127574 Invoice / Due 21 Jun 2026 / 12 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 78, Civil Lines, Noida, Uttar Pradesh 201301 Amounts Total: INR 4,756.50\n' +
      'Paid: INR 4,756.50\n' +
      'Pending: INR 0.00',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Paid: INR 4,756.50\n' +
      'Pending: INR 0.00\n' +
      'Items Coffee Pack x2; Cooking Oil 5L x3; Dry Fruits Box x1 Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Message Payment received for INV-2026-022. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-023 | Vikram Saxena | Paid',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-023 | Vikram Saxena | Paid\n' +
      'Contact vikram.saxena23@example.com | +91 973127711 Invoice / Due 23 Jun 2026 / 23 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 81, Nehru Nagar, Lucknow, Uttar Pradesh 226010 Amounts Total: INR 5,397.00\n' +
      'Paid: INR 5,397.00\n' +
      'Pending: INR 0.00\n' +
      'Items Mineral Water Case x3; Detergent Pack x1; Printer Cartridge x2;',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Stationery Kit x3\n' +
      'Payment link Completed / disabled\n' +
      'Reminder No future reminders; payment receipt sent. Channels Email',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Message Payment received for INV-2026-023. Thank you. No balance is pending. Status Paid\n' +
      'INV-2026-024 | Tanvi Gupta | Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'INV-2026-024 | Tanvi Gupta | Pending\n' +
      'Contact tanvi.gupta24@example.com | +91 973127848 Invoice / Due 25 Jun 2026 / 02 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 84, Shastri Nagar, Jaipur, Rajasthan 302017 Amounts Total: INR 1,165.50\n' +
      'Paid: INR 0.00\n' +
      'Pending: INR 1,165.50\n' +
      'Items Basmati Rice 5kg x1; Sugar 5kg x2 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels WhatsApp + Email\n' +
      'Message Reminder: INR 1,165.50 is pending on INV-2026-024, due 02 Jul 2026.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\n' +
      'Status Pending\n' +
      'INV-2026-025 | Aarav Agarwal | Pending\n' +
      'Contact aarav.agarwal25@example.com | +91 973127985 Invoice / Due 27 Jun 2026 / 07 Jul 2026',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Address 87, Sector 62, Delhi, Delhi 110092 Amounts Total: INR 3,076.50\n' +
      'Paid: INR 769.12\n' +
      'Pending: INR 2,307.38\n' +
      'Items Wheat Flour 10kg x2; Office Paper Bundle x3; Coffee Pack x1 Payment link Active',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Reminder 3 days before due date, on due date, then +2 days if unpaid Channels SMS + Email\n' +
      'Message Reminder: INR 2,307.38 is pending on INV-2026-025, due 07 Jul 2026.\n' +
      'Please pay using the active link.',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: 'Please pay using the active link.\nStatus Pending',
    metadata: { loc: [Object] },
    id: undefined
  },
  Document {
    pageContent: '-- 5 of 10 --',
    metadata: { loc: [Object] },
    id: undefined
  },
  ... 103 more items
]
