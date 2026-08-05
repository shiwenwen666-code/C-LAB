from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
TARGETS = (
    "public/images/works/prompt-generator/outputs",
    "public/images/works/visual-qa-workbench/outputs",
    "public/images/works/orbit-showcase",
    "public/images/abilities",
    "public/images/works/new-power-awards/presentation",
    "public/images/works/aigc-advertising/presentation",
    "public/images/works/alibaba-social/presentation",
    "public/media/featured-cases",
    "public/images/awards/certificates/previews",
)

EXPLICIT = (
    "public/images/works/alibaba-social/figma/case01-presentation-full.png",
    "public/images/works/aesthetic-intelligence-bureau/presentation/case04-presentation-full.png",
)


def convert(path: Path) -> None:
    with Image.open(path) as image:
        dimensions = image.size
        if max(dimensions) > 16383:
            output = path.with_suffix(".jpg")
            image.convert("RGB").save(
                output, "JPEG", quality=92, subsampling=0, optimize=True, progressive=True
            )
        else:
            output = path.with_suffix(".webp")
            image.save(output, "WEBP", quality=90, method=6, exact=True)
    print(
        f"{path.relative_to(ROOT)} {dimensions}: "
        f"{path.stat().st_size / 1048576:.2f} -> {output.stat().st_size / 1048576:.2f} MB"
    )


for target in TARGETS:
    for source in sorted((ROOT / target).rglob("*")):
        if source.is_file() and source.suffix.lower() in {".png", ".jpg", ".jpeg"}:
            if source.with_suffix(".webp").exists():
                continue
            convert(source)

for source_name in EXPLICIT:
    source = ROOT / source_name
    if source.is_file() and not source.with_suffix(".jpg").exists():
        convert(source)
