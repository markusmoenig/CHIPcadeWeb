---
title: "Examples"
weight: 5
---


## Bullet Setup and Firing Example

This example shows how to manage a pool of bullets using CHIPcade's scripting language. We predefine 10 bullet sprites (indices 20–29) and reuse them when firing to avoid runtime allocation.

### Bullet Pool Setup

The following code initializes 10 bullet sprites with default values and disables them until needed:

```chipcade
SetupBullets:
R0 = 20
setup:
sprite[R0].imageGroup = "Bullet"
sprite[R0].layerIndex = 0
sprite[R0].animationFrom = 0
sprite[R0].animationTo = 1
sprite[R0].rotationOffset = -90s
sprite[R0].active = false
sprite[R0].priority = -1s
sprite[R0].speed = 4u
sprite[R0].maxSpeed = 4u
sprite[R0].collisionGroup = 1u
sprite[R0].wrapping = true
R0 += 1
jumpif R0 < 30 ? setup
return
```

---

### Firing a Bullet

When a bullet is fired, the first inactive sprite in the pool is activated and placed at the centered forward position of the spaceship.

We then call `notifyR7` to schedule automatic deactivation of the bullet after 1 second.

```chipcade
FireBullet:
R0 = 20
fire:
# Choose the first inactive
if sprite[R0].active == false
    sprite[R0].active = true
    R1 = 0u
    goto Math.PlaceCenteredForward
    # Expire it after 1 second
    notifyR7("ExpireBullet", 1, R0)
    return
R0 += 1
jumpif R0 < 30 ? fire
return

ExpireBullet:
sprite[R7].active = false
return
```

This pattern avoids creating new sprites at runtime and gives full control over bullet lifespan, speed, and position — perfect for fast arcade-style shooters.

---
