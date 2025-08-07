# ⚙️ OS Components – Kernel vs User Space

## ✅ Kernel Space
- Core part of OS
- Manages memory, processes, devices
- Runs in privileged mode

## ✅ User Space
- Where applications run
- Limited access to hardware
- Communicates with kernel via system calls

## 🔍 Interview Insight
- Be ready to explain how system calls bridge user ↔ kernel
- Example: `read()`, `write()` in Linux

## Visual Diagram: Kernel vs User Space

+-----------------------------+
|        User Space          |
|----------------------------|
| Applications (e.g. Chrome) |
| Libraries (e.g. libc)      |
| System Calls (e.g. read()) |
+-----------------------------+
            ↓
+-----------------------------+
|        Kernel Space         |
|----------------------------|
| Process Management          |
| Memory Management           |
| Device Drivers              |
| File Systems                |
+-----------------------------+

