import os
from PIL import Image, ImageDraw

def generate_favicons():
    raw_path = os.path.abspath("logo-raw.png")
    if not os.path.exists(raw_path):
        raise FileNotFoundError(f"Source file {raw_path} not found.")

    raw = Image.open(raw_path).convert("RGBA")
    print(f"Loaded source image: {raw_path} ({raw.size[0]}x{raw.size[1]})")

    # Target background: Rich deep dark green (#071f17)
    bg_color = (7, 31, 23, 255)
    canvas_size = (512, 512)

    # Detect bounding box of non-background content
    # Background color is (7, 31, 23)
    rgb_raw = raw.convert("RGB")
    diff_pixels = [
        (x, y)
        for y in range(raw.height)
        for x in range(raw.width)
        if rgb_raw.getpixel((x, y)) != (7, 31, 23)
    ]

    min_x = min(p[0] for p in diff_pixels)
    max_x = max(p[0] for p in diff_pixels)
    min_y = min(p[1] for p in diff_pixels)
    max_y = max(p[1] for p in diff_pixels)

    bbox_tight = (min_x, min_y, max_x + 1, max_y + 1)
    logo_w = bbox_tight[2] - bbox_tight[0]
    logo_h = bbox_tight[3] - bbox_tight[1]
    print(f"Detected logo bounding box: {bbox_tight}, size: {logo_w}x{logo_h}")

    # Crop with generous margin to ensure seamless edge interpolation
    margin = 40
    bbox_margin = (
        max(0, bbox_tight[0] - margin),
        max(0, bbox_tight[1] - margin),
        min(raw.width, bbox_tight[2] + margin),
        min(raw.height, bbox_tight[3] + margin),
    )
    cropped = raw.crop(bbox_margin)

    # Scale logo so it occupies 70% of canvas width (512 * 0.70 = 358.4px)
    target_logo_w = int(canvas_size[0] * 0.70)
    scale = target_logo_w / logo_w
    new_w = int(cropped.width * scale)
    new_h = int(cropped.height * scale)
    scaled = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

    # Create new 512x512 canvas
    canvas = Image.new("RGBA", canvas_size, bg_color)

    # Calculate exact centering offsets
    logo_center_x = (bbox_tight[0] + bbox_tight[2]) / 2 - bbox_margin[0]
    logo_center_y = (bbox_tight[1] + bbox_tight[3]) / 2 - bbox_margin[1]
    paste_x = int(canvas_size[0] / 2 - logo_center_x * scale)
    paste_y = int(canvas_size[1] / 2 - logo_center_y * scale)

    # Soft alpha feather mask on outer perimeter of scaled slice to ensure 100% seamless blending
    feather = 16
    mask = Image.new("L", scaled.size, 255)
    draw = ImageDraw.Draw(mask)
    for i in range(feather):
        alpha = int(255 * (i / feather))
        draw.rectangle([i, i, scaled.width - 1 - i, scaled.height - 1 - i], outline=alpha)

    canvas.paste(scaled, (paste_x, paste_y), mask)

    # Convert to standard RGB for solid favicon output
    final_icon = canvas.convert("RGB")

    # Ensure target output directories exist
    os.makedirs("app", exist_ok=True)
    os.makedirs("public", exist_ok=True)

    app_icon_path = os.path.abspath("app/icon.png")
    public_icon_path = os.path.abspath("public/icon.png")
    public_favicon_path = os.path.abspath("public/favicon.ico")

    # 1. Save app/icon.png (512x512)
    final_icon.save(app_icon_path, format="PNG", optimize=True)
    print(f"Generated: {app_icon_path} (512x512, {os.path.getsize(app_icon_path)} bytes)")

    # 2. Save public/icon.png (512x512)
    final_icon.save(public_icon_path, format="PNG", optimize=True)
    print(f"Generated: {public_icon_path} (512x512, {os.path.getsize(public_icon_path)} bytes)")

    # 3. Save public/favicon.ico (Multi-size: 16x16, 32x32, 48x48)
    final_icon.save(
        public_favicon_path,
        format="ICO",
        sizes=[(16, 16), (32, 32), (48, 48)],
    )
    print(f"Generated: {public_favicon_path} (Multi-size ICO, {os.path.getsize(public_favicon_path)} bytes)")

    # Verification
    assert os.path.exists(app_icon_path), "app/icon.png was not created"
    assert os.path.exists(public_icon_path), "public/icon.png was not created"
    assert os.path.exists(public_favicon_path), "public/favicon.ico was not created"
    print("\nAll icons successfully generated and verified!")

if __name__ == "__main__":
    generate_favicons()
