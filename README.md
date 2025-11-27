<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://www.blender.org/">Blender</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/catppuccin/blender/stargazers"><img src="https://img.shields.io/github/stars/catppuccin/blender?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/blender/issues"><img src="https://img.shields.io/github/issues/catppuccin/blender?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/catppuccin/blender/contributors"><img src="https://img.shields.io/github/contributors/catppuccin/blender?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<p align="center">
	<img src="./assets/previews/preview.webp"/>
</p>

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="./assets/previews/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="./assets/previews/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="./assets/previews/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="./assets/previews/mocha.webp"/>
</details>

## Usage

1. Locate the folder that designates to your Blender version, such as `themes-4.5LTS`.
1. Choose a flavor and accent, and download the XML file.
1. Under the [Themes section](https://docs.blender.org/manual/en/dev/editors/preferences/themes.html),
	install the XML file that was downloaded.

<!-- The FAQ section is optional. Remove if needed.-->
## 🙋 FAQ

- Q: **_"Why isn't there a theme for my Blender verion?"_**\
  A: The Blender theme schema has changed over several versions.
  You can raise an issue requesting the version be added.
- Q: **_"Why is there an error when importing the theme?"_**\
  A: Ensure the theme version you are downloading matches your Blender verion.
  If it still occurs, raise an issue.
	
## Development

### Initial setup

Clone the repository, and [install Deno](https://docs.deno.com/runtime/getting_started/installation/). 

### Change colors

1. Make changes to `scripts/color_index.ts`
1. Run `deno run build-tera`
1. Then, run `whiskers ./<version>.tera` for each version

### Adding support for new versions

1. Export the default Blender Dark theme for the new version
1. Place it under `versions/`
	- For LTS versions, name it `<major>.<minor>LTS`
	- For standard versions, name it `<major>.<minor>.<patch>`
1. Add the new version to the default `versions` parameter in `scripts/generate_color_index.ts`
1. Run `deno run gen-color-index`
1. `scripts/color_index.ts` should be updated with the new colors from that version
1. Bind the new colors if needed
1. Run `deno run build-tera`
1. Then, run `whiskers ./<version>.tera` the new version

## 💝 Thanks to

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
