# 🧠 Operating System – Process States & Queues

## ✅ What Is a Process?
- A program in execution
- Has its own memory, registers, and execution context

---

## 🔄 Process States

| State         | Description                          |
|---------------|--------------------------------------|
| New           | Process is being created             |
| Ready         | Waiting to be assigned to CPU        |
| Running       | Currently executing on CPU           |
| Waiting       | Waiting for I/O or event             |
| Terminated    | Finished execution                   |

### Diagram of Process states in OS

+-------------+       +-----------+
|   New       | ----> |   Ready   |
+-------------+       +-----------+
                          ↓
                      +--------+
                      |Running |
                      +--------+
                          ↓
        +----------------+----------------+
        ↓                                 ↓
+-------------+                   +---------------+
| Waiting (I/O)| <-------------- | Terminated     |
+-------------+                   +---------------+


---

## 📋 Process Queues

| Queue Type        | Role                              |
|-------------------|-----------------------------------|
| Job Queue         | All processes in the system       |
| Ready Queue       | Processes ready to run            |
| Device Queue      | Waiting for I/O devices           |

## 🧠 Interview Tip
- Be ready to sketch state transitions
- Know how scheduling algorithms interact with queues
