var relearn_search_index = [
  {
    "content": "TODO\n",
    "description": "",
    "tags": null,
    "title": "Layers",
    "uri": "/language/layers/index.html"
  },
  {
    "content": "v0.1.0 (2024-11-XX) First version Started CHIPcade Development Mid 2024 Another journey begins\n",
    "description": "",
    "tags": null,
    "title": "News",
    "uri": "/news/index.html"
  },
  {
    "content": "TODO\n",
    "description": "",
    "tags": null,
    "title": "Sprites",
    "uri": "/language/sprites/index.html"
  },
  {
    "content": "CPU 16bit processor with 8 registers, flags and a stack.\nInstruction Set TAG CodeTag. Set a code tag (for Jump or Call instructions).\n# Text. Set a comment.\nNOP. No operation. Does nothing.\nLD Rd Memory + Offset. Load memory to the destination register.\nLDI Rd Value. Load an immediate value to the destination register.\nLDRESX Rd. Load the x value of the screen resolution to the destination register.\nLDRESY Rd. Load the y value of the screen resolution to the destination register.\nST Memory + Offset Rs. Store the source register at the destination memory address.\nADD Rd Rs. Add the source to the destination register.\nSUB Rd Rs. Subtract the source from the destination register.\nMUL Rd Rs. Multiply the source with the destination register.\nDIV Rd Rs. Divide the destination by the source register.\nMOD Rd Rs. Modulus of the destination by the source register.\nINC Rd. Increase the destination register by 1.\nDEC Rd. Decrease the destination register by 1.\nCALL CodeTag. Saves the current code address on the stack and invokes the subroutine.\nRET. Returns from a subroutine invoked by CALL. Pops the code address from the stack and continues execution after the original CALL statement. If there is no address on the stack, stops execution.\nCMP Rd Rs. Compare two registers.\nJ CodeTag. Unconditional jump.\nJE CodeTag. Jump if the zero flag is set (equality check).\nJNE CodeTag. Jump if the zero flag is not set (inequality check).\nJL CodeTag. Jump if the negative flag is set (less than).\nJG CodeTag. Jump if the zero flag is clear and the negative flag is clear (greater than).\nJC CodeTag. Jump if the carry flag is set (used for unsigned comparisons).\nJO CodeTag. Jump if the overflow flag is set (used for signed overflows).\nRAND Rd Value. Generates a random number of type Value in the range of 0…Value and stores it in the destination register.\nCPU Flags Zero Flag (ZF). Set when the result of an operation is zero. Carry Flag (CF). Set when an arithmetic operation results in an unsigned overflow (carry out of the most significant bit) or underflow (borrow into the most significant bit). Overflow Flag (OF). Set when an arithmetic operation results in signed overflow (when the result exceeds the range of the signed data type). ** Negative Flag (NF)**. Set when the result of an operation is negative (for signed operations). GCP (Graphical Co-Processor) 8 layers with 256 hardware sprites, a palette, image groups and other hardware supported features.\nLayers Layers are drawn starting from index 0 up to 7. By default layers are in the resolution of the screen and invisible.\nLYRRES L Width Height. Set a custom layer resolution in the form of “320 200”. By default layers are in the resolution of the screen. LYRVIS Ld State. Set layer visibility. Default is invisible. Sprites 256 hardware sprites\nSPRLYR Sd Ls. Assign a layer to the sprite. By default a sprite is not bound to a layer and will be drawn on top of all layers.\nSPRSET Sd ImageGroup. Assign an image group to the sprite.\nSPRIMG Sd Rs. Set the index of the image in the current image group. Stops any animation. Default is 0.\nSPRANM Sd From To. Set the animation range for the sprite and start animation. If the current image index is not inside the range set it to the animation start frame.\nSPRFPS Sd Value. Set the fps for the sprite’s animation. Default is 10.\nSPRVIS Sd State. Set sprite visibility (Invisible/Visible). Default is invisible.\nSPRWRP Sd State. Set the wrapping mode for the sprite (Off/On). Wrapped sprites wrap around the layer or screen (i.e. when they go offscreen re-appear on the other side).\nSPRX Sd Rs. Set the x position of the sprite.\nSPRY Sd Rs. Set the y position of the sprite.\nSPRROT Sd Rs. Set the rotation of the sprite.\nSPRPRI Sd Rs. Set the priority of the sprite. Sprite with a lower priority are drawn last. Default is 0.\nSPRACC Sd Rs. Apply an acceleration impulse to the sprite.\nSPRSPD Sd Rs. Set a constant speed to the sprite.\nSPRMXS Sd Rs. Set the maximum speed for the sprite (for acceleration / impulse driven games).\nSPRFRI Sd Rs. Set the friction of the sprite (default is 1.0). A friction lower than 1.0 will reduce speed.\nSPRGRP Sd Value. Set the collision group of the sprite to the given value. The value can be any numerical value.\nSPRCOL Sd Value. Checks if the sprite collides with any sprite in the collision group. If no, sets the ZF to 1, if yes sets the ZF to 0.\n",
    "description": "",
    "tags": null,
    "title": "Reference",
    "uri": "/language/reference/index.html"
  },
  {
    "content": "TODO\n",
    "description": "",
    "tags": null,
    "title": "CHIPcade Assembly",
    "uri": "/language/index.html"
  },
  {
    "content": "TODO\n",
    "description": "",
    "tags": null,
    "title": "Tutorials",
    "uri": "/tutorials/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "Coming soon\n",
    "description": "",
    "tags": null,
    "title": "CHIPcade",
    "uri": "/index.html"
  },
  {
    "content": "A list of people who have contributed to CHIPcade:\nAcknowledgements ansimuz for providing the free artwork used in some of the example games. ",
    "description": "",
    "tags": null,
    "title": "Credits",
    "uri": "/more/credits/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
