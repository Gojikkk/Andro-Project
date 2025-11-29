BUS TERMINAL API

API untuk mengelola data penumpang bus antar terminal menggunakan Node.js dan Express.

✨ Fitur

✅ CRUD (Create, Read, Update, Delete) data penumpang
✅ menambahkan data penumpang
✅ Pencarian penumpang berdasarkan nama
✅ Pencarian penumpang berdasarkan id
✅ Update data terminal penumpang
✅ menghapus data penumpang
✅ RESTful API

🚀 Menjalankan Server
NPM Start

📡 Endpoint API
1. Get All Users
METHOD: GET
Mendapatkan semua data penumpang atau filter berdasarkan terminal awal.

2. Get User By ID
METHOD: GET
Mendapatkan data penumpang berdasarkan ID.

3. Get User By Name
METHOD: GET
Mendapatkan data penumpang berdasarkan nama.

4. Create User
METHOD: POST
Menambahkan penumpang baru.

5. Update Terminal
METHOD: PATCH
Update terminal awal dan terminal tujuan penumpang.

7. Delete User
Menghapus data penumpang.
Method: DELETE


📁 Struktur Folder
project/
├── controllers/
│   └── userController.js      # Controller untuk handle request
├── services/
│   └── userService.js         # Business logic
├── routes/
│   └── userRoutes.js          # Definisi routes
├── dataPenumpang.js           # Data dummy penumpang
├── index.js                   # Entry point aplikasi
├── package.json               # Dependencies
└── README.md                  # Dokumentasi