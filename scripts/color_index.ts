export const colorIndex: Record<string, string> = {
    "#181818": `{{crust.hex}}`,
    "#303030": `{{mantle.hex}}`,
    "#181818FF": `{{base.hex}}`,
    "#1D1D1D80": `{{mantle.hex}}`,
    "#1D1D1DFF": `{{mantle.hex}}`,
    "#242424FF": `{{mantle.hex}}`,
    "#2D2D2DFF": `{{mantle.hex}}`,
    "#282828": `{{mantle.hex}}`,
    "#282828FF": `{{mantle.hex}}`,
    "#303030FF": `{{mantle.hex}}`,
    "#3D3D3D": `{{base.hex}}`,
    "#3D3D3DFF": `{{base.hex}}`,
    "#3F3F3FFF": `{{surface0.hex}}`,
    "#545454FF": `{{surface0.hex}}`,

    "#1D314D": `{{flavor.colors[accent] | mix(color=base, amount=0.2) | get(key="hex")}}`,
    "#334D80": `{{flavor.colors[accent] | mix(color=base, amount=0.4) | get(key="hex")}}`,
    "#4772B3": `{{flavor.colors[accent] | mix(color=base, amount=0.5) | get(key="hex")}}`,
    "#4772B3FF": `{{flavor.colors[accent] | mix(color=base, amount=0.5) | get(key="hex")}}`,
    "#4772B3B3": `{{flavor.colors[accent] | mod(opacity=0.7) | get(key="hex")}}`,
    "#71A8FF": `{{flavor.colors[accent].hex}}`,

    "#00FFFF": `{{teal.hex}}`,

    // axis_x
    "#FF3352": `{{red.hex}}`,
    // axis_y
    "#8BDC00": `{{green.hex}}`,
    // axis_z
    "#2890FF": `{{blue.hex}}`,
    // axis_w
    "#EDBA18": `{{yellow.hex}}`,

    "#FF9F2C": `{{peach.hex}}`,

    "#E6E6E6": `{{text.hex}}`,
    "#EEEEEE": `{{text.hex}}`,
    "#FFFFFF": `{{text.hex}}`,
}