+++
date = '2025-03-18T16:25:38-03:00'
draft = true
title = "Title"
summary = "This is just an example to test the markdown sintax in this website"
+++

This repository contains a couple of games I developed in C.

The main goal was to practice fundamental concepts like memory management, pointers, structs, and general C programming skills.

---

## List of Games

- **Minesweeper** — Features a graphical interface built with **GTK4**.
- **Chess** — Logic implemented; the interface is coming soon.

---

## How to Build and Run

Each game has its own `CMakeLists.txt` file. To compile and run a game, follow these steps:
\*I haven't tested the games on Windows systems

### Requirements

Make sure you have the following installed:

- `cmake`
- `libgtk-4-dev`

On Debian-based systems:

```bash
sudo apt install cmake libgtk-4-dev
```

### Some Code


```c
#include <stdio.h>

int main(){
    //o clássico hello world;
    char *s = "Hello World!";
    puts(s);
    return 0;
}
```

---

### ⚙️ Build Instructions

1. Navigate to the game's directory:
```bash
cd ./game-name
```

2. Create a `build` directory and enter it:
```bash
mkdir build
cd build
```

3. Generate the build files with CMake:
```bash
cmake ..
```

4. Compile the project:
```bash
make
```

5. Run the game:
```bash
./game-name
```



