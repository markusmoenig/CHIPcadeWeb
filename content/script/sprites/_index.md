---
title: "Sprites"
weight: 2
---

CHIPcade supports up to **255 hardware-accelerated sprites**. You can access them via:

```chipcade
    sprite[0].scale = 0.5
    s[1].imageGroup = "Bullet"
    sprite[R2].layerIndex = 1
```

Just like layers and registers, sprite indices can be hardcoded or dynamically computed.

Sprites can also represent text via the [text](#text) function.

---

## Default Behavior

- Sprites are **inactive by default** — you must set `active = true` to make them visible
- By default, sprites are **not assigned to any layer** and are rendered **on top of all layers**
- Sprites can be animated, moved, rotated, and participate in collisions

---

## Sprite Properties

### Basic

- `x`, `y`
  Position of the sprite on screen (in pixels)

- `width`, `height`
  Size of the sprite (Read-only inferred from the image)

- `active`
  Boolean — must be `true` for the sprite to be visible or updated

- `imageGroup`, `imageIndex`
  Set the sprite’s image by group and index

- `layerIndex`
  If set, the sprite is drawn as part of that layer instead of floating above

- `radius`
  Sets the collision radius for the sprite.
  CHIPcade uses **circular collision detection**, and this property defines the effective radius for that sprite.
  The default value is `0.5`, meaning the radius is **half the size of the sprite** (relative to its width/height).
  Adjust this per sprite to fine-tune when collisions are detected.

---

### Animation

- `animationFrom`, `animationTo`
  Range of frames to animate through

- `fps`
  Frames per second for the animation

- `wrapping`
  When `true`, wraps the sprite around the layer edges — perfect for Asteroids-style gameplay

- `rotationOffset`
  Offset in degrees to apply during rotation.
  CHIPcade assumes that sprite images point **upward** by default (0° = up).
  If your sprite artwork points to the **right**, set `rotationOffset = -90` to align it properly when rotating.

- `stop`
  Stops the current animation on the **last frame** in the range

---

### Transform & Appearance

- `scale`
  Uniform scale (1.0 = default)

- `rotation`
  Rotation in degrees

- `alpha`
  Transparency (1.0 = fully visible, 0.0 = fully transparent)

- `priority`
  Controls render order relative to other sprites (higher = drawn later)

---

### Movement

- `speed`
  Sets or reads the **constant movement speed** of the sprite in its rotation direction

- `maxSpeed`
  Maximum allowed speed

- `friction`
  Gradual reduction of speed over time

- `halt`
  Immediately stops all sprite movement and acceleration

---

## Sprite Functions

In addition to properties, sprites support a few built-in functions:

- `s[N].accelerate(value)`
  Applies an acceleration impulse in the direction of the sprite's current rotation.

- `s[N].collisionWith(group)`
  Returns `true` if the sprite has collided with the given collision group.
  Use this inside your `update` loop to trigger events on contact. Use [notifyCollision](/script#notifyCollision) for a notification based collision detection.

---

### Example

```chipcade
sprite[0].imageGroup = "Ship"
sprite[0].animationFrom = 0
sprite[0].animationTo = 3
sprite[0].fps = 12
sprite[0].wrapping = true
sprite[0].x = 100
sprite[0].y = 50
sprite[0].active = true

sprite[0].accelerate(0.5)

if sprite[0].collisionWith(2)
    notify("HandleCollision", 0.0)
```

---

## Text

Sprites can also be used to render dynamic text using the `text()` function.

This function associates a sprite with a string, a font, a font size, and a palette index (for color). Once set, the text behaves just like any other sprite — it can be positioned, animated, rotated, and layered as needed.

### Syntax

    sprite[N].text(content, fontName, fontSize, paletteIndex)

- `content` — The string to display. You can concatenate strings and values.
- `fontName` — The name of the font (e.g. `"Squada One"`).
  Can be any system font, or one of the built-in CHIPcade fonts: `"Nova Square"` and `"Squada One"`.
- `fontSize` — Font size in pixels (as a float)
- `paletteIndex` — Which color to use from the global palette

### Example

```chipcade
sprite[5].text("SCORE: " + Data[5], "Squada One", 16.0, 3)
```

This will display the current score stored in `Data[5]` using the specified font and color, all controlled through sprite 5. You can move and scale it like any other sprite.

---

Sprites are fast, flexible, and central to most CHIPcade games — from bullets to bosses.
