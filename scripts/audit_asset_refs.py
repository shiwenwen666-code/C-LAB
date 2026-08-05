import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = ROOT / "src"
PUBLIC_ROOT = ROOT / "public"
ASSET_PATTERN = re.compile(
    r"/(?:images|media|videos|logos)/[^\"'`(){}<>\s]+?\.(?:avif|gif|jpe?g|mp4|png|svg|webm|webp)",
    re.IGNORECASE,
)

references: set[str] = set()
for source in SOURCE_ROOT.rglob("*"):
    if source.suffix.lower() not in {".css", ".ts", ".tsx"}:
        continue
    references.update(ASSET_PATTERN.findall(source.read_text(encoding="utf-8")))

missing = [reference for reference in sorted(references) if not (PUBLIC_ROOT / reference[1:]).is_file()]
if missing:
    print("Missing static assets:")
    print("\n".join(missing))
    raise SystemExit(1)

print(f"Verified {len(references)} static asset references; none are missing.")
