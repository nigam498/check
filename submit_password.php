<?php
// पासवर्ड फ़ॉर्म से पासवर्ड प्राप्त करें
$password = $_POST['password'];

// गूगल एक्सेल शीट API को लोड करें
require 'vendor/autoload.php'; // गूगल एपीआई क्लाइंट लाइब्रेरी को लोड करें

use Google\Spreadsheet\DefaultServiceRequest;
use Google\Spreadsheet\ServiceRequestFactory;
use Google\Spreadsheet\CellEntry;

// गूगल एक्सेल शीट के साथ एक संग्रहण तैयार करें
$serviceRequest = new DefaultServiceRequest('your-client-id', 'your-client-secret');
ServiceRequestFactory::setInstance($serviceRequest);

// गूगल एक्सेल शीट के लिए वर्कबुक और वर्कशीट का चयन करें
$spreadsheetService = new Google\Spreadsheet\SpreadsheetService();
$spreadsheet = $spreadsheetService->getSpreadsheetById('your-spreadsheet-id');
$worksheetFeed = $spreadsheet->getWorksheets();
$worksheet = $worksheetFeed->getByTitle('Sheet1'); // अपनी वर्कशीट का नाम यहां दर्ज करें

// नई पंक्ति तैयार करें और पासवर्ड डेटा को एक्सेल शीट में डालें
$listFeed = $worksheet->getListFeed();
$listFeed->insert([
    'password' => $password
]);

echo "पासवर्ड सफलतापूर्वक बचाया गया है!";
?>
