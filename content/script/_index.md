+++
title = "CHIPcade Script"
alwaysopen = false
weight = 3
+++


With **CHIPcade Script**, you can program games for the CHIPcade system. It mixes high-level structure with low-level control — like a friendly assembly language that doesn't bite.

---

## Code Modules

Every CHIPcade game has at least two modules:

- `init` — runs once when the game starts
- `update` — runs every frame (60 FPS by default)

You can add more modules using the ➕ button in the toolbar. For example, it's common to add a `Utilities` module for reusable logic.

CHIPcade includes built-in functions for basic math and a **Math library** for more advanced operations.

---

## Reading / Writing to Registers

CHIPcade uses 8 general-purpose registers: `R0` through `R7`. You can read and write to them directly or dynamically using indexed access.

```chipcade
R3 = R4 + R5
R[3 + 3] = R[4] + R[5]
r[2] = sin(R7) * 0.5
```

Both `R` and `r` work, but uppercase is preferred for clarity.
There are **no variables** — just registers and `Data`.

## Arithmetic

CHIPcade supports all basic arithmetic operations:

- Addition (`+`)
- Subtraction (`-`)
- Multiplication (`*`)
- Division (`/`)
- Modulo (`%`)

These operators can also be used in assignment form:

```chipcade
R3 += R4
R3 -= R4
R3 *= R4
R3 /= R4
R3 %= R4
```

You can freely combine operations and use data or register values.
Floating point, signed, and unsigned types are all supported — CHIPcade handles type casting automatically.

## Expressions

CHIPcade Script supports full expressions, including math, comparisons, and logic. You can freely combine values, registers, and functions.

### Boolean Values

- `true` and `false` are valid constants
- Expressions can return a boolean result — useful in `if` and `jumpif`

### Logical Operators

- `and` — Logical AND
- `or` — Logical OR
- `!` — Logical NOT (prefix)

**Note:** `not` is **not supported** — use `!` instead.

Example:
```chipcade
    if R0 > 0 and R1 < 10
        R2 = 1

    if !(R3 == 5)
        R2 = 0
```

### Comparisons

You can use standard comparison operators:

- `==` — equal
- `!=` — not equal
- `<`, `<=`, `>`, `>=`

Example:

```chipcade
    jumpif R0 == 10 or R1 > 5 ? Skip
```

Expressions are evaluated left to right with standard precedence. Use parentheses to group if needed.

---

## Data Modules and State

You can add **Data modules** via the ➕ button in the toolbar. Each module contains 1024 16-bit values.

You can access them by name and index:

```chipcade
R0 = Data[0]
Data[R3] = 42.0
```

- Valid index range: `0–1023`
- Out-of-range accesses are safely ignored at runtime
- On creation, all values are initialized to `0`
- **Data is persistent** — values are preserved between runs
- If you need to reset state, do it in the `init` module
- You can also edit Data module values directly in the editor

Because **Data is persistent**, your game state is automatically saved — no extra save/load logic required.

---

## Tags

Tags let you label blocks of code and call them by name — like subroutines with `goto` and `return`.

```chipcade
DrawHighScore:
drawText(10, 10, "High Score:" + 5, 13)
return
```

Calling a tag:

```chipcade
goto DrawHighScore
# Or, if it's in another module:
goto Utlities.DrawHighScore
```

`goto` pushes the return address to the stack, and `return` pops it.

---

## Code Flow

CHIPcade executes code **top to bottom** in each module — just like a good old BASIC listing. You can control flow with `if`, `goto`, `jumpif`, and loops.

### If statements

```chipcade
if R0 > 0
    R1 = 1
else
    R1 = 0
```

No parentheses, no colons — just clean and readable.

---

### jumpif and Loops

Use `jumpif` for manual loops:

```chipcade
# Set all 1024 values of Data to 0
R0 = 0
loop:
    Data[R0] = 0u
    R0 += 1
jumpif R0 < 1024 ? loop
```

`jumpif` jumps to the given label if the condition is true.

To avoid infinite loops, `jumpif` automatically breaks after 1000 invocations.

---

## notify and notifyR7

Schedule code execution in the future — handy for timed events:

```chipcade
# Call DrawHighScore after 1 second
notify("DrawHighScore", 1.0)

# Call DisableSprite after 1 second and pass a value to R7
notifyR7("DisableSprite", 1.0, R2)

DisableSprite:
sprite[R7].active = false
```

Think of it like retro timers with built-in callbacks.

---

## Available Functions

CHIPcade Script includes built-in math functions for handling common calculations:

- `sin(value)`
  Returns the sine of a value (in radians).

- `cos(value)`
  Returns the cosine of a value (in radians).

- `degrees(value)`
  Converts radians to degrees.

- `radians(value)`
  Converts degrees to radians.
