+++
title = "Hardware Specs"
alwaysopen = false
weight = 2
+++

CHIPcade is powered by a mighty little 16-bit processor, complete with 8 general-purpose registers, a handful of event-driven extras (R8–R11), internal flags, and a real\* stack. It can read and write from Data sections (a.k.a. memory), juggle image groups for sprites, and even crank out some audio — retro-style.

Tucked inside is a dedicated Graphics Co-Processor (GCP), capable of managing 8 layers and up to 256 hardware-accelerated sprites without breaking a sweat.

\*Okay, still software. But the stack is very real to CHIPcade.

---

## Registers

R0–R7 are your general-purpose registers — store numbers, do math, control logic, or just hoard values like a digital dragon.

R8–R11 are special input/event registers wired directly to the user:

- **R8** – Keycode of the currently pressed key
- **R9** – Input state: `0` for up, `1` for down
- **R10** – X coordinate of the input (touch/mouse)
- **R11** – Y coordinate of the input

These are mostly read-only, but you can write to R8 to clear the key state and move on.

You’ll see all register values live in the visual CHIPcade Debugger — no hex-hacking needed.

---

## 16-bit Values

Everything in CHIPcade — registers, memory, data — is a 16-bit value. But those 16 bits are surprisingly versatile:

- **Unsigned** – Positive integers, written like `10u`
- **Signed** – Can go negative, written like `-2s`
- **Float** – Fractions and decimals, written like `0.02f`
- **Unicode** – Characters, like `"A"` or `'✓'`

CHIPcade may live in a pixelated past, but its data types are surprisingly flexible.

---

## Data Sections

Need memory? CHIPcade gives you as many **Data sections** as you want — each one holding **1024 16-bit values**. Plenty of room to stash scores, states, secrets, and whatever else your game dreams up.

You can create new data sections (and rename them) using the ➕ button in the toolbar.

Access them directly from CHIPcade Script by name:

```chipcade
Data[0] = 10u        # Store an unsigned value
Data[R0] = -2s       # Use a register as an index
Data[2] = R4 - 0.02f # Store the result of a float calculation
Data[3] = "A"        # Store a character
```

They’re simple, fast, and ready to abuse like it’s 1985.

---

## Image Groups

Need art? CHIPcade uses **Image Groups** to organize all your visuals — from single sprites to full-on tilesets.

Create and rename image groups using the ➕ button in the toolbar. Then add images (or entire tilesets) with a click. You can drag and drop images to reorder them — the index matters!

Images are stored in the group’s memory and accessed by index:

```chipcade
# Assign a static image to sprite 0
sprite[0].imageGroup = "Background"
sprite[0].imageIndex = 0

# Assign an animation range to sprite 1 at 10 fps
sprite[1].imageGroup = "Ship"
sprite[1].animationFrom = 0
sprite[1].animationTo = 3
sprite[1].fps = 10
```

Want pixel-perfect control? CHIPcade’s got your back — one frame at a time.

---

## Audio

Sound effects and music are handled through **Audio Clips** — short, individual audio files you can assign to events, buttons, lasers, explosions... you get the idea.

Create and rename audio clips using the ➕ button in the toolbar. Then import your sounds using the import button. Each clip is stored individually and accessed by name.

---

## Palette

CHIPcade comes with a built-in **Palette** supporting up to **256 colors** — enough to cover everything from moody dungeon hues to neon space explosions.

You can edit colors freely to match your game’s vibe. Colors are accessed by index, especially when drawing text:

```chipcade
# Draws text at position (10, 10)  and palette index 13
drawText(10, 10, "Hello, World!", 13)
```

Want it grayscale? Pastel? Full vaporwave? The palette is yours to command.

# Graphical Co-Processor

CHIPcade’s **Graphics Co-Processor (GCP)** handles all the heavy lifting for visuals — fast, flexible, and ready to blast pixels like it's 1992.

- Supports up to **8 layers** of graphics.
  Each layer can match the screen resolution or use a custom size for cool parallax and UI tricks.

- Includes **256 hardware-accelerated sprites**.
  Place them anywhere on screen or attach them to layers. Animate them, rotate them, make them explode — it’s all programmable.

For full control and examples, check out the [CHIPcade Script documentation](/script).
