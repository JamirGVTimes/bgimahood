from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
OG_DIR = ROOT / "public" / "og"
TARGET_SIZE = (1200, 630)
RESAMPLE_LANCZOS = getattr(getattr(Image, "Resampling", Image), "LANCZOS")


def crop_for_social_preview(image):
    source_width, source_height = image.size
    target_width, target_height = TARGET_SIZE
    target_ratio = target_width / target_height

    crop_height = int(source_width / target_ratio)
    crop_height = min(crop_height, source_height)

    # Keep the logo and main title visible; the bottom tagline is less important
    # for compressed WhatsApp previews.
    top = min(65, max(0, source_height - crop_height))
    bottom = top + crop_height

    return image.crop((0, top, source_width, bottom))


def optimize(source_path):
    with Image.open(source_path) as image:
        image = image.convert("RGB")
        image = crop_for_social_preview(image)
        image = image.resize(TARGET_SIZE, RESAMPLE_LANCZOS)

        output_path = source_path.with_suffix(".jpg")
        image.save(
            output_path,
            "JPEG",
            quality=82,
            optimize=True,
            progressive=True,
        )

        print(f"{output_path.relative_to(ROOT)} {output_path.stat().st_size} bytes")


for path in sorted(OG_DIR.glob("*.png")):
    optimize(path)
