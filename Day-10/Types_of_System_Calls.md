# ⚙️ Types of System Calls in Operating Systems

System calls are categorized based on the services they provide to user-level applications. Here's a breakdown of the major types:

---

## 🧬 1. Process Control

### 🔹 Purpose:
Manage creation, execution, and termination of processes.

### 🔹 Common System Calls:
- `fork()` – Create a new process (Unix)
- `exec()` – Replace process memory with a new program
- `exit()` – Terminate a process
- `wait()` – Wait for a child process to finish
- `CreateProcess()` – Windows equivalent of `fork()` + `exec()`

---

## 📁 2. File Management

### 🔹 Purpose:
Handle operations on files and directories.

### 🔹 Common System Calls:
- `open()`, `close()` – Open/close files
- `read()`, `write()` – Read/write data
- `lseek()` – Move file pointer
- `CreateFile()`, `ReadFile()` – Windows equivalents

---

## 🖥️ 3. Device Management

### 🔹 Purpose:
Interact with hardware devices through drivers.

### 🔹 Common System Calls:
- `ioctl()` – Control device parameters
- `read()`, `write()` – Communicate with devices
- `DeviceIoControl()` – Windows device control

---

## 🧾 4. Information Maintenance

### 🔹 Purpose:
Retrieve system-level information and metadata.

### 🔹 Common System Calls:
- `getpid()` – Get process ID
- `gettimeofday()` – Get system time
- `uname()` – Get system info
- `GetSystemTime()`, `GetCurrentProcessId()` – Windows equivalents

---

## 📡 5. Communication Management

### 🔹 Purpose:
Enable inter-process communication (IPC).

### 🔹 Common System Calls:
- `pipe()` – Create a pipe
- `shmget()` – Shared memory
- `msgsnd()`, `msgrcv()` – Message queues
- `CreatePipe()`, `SendMessage()` – Windows IPC

---

## 🔐 6. Protection & Security

### 🔹 Purpose:
Manage access rights and user permissions.

### 🔹 Common System Calls:
- `chmod()` – Change file permissions
- `setuid()` – Set user ID
- `SetSecurityInfo()`, `AdjustTokenPrivileges()` – Windows security APIs

---

## 🧠 Summary Table

| Type                  | Key Functionality                  | Example (Unix)     | Example (Windows)     |
|-----------------------|------------------------------------|--------------------|------------------------|
| Process Control       | Manage processes                   | `fork()`, `exec()` | `CreateProcess()`      |
| File Management       | Handle files and directories       | `open()`, `read()` | `CreateFile()`         |
| Device Management     | Communicate with hardware          | `ioctl()`          | `DeviceIoControl()`    |
| Info Maintenance      | Get system metadata                | `getpid()`, `uname()` | `GetSystemTime()`   |
| Communication         | IPC mechanisms                     | `pipe()`, `msgsnd()` | `SendMessage()`     |
| Protection & Security | Access control and permissions     | `chmod()`, `setuid()` | `SetSecurityInfo()` |

---

Feel free to add diagrams or Hindi annotations for better clarity. Want me to generate a syscall flow chart next? 🎯📊