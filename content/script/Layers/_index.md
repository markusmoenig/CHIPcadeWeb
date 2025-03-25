---
title: "Layers"
weight: 1
---

CHIPcade features **8 graphical layers**, managed by the Graphics Co-Processor. These are perfect for backgrounds, UI, parallax scrolling, and more.

You can access layers using:

```chipcade
    layer[2].width =  800
    layer[R2].height = 600
    layer[2].mode = "centered"
    l[R2].visible = true
```

Just like registers, you can reference them by index or indirectly through a register.

---

## Default Behavior

- All layers default to the **screen resolution**
- Layers are **not visible** by default — set `visible = true` to show them
- Layers are automatically **blended from bottom to top**, with `layer[0]` at the back and `layer[7]` on top

---

## Layer Properties

Each layer supports the following properties:

- `mode`
  Controls how the layer is positioned on screen.
  - `"manual"` — You control the position using `x` and `y` (this is the default).
  - `"centered"` — Automatically centers the layer on the screen (if it has a custom size).

- `x`
  Horizontal offset of the layer on screen.
  Only used when `mode` is set to `"manual"`.
  Default: `0`

- `y`
  Vertical offset of the layer on screen.
  Only used when `mode` is set to `"manual"`.
  Default: `0`

- `width`
  Sets the width of the layer in pixels. This can be different from the screen size.

- `height`
  Sets the height of the layer in pixels. Useful for scrolling layers or offscreen buffers.

- `visible`
  A boolean flag (`true` or `false`).
  Layers are **invisible by default** — set this to `true` to render them.

---

### Example

```chipcade
    layer[0].width = 320
    layer[0].height = 256
    layer[0].visible = true
```

---

Layers are blended automatically from **layer 0 (back)** to **layer 7 (front)**.
