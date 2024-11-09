// Vibrant 4 All!
// Defining The Game/ Creating the actions
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_overlap(sprite: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    if (otherSprite == shape2) {
        otherSprite.setImage(coloured_in2)
    } else if (otherSprite == shape) {
        otherSprite.setImage(coloured_in)
    }
    
})
// Coding the Cursor
let shape : Sprite = null
let coloured_in : Image = null
scene.setBackgroundColor(4)
let cursor = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f f . . . . .
    . . . . . . . f f f f . . . . .
    . . . . . . . f f f f . . . . .
    . . . . . . f f . f f . . . . .
    . . . . . f f . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
controller.moveSprite(cursor)
cursor.x = scene.screenHeight() / 2
cursor.y = scene.screenWidth() / 2
cursor.scale = 1
// Coding the Not Coloured in Shape
let not_coloured_in = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f . f f f f f . .
    . . f f 1 1 1 f f f 1 1 1 f f .
    . . f 1 1 1 1 1 f 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f f 1 1 1 1 1 1 1 1 1 f f .
    . . . f f 1 1 1 1 1 1 1 f f . .
    . . . . f f 1 1 1 1 1 f f . . .
    . . . . . f f 1 1 1 f f . . . .
    . . . . . . f f 1 f f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
// Coding the Coloured in Shape After Cursor touches it
coloured_in = img`
    . . . . . . . . . . . . . . . .
    . . f f f f f f . f f f f f f .
    . f f 3 3 3 3 f f f 3 3 3 3 f f
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f
    . f 3 3 3 3 3 b b b 1 1 1 3 3 f
    . f 3 3 3 3 b b b b b 3 3 3 3 f
    . f f 3 3 b b b b b b b 3 3 f f
    . . f f 3 b b b b b b b 3 f f .
    . . . f f b b b b b b b f f . .
    . . . . f f b b b b b f f . . .
    . . . . . f f b b b f f . . . .
    . . . . . . f f b f f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . . . . . . . . .
`
shape = sprites.create(not_coloured_in, SpriteKind.Food)
shape.scale = 3
shape.x = scene.screenWidth() / 4
// Code for 2nd Not Coloured in Shape
let not_coloured_in2 = img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . f f f f f . f f f f f . .
    . . f f 1 1 1 f f f 1 1 1 f f .
    . . f 1 1 1 1 1 f 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f 1 1 1 1 1 1 1 1 1 1 1 f .
    . . f f 1 1 1 1 1 1 1 1 1 f f .
    . . . f f 1 1 1 1 1 1 1 f f . .
    . . . . f f 1 1 1 1 1 f f . . .
    . . . . . f f 1 1 1 f f . . . .
    . . . . . . f f 1 f f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
// Code for 2nd Coloured in Shape
let coloured_in2 = img`
    . . . . . . . . . . . . . . . .
    . . f f f f f f . f f f f f f .
    . f f 3 3 3 3 f f f 3 3 3 3 f f
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f
    . f 3 3 3 3 3 b b b 1 1 1 3 3 f
    . f 3 3 3 3 b b b b b 3 3 3 3 f
    . f f 3 3 b b b b b b b 3 3 f f
    . . f f 3 b b b b b b b 3 f f .
    . . . f f b b b b b b b f f . .
    . . . . f f b b b b b f f . . .
    . . . . . f f b b b f f . . . .
    . . . . . . f f b f f . . . . .
    . . . . . . . f f f . . . . . .
    . . . . . . . . . . . . . . . .
`
let shape2 = sprites.create(not_coloured_in, SpriteKind.Food)
shape2.scale = 3
shape2.x = scene.screenWidth() / 4 + scene.screenWidth() / 2
controller.moveSprite(cursor)
