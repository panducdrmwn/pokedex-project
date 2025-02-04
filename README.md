Project ini dibuat dengan Vite React JS, project ini dibagi dengan struktur folder yang mengelompokkan setiap component seperti card, searchbar, navbar, pagination dalam satu folder components. Setiap halaman yang dijadikan routes juga dikelompokkan dalam satu folder pages. asset dalam semua bentuk media juga dikelompokkan dalam satu folder assets.
Project ini menggunakan axios untuk fetch data dari API.
Dibantu juga dengan library tanstack react-query untuk memudahkan pengolahan data dan fetching API.
Karena project ini tidak saya kategorikan skala besar, maka saya cukup menggunakan props yang diantarkan ke component untuk state management.
Untuk styling disini saya menggunakan TailwindCSS.
Disini fitur search diimplementasikan dengan melibatkan library react-query yang akan ter trigger setiap button search di klik
Begitu juga fitur pagination diimplementasikan dengan library react-query yang akan ter trigger setiap variabel page berubah
Begitu juga fitu per-page diimplementasikan dengan library react-query yang akan ter trigger setiap variabel limit berubah
