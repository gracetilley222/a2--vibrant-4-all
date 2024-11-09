
> Open this page at [https://gracetilley222.github.io/a2--vibrant-4-all/](https://gracetilley222.github.io/a2--vibrant-4-all/)

#Vibrant 4 All!

#Defining The Game/ Creating the actions
def on_overlap(sprite, otherSprite):
    info.change_score_by(1)
    if otherSprite == shape2:
        otherSprite.set_image(coloured_in2)
    elif otherSprite == shape:
        otherSprite.set_image(coloured_in)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_overlap)

#Coding the Cursor
shape: Sprite = None
coloured_in: Image = None
scene.set_background_color(4)
cursor = sprites.create(img("""
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
"""),
    SpriteKind.player)
controller.move_sprite(cursor)

cursor.x = scene.screen_height()/2
cursor.y = scene.screen_width()/2
cursor.scale = 1

#Coding the Not Coloured in Shape
not_coloured_in = img("""
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
""")

#Coding the Coloured in Shape After Cursor touches it
coloured_in = img("""
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
""")
shape = sprites.create(not_coloured_in, SpriteKind.food)
shape.scale = 3
shape.x = scene.screen_width()/4

#Code for 2nd Not Coloured in Shape
not_coloured_in2 = img("""
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
""")

#Code for 2nd Coloured in Shape
coloured_in2 = img("""
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
""")
shape2 = sprites.create(not_coloured_in, SpriteKind.food)
shape2.scale = 3
shape2.x = scene.screen_width()/4 + scene.screen_width()/2
controller.move_sprite(cursor)
