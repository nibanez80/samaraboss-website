#!/usr/bin/env bash
# Downloads all image assets referenced in the site's source code from the
# Famous.ai / CloudFront CDN into public/images, using readable filenames.
#
# Usage: run this from your project root (where /public and /src live)
#   chmod +x download-assets.sh
#   ./download-assets.sh

set -e

OUT_DIR="public/images"
mkdir -p "$OUT_DIR"

download() {
  filename="$1"
  url="$2"
  echo "Downloading $filename ..."
  curl -sSL -o "$OUT_DIR/$filename" "$url"
}

download "hero-background.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1762665308130_b6945b66.jpg"
download "testimonial-1.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028384490_f43ef7c4.webp"
download "testimonial-2.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028386294_356b94a1.webp"
download "testimonial-3.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028388008_4d0976c4.webp"
download "testimonial-4.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028389712_bdba390b.webp"
download "testimonial-5.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028391430_ef120e06.webp"
download "testimonial-6.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028393203_82dd133a.webp"
download "testimonials-badge.png" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1762663429975_27c8a0ac.png"
download "biography-photo.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776529233622_9f9c1080.JPG"
download "thrive-affiliate.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776619583920_a3dd4522.jpg"
download "newsletter.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028404807_e98c252b.webp"
download "why-be-free-1.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776532761960_0d6cc2db.jpg"
download "why-be-free-2.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776534147077_cdb0d847.jpg"
download "why-be-free-3.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776532995351_4e2d2454.jpg"
download "why-be-free-4.webp" "https://d64gsuwffb70l.cloudfront.net/68d8a45d05a86c5d04805d3e_1759028399623_d2602ac6.webp"
download "resources-1.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776538602333_8128a0d3.jpg"
download "resources-2.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776540027565_270dd420.jpg"
download "resources-3.jpg" "https://d64gsuwffb70l.cloudfront.net/682a2a1f8bd6c2593f18d34e_1776539621710_2c0d838b.jpg"

echo ""
echo "Done. Downloaded 18 images into $OUT_DIR/"
